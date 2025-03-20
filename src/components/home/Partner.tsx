import React from "react";
import { PARTNER_LIST } from "../../utils/helper";

const Partner = () => {
  return (
    <div id="partner" className="bg-black px-4 relative z-20">
      <div className="container max-w-[1240px] max-xl:py-10 mx-auto py-[42px]">
        <div className="flex flex-wrap justify-center gap-[105px] items-center max-lg:gap-24 max-md:gap-16 max-sm:gap-8 max-sm:gap-y-5">
          {PARTNER_LIST.map((item: any, index: number) => (
            <span
              className="flex cursor-pointer duration-300 hover:scale-105 transition-all"
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
