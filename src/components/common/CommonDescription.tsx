import React from "react";
interface CommonDescriptionProps {
  text: string;
  descriptionClass?: string;
}

const CommonDescription = ({
  text,
  descriptionClass,
}: CommonDescriptionProps) => {
  return (
    <p className={`leading-[137%] max-sm:text-sm ${descriptionClass}`}>
      {text}
    </p>
  );
};

export default CommonDescription;
