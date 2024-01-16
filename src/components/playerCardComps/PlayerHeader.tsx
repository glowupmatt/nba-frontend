import React from "react";
import { UpdatePlayerType } from "@/types/playersType";
import PlayerImg from "./PlayerImg";
type Props = {
  player: UpdatePlayerType;
};

const PlayerHeader = (props: Props) => {
  const { player } = props;
  return (
    <div className="flex gap-[1rem] justify-center w-full font-bold text-[1rem] p-4 items-center">
      <PlayerImg
        playerImg={player.playerImage}
        playerName={player.playerName}
      />
      <h2 className="truncate text-[.7rem]">{player.playerName}</h2>
    </div>
  );
};

export default PlayerHeader;
