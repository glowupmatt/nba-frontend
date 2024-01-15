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

type Props = {
  data: UpdatePlayerType[];
};

export default function TopFivePlayersByTotal(props: Props) {
  const { data } = props;

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, loop: true })
  );

  const [sortType, setSortType] = useState("points");
  return (
    <div className="flex flex-col gap-4 p-6 w-full">
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
            .filter((data, index: number) => index < 5)
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
