import Header from "@/components/common/Header";
import MightAlso from "@/components/details/MightAlso";
import ProductOverview from "@/components/details/ProductOverview";
import Reviews from "@/components/details/Reviews";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <ProductOverview />
      <Reviews />
      <MightAlso />
    </>
  );
};

export default page;
