import Image from "next/image";
import React, { useState } from "react";

const ShowsImage = ({
  productImage,
  productImageTwo,
  productImageThree,
}: {
  productImage?: any;
  productImageTwo?: any;
  productImageThree?: any;
}) => {
  // Set the initial image to productImage
  const [selectedImage, setSelectedImage] = useState(productImage || "");

  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col gap-3.5">
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImage)}
        >
          <Image
            src={productImage || ""}
            width={152}
            height={167}
            alt="Skinny Fit Jeans"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImageTwo)}
        >
          <Image
            src={productImageTwo || ""}
            width={152}
            height={167}
            alt="T-Shirt with Tape Details"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImageThree)}
        >
          <Image
            src={productImageThree || ""}
            width={152}
            height={167}
            alt="Vertical Striped Shirt"
            className="w-[152px] h-[167px] object-cover bg-light-blue"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-light-blue overflow-hidden">
        {/* Display the selected image */}
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={444}
            height={530}
            alt="Selected Product"
            className="w-[444px] h-[530px] object-cover"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </div>
  );
};

export default ShowsImage;
