"use client"
import Image from "next/image";
import Question from "./components/question";

import house from "@/../public/images/faq.svg";
import AOS from "aos";
import "aos/dist/aos.css"
import React, { useEffect} from "react";

export default function Faq() {
  
  useEffect(() => {
    AOS.init({duration:1000})
  })
  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden min-h-[100vh]">
      <div className="flex flex-row pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[60px] justify-between relative">
        <div className="hidden lg:flex w-[50vw] h-auto aspect-square py-[1vw] relative pl-[3vw]">
          <div className="w-[46vw] h-auto aspect-square absolute" data-aos="fade-right">
            <Image alt="House" src={house} fill={true} />
          </div>
        </div>
        <div className="w-[100vw] lg:w-[50vw] h-auto lg:aspect-square relative flex lg:pr-[3vw] items-center justify-center" >
          <div className="w-[82.2vw] lg:w-auto flex flex-col items-start lg:items-center lg:justify-center" data-aos="fade-left">
            <h1 className="text-[#1E2351] font-bold text-[40px] sm:text-[60px] md:text-[75px] xl:text-[80px] lg:text-[55px] mb-[10px] xl:mb-[10px] lg:mb-[7px] text-montserrat">
              FAQ
            </h1>
            <text className="flex text-[19px] sm:text-[29px] md:text-[39px] lg:hidden text-[#1E2351] text-poppins mb-[10px] sm:mb-[10px] md:mb-[20px] xl:mb-[10px] lg:mb-[7px]">
              Frequently asked Questions
            </text>
            <Question />
          </div>
        </div>
      </div>
    </main>
  );
}
