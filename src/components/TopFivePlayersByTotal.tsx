"use client";

import { UpdatePlayerType } from "@/types/playersType";
import PlayerCard from "./playerCardComps/PlayerCard";
import React, { useState } from "react";
import { sortPlayersTotal } from "@/lib/sortingFunctions";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { formatName } from "@/lib/nameFormatting";
import FilterSelector from "./playerCardComps/FilterSelector";
import FilterComp from "./totalsComps/FilterComp";
import CardCarousel from "./playerCardComps/CardCarousel";

type Props = {
  data: UpdatePlayerType[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { data } = props;

  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, loop: true })
  );

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
