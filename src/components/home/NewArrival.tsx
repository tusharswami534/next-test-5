import React from "react";
import SellItems from "../common/SellItems";
import { NEW_ARRIVALS_LIST } from "@/utils/helper";

const NewArrival = () => {
  return (
    <div id="new-arrival" className="bg-white px-4 relative z-20">
      <div className="border-b border-black/10 border-solid max-sm:py-10 max-w-[1240px] mx-auto pb-[64px] pt-[72px]">
        <SellItems
          heading="NEW ARRIVALS"
          itemMap={NEW_ARRIVALS_LIST}
          buttonText="View All"
        />
      </div>
    </div>
  );
};

export default NewArrival;
