import { updatePlayerGames } from "@/crudfunctions/updatePlayerGames";
import { getAllPlayers } from "@/crudfunctions/getAllPlayers";
import { getJsonDataPerGame } from "@/apiFunctions/getJsonDataPerGame";
import { getJsonDataTotal } from "@/apiFunctions/getJsonTotalStats";
import { updatePlayerTotal } from "@/crudfunctions/updatePlayerTotal";
import {
  GameType,
  PlayerType,
  JsonPlayerType,
  TotalStatsType,
  BodyType,
  UpdatePlayerType,
} from "@/types/playersType";
import { json } from "stream/consumers";

export async function dailyUpdateCall() {
  try {
    const players: UpdatePlayerType[] = await getAllPlayers();
    const perGameJson: JsonPlayerType[] = await getJsonDataPerGame();
    const filteredPlayersJson = perGameJson.filter(
      (player) => player.playerName !== undefined && player.playerName !== "0"
    );
    const totalJson: JsonPlayerType[] = await getJsonDataTotal();
    const filteredTotalJson = totalJson.filter(
      (player) => player.playerName !== undefined && player.playerName !== "0"
    );
    const playersMap = new Map();
    players.forEach((player: UpdatePlayerType) => {
      playersMap.set(player.playerName, player.id);
    });

    const minutesPlayedMap: { [minutes: string]: UpdatePlayerType[] } = {};
    for (const jsonPlayer of filteredPlayersJson) {
      const player = {
        playerName: jsonPlayer.playerName,
        minutesPlayed: jsonPlayer.minutesPlayed,
        points: jsonPlayer.points,
      };
      if (!minutesPlayedMap[player.minutesPlayed]) {
        minutesPlayedMap[player.minutesPlayed] = [];
      }

      minutesPlayedMap[player.minutesPlayed].push(player);
    }

    for (const newPlayer of players) {
      if (newPlayer.games) {
        newPlayer.games.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          } else {
            return 0;
          }
        });
        const mostRecentGame = newPlayer.games[0];
        if (mostRecentGame.minutesPlayed !== undefined) {
          const playersWithSameMinutesPlayed =
            minutesPlayedMap[mostRecentGame.minutesPlayed];

          if (playersWithSameMinutesPlayed) {
            for (const player of playersWithSameMinutesPlayed) {
              await delayAndUpdate(player, playersMap, "games");
              console.log(
                `Player ${newPlayer.id}'s minutesPlayed is equal to the most recent game's minutesPlayed`
              );
            }
          }
        }
      }
    }
    for (const player of filteredTotalJson) {
      await delayAndUpdate(player, playersMap, "total");
    }
  } catch (error) {
    console.log("error in dailyUpdateCall");
  } finally {
    console.log("UPDATED ALL PLAYERS");
  }
}

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function delayAndUpdate(
  player: UpdatePlayerType,
  playersMap: Map<string, string>,
  updateType: "games" | "total"
) {
  // await pause(3);
  if (player.playerName !== undefined) {
    if (playersMap.has(player.playerName)) {
      const playerId = playersMap.get(player.playerName);
      if (playerId) {
        await updatePlayerStats(playerId, player, updateType);
      }
    }
  }
}

async function updatePlayerStats(
  playerId: string,
  player: UpdatePlayerType,
  updateType: "games" | "total"
) {
  let body: BodyType = {
    minutesPlayed: "",
    fieldGoals: "",
    fieldGoalAttempts: "",
    fieldGoalPercentage: "",
    threePointers: "",
    twoPointers: "",
    totalRebounds: "",
    assists: "",
    blocks: "",
    turnovers: "",
    points: "",
  };

  if (updateType === "total" && player.totalStats) {
    body = {
      totalGamesPlayed: player.totalStats[0].totalGamesPlayed,
      totalGamesStarted: player.totalStats[0].totalGamesStarted,
      minutesPlayed: player.totalStats[0].minutesPlayed,
      fieldGoals: player.totalStats[0].fieldGoals,
      fieldGoalAttempts: player.totalStats[0].fieldGoalAttempts,
      fieldGoalPercentage: player.totalStats[0].fieldGoalPercentage,
      threePointers: player.totalStats[0].threePointers,
      twoPointers: player.totalStats[0].twoPointers,
      totalRebounds: player.totalStats[0].totalRebounds,
      assists: player.totalStats[0].assists,
      blocks: player.totalStats[0].blocks,
      turnovers: player.totalStats[0].turnovers,
      points: player.totalStats[0].points,
    };
  } else if (updateType === "games" && player.games) {
    body = {
      minutesPlayed: player.games[0].minutesPlayed,
      fieldGoals: player.games[0].fieldGoals,
      fieldGoalAttempts: player.games[0].fieldGoalAttempts,
      fieldGoalPercentage: player.games[0].fieldGoalPercentage,
      threePointers: player.games[0].threePointers,
      twoPointers: player.games[0].twoPointers,
      totalRebounds: player.games[0].totalRebounds,
      assists: player.games[0].assists,
      blocks: player.games[0].blocks,
      turnovers: player.games[0].turnovers,
      points: player.games[0].points,
    };
    await updatePlayerGames(playerId, body);
    console.log(playerId, "updated games");
  } else if (updateType === "total") {
    await updatePlayerTotal(playerId, body as TotalStatsType);
    console.log(playerId, "updated total");
  }
}
