/* eslint-disable @next/next/no-img-element */
"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { UpdatePlayerType } from "@/types/playersType";

export const MobileColumns: ColumnDef<UpdatePlayerType>[] = [
  {
    accessorKey: "playerName",
    header: "Player Name",
    cell: (playerName) => playerName.getValue(),
  },
  {
    accessorKey: "threePointers",
    header: "3PTs",
    cell: (cellContext) =>
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].threePointers
        : "N/A",
  },
  {
    accessorKey: "twoPointers",
    header: "2PTs",
    cell: (cellContext) =>
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].twoPointers
        : "N/A",
  },
  {
    accessorKey: "points",
    header: "Total Points",
    cell: (cellContext) =>
      cellContext.row.original.totalStats &&
      cellContext.row.original.totalStats[0]
        ? cellContext.row.original.totalStats[0].points
        : "N/A",
  },
];
