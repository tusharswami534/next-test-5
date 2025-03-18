import React from "react";
import { PARTNER_LIST } from "../../utils/helper";

const Partner = () => {
  return (
    <div className="bg-black px-4">
      <div className="max-w-[1240px] container mx-auto py-[42px] max-xl:py-10">
        <div className="flex flex-wrap items-center justify-center gap-[105px] max-lg:gap-24 max-md:gap-16 max-sm:gap-y-5 max-sm:gap-8">
          {PARTNER_LIST.map((item, index) => (
            <span
              className="flex cursor-pointer transition-all duration-300 hover:scale-105"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
