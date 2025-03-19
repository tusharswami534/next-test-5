import Image from "next/image";
import React, { useState } from "react";

const ShowsImage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/assets/image/webp/skinny-fit-jeans.webp"
  );

  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col gap-3.5">
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/image/webp/skinny-fit-jeans.webp")
          }
        >
          <Image
            src="/assets/image/webp/skinny-fit-jeans.webp"
            width={152}
            height={167}
            alt="Skinny Fit Jeans"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/image/webp/t-shirt-tape-details.webp")
          }
        >
          <Image
            src="/assets/image/webp/t-shirt-tape-details.webp"
            width={152}
            height={167}
            alt="T-Shirt with Tape Details"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() =>
            setSelectedImage("/assets/image/webp/vertical-striped-shirt.webp")
          }
        >
          <Image
            src="/assets/image/webp/vertical-striped-shirt.webp"
            width={152}
            height={167}
            alt="Vertical Striped Shirt"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-light-blue overflow-hidden">
        <Image
          src={selectedImage}
          width={444}
          height={530}
          alt="Selected Product"
          className="w-[444px] h-[530px] object-cover"
        />
      </div>
    </div>
  );
};

export default ShowsImage;
