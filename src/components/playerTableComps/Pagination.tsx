"use client";

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { DataContext } from "@/AppContext";
import { PlayerTypeAPI } from "@/types/playersType";

type Props = {
  sortedData: PlayerTypeAPI[];
};

const Pagination = (props: Props) => {
  const { sortedData } = props;
  const { paginationPage, setPaginationPage, searchTerm } =
    useContext(DataContext);
  return (
    <div className="flex items-center justify-between space-x-2 p-4 ">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPaginationPage(paginationPage - 10)}
        disabled={paginationPage === 10}
        className="disabled:opacity-50 disabled:cursor-not-allowed rounded-[.4rem]"
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPaginationPage(paginationPage + 10)}
        disabled={searchTerm.length !== 0 || sortedData.length < 10}
        className="disabled:opacity-50 disabled:cursor-not-allowed rounded-[.4rem]"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
