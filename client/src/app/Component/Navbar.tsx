"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

import logo from "@/../public/Home/Logo.png";
import options from "@/../public/images/navbar.svg";
import avatar from "@/../public/images/avatar.svg";
import arrow from "@/../public/images/arrowdown.svg";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  setInterval(async () => {
    if (typeof window === undefined) {
      return;
    }

    const token = localStorage?.getItem("token");

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const resJson = await res.json();

      if (resJson.message === "authorized") {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, 1000 * 5);

  return (
    <div className="w-full  z-50 fixed flex flex-col">
      <div className="bg-[#2E3362] w-[100vw] h-auto lg:aspect-[1920/80] aspect-[360/50] flex justify-between items-center lg:px-[5.2vw] px-[7.77vw] relative">
        <Link
          href="/"
          onClick={() => setShowProfile(false)}
          className="lg:w-[9.53vw] w-[23.3vw] h-auto lg:aspect-[183/80] aspect-[84/37] relative"
        >
          <Image alt="Logo" src={logo} fill={true} />
        </Link>

        <div className="flex flex-row">
          <ul className="hidden lg:flex mr-[2vw] gap-[3vw]">
            <li className="p-4">
              <Link
                href="/invest"
                onClick={() => setShowProfile(false)}
                className="text-poppins hover:opacity-70 text-[18px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px]"
              >
                Invest
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/about"
                onClick={() => setShowProfile(false)}
                className="text-poppins hover:opacity-70 text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/faq"
                onClick={() => setShowProfile(false)}
                className="text-poppins hover:opacity-70 text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                Help
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/contact"
                onClick={() => setShowProfile(false)}
                className="text-poppins hover:opacity-70 text-[18px] xl:text-[18px] lg:text-[16px]  md:text-[14px] sm:text-[12px]"
              >
                Contact
              </Link>
            </li>
          </ul>

          {isLogin ? (
            <button
              className="hidden lg:flex flex-row items-center justify-center hover:opacity-70"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="w-[2.5vw] h-auto aspect-square relative mr-[1.66vw]">
                <Image src={avatar} alt="Profile" fill={true} />
              </div>
              <text className="text-white text-poppins xl:text-[15px] lg:text-[13px] mr-[0.66vw]">
                Profile Name
              </text>
              <div className="w-[0.8vw] h-auto aspect-square relative">
                <Image src={arrow} alt="Arrow" fill={true} />
              </div>
            </button>
          ) : (
            <ul className="hidden lg:flex gap-[1vw] flex-row items-center justify-center">
              <li>
                <Link
                  href="/login"
                  onClick={() => setShowProfile(false)}
                  className="w-[5.9vw] h-auto aspect-[114/47] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] border-[#6C88CD] border-[3px] text-[#6C88CD] font-poppins font-semibold text-[14px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm-[8px] flex flex-col items-center justify-center rounded-[15px] text-poppins"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  onClick={() => setShowProfile(false)}
                  className="w-[6.7vw] h-auto aspect-[130/47] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-[#A5CCD1] border-[#A5CCD1] border-[3px] font-poppins font-semibold text-[14px] xl:text-[14px] lg:text-[12px] md:text-[10px] sm-[8px] flex flex-col items-center justify-center  rounded-[15px] text-poppins"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
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
              <Link href="/invest" className="hover:opacity-70 text-poppins">
                Invest
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/about" className="hover:opacity-70 text-poppins">
                About
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/faq" className="hover:opacity-70 text-poppins">
                Help
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/contact" className="hover:opacity-70 text-poppins">
                Contact
              </Link>
            </li>
            {isLogin ? (
              <ul>
                <li onClick={handleNav} className="p-4">
                  <Link
                    href="/changepassword"
                    className="hover:opacity-70 text-poppins"
                  >
                    Change Password
                  </Link>
                </li>
                <li onClick={handleNav} className="p-4">
                  <Link href="/login" className="hover:opacity-70 text-poppins">
                    Sign Out
                  </Link>
                </li>{" "}
              </ul>
            ) : (
              <ul>
                <li onClick={handleNav} className="p-4">
                  <Link href="/login" className="hover:opacity-70 text-poppins">
                    Login
                  </Link>
                </li>
                <li onClick={handleNav} className="p-4">
                  <Link
                    href="/contact"
                    className="hover:opacity-70  text-poppins"
                  >
                    Sign Up
                  </Link>
                </li>{" "}
              </ul>
            )}
          </ul>
        </div>
      </div>
      {showProfile ? (
        <div className="w-[100vw] h-auto hidden lg:flex relative">
          <div className="w-[16.5vw] h-auto aspect-[317/164] bg-white rounded-[20px] border-[1px] border-black right-[5.2vw] absolute flex px-[2.5vw] flex-col items-start justify-center  gap-[0.5vw]">
            <Link href="/changepassword" onClick={() => setShowProfile(false)}>
              <text className="text-poppins font-medium xl:text-[15px] lg:text-[12px] hover:opacity-70">
                Change Password
              </text>
            </Link>
            <Link href="/login" onClick={() => setShowProfile(false)}>
              <text
                onClick={() => {
                  localStorage?.clear();
                  router.replace("/login");
                }}
                className="text-poppins font-medium xl:text-[15px] lg:text-[12px] text-[#EB5B5B] hover:opacity-70"
              >
                Sign Out
              </text>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
