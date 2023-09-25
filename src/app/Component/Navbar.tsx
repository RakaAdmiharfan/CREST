"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

import logo from "@/../public/Home/Logo.png";
import options from "@/../public/images/navbar.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  console.log(nav);
  return (
    <div className="w-full  z-50 fixed flex flex-row justify-between items-center">
      <div className="bg-[#2E3362] w-[100vw] h-auto lg:aspect-[1920/80] aspect-[360/50] flex justify-between items-center lg:px-[5.2vw] px-[7.77vw] relative">
        <Link
          href="/"
          className="lg:w-[9.53vw] w-[23.3vw] h-auto lg:aspect-[183/80] aspect-[84/37] relative"
        >
          <Image alt="Logo" src={logo} fill={true} />
        </Link>

        <div className="flex flex-row">
          <ul className="hidden lg:flex mr-[2vw] gap-[3vw]">
            <li className="p-4">
              <Link
                href="/invest"
                className="text-poppins text-[18px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px]"
              >
                Invest
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/about"
                className="text-poppins text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/faq"
                className="text-poppins text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                Help
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/contact"
                className="text-poppins text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="hidden lg:flex gap-[1vw] flex-row items-center justify-center">
            <li>
              <Link
                href="/login"
                className="w-[5.9vw] h-auto aspect-[114/47] border-[#6C88CD] border-[3px] text-[#6C88CD] font-poppins font-semibold text-[14px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm-[8px] flex flex-col items-center justify-center rounded-[15px] text-poppins"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="w-[6.7vw] h-auto aspect-[130/47] text-[#A5CCD1] border-[#A5CCD1] border-[3px] font-poppins font-semibold text-[14px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm-[8px] flex flex-col items-center justify-center  rounded-[15px] text-poppins"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="block lg:hidden z-40">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu style={{ color: "white" }} size={30} />
          )}
        </div>
        <div
          className={`lg:hidden fixed top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-[#2E3362] text-center text-white`}
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link href="/invest">Invest</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/about">About</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/faq">Help</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
