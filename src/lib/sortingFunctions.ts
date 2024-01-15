import { UpdatePlayerType } from ".././types/playersType";

export const sortPlayersTotal = (
  players: UpdatePlayerType[],
  filter: string
): UpdatePlayerType[] => {
  if (filter === "points") {
    players.sort((a, b) => {
      if (
        a &&
        a.totalStats &&
        a.totalStats[0] &&
        a.totalStats[0].points &&
        b &&
        b.totalStats &&
        b.totalStats[0] &&
        b.totalStats[0].points
      ) {
        return +b.totalStats[0].points - +a.totalStats[0].points;
      }
      return 0;
    });
  }
  if (filter === "minutesPlayed") {
    players.sort((a, b) => {
      if (
        a &&
        a.totalStats &&
        a.totalStats[0] &&
        a.totalStats[0].minutesPlayed &&
        b &&
        b.totalStats &&
        b.totalStats[0] &&
        b.totalStats[0].minutesPlayed
      ) {
        return +a.totalStats[0].minutesPlayed - +b.totalStats[0].minutesPlayed;
      }
      return 0;
    });
  }
  if (filter === "threePointers") {
    players.sort((a, b) => {
      if (
        a &&
        a.totalStats &&
        a.totalStats[0] &&
        a.totalStats[0].threePointers &&
        b &&
        b.totalStats &&
        b.totalStats[0] &&
        b.totalStats[0].threePointers
      ) {
        return +a.totalStats[0].threePointers - +b.totalStats[0].threePointers;
      }
      return 0;
    });
  }
  if (filter === "twoPointers") {
    players.sort((a, b) => {
      if (
        a &&
        a.totalStats &&
        a.totalStats[0] &&
        a.totalStats[0].twoPointers &&
        b &&
        b.totalStats &&
        b.totalStats[0] &&
        b.totalStats[0].twoPointers
      ) {
        return +a.totalStats[0].twoPointers - +b.totalStats[0].twoPointers;
      }
      return 0;
    });
  }
  return players;
};
