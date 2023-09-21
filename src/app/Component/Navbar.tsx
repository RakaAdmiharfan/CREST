"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("kepencet");
    setNav(!nav);
  };

  console.log(nav);
  return (
    <div className="h-[100px]">
      <div className="bg-[#2E3362] w-full flex justify-between items-center p-4 fixed">
        <div className="ml-[100px]">
          <Link href="/">
            <img src="/Home/Logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="flex">
          <ul className="hidden sm:flex mr-[126px] gap-[38px]">
            <li className="p-4">
              <Link href="/about">Invest</Link>
            </li>
            <li className="p-4">
              <Link href="/branch-office">About</Link>
            </li>
            <li className="p-4">
              <Link href="/blog">Help</Link>
            </li>
            <li className="p-4">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>

          <ul className="hidden sm:flex gap-[23px] mr-[30px]">
            <li>
              <button className="button border-[#6C88CD] border-[3px] text-[#6C88CD] font-poppins font-semibold text-lg py-[10px] px-[30px] rounded-[15px]">
                Log In
              </button>
            </li>
            <li>
              <button className="button text-[#A5CCD1] border-[#A5CCD1] border-[3px] py-[10px] px-[30px] font-poppins font-semibold text-lg rounded-[15px]">
                Sign Up
              </button>
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
              <Link href="/about">Invest</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/branch-office">About</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/blog">Help</Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
