import { PlayerTypeAPI } from "@/types/playersType";

export const offensiveFantasyPointsConversion = (data: PlayerTypeAPI[]) => {
  return data.map((player) => {
    if (player.totalStats && player.totalStats[0]) {
      player.totalStats[0].fieldGoals = player.totalStats[0].fieldGoals;
      player.totalStats[0].fieldGoalAttempts = (-Math.abs(
        +player.totalStats[0].fieldGoalAttempts
      )).toString();
      player.totalStats[0].threePointers = player.totalStats[0].threePointers;
      player.totalStats[0].freeThrows = player.totalStats[0].freeThrows;
      player.totalStats[0].freeThrowAttempts =
        player.totalStats[0].freeThrowAttempts;
    }
    return player;
  });
};

export const defensiveFantasyPointsConversion = (data: PlayerTypeAPI[]) => {
  return data.map((player) => {
    if (player.totalStats && player.totalStats[0]) {
      player.totalStats[0].totalRebounds = (+player.totalStats[0]
        .totalRebounds).toString();
      player.totalStats[0].assists = player.totalStats[0].assists;
      player.totalStats[0].steals = player.totalStats[0].steals;
      player.totalStats[0].blocks = player.totalStats[0].blocks;
      player.totalStats[0].turnovers = (-Math.abs(
        +player.totalStats[0].turnovers
      )).toString();
    }
    return player;
  });
};
