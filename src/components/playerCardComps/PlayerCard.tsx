import React from "react";
import { UpdatePlayerType } from "@/types/playersType";
import PlayerHeader from "./PlayerHeader";
import PlayerImg from "./PlayerImg";
import PlayerStats from "./PlayerStats";

type Props = {
  player: UpdatePlayerType;
};

const PlayerCard = (props: Props) => {
  const { player } = props;
  return (
    <div className="flex flex-col justify-between w-full items-center p-4 bg-gray-200 rounded-lg shadow-md">
      <PlayerHeader player={player} />
      <div className="flex flex-col">
        <div className="relative h-[13rem]">
          <PlayerImg
            playerImg={player.playerImage}
            playerName={player.playerName}
          />
        </div>
        {player.totalStats && <PlayerStats totalStats={player.totalStats} />}
      </div>
    </div>
  );
};

export default PlayerCard;
