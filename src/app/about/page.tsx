"use client";

import Image from "next/image";

import house from "@/../public/images/faq.svg";
import abu from "@/../public/images/about_abu.svg";
import yellow from "@/../public/images/about_yellow.svg";
import yellow2 from "@/../public/images/about_yellow2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Profile from "./components/profile";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row pb-[15px] sm:pb-[20px] md:pb-[25px] xl:pb-[60px] lg:pb-[20px] pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[60px] items-center lg:items-start lg:justify-between relative">
        <div
          className="flex lg:hidden w-[48vw] h-auto aspect-square relative"
          data-aos="fade-right"
        >
          <Image alt="House" src={house} fill={true} />
        </div>
        <div
          className="hidden w-[50vw] h-auto aspect-square py-[1vw] relative lg:flex pl-[7.8vw]"
          data-aos="fade-right"
        >
          <div className="hidden lg:flex w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="hidden lg:flex w-[34.74vw] h-auto aspect-[667/708] ml-[-18.81vw] absolute bottom-[15px] xl:bottom-[15px] lg:bottom-[15px]">
            <Image alt="About" src={abu} fill={true} />
          </div>
        </div>
        <div className="w-[83.3vw] lg:w-[50vw] h-auto lg:aspect-square relative justify-center lg:justify-normal flex lg:flex-row-reverse lg:pr-[3vw]">
          <div
            className="flex flex-col lg:justify-center items-center lg:items-start w-[83.3vw] lg:w-[34.74vw]"
            data-aos="fade-left"
          >
            <text className="text-[#1E2351] font-bold text-[23px] sm:text-[30px] md:text-[39px] xl:text-[45px] lg:text-[37px] mt-[20px] sm:mt-[23px] md:mt-[25px] lg:mt-[0px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              WHY CHOOSE US
            </text>
            <text className="text-black text-center lg:text-start text-[10px] sm:text-[13px] md:text-[16px] xl:text-[18px] lg:text-[15px] mb-[0px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              We understand that the world of real estate investment is dynamic
              and ever-changing. That's why we've harnessed the power of
              AI-driven prediction technology to provide you with a distinct
              advantage. Use our revolutionary cutting-edge AI technology with
              user friendly interface to create timely insights and informed
              decision making. We combine the best of both worlds of expertise
              and automation by creating a learning interface for newcomers of
              the market, ensuring you receive the most comprehensive and
              well-informed decision.
            </text>
          </div>
        </div>
      </div>

      <div className="bg-white w-[100vw] py-[20px] sm:py-[25px] md:py-[30px] xl:py-[140px] lg:py-[115px] pl-[8.35vw] lg:pl-[0px] flex flex-col items-start lg:items-center relative overflow-hidden">
        <div
          className="hidden lg:flex w-[15.23vw] h-auto aspect-[292.5/378.6] absolute top-[-50px] xl:top-[-50px] lg:top-[-35px] left-[-5vw] z-10"
          data-aos="fade-right"
        >
          <Image alt="About Yellow" src={yellow} fill={true} />
        </div>
        <div
          className="hidden lg:flex w-[28.75vw] h-auto aspect-[552/398] absolute top-[-50px] xl:top-[-50px] lg:top-[-35px] right-[-10vw] z-10"
          data-aos="fade-left"
        >
          <Image alt="About Yellow" src={yellow2} fill={true} />
        </div>
        <div
          className="w-[83.3vw] lg:w-[52.5vw] flex flex-col justify-center items-center lg:mb-[40px]"
          data-aos="zoom-in"
        >
          <text className="text-[#1E2351] font-bold text-[23px] sm:text-[30px] md:text-[39px] xl:text-[45px] lg:text-[37px] mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins">
            WHO WE ARE
          </text>
          <text className="text-black text-[10px] sm:text-[13px] md:text-[16px] xl:text-[16px] lg:text-[13px] mb-[35px] sm:mb-[30px] md:mb-[45px] xl:mb-[30px] lg:mb-[20px] text-poppins text-center">
            We are a team of motivated developers to create a better learning
            place for the real estate market. We strive to straighten the steep
            learning curve of real estate investment and create a friendlier
            environment for everyone to learn real estate investment and we make
            it our mission to help you achieve your real estate investment goals
            with a wealth of resources and guidance to support you at every
            step.
          </text>
        </div>
        <div
          className="hidden lg:flex flex-col w-[66vw] h-auto aspect-[1258/794] items-center justify-between"
          data-aos="fade-up"
        >
          <div className="flex flex-row justify-between w-full h-auto aspect-[1258/357]">
            <Profile name={"Amjad"} />
            <Profile name={"Nicholas"} />
            <Profile name={"Johan"} />
          </div>
          <div className="flex flex-row justify-between w-[40.2vw] h-auto aspect-[772/357]">
            <Profile name={"Iskandar"} />
            <Profile name={"Raka"} />
          </div>
        </div>
        <div
          className="flex lg:hidden w-[94.1vw] h-auto aspect-[339/160] mt-[100px] overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-row bg-white w-full h-full overflow-x-auto gap-[4.16vw]">
            <Profile name={"Amjad"} />
            <Profile name={"Nicholas"} />
            <Profile name={"Johan"} />
            <Profile name={"Iskandar"} />
            <Profile name={"Raka"} />
          </div>
        </div>
      </div>
    </main>
  );
}
