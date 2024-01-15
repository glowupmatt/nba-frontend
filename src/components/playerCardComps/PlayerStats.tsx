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
    <div className="grid grid-cols-2 min-h-[12rem] gap-6">
      {Object.keys(stats)
        .filter((key) => !excludedKeys.includes(key))
        .map((key) => {
          return (
            <div key={key}>
              <h2 className="truncate">{formatName(key)}:</h2>
              <p>{stats[key]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PlayerStats;
