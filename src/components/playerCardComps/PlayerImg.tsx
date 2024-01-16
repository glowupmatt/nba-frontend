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
      <div className="min-w-[3rem] h-[3rem] overflow-hidden absolute">
        <img
          src={playerImg}
          alt={`image for ${playerName}`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-gradient-to-b from-pink-800 to-black" />
    </div>
  );
};

export default PlayerImg;
