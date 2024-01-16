import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatName } from "@/lib/nameFormatting";

type Props = {
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortType: string;
};

const FilterSelector = (props: Props) => {
  const { setSortType, sortType } = props;
  const filterOptions = [
    "points",
    "fieldGoals",
    "threePointers",
    "twoPointers",
  ];

  return (
    <Select>
      <SelectTrigger className="w-[180px] rounded-[1rem]">
        <SelectValue placeholder={formatName(sortType)} />
      </SelectTrigger>
      <SelectContent className="bg-[#1C2431] rounded-[1rem]">
        <div className="flex flex-col gap-2 items-center justify-center h-[10rem]">
          {filterOptions.map((option) => {
            return (
              <button
                key={option}
                value={option}
                className="text-white"
                onClick={(e) =>
                  setSortType((e.target as HTMLInputElement).value)
                }
              >
                {formatName(option)}
              </button>
            );
          })}
        </div>
      </SelectContent>
    </Select>
  );
};

export default FilterSelector;
