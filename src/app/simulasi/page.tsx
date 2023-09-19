"use client";

import Image from "next/image";
import Search from "./components/search";
import Maps from "./components/maps";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { format } from "date-fns";

import filter from "@/../public/images/filter.svg";
import arrow from "@/../public/images/arrowdown.svg";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [bisnisDesc, setBisnisDesc] = useState("");
  const [pribadiDesc, setPribadiDesc] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleMaps = (bisnis, pribadi) => {
    setBisnisDesc(bisnis);
    setPribadiDesc(pribadi);
  };

  return (
    <main className="bg-[#EFF2FA] relative h-[200vh] overflow-hidden">
      <div className="px-[12.6vw] mt-[60px]">
        <div className="flex justify-between flex-row mb-[30px]">
          <Search onSearch={handleSearch} />
          <button className="relative w-[3.646vw] text-gray-600 flex flex-row aspect-[70/60] bg-white rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center">
            <div className="w-[1.56vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Search" src={filter} fill={true} />
            </div>
          </button>
        </div>

        <div className="w-full h-auto aspect-[1436/796] flex flex-row rounded-[20px] overflow-hidden">
          <div className="w-[20vw] h-full bg-[#30366C] flex flex-col">
            <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
              <h1 className="text-[#FFFFFF] font-medium">Year</h1>
              <h1 className="text-[#FFFFFF] font-medium">2023</h1>
            </div>
            <div className="w-full h-[1px] bg-[#808080]"></div>
            <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
              <h1 className="text-[#FFFFFF] font-medium">Net Worth</h1>
              <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
            </div>
            <div className="w-full h-[1px] bg-[#808080]"></div>
            <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
              <h1 className="text-[#FFFFFF] font-medium">Balance</h1>
              <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
            </div>
            <div className="w-full h-[1px] bg-[#808080]"></div>
            <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
              <h1 className="text-[#FFFFFF] font-medium">Earnings</h1>
              <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
            </div>
            <div className="w-full h-[1px] bg-[#808080]"></div>
            <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
              <h1 className="text-[#FFFFFF] font-medium">Assets</h1>
              <button className="w-[1.46vw] h-auto aspect-square relative z-10 ">
                <Image alt="Arrow" src={arrow} fill={true} />
              </button>
            </div>
          </div>

          <div className="flex h-auto w-[54.28vw] aspect-[1052/796] flex-col">
            <Maps onClick={handleMaps} />
          </div>
        </div>
      </div>
    </main>
  );
}
