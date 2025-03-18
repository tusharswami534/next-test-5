import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";

const DressStyle = () => {
  return (
    <div className="pb-20 max-sm:pb-[50px] px-5">
      <div className="max-w-[1240px] rounded-[40px] bg-light-blue container mx-auto pt-[70px] flex flex-col gap-5 pb-[76px] px-[64px]">
        <Heading text="BROWSE BY dress STYLE" headingClassName="pb-[64px]" />
        <div className="flex w-full gap-5">
          <div className="max-w-[407px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Casual
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/image/webp/casual.webp"}
              width={275}
              height={298}
              alt="casual"
            />
          </div>
          <div className="max-w-[684px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Formal
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/image/webp/formal.webp"}
              width={451}
              height={289}
              alt="casual"
            />
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="max-w-[684px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Party
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/image/webp/party.webp"}
              width={488}
              height={289}
              alt="casual"
            />
          </div>
          <div className="max-w-[407px] cursor-pointer group h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Gym
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0"
              src={"/assets/image/webp/gym.webp"}
              width={354}
              height={298}
              alt="casual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
