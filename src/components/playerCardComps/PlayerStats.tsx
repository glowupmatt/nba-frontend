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
  const statsElements = [];
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
  for (let key in stats) {
    if (!excludedKeys.includes(key)) {
      statsElements.push(
        <div key={key}>
          <h2>{formatName(key)}:</h2>
          <p>{stats[key]}</p>
        </div>
      );
    }
  }
  return <div className="grid grid-cols-2 min-h-[12rem]">{statsElements}</div>;
};

export default PlayerStats;
