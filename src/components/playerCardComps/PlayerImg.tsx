import React from "react";

type Props = {
  playerImg: string | undefined;
  playerName: string | undefined;
};

const PlayerImg = (props: Props) => {
  const { playerImg, playerName } = props;
  return (
    <div className="absolute w-full h-[12rem] overflow-hidden shadow-md rounded-[1rem]">
      <img
        src={playerImg}
        alt={`image for ${playerName}`}
        className="w-full top-[-3rem] relative"
      />
    </div>
  );
};

export default PlayerImg;
