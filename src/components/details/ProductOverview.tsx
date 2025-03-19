"use client";
import Image from "next/image";
import ShowsImage from "./ShowsImage";
import { FourAndHalfStart } from "@/utils/icons";
import CommonDescription from "../common/CommonDescription";

const ProductOverview = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex gap-10">
          <ShowsImage />
          <div className="max-w-[600px] w-full flex flex-col">
            <p className="font-integral-cf font-bold text-custom-4xl mb-3.5 max-sm:mb-3 leading-[100%]">
              One Life Graphic T-shirt
            </p>
            <div className="flex gap-4">
              <FourAndHalfStart />
              <p className="text-sm">
                4.5/<span className="text-gray">5</span>
              </p>
            </div>
            <div className="flex items-center mt-3.5 gap-3">
              <p className="font-bold text-2xl leading-[100%]">$260</p>
              <span className="w-max relative">
                <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
                <p className="relative text-bold-gray text-2xl font-bold ">
                  $300
                </p>
              </span>
              <span className="py-1.5 px-[13px] bg-red/10 text-red rounded-[62px] font-xs font-medium">
                -40%
              </span>
            </div>
            <CommonDescription
              descriptionClass="text-black/60 mt-5"
              text="This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
            />
            <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
            <CommonDescription
              descriptionClass="text-black/60"
              text="Select Colors"
            />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
