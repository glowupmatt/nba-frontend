import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full relative">
        <div className="absolute h-full w-full">
          <h2 className="text-white backdrop-blur-[3px] flex justify-center items-center h-full w-full text-[4rem] font-bold p-4 leading-[3.5rem]">
            NBA STATS
          </h2>
        </div>
        <Image
          src="/nbaheader.jpeg"
          alt="header Image"
          height={1920}
          width={1080}
          className=""
        />
      </div>
    </div>
  );
};

export default Header;
