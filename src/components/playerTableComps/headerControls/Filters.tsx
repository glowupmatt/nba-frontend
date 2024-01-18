import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterList from "./FilterList";

type Props = {};

const Filters = (props: Props) => {
  return (
    <Popover>
      <PopoverTrigger className="w-[50%] border-[.1rem] border-black rounded-[.3rem]">
        <FilterListIcon className="text-[1.5rem]" />
      </PopoverTrigger>
      <PopoverContent className="rounded-[.3rem] bg-slate-400 w-full flex justify-center">
        <FilterList />
      </PopoverContent>
    </Popover>
  );
};

export default Filters;
