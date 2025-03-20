import React from "react";
import CustomButton from "../common/CustomButton";
import { ArrowIcon, PromoCodeIcon } from "@/utils/icons";

const OrderSummary = ({
  discount,
  subtotal,
  total,
  onClick,
}: {
  discount: number;
  subtotal: number;
  total: number;
  onClick?: () => void;
}) => {
  return (
    <div className="max-w-[505px] w-full relative">
      <div className=" max-h-[458px] lg:sticky lg:top-0 py-5 border border-solid border-black/10 rounded-[20px] w-full px-6 flex flex-col gap-6">
        <p className="text-2xl font-bold leading-[100%]">Order Summary</p>
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Subtotal</p>
            <p className="text-xl font-bold">{subtotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Discount (-20%)</p>
            <p className="text-xl font-bold text-red">{discount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black/60">Delivery Fee</p>
            <p className="text-xl font-bold">15</p>
          </div>
          <div className="w-full h-[1px] bg-black/10"></div>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black">Total</p>
            <p className="text-xl font-bold">{total}</p>
          </div>
        </div>
        <form className="flex w-full items-center gap-3">
          <div className="w-full bg-light-blue items-center flex gap-3  rounded-[62px] py-3 px-4">
            <PromoCodeIcon />
            <input
              type="text"
              className="outline-none uppercase text-black/40"
              placeholder="Add promo code"
            />
          </div>
          <CustomButton
            buttonClass="py-[13px] px-[38.5px] bg-black hover:bg-white font-medium text-white hover:text-black"
            buttonText="Apply"
          />
        </form>
        <CustomButton
          buttonClass="gap-[14.63px] flex py-[19px] w-full justify-center items-center group bg-black text-white hover:bg-white hover:text-black font-medium"
          buttonText="Go to Checkout"
          arrow={<ArrowIcon pathClass="group-hover:fill-black" />}
          customOnClick={onClick}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
