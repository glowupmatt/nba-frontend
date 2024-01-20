"use client";

import React, { useState, useContext } from "react";
import OffensivePlayerTable from "./OffensivePlayerTable";
import { offensiveColumns } from "@/components/playerTableComps/offensiveColumnsData";
import { defensiveColumns } from "@/components/playerTableComps/defensiveColumnsData";
import { PlayerTypeAPI } from "@/types/playersType";
import { DataContext } from "@/AppContext";
import Filters from "./headerControls/Filters";
import SearchInput from "./headerControls/SearchInput";
import { sortAndFilterData } from "@/lib/sortingFunction";
import Pagination from "./Pagination";
import {
  offensiveFantasyPointsConversion,
  defensiveFantasyPointsConversion,
} from "@/lib/fantasyPoints";
import { Button } from "../ui/button";

type Props = {
  data: PlayerTypeAPI[];
};

const TableDisplay = (props: Props) => {
  const { data } = props;
  const { sortBy, paginationPage, searchTerm, variant, setVariant } =
    useContext(DataContext);

  const offensiveFantasyPoints = offensiveFantasyPointsConversion(data);
  const defensiveFantasyPoints = defensiveFantasyPointsConversion(data);
  const sortedData = sortAndFilterData(
    variant === "offense" ? offensiveFantasyPoints : defensiveFantasyPoints,
    sortBy,
    searchTerm,
    paginationPage
  );

  const variantValue =
    variant === "offense" ? offensiveColumns : defensiveColumns;

  const handleVariant = () => {
    if (variant === "offense") {
      setVariant("defense");
    } else {
      setVariant("offense");
    }
  };

  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-to-r from-gray-300 to-gray-500">
      <div className="flex w-full justify-between gap-4 p-4">
        <SearchInput />
        <Filters />
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          className="w-full bg-white/20 border rounded-[1rem] border-black p-2 max-w-[50%]"
          onClick={handleVariant}
        >
          Show {variant[0].toUpperCase() + variant.slice(1)} Data
        </Button>
      </div>
      <OffensivePlayerTable columns={variantValue} data={sortedData} />
      <Pagination sortedData={sortedData} />
    </div>
  );
};

export default TableDisplay;
