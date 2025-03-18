import React from "react";
import CommonDescription from "../common/CommonDescription";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <div className="bg-light-gray px-4">
      <div className="max-w-[1240px] pt-[103px] pb-[116px] container mx-auto">
        <div className="max-w-[577px]">
          <h1 className="text-custom-6xl font-bold font-integral-cf leading-[100%]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <CommonDescription
            descriptionClass="text-black/60 my-8"
            text="Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style."
          />
          <CustomButton
            buttonClass="py-[13px] font-medium hover:bg-transparent hover:text-black border-black text-white bg-black  px-[67.5px]"
            buttonText="Shop Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
