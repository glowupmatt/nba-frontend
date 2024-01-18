"use client";
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { DataContext } from "@/AppContext";
import { formatName } from "@/lib/nameFormatting";

type Props = {};

const FilterList = (props: Props) => {
  const { sortBy, setSortBy, setPaginationPage } = useContext(DataContext);
  const filters = ["points", "twoPointers", "threePointers"];
  const handleFilter = (filter: string) => {
    setSortBy(filter);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[.5rem]">
      {filters.map((filter, index) => (
        <Button
          key={index}
          className="rounded-[.4rem] hover:bg-slate-200"
          onClick={() => {
            handleFilter(filter), setPaginationPage(10);
          }}
        >
          {formatName(filter)}
        </Button>
      ))}
    </div>
  );
};

export default FilterList;
