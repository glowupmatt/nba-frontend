"use client";

import React, { useState, useContext } from "react";
import PlayerTable from "./OffensivePlayerTable";
import { MobileColumns } from "@/components/playerTableComps/TableData";
import { PlayerTypeAPI } from "@/types/playersType";
import { DataContext } from "@/AppContext";
import Filters from "./headerControls/Filters";
import SearchInput from "./headerControls/SearchInput";
import { sortAndFilterData } from "@/lib/sortingFunction";
import Pagination from "./Pagination";
import { offensiveFantasyPointsConversion } from "@/lib/fantasyPoints";

type Props = {
  data: PlayerTypeAPI[];
};

const TableDisplay = (props: Props) => {
  const { data } = props;
  const { sortBy, paginationPage, setPaginationPage, searchTerm } =
    useContext(DataContext);

  const offensiveFantasyPoints = offensiveFantasyPointsConversion(data);
  const sortedData = sortAndFilterData(
    offensiveFantasyPoints,
    sortBy,
    searchTerm,
    paginationPage
  );

  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-to-r from-gray-300 to-gray-500">
      <div className="flex w-full justify-between gap-4 p-4">
        <SearchInput />
        <Filters />
      </div>
      <PlayerTable columns={MobileColumns} data={sortedData} />
      <Pagination sortedData={sortedData} />
    </div>
  );
};

export default TableDisplay;
