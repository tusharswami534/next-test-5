import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="max-w-[1240px] py-6 container mx-auto">
        <Link href={"/"} className="text-custom-3xl font-bold font-integral-cf">
          SHOP.CO
        </Link>
      </div>
    </div>
  );
};

export default Header;
