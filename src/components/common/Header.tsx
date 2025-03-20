"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "../../utils/helper";
import { CartIcon, DropDownArrow, SearchIcon } from "../../utils/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const updateCartLength = () => {
      const storedCart = localStorage.getItem("cart");
      const cartData = storedCart ? JSON.parse(storedCart) : [];
      setCartLength(cartData.length);
    };
    updateCartLength();
    window.addEventListener("storage", updateCartLength);
    return () => window.removeEventListener("storage", updateCartLength);
  }, []);

  return (
    <div className="px-4">
      <div className="container max-w-[1240px] mx-auto py-6">
        <div className="flex gap-10 items-center max-lg:gap-6 max-md:justify-between max-xl:gap-8">
          <div className="flex gap-4 items-center">
            <button
              className="flex flex-col h-[15px] justify-between w-[19px] md:hidden overflow-hidden relative z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                  isOpen && "translate-x-10"
                }`}
              ></span>
              <span
                className={`flex w-full h-0.5 relative rounded-3xl bg-black transition-all duration-300 after:flex after:w-full after:h-0.5  after:rounded-3xl after:bg-black after:transition-all after:duration-300 top-0 left-0 ${
                  isOpen && "rotate-45 after:rotate-90"
                }`}
              ></span>
              <span
                className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                  isOpen && "-translate-x-10"
                }`}
              ></span>
            </button>
            <Link
              href={"/"}
              className="text-custom-3xl font-bold font-integral-cf leading-[100%] max-lg:text-3xl max-md:text-[25.2px]"
            >
              SHOP.CO
            </Link>
          </div>
          <div
            className={`flex gap-6 max-md:fixed max-md:flex-col transition-all duration-300 max-md:w-full max-md:h-full max-md:justify-center max-md:items-center max-md:top-0 max-md:-left-full max-md:bg-light-blue max-md:z-40 ${
              isOpen && "max-md:left-0"
            }`}
          >
            {HEADER_LIST.map((item, index) => (
              <div key={index} className="group relative">
                <Link
                  href={item.link}
                  className="flex gap-1 items-center leading-[100%] whitespace-nowrap"
                >
                  {item.title} {item.submenu && <DropDownArrow />}
                </Link>
                {item.submenu && (
                  <div className="bg-white shadow-md absolute group-hover:block hidden z-10">
                    <ul className="p-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-gray-100 px-4 py-1"
                        >
                          <Link
                            className="whitespace-nowrap"
                            href={subItem.link}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Searc Icon and cart Icon */}
          <div className="flex gap-10 items-center max-sm:gap-3 md:w-full">
            <div className="flex bg-light-blue rounded-[62px] w-full gap-3.5 items-center max-md:hidden max-w-[577px] px-[18px] py-3.5">
              <label className="cursor-pointer" htmlFor="search">
                <SearchIcon fill="fill-black/40" />
              </label>
              <div className="w-full">
                <input
                  id="search"
                  placeholder="Search for products..."
                  className="text-black/40 w-full outline-none"
                  type="text"
                />
              </div>
            </div>
            <div className="md:hidden">
              <SearchIcon fill="fill-black" />
            </div>
            <div>
              <Link href={"/cart"} className="relative">
                <CartIcon />
                {cartLength > 0 && (
                  <span className="flex bg-red-500 h-5 justify-center rounded-full text-white text-xs w-5 -right-2 -top-2 absolute items-center">
                    {cartLength}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
