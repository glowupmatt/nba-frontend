import React from "react";
import Image from "next/image";
import { UpdatePlayerType } from "@/types/playersType";
import PlayerHeader from "./PlayerHeader";
import PlayerStats from "./PlayerStats";

type Props = {
  player: UpdatePlayerType;
  index: number;
};

const PlayerCard = (props: Props) => {
  const { player, index } = props;
  return (
    <div className="flex flex-col w-[16rem] items-center p-0 rounded-lg shadow-md relative">
      <div className="absolute z-[100] w-[14rem] h-[25rem] flex justify-center items-center flex-col">
        <PlayerHeader player={player} index={index} />
        <div className="w-full ">
          {player.totalStats && <PlayerStats totalStats={player.totalStats} />}
        </div>
      </div>
      <div className="relative h-full">
        <Image
          src="/cardBgSilver.svg"
          alt="card-bg"
          width={1080}
          height={1920}
          className="h-[25rem] w-full"
        />
      </div>
    </div>
  );
};

export default PlayerCard;
