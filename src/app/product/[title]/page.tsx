import Header from "@/components/common/Header";
import MightAlso from "@/components/details/MightAlso";
import ProductOverview from "@/components/details/ProductOverview";
import Reviews from "@/components/details/Reviews";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense>
        <Header />
        <ProductOverview />
        <Reviews />
        <MightAlso />
      </Suspense>
    </>
  );
};

export default page;
