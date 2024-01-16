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
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="flex flex-col"
      >
        <CarouselContent className="z-30 relative">
          {sortPlayersTotal(data, sortType)
            .slice(0, 5)
            .map((player: UpdatePlayerType, index: number) => {
              return (
                <CarouselItem
                  key={player.id}
                  className="flex justify-center items-center w-full h-full basis-[70%]"
                >
                  <PlayerCard player={player} index={index} />
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
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
