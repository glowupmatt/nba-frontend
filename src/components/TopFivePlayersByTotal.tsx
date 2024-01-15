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
    <div className="flex flex-col gap-4 p-6 w-full">
      <div className="w-full flex justify-center items-center font-bold text-[2rem] text-center">
        <h1>Top Five Players By {formatName(sortType)}</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
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
                  className="flex justify-center items-center w-full h-full"
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
