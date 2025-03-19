"use client";
import { MailIcon } from "@/utils/icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";

const About = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_rh6tpgq",
          "template_dsxs4fe",
          form.current,
          "aKxsD9MpKuUVpMSgP"
        )
        .then(
          () => {
            console.log("send mail");
          },
          (error) => {
            console.log("Failed to send email. Please try again.");
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div>
      <div className="max-w-[1240px] mx-auto rounded-[20px] flex items-center justify-between bg-black container py-[43px] px-[64px]">
        <div className="max-w-[551px]">
          <h3 className="text-white font-integral-cf text-custom-4xl font-bold">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-[349px] flex flex-col gap-3.5 w-full"
        >
          <div className="w-full py-3 px-[17px] bg-white items-center rounded-[62px] flex">
            <div className="flex w-full items-center gap-3.5">
              <label className="cursor-pointer" htmlFor="mail">
                <MailIcon />
              </label>
              <div className="w-full">
                <input
                  className="w-full text-black/40 outline-none leading-[100%]"
                  id="mail"
                  placeholder="Enter your email address"
                  type="email"
                  name="email"
                />
              </div>
            </div>
          </div>
          <CustomButton
            buttonText="Subscribe to Newsletter"
            buttonClass="bg-white font-medium leading-[100%] w-full py-3.5"
          />
        </form>
      </div>
    </div>
  );
};

export default About;
