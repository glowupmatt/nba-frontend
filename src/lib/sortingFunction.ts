import { PlayerTypeAPI } from "@/types/playersType";

export function sortAndFilterData(
  data: PlayerTypeAPI[],
  sortBy: string,
  searchTerm: string,
  paginationPage: number
) {
  return data
    .filter((player) => {
      const condition =
        player.totalStats &&
        player.totalStats[0] &&
        +player.totalStats[0].points > 10;
      if (player.playerName || searchTerm.length !== 0) {
        return (
          player.playerName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          condition
        );
      }
    })
    .sort((playerOne, playerTwo) => {
      if (
        playerOne.totalStats &&
        playerOne.totalStats[0] &&
        playerTwo.totalStats &&
        playerTwo.totalStats[0]
      ) {
        const aValue = Number(playerOne.totalStats[0][sortBy]);
        const bValue = Number(playerTwo.totalStats[0][sortBy]);
        return bValue - aValue;
      }
      return 0;
    })
    .slice(paginationPage - 10, paginationPage);
}
