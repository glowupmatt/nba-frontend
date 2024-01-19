import { PlayerTypeAPI } from "@/types/playersType";

export const offensiveFantasyPointsConversion = (data: PlayerTypeAPI[]) => {
  return data.map((player) => {
    if (player.totalStats && player.totalStats[0]) {
      player.totalStats[0].fieldGoals = (
        +player.totalStats[0].fieldGoals * 1
      ).toString();
      player.totalStats[0].fieldGoalAttempts = (-Math.abs(
        +player.totalStats[0].fieldGoalAttempts
      )).toString();
      player.totalStats[0].threePointers = (
        +player.totalStats[0].threePointers * 1
      ).toString();
      player.totalStats[0].freeThrows = (
        +player.totalStats[0].freeThrows * 1
      ).toString();
      player.totalStats[0].freeThrowAttempts = (
        +player.totalStats[0].freeThrowAttempts * 1
      ).toString();
    }
    return player;
  });
};
