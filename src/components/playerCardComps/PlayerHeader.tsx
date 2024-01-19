import React from "react";
import { UpdatePlayerType } from "@/types/playersType";
import PlayerImg from "./PlayerImg";
type Props = {
  player: UpdatePlayerType;
  index: number;
};

const PlayerHeader = (props: Props) => {
  const { player, index } = props;
  const { totalStats } = player;
  const team = totalStats && totalStats[0] ? totalStats[0].team : undefined;
  return (
    <div className="flex gap-[1rem] justify-center w-full font-bold text-[1rem] p-4 items-center">
      <div className="flex flex-col justify-between items-center gap-1">
        <PlayerImg
          playerImg={player.playerImage}
          playerName={player.playerName}
        />
        <p className="text-[.8rem]">Rank: {index + 1}</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <h2 className="truncate text-[.7rem]">{player.playerName}</h2>
        <h2 className="truncate text-[.9rem]">{team}</h2>
      </div>
    </div>
  );
};

export default PlayerHeader;
