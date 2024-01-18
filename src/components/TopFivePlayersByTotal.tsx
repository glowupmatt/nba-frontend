"use client";

import { PlayerTypeAPI, UpdatePlayerType } from "@/types/playersType";
import React, { useContext, useState } from "react";
import Image from "next/image";
import FilterComp from "./totalsComps/FilterComp";
import CardCarousel from "./playerCardComps/CardCarousel";

type Props = {
  data: PlayerTypeAPI[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { data } = props;
  const [sortType, setSortType] = useState("points");

  return (
    <div className="flex flex-col gap-4 w-full">
      <FilterComp sortType={sortType} setSortType={setSortType} />
      <CardCarousel data={data} sortType={sortType} />
      <Image
        alt="orange-ball"
        src="/orangeBall.svg"
        width={60}
        height={60}
        className="absolute w-[13rem] h-[23rem] top-[29rem] right-[15rem]"
      />
    </div>
  );
}
