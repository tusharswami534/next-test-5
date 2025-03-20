"use client";
import { DeleteIcon, PlusIcon, RoutingIcon, SubtractIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import Link from "next/link";
import Swal from "sweetalert2";

interface CartItem {
  title: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const quantityNumber = cartItems.filter((item) => item.quantity);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const lastIndex = cartItems.length - 1;

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index: number, change: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = (subtotal * 20) / 100;
  const total = subtotal - discount + 15;

  const orderDone = () => {
    Swal.fire({
      title: "Thank You!",
      text: "Your Order Successfully Placed",
      icon: "success",
    });
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="px-4 pb-20">
      <div className="max-w-[1240px] border-t border-solid border-black/10 pt-6 max-md:pt-5 w-full mx-auto">
        <div className="flex gap-3 max-sm:gap-1.5 items-center ">
          <Link
            href={"/"}
            className="flex gap-1 max-sm:text-sm text-black/60 items-center"
          >
            Home{" "}
            <span>
              <RoutingIcon />
            </span>
          </Link>
          <Link
            href={"/cart"}
            className="flex gap-1 max-sm:text-sm text-black items-center"
          >
            Cart
          </Link>
        </div>
        <p className="font-integral-cf font-bold text-custom-4xl max-md:text-4xl max-sm:text-custom-3xl py-6 max-lg:pt-5 max-md:pt-3 max-sm:pt-2 max-lg:pb-5 leading-[100%]">
          Your cart
        </p>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex gap-5 max-lg:flex-col">
            <div className="w-full lg:max-w-[715px]">
              <div className=" w-full py-5 px-6 max-md:p-4 max-lg:p-5 max-sm:p-3.5 border border-solid border-black/10 rounded-[20px]">
                {cartItems.map((item, index) => (
                  <div
                    className={`flex gap-4 ${
                      cartItems.length > 1 && "pb-6 max-sm:pb-4 max-md:pb-5"
                    } ${
                      index === 0
                        ? ""
                        : "border-t border-solid border-black/10 pt-6 max-sm:pt-4 max-md:pt-5"
                    } ${index === lastIndex && "!pb-0"}`}
                    key={index}
                  >
                    <div className="bg-light-blue rounded-[8.66px] overflow-hidden">
                      <Image
                        src={item.image}
                        width={124}
                        height={124}
                        alt="product-image"
                        className="max-sm:size-[99px] object-contain max-md:size-28 size-[124px]"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex w-full justify-between">
                        <p className="text-xl max-lg:text-lg max-sm:text-base font-bold leading-[100%]">
                          {item.title}
                        </p>
                        <button
                          className="cursor-pointer"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                      <p
                        className={`text-sm leading-[133%] max-sm:mt-1 mt-0.5 text-black max-sm:text-xs`}
                      >
                        Size:{" "}
                        <span className="text-gray mt-0.5">{item.size}</span>
                      </p>
                      <p
                        className={`text-sm leading-[133%] text-black max-sm:text-xs`}
                      >
                        Color:{" "}
                        <span className="text-gray mt-1">
                          {item.color.replaceAll("bg-dark-", "")}
                        </span>
                      </p>
                      <div className="flex justify-between mt-1.5 items-baseline">
                        <p className="font-bold text-2xl max-sm:text-xp leading-[100%]">
                          ${item.price}
                        </p>
                        <div className="flex px-5 py-3 max-sm:py-[7.5px] max-sm:px-[13.5px] items-center gap-5 bg-light-blue rounded-[62px]">
                          <button
                            onClick={() => handleQuantityChange(index, -1)}
                            className="flex cursor-pointer"
                          >
                            <SubtractIcon />
                          </button>

                          <p className="font-medium min-w-5 leading-[100%]">
                            {cartItems[index].quantity}
                          </p>

                          <button
                            onClick={() => handleQuantityChange(index, 1)}
                            className="flex cursor-pointer"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <OrderSummary
              total={total}
              subtotal={subtotal}
              discount={discount}
              onClick={orderDone}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
