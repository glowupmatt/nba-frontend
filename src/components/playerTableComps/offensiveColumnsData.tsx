"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { UpdatePlayerType } from "@/types/playersType";

const columnKeys = [
  "playerName",
  "fantasyPoints",
  "twoPointers",
  "threePointers",
  "freeThrows",
  "fieldGoals",
  "points",
];

const headers: { [key: string]: string } = {
  playerName: "Player Name",
  fantasyPoints: "Fantasy Points",
  twoPointers: "2PTs",
  threePointers: "3PTs",
  freeThrows: "Free Throws",
  fieldGoals: "Field Goals",
  points: "Total Points",
};

const getCellValue = (cellContext: any, key: string) => {
  if (key === "playerName") {
    return cellContext.getValue();
  }

  if (key === "fantasyPoints") {
    const fieldGoals =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].fieldGoals
        : "N/A";
    const fieldGoalAttempts =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].fieldGoalAttempts
        : "N/A";
    const threePointers =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].threePointers
        : "N/A";
    const freeThrows =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].freeThrows
        : "N/A";
    const freeThrowAttempts =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].freeThrowAttempts
        : "N/A";
    return (
      +(fieldGoals || 0) +
      +(threePointers || 0) +
      +(freeThrows || 0) -
      (+(fieldGoalAttempts || 0) - +(freeThrowAttempts || 0))
    );
  }

  return cellContext.row.original.totalStats &&
    cellContext.row.original.totalStats[0]
    ? cellContext.row.original.totalStats[0][key]
    : "N/A";
};

export const offensiveColumns: ColumnDef<UpdatePlayerType>[] = columnKeys.map(
  (key) => ({
    accessorKey: key,
    header: () => {
      return <div className="">{headers[key]}</div>;
    },
    cell: (cellContext) => (
      <div className="flex gap-[.5rem] items-center justify-start truncate">
        {getCellValue(cellContext, key)}
      </div>
    ),
  })
);
