import React from "react";
interface CustomButtonProps {
  buttonText: string;
  buttonClass?: string;
}

const CustomButton = ({ buttonText, buttonClass }: CustomButtonProps) => {
  return (
    <button
      className={`max-sm:text-sm leading-[100%] cursor-pointer border border-solid rounded-[62px] transition-all duration-300 ${buttonClass}`}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
