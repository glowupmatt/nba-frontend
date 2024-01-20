"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { UpdatePlayerType } from "@/types/playersType";

const columnKeys = [
  "playerName",
  "fantasyPoints",
  "totalRebounds",
  "assists",
  "steals",
  "blocks",
  "turnovers",
];

const headers: { [key: string]: string } = {
  playerName: "Player Name",
  fantasyPoints: "Fantasy Points",
  totalRebounds: "Rebounds",
  assists: "Assists",
  steals: "Steals",
  blocks: "Blocks",
  turnovers: "Turn Overs",
};

const getCellValue = (cellContext: any, key: string) => {
  if (key === "playerName") {
    return cellContext.getValue();
  }

  if (key === "fantasyPoints") {
    const rebounds =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].totalRebounds
        : "N/A";
    const assists =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].assists
        : "N/A";
    const steals =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].steals
        : "N/A";
    const blocks =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].blocks
        : "N/A";
    const turnOvers =
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].turnovers
        : "N/A";
    return (
      +(rebounds || 0) +
      +(assists || 0) +
      +(steals || 0) +
      +(blocks || 0) -
      +(turnOvers || 0)
    );
  }

  return cellContext.row.original.totalStats &&
    cellContext.row.original.totalStats[0]
    ? cellContext.row.original.totalStats[0][key]
    : "N/A";
};

export const defensiveColumns: ColumnDef<UpdatePlayerType>[] = columnKeys.map(
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
