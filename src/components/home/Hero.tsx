import React from "react";
import CommonDescription from "../common/CommonDescription";
import CustomButton from "../common/CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-light-gray">
      <div className="max-w-[1240px] max-xl:pl-4 max-lg:pl-0 pt-[103px] max-sm:pt-10 max-md:pt-20 max-lg:pt-24 lg:pb-[116px] relative container mx-auto">
        <div className="max-w-[577px] max-lg:px-4 max-lg:max-w-[unset] relative z-20">
          <h1 className="text-custom-6xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl font-bold font-integral-cf leading-[100%]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <CommonDescription
            descriptionClass="text-black/60 my-8 max-lg:my-6 max-md:mt-5  max-w-[545px] max-lg:max-w-[unset]"
            text="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
          />
          <CustomButton
            buttonClass="py-[13px] max-sm:w-full font-medium hover:bg-transparent hover:text-black border-black text-white bg-black  px-[67.5px]"
            buttonText="Shop Now"
          />
          <div className="min-h-[74px] w-full mt-12"></div>
        </div>
        <Image
          className="w-[672px] h-[663px] max-xl:w-[500px] max-sm:w-[390px] max-sm:h-[448px] max-xl:h-[530px] object-cover max-xl:right-3 lg:absolute right-0 bottom-0 z-10"
          src={"/assets/image/webp/hero-image.webp"}
          width={672}
          height={663}
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
