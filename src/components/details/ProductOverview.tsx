"use client";
import ShowsImage from "./ShowsImage";
import {
  ALSO_LIST_LIST,
  NEW_ARRIVALS_LIST,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { useParams } from "next/navigation";
import ProductInfo from "./ProductInfo";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const ProductOverview = () => {
  const params = useParams();
  const { title } = params;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  console.log("Title from params:", title);

  const combinedList = [
    ...NEW_ARRIVALS_LIST,
    ...TOP_SELLING_LIST,
    ...ALSO_LIST_LIST,
  ];

  const product = combinedList.find((item) => {
    if (typeof title === "string") {
      const formattedTitle = title.toLowerCase().replace(/ /g, "-");
      const formattedProductTitle = item.productTitle
        .toLowerCase()
        .replace(/ /g, "-");
      return formattedTitle === formattedProductTitle;
    }
    return false;
  });

  console.log("Selected Product:", product);

  return (
    <div className="px-4">
      <ToastContainer position="top-center" />
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex gap-10 max-xl:flex-col">
          <ShowsImage
            productImage={product?.product}
            productImageTwo={product?.productImageTwo}
            productImageThree={product?.productImageThree}
          />
          <ProductInfo
            productTitle={product?.productTitle || ""}
            productStart={product?.productRatingStart}
            productRating={product?.productRating || 0}
            productDescription={product?.productDescription || ""}
            productDiscount={product?.discount}
            price={product?.price || 0}
            productPrice={product?.productPrice || 0}
            cart={cart}
            setCart={setCart}
            productImage={product?.product || ""}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
