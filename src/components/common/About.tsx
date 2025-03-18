import { MailIcon } from "@/utils/icons";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto rounded-[20px] flex items-center justify-between bg-black container py-[43px] px-[64px]">
        <div className="max-w-[551px] ">
          <h3 className="text-white font-integral-cf text-custom-4xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
        </div>
        <div className="max-w-[349px] flex flex-col gap-3.5 w-full">
          <div className="w-full py-4 px-[17px] bg-white items-center rounded-[62px] flex">
            <form className="flex w-full items-center gap-3.5">
              <label className="cursor-pointer" htmlFor="mail">
                <MailIcon />
              </label>
              <div className="w-full">
                <input
                  className="w-full text-black/40 outline-none leading-[100%]"
                  id="mail"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
