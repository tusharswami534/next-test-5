import React from "react";
interface CustomButtonProps {
  buttonText: string;
  buttonClass?: string;
  customOnClick?: () => void;
}

const CustomButton = ({
  buttonText,
  buttonClass,
  customOnClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={customOnClick}
      className={`max-sm:text-sm leading-[100%] cursor-pointer border border-solid rounded-[62px] transition-all duration-300 ${buttonClass}`}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
