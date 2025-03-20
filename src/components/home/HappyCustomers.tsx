"use client";
import React from "react";
import Heading from "../common/Heading";
import CustomButton from "../common/CustomButton";
import { GreenCheckIcon, SliderIcon } from "@/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import Swiper's autoplay styles
import { Navigation, Autoplay } from "swiper/modules";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/helper";
import CommonDescription from "../common/CommonDescription";

const HappyCustomers = () => {
  return (
    <div className="max-sm:px-4 pb-20 max-sm:pb-[50px] max-w-[1920px] mx-auto max-md:pb-14 max-lg:pb-16">
      <div className="max-w-[1240px] max-[1240px]:px-4 max-sm:px-0 w-full mx-auto container">
        <div className="w-full flex  items-center justify-between pb-10 ">
          <Heading text="OUR HAPPY CUSTOMERS" headingClassName="text-left" />
          <div className="flex gap-4 items-center">
            <CustomButton
              buttonClass="!border-none custom-prev "
              arrow={<SliderIcon />}
            />
            <CustomButton
              buttonClass="!border-none custom-next rotate-180"
              arrow={<SliderIcon />}
            />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 15,
            centeredSlides: true,
          },
          1115: {
            slidesPerView: 3.4,
            spaceBetween: 20,
            centeredSlides: true,
          },
        }}
        className="mySwiper happy-swiper"
      >
        {HAPPY_CUSTOMERS_LIST.map((item, index) => (
          <SwiperSlide
            key={index}
            className="max-md:!justify-center max-md:!flex"
          >
            <div className="max-w-[400px] rounded-[20px] min-h-[240px] max-[907px]:min-h-[278px] max-[812px]:min-h-[300px] max-md:min-h-[unset] h-full w-full py-7 max-sm:p-6 border border-solid border-black/10 px-8 flex flex-col">
              <span>{item.reviewsStart}</span>
              <p className="font-bold text-xl max-sm:text-base flex gap-1 mt-[15px] mb-3 leading-[100%]">
                {item.userName}
                <span className="max-sm:size-[15.5px]">
                  <GreenCheckIcon />
                </span>
              </p>
              <CommonDescription
                descriptionClass="text-black/60"
                text={`"${item.description}"`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HappyCustomers;
