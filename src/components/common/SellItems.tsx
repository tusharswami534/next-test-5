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
            slidesPerView: 1.5,
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
              className="max-w-[295px] w-full rounded-[20px]"
            >
              <div className="bg-dark-gray overflow-hidden group rounded-[20px]">
                <Image
                  src={item.product}
                  alt="product"
                  width={295}
                  height={298}
                  className="h-[298px] group-hover:scale-95 object-cover transition-all duration-300 w-[295px]"
                />
              </div>
              <p className="font-bold text-xl mt-4 leading-[100%]">
                {item.productTitle}
              </p>
              <span className="flex items-center py-2 gap-[13px]">
                <span>{item.productRatingStart}</span>
                <p className="text-sm">
                  {item.productRating}/<span className="text-gray">5</span>
                </p>
              </span>
              <span className="flex gap-2.5 items-center">
                <p className="font-bold text-2xl leading-[100%]">
                  ${item.productPrice}
                </p>
                {item.price && (
                  <span className="w-max relative">
                    <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
                    <p className="relative text-bold-gray text-2xl font-bold ">
                      ${item.price}
                    </p>
                  </span>
                )}
                {item.discount && (
                  <span className="py-1.5 px-[13px] bg-red/10 text-red rounded-[62px] font-xs font-medium">
                    {item.discount}%
                  </span>
                )}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {buttonText && (
        <div className="w-full flex justify-center items-center pt-[51px]">
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
