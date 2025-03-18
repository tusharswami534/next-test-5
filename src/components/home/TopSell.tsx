import React from "react";
import SellItems from "../common/SellItems";
import { TOP_SELLING_LIST } from "@/utils/helper";

const TopSell = () => {
  return (
    <div className="px-4">
      <div className="max-w-[1240px] pt-[72px] pb-20 max-sm:pt-10 max-sm:pb-[50px] mx-auto">
        <SellItems
          heading="top selling"
          itemMap={TOP_SELLING_LIST}
          buttonText="View All"
        />
      </div>
    </div>
  );
};

export default TopSell;
