"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

import logo from "@/../public/Home/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("kepencet");
    setNav(!nav);
  };

  console.log(nav);
  return (
    <div className="w-full h-auto aspect-[1920/80] z-50 absolute flex justify-between">
      <div className="bg-[#2E3362] w-[100vw] h-auto aspect-[1920/80] flex justify-between items-center p-4 fixed">
        <Link
          href="/"
          className="ml-[5.2vw] w-[9.53vw] h-auto aspect-[183/80] relative"
        >
          <Image alt="Logo" src={logo} fill={true} />
        </Link>

        <div className="flex flex-row">
          <ul className="hidden sm:flex mr-[5vw] gap-[3vw]">
            <li className="p-4">
              <Link href="/invest" className="text-poppins">
                Invest
              </Link>
            </li>
            <li className="p-4">
              <Link href="/about" className="text-poppins">
                About
              </Link>
            </li>
            <li className="p-4">
              <Link href="/faq" className="text-poppins">
                Help
              </Link>
            </li>
            <li className="p-4">
              <Link href="/contact" className="text-poppins">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="hidden sm:flex gap-[23px] mr-[30px] pt-4">
            <li>
              <Link
                href="/login"
                className="button border-[#6C88CD] border-[3px] text-[#6C88CD] font-poppins font-semibold text-[14px] py-[10px] px-[30px] rounded-[15px] text-poppins"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="signup"
                className="button text-[#A5CCD1] border-[#A5CCD1] border-[3px] py-[10px] px-[30px] font-poppins font-semibold text-[14px] rounded-[15px] text-poppins"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="block sm:hidden z-40">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={`sm:hidden absolute top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-[#14037D] text-center text-white`}
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
