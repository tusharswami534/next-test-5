"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Heading from "./Heading";
import { SellItemsType } from "@/utils/helper";

interface SellItemsProps {
  headingClass?: string;
  heading: string;
  itemMap: SellItemsType[];
  buttonText?: string;
}

const SellItems = ({
  headingClass,
  heading,
  itemMap,
  buttonText,
}: SellItemsProps) => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Heading headingClassName={`pb-[55px] ${headingClass}`} text={heading} />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.8,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {itemMap.map((item: SellItemsType, index: number) => (
          <SwiperSlide key={index}>
            <Link
              href={`/product/${item.productTitle
                .toLocaleLowerCase()
                .replaceAll(" ", "-")}`}
              className="rounded-[20px] w-full max-sm:max-w-[198px] max-w-[295px]"
            >
              <div className="flex bg-dark-gray justify-center rounded-[20px] group max-sm:rounded-[13px] overflow-hidden">
                <Image
                  src={item.product}
                  alt="product"
                  width={295}
                  height={298}
                  className="h-[298px] w-[295px] duration-300 group-hover:scale-95 max-sm:h-[200px] max-sm:object-contain max-sm:w-[198px] object-cover transition-all"
                />
              </div>
              <p className="text-xl font-bold leading-[100%] mt-4">
                {item.productTitle}
              </p>
              <span className="flex gap-[13px] items-center py-2">
                <span>{item.productRatingStart}</span>
                <p className="text-sm">
                  {item.productRating}/<span className="text-gray">5</span>
                </p>
              </span>
              <span className="flex gap-2.5 items-center">
                <p className="text-2xl font-bold leading-[100%]">
                  ${item.productPrice}
                </p>
                {item.price && (
                  <span className="w-max relative">
                    <span className="bg-bold-gray h-[1px] w-full absolute top-[56%]"></span>
                    <p className="text-2xl text-bold-gray font-bold relative">
                      ${item.price}
                    </p>
                  </span>
                )}
                {item.discount && (
                  <span className="bg-red/10 rounded-[62px] text-red font-medium font-xs px-[13px] py-1.5">
                    {item.discount}%
                  </span>
                )}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {buttonText && (
        <div className="flex justify-center w-full items-center max-lg:pt-12 max-md:pt-8 max-sm:pt-6 pt-[51px]">
          <CustomButton
            buttonClass="py-[13px] px-[78px] hover:bg-black hover:text-white border-black/10 font-medium"
            buttonText={buttonText}
          />
        </div>
      )}
    </div>
  );
};

export default SellItems;
