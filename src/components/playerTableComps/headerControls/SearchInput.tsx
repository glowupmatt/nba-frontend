"use client";
import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import { DataContext } from "@/AppContext";

type Props = {};

const SearchInput = (props: Props) => {
  const { setSearchTerm, searchTerm, setPaginationPage } =
    useContext(DataContext);
  return (
    <Input
      className="w-full border-[.1rem] rounded-[.3rem]"
      placeholder="Search Player"
      value={searchTerm}
      onChange={(e) => {
        if (searchTerm.length === 0) setPaginationPage(10);
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default SearchInput;
