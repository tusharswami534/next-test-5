"use client";
import React, { useState } from "react";
import CommonDescription from "../common/CommonDescription";
import CustomButton from "../common/CustomButton";
import Image from "next/image";
import CountUp from "react-countup";
import { COUNT_LIST } from "@/utils/helper";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div id="hero" className="bg-light-gray">
      <div className="container lg:pb-[116px] max-lg:pl-0 max-lg:pt-24 max-md:pt-20 max-sm:pt-10 max-w-[1240px] max-xl:pl-4 mx-auto pt-[103px] relative">
        <div className="max-lg:max-w-[unset] max-lg:px-4 max-w-[577px] relative z-20">
          <h1 className="text-custom-6xl font-bold font-integral-cf leading-[100%] max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <CommonDescription
            descriptionClass="text-black/60 my-8 max-lg:my-6 max-md:mt-5 max-w-[545px] max-lg:max-w-[unset]"
            text="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
          />
          <CustomButton
            buttonClass="py-[13px] max-sm:w-full font-medium hover:bg-transparent hover:text-black border-black text-white bg-black  px-[67.5px]"
            buttonText="Shop Now"
          />
          <div
            ref={ref}
            className="flex w-full gap-[52px] gap-y-4 items-center max-md:flex-wrap max-md:gap-x-[55px] max-md:justify-center max-md:pt-5 max-xl:gap-10 pt-12"
          >
            {COUNT_LIST.map((item, i) => (
              <div
                key={i}
                className="flex flex-col max-lg:items-center max-md:place-items-start"
              >
                <p className="text-[40px] font-bold leading-[100%] max-lg:text-3xl max-md:text-2xl">
                  <CountUp
                    start={0}
                    end={count ? [200, 2000, 30000][i] || 0 : 0}
                    duration={3}
                  />
                  +
                </p>
                <p className="text-black/60 leading-[22px] max-md:text-xs whitespace-nowrap">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[-310px] max-lg:relative max-xl:bottom-0 right-0">
          <div className="max-lg:max-w-[555px] relative">
            <Image
              src="/assets/image/webp/hero-small-star.webp"
              alt="small-star"
              width={56}
              height={56}
              className="w-full absolute left-[40px] max-md:max-w-11 max-sm:left-[25px] max-sm:top-[29%] max-w-[56px] pointer-events-none top-[32%]"
            />
            <Image
              src="/assets/image/webp/hero-big-star.webp"
              alt="big-star"
              width={104}
              height={104}
              className="w-full absolute max-md:max-w-[76px] max-sm:right-[16px] max-sm:top-[7%] max-w-[104px] pointer-events-none right-[10px] top-[12%]"
            />
            <Image
              src="/assets/image/webp/hero-image.webp"
              alt="infulencers-img"
              width={655}
              height={500}
              className="w-full max-lg:max-w-[555px] max-sm:hidden max-w-[655px] max-xl:max-w-[460px] pointer-events-none"
            />
            <Image
              src="/assets/image/webp/hero-sm-image.webp"
              alt="infulencer"
              width={655}
              height={500}
              className="w-full max-sm:block max-w-[655px] pointer-events-none sm:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
