import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";

const DressStyle = () => {
  return (
    <div id="dress-style" className="pb-20 max-sm:px-4 max-sm:pb-[50px] px-5">
      <div className="max-w-[1240px] rounded-[40px] bg-light-blue container mx-auto pt-[70px] flex flex-col gap-5 pb-[76px] px-[64px] max-sm:py-10 max-sm:px-6">
        <Heading text="BROWSE BY dress STYLE" headingClassName="pb-[64px]" />
        <div className="flex max-lg:flex-col w-full gap-5">
          <div className="max-w-[407px] max-lg:max-w-[unset] max-lg:h-[190px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Casual
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 max-sm:w-[200px] max-sm:h-[190px] object-cover"
              src={"/assets/image/webp/casual.webp"}
              width={275}
              height={298}
              alt="casual"
            />
          </div>
          <div className="max-w-[684px] max-lg:max-w-[unset] max-lg:h-[190px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Formal
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 max-sm:w-[210px] max-sm:h-[190px] object-cover"
              src={"/assets/image/webp/formal.webp"}
              width={451}
              height={289}
              alt="casual"
            />
          </div>
        </div>
        <div className="flex max-lg:flex-col w-full gap-5">
          <div className="max-w-[684px] max-lg:max-w-[unset] max-lg:h-[190px] group cursor-pointer h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Party
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 max-sm:h-[190px] object-cover max-sm:w-[233px]"
              src={"/assets/image/webp/party.webp"}
              width={488}
              height={289}
              alt="casual"
            />
          </div>
          <div className="max-w-[407px] max-lg:max-w-[unset] max-lg:h-[190px] cursor-pointer group h-[289px] w-full overflow-hidden bg-white rounded-[20px] relative py-[25px] px-9">
            <p className="font-bold text-4xl relative z-20 leading-[100%]">
              Gym
            </p>
            <Image
              className="absolute right-0 group-hover:scale-105 transition-all duration-300 pointer-events-none top-0 max-sm:h-[190px] object-cover max-sm:w-[240px]"
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
