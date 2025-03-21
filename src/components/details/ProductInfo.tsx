import React, { useState, useEffect } from "react";
import CommonDescription from "../common/CommonDescription";
import { SelectIcon } from "@/utils/icons";
import { SELECT_COLOR, SELECT_SIZE } from "@/utils/helper";
import CustomButton from "../common/CustomButton";
import { toast } from "react-toastify";

const ProductInfo = ({
  productTitle,
  productStart,
  productRating,
  price,
  productPrice,
  productDiscount,
  productDescription,
  cart,
  setCart,
  productImage,
}: {
  productTitle: string;
  productStart: any;
  productRating: number;
  price: number;
  productPrice: number;
  productDiscount: any;
  productDescription: string;
  cart: any[];
  setCart: Function;
  productImage: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedColorIndex = localStorage.getItem("selectedColorIndex");
    const storedSizeIndex = localStorage.getItem("selectedSizeIndex");

    if (storedColorIndex !== null) {
      setActiveIndex(parseInt(storedColorIndex, 10));
    }
    if (storedSizeIndex !== null) {
      setActiveButton(parseInt(storedSizeIndex, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedColorIndex", activeIndex.toString());
    localStorage.setItem("selectedSizeIndex", activeButton.toString());
  }, [activeIndex, activeButton]);

  const handleAddToCart = () => {
    const selectedProduct = {
      title: productTitle,
      image: productImage,
      color: SELECT_COLOR[activeIndex],
      size: SELECT_SIZE[activeButton],
      quantity: quantity,
      price: productPrice,
    };

    const exists = cart.some((item) => item.title === selectedProduct.title);

    if (!exists) {
      const updatedCart = [...cart, selectedProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success("Item Added To Your Cart");
    } else {
      toast.error("This Item Already Exists In Your Cart");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[600px] max-xl:max-w-[unset]">
      <p className="text-custom-4xl font-bold font-integral-cf leading-[100%] max-sm:mb-3 mb-3.5">
        {productTitle}
      </p>
      <div className="flex gap-4">
        {productStart}
        <p className="text-sm">
          {productRating}/<span className="text-gray">5</span>
        </p>
      </div>
      <div className="flex gap-3 items-center mt-3.5">
        {productPrice !== 0 && (
          <p className="text-2xl font-bold leading-[100%]">${productPrice}</p>
        )}
        {price !== 0 && (
          <span className="w-max relative">
            <span className="bg-bold-gray h-[1px] w-full absolute top-[56%]"></span>
            <p className="text-2xl text-bold-gray font-bold relative">
              ${price}
            </p>
          </span>
        )}
        {productDiscount && (
          <span className="bg-red/10 rounded-[62px] text-red font-medium font-xs px-[13px] py-1.5">
            {productDiscount}%
          </span>
        )}
      </div>
      <CommonDescription
        descriptionClass="text-black/60 mt-5"
        text={productDescription}
      />
      <div className="bg-black/10 h-[1px] w-full max-w-[590px] max-xl:max-w-[unset] my-6"></div>
      <CommonDescription
        descriptionClass="text-black/60"
        text="Select Colors"
      />
      <div className="flex gap-4 mt-4">
        {SELECT_COLOR.map((item, index) => (
          <button
            key={index}
            className={`size-7 cursor-pointer flex justify-center items-center rounded-full ${item}`}
            onClick={() => setActiveIndex(index)}
          >
            {index === activeIndex && <SelectIcon />}
          </button>
        ))}
      </div>
      <div className="bg-black/10 h-[1px] w-full max-w-[590px] max-xl:max-w-[unset] my-6"></div>
      <CommonDescription descriptionClass="text-black/60" text="Choose Size" />
      <div className="flex gap-3 max-sm:gap-2 mt-4">
        {SELECT_SIZE.map((item, index) => (
          <button
            onClick={() => setActiveButton(index)}
            key={index}
            className={`cursor-pointer bg-light-blue whitespace-nowrap max-sm:text-sm max-sm:py-2.5 max-sm:px-5 py-3 px-6 rounded-[62px] ${
              index === activeButton && "!bg-black text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="bg-black/10 h-[1px] w-full max-w-[590px] max-xl:max-w-[unset] my-6"></div>
      <div className="flex gap-5">
        <div className="flex bg-light-blue rounded-[62px] gap-[38px] items-center px-5 py-3.5">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex bg-black h-0.5 rounded-2xl w-[18.5px] cursor-pointer"
          ></button>
          <p className="font-medium leading-[100%] min-w-5">{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex bg-black h-0.5 rounded-2xl w-[18.5px] after:absolute after:bg-black after:h-0.5 after:rotate-90 after:rounded-2xl after:top-0 after:w-[18.5px] cursor-pointer relative"
          ></button>
        </div>
        <CustomButton
          buttonClass="w-full py-[13px] max-xl:max-w-[400px] bg-black text-white hover:bg-white hover:text-black"
          buttonText="Add to Cart"
          customOnClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
