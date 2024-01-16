"use client";

import React from "react";
import { TotalStatsType } from "@/types/playersType";
import { formatName } from "@/lib/nameFormatting";

type Props = {
  totalStats: TotalStatsType[];
};

const PlayerStats = (props: Props) => {
  const { totalStats } = props;
  const stats = totalStats[0];
  const excludedKeys = [
    "id",
    "playerId",
    "createdAt",
    "updatedAt",
    "blocks",
    "steals",
    "turnovers",
    "totalRebounds",
    "fieldGoalPercentage",
    "fieldGoalAttempts",
    "minutesPlayed",
    "totalGamesStarted",
  ];

  return (
    <div className="grid grid-cols-2 min-h-[12rem] gap-2 w-full justify-items-center items-center justify-center">
      {Object.keys(stats)
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => {
          return (
            <div key={key} className="leading-[1rem]">
              <h2 className="truncate font-bold text-[.8rem] w-[6rem]">
                {formatName(key)}:
              </h2>
              <p className="text-center">{stats[key]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PlayerStats;