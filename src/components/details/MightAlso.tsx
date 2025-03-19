import React from "react";
import SellItems from "../common/SellItems";
import { ALSO_LIST_LIST } from "@/utils/helper";

const MightAlso = () => {
  return (
    <div className="px-4">
      <div className="max-w-[1240px] pt-7 pb-[78px] mx-auto">
        <SellItems heading="You might also like" itemMap={ALSO_LIST_LIST} />
      </div>
    </div>
  );
};

export default MightAlso;
