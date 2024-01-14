"use client";

import { UpdatePlayerType } from "@/types/playersType";
import React, { useEffect, useState } from "react";

type Props = {
  data: UpdatePlayerType[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { data } = props;

  return (
    <div>
      {data.map((player: UpdatePlayerType, index: number) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <h2>{player.playerName}</h2>
              <img
                src={player.playerImage}
                alt={`image for ${player.playerName}`}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
