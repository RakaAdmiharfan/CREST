"use client";
import Image from "next/image";
import RegisterForm from "./components/registerform";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function SignUp() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="bg-white relative pt-[0px] xl:pt-[57px] lg:pt-[54px] w-[100vw] min-h-[100vh] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row w-full h-auto aspect-auto lg:aspect-[1920/1000]">
        <div className="w-[100vw] lg:w-[50vw] h-full pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[0px] relative flex items-center justify-center">
          <div
            className="w-[82.2vw] lg:w-[39.6vw] h-auto aspect-auto lg:aspect-[760/696] flex flex-col mt-[24px] sm:mt-[15px] md:mt-[20px]"
            data-aos="fade-right"
          >
            <text className="font-extrabold text-[20px] sm:text-[28px] md:text-[36px] xl:text-[27px] lg:text-[20px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Welcome!
            </text>
            <text className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[14px] lg:text-[11px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[60px] lg:mb-[30px] text-poppins text-[#000000]">
              Sign up for an account by filling the required information
            </text>
            <RegisterForm />
            <div className="w-full mt-[20px] sm:mt-[25px] md:mt-[30px] xl:mt-[35px] lg:mt-[25px] flex justify-between items-center">
              <div className="w-[33.6vw] lg:w-[14.58vw] h-[1px] bg-[#808080]"></div>
              <text className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px]">
                or
              </text>
              <div className="w-[33.6vw] lg:w-[14.58vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-full mt-[20px] sm:mt-[25px] md:mt-[30px] xl:mt-[35px] lg:mt-[25px] flex justify-center">
              <button className="w-[42.2vw] lg:w-[14.375vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] h-auto aspect-[152/26] lg:aspect-[276/47] border-[3px] text-[#2E3362] border-[#2E3362] rounded-[8px] lg:rounded-[15px] flex justify-center items-center">
                <div className="w-[3.6vw] lg:w-[1.25vw] h-auto aspect-square relative mr-[2.5vw] lg:mr-[0.83vw]">
                  <Image alt="Google" src={google} fill={true} />
                </div>
                <text className="text-[#2E3362] font-bold text-[12px] sm:text-[15px] md:text-[18px] xl:text-[12px] lg:text-[10px] text-poppins">
                  Sign Up with Google
                </text>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-[50vw] h-[100vh] aspect-[360/300] absolute bg-black z-10 opacity-60 right-0"></div>
        <div className="w-[100vw] lg:w-[50vw] h-auto lg:h-[100vh] aspect-[360/300] lg:aspect-auto relative lg:absolute lg:right-0">
          <Image alt="House" src={house} fill={true} objectFit="cover" />
        </div>

        <div className="hidden w-[50vw] h-full relative lg:flex items-center justify-center">
          <div
            className="z-10 flex justify-center flex-col items-center"
            data-aos="fade-up"
          >
            <text className="text-[40px] xl:text-[40px] lg:text-[32px] text-white text-shadow font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              Have an Account?
            </text>
            <text className="w-[28.85vw] text-[24px] xl:text-[24px] lg:text-[18px] text-white text-shadow font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins">
              Log back into your account by clicking the button below
            </text>
            <Link
              className="bg-[#2E3362] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/login"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Log In
              </text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
