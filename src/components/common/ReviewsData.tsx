import { REVIEWS_LIST } from "@/utils/helper";
import { GreenCheckIcon, ThreeDots } from "@/utils/icons";
import React from "react";
import CommonDescription from "./CommonDescription";
import CustomButton from "./CustomButton";

const ReviewsData = () => {
  const reviwsNumber = REVIEWS_LIST.length;
  return (
    <div className="pt-8">
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-bold text-2xl leading-[100%]">All Reviews</p>
            <p className="leading-[100%] text-black/60 text-base">{`(${reviwsNumber})`}</p>
          </div>
          <select className="cursor-pointer outline-none rounded-[62px] font-medium py-[13px] px-5 bg-light-blue">
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="flex w-full max-w-[1240px] pt-7 flex-wrap gap-x-[1.62%] gap-y-5">
          {REVIEWS_LIST.map((item, index) => (
            <div
              key={index}
              className="w-[49.19%] border border-solid border-black/10 rounded-[20px] py-7 px-8"
            >
              <div className="flex w-full justify-between items-center">
                <span>{item.reviewsStart}</span>
                <span className="cursor-pointer flex">
                  <ThreeDots />
                </span>
              </div>
              <div className="flex gap-1 items-center pt-[15px]">
                <p className="font-bold text-xl leading-[100%]">
                  {item.userName}
                </p>
                <GreenCheckIcon />
              </div>
              <CommonDescription
                descriptionClass="text-black/60 mt-3 mb-6"
                text={`"${item.description}"`}
              />
              <CommonDescription
                descriptionClass="font-medium text-black/60"
                text={item.postDate}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full py-9">
          <CustomButton
            buttonClass="py-[15px] px-[45px] border-black/10 hover:bg-black hover:text-white "
            buttonText="Load More Reviews"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsData;
