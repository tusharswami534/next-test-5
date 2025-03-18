import React from "react";
interface HeadingProps {
  text: string;
  headingClassName?: string;
}

const Heading = ({ text, headingClassName }: HeadingProps) => {
  return (
    <h2
      className={` font-integral-cf font-bold text-5xl max-lg:text-4xl max-md:text-custom-3xl max-sm:text-3xl leading-[100%] text-center ${headingClassName}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
