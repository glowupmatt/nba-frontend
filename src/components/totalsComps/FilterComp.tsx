import React from "react";
import FilterSelector from "../playerCardComps/FilterSelector";
import Image from "next/image";

type Props = {
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortType: string;
};

const FilterComp = (props: Props) => {
  const { setSortType, sortType } = props;
  return (
    <div className="w-full flex justify-center items-center font-bold text-[2rem] text-center text-white p-8 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-[.7rem] z-10">
        <h1>Top Five Players By Total Stats</h1>
        <FilterSelector setSortType={setSortType} sortType={sortType} />
      </div>
      <Image
        alt="orange-ball"
        src="/orangeBall.svg"
        width={60}
        height={60}
        className="absolute w-[13rem] h-[23rem] top-[] left-[19rem]"
      />
    </div>
  );
};

export default FilterComp;
