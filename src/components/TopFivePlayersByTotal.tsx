"use client";

import { UpdatePlayerType } from "@/types/playersType";
import PlayerCard from "./playerCardComps/PlayerCard";
import React, { useState } from "react";
import { sortPlayersTotal } from "@/lib/sortingFunctions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { formatName } from "@/lib/nameFormatting";
import FilterSelector from "./playerCardComps/FilterSelector";

type Props = {
  data: UpdatePlayerType[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { data } = props;

  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true, loop: true })
  );

  const [sortType, setSortType] = useState("points");
  console.log(sortType);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full flex justify-center items-center font-bold text-[2rem] text-center text-white p-8">
        <div className="flex flex-col justify-center items-center gap-[.7rem]">
          <h1>Top Five Players By</h1>
          <FilterSelector setSortType={setSortType} sortType={sortType} />
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="flex flex-col"
      >
        <CarouselContent>
          {sortPlayersTotal(data, sortType)
            .slice(0, 5)
            .map((player: UpdatePlayerType) => {
              return (
                <CarouselItem
                  key={player.id}
                  className="flex justify-center items-center w-full h-full pl-0 basis-[70%]"
                >
                  <PlayerCard player={player} />
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
