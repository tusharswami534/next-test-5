"use client";
import React, { useState } from "react";
import CommonDescription from "../common/CommonDescription";
import { FourAndHalfStart, SelectIcon } from "@/utils/icons";
import { SELECT_COLOR, SELECT_SIZE } from "@/utils/helper";
import CustomButton from "../common/CustomButton";

const ProductInfo = ({
  productTitle,
  productStart,
  productRating,
  price,
  productPrice,
  productDiscount,
  productDescription,
}: {
  productTitle: string;
  productStart: any;
  productRating: number;
  price: number;
  productPrice: number;
  productDiscount: any;
  productDescription: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-[600px] w-full flex flex-col">
      <p className="font-integral-cf font-bold text-custom-4xl mb-3.5 max-sm:mb-3 leading-[100%]">
        {productTitle}
      </p>
      <div className="flex gap-4">
        {productStart}
        <p className="text-sm">
          {productRating}/<span className="text-gray">5</span>
        </p>
      </div>
      <div className="flex items-center mt-3.5 gap-3">
        <p className="font-bold text-2xl leading-[100%]">${productPrice}</p>
        {price && (
          <span className="w-max relative">
            <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
            <p className="relative text-bold-gray text-2xl font-bold ">
              ${price}
            </p>
          </span>
        )}
        {productDiscount && (
          <span className="py-1.5 px-[13px] bg-red/10 text-red rounded-[62px] font-xs font-medium">
            {productDiscount}%
          </span>
        )}
      </div>
      <CommonDescription
        descriptionClass="text-black/60 mt-5"
        text={productDescription}
      />
      <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
      <CommonDescription
        descriptionClass="text-black/60"
        text="Select Colors"
      />
      <div className="flex gap-4 mt-4">
        {SELECT_COLOR.map((item, index) => (
          <button
            key={index}
            className={`size-7 cursor-pointer flex justify-center items-center rounded-full bg-dark-${item}`}
            onClick={() => setActiveIndex(index)}
          >
            {index === activeIndex && <SelectIcon />}
          </button>
        ))}
      </div>
      <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
      <CommonDescription descriptionClass="text-black/60" text="Choose Size" />
      <div className="flex gap-3 mt-4">
        {SELECT_SIZE.map((item, index) => (
          <button
            onClick={() => setActiveButton(index)}
            key={index}
            className={`cursor-pointer bg-light-blue py-3 px-6 rounded-[62px] ${
              index === activeButton && "!bg-black text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
      <div className="flex gap-5">
        <div className="bg-light-blue rounded-[62px] flex py-3.5 px-5 items-center gap-[38px]">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex w-[18.5px] cursor-pointer h-0.5 bg-black rounded-2xl"
          ></button>
          <p className="font-medium min-w-5 leading-[100%]">{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex cursor-pointer w-[18.5px] h-0.5 bg-black rounded-2xl relative after:w-[18.5px] after:h-0.5 after:bg-black after:rounded-2xl after:absolute after:top-0 after:rotate-90"
          ></button>
        </div>
        <CustomButton
          buttonClass="w-full py-[13px] bg-black text-white hover:bg-white hover:text-black"
          buttonText="Add to Cart"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
