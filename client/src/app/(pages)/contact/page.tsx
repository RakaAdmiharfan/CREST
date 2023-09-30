"use client";

import Image from "next/image";

import house from "@/../public/images/contact.svg";
import envelope from "@/../public/images/envelope.svg";
import chat from "@/../public/images/chat.svg";
import phone from "@/../public/images/contact_phone.svg";
import plane from "@/../public/images/paperplane.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import ContactForm from "./components/contact";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <main className="bg-[#EFF2FA] relative min-h-[100vh] lg:h-[100vh] overflow-hidden">
      <div className="flex flex-row pb-[15px] sm:pb-[25px] md:pb-[35px] xl:pb-[60px] lg:pb-[50px] pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[60px] justify-between relative">
        <div className="hidden lg:flex w-[50vw] h-auto aspect-square py-[1vw] relative pl-[3vw]">
          <div
            className="w-[46vw] h-auto aspect-square absolute"
            data-aos="fade-right"
            data-aos-duration="1000ms"
          >
            <Image alt="House" src={house} fill={true} />
          </div>
        </div>
        <div className="w-[100vw] lg:w-[50vw] h-auto lg:aspect-square relative flex lg:pr-[3vw] items-center justify-center">
          <div
            className="flex flex-col w-[77.7vw] lg:w-[27vw] items-center justify-center"
            data-aos="fade-left"
          >
            <text className="text-black font-semibold text-[30px] sm:text-[45px] md:text-[60px] xl:text-[35px] lg:text-[27px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[10px] lg:mb-[7px] text-poppins">
              Send Us A Message
            </text>
            <div className="w-[77.7vw] lg:w-[27vw]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
