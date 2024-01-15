import React from "react";
import { UpdatePlayerType } from "@/types/playersType";
type Props = {
  player: UpdatePlayerType;
};

const PlayerHeader = (props: Props) => {
  const { player } = props;
  return (
    <div className="flex justify-between w-full font-bold text-[1rem] p-4">
      <h2 className="truncate">{player.playerName}</h2>
      <h3>Age: {player.age}</h3>
    </div>
  );
};

export default PlayerHeader;
