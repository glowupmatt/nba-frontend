/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  playerImg: string | undefined;
  playerName: string | undefined;
};

const PlayerImg = (props: Props) => {
  const { playerImg, playerName } = props;
  return (
    <div className="relative  flex justify-center items-center">
      <div className="min-w-[3rem] h-[3rem] overflow-hidden ring-slate-800 ring-4 rounded-full">
        <img
          src={playerImg}
          alt={`image for ${playerName}`}
          className="w-[3rem] h-[3rem] object-cover"
        />
      </div>
    </div>
  );
};

export default PlayerImg;
