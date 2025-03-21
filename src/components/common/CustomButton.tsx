import React from "react";
interface CustomButtonProps {
  buttonText?: string;
  buttonClass?: string;
  arrow?: any;
  customOnClick?: any;
}

const CustomButton = ({
  buttonText,
  buttonClass,
  arrow,
  customOnClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={customOnClick}
      className={`max-sm:text-sm leading-[100%] cursor-pointer border border-solid rounded-[62px] transition-all duration-300 ${buttonClass}`}
    >
      {buttonText}
      {arrow && <span>{arrow}</span>}
    </button>
  );
};

export default CustomButton;
