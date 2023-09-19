"use client";
import Image from "next/image";
import "./page.css";
import "./globals.css";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <main className="mt-[10px]">
      <div className="invest-easier h-[801.5px] overflow-hidden bg-no-repeat">
        <div className="Tulisan Utama ml-[120px] mt-[156px] font-morserat">
          <h1 className=""> Invest Easier</h1>
          <h5 className="w-[560px] mt-[68px] font-poppins">
            Use our cutting-edge technology to learn and unlock endless
            possibilities through real estate. Find out real estate investments
            tailored solely for your needs."
          </h5>
        </div>
        <div className="Tombol ml-[120px] mt-[100px]">
          <button className="button mr-[30px] bg-[#2E3362] py-[10px] px-[30px] text-white font-poppins font-semibold text-lg rounded-[15px]">
            Explore Properties
          </button>
          <button className="button border-white border-[3px] text-white font-poppins font-semibold text-lg py-[10px] px-[30px] rounded-[15px]">
            About Us
          </button>
        </div>
      </div>

      <div className="Trending px-[120px] mt-[80px]">
        <div className="Title">
          <h2>Trending</h2>
          <div className="mt-[24px] flex justify-between">
            <h4>Explore trending properties</h4>
            <h4 className="flex items-center">
              More
              <span className="ml-[20px] text-lg mt-[3px]">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
