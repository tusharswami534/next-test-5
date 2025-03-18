"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { NEW_ARRIVALS_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

const SellItems = () => {
  return (
    <div className="max-w-[1240px] py-10 mx-auto">
      <Swiper slidesPerView={4} spaceBetween={20} className="mySwiper">
        {NEW_ARRIVALS_LIST.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={"/"} className="max-w-[295px] w-full rounded-[20px]">
              <div className="bg-dark-gray overflow-hidden group rounded-[20px]">
                <Image
                  src={item.product}
                  alt="product"
                  width={295}
                  height={298}
                  className="h-[298px] group-hover:scale-95 transition-all duration-300 w-[295px]"
                />
              </div>
              <p className="font-bold text-xl mt-4 leading-[100%]">
                {item.productTitle}
              </p>
              <span className="flex items-center py-2 gap-[13px]">
                <span>{item.productRatingStart}</span>
                <p className="text-sm">
                  {item.productRating}/<span className="text-gray">5</span>{" "}
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
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SellItems;
