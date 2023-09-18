"use client";

import Image from "next/image";
import Search from "./components/search";
import Detail from "./components/detail";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { format } from "date-fns";

import filter from "@/../public/images/filter.svg";
import map from "@/../public/images/map.svg";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [buyDate, setBuyDate] = useState(null);
  const [sellDate, setSellDate] = useState(null);

  const formattedBuyDate = buyDate ? format(buyDate, "dd/MM/yyyy") : "";
  const formattedSellDate = sellDate ? format(sellDate, "dd/MM/yyyy") : "";

  const handleSearch = (value: string) => {
    setSearchValue(value);
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

        <div className="w-full h-auto aspect-[1436/866] relative rounded-[15px] mb-[100px]">
          <Image alt="Search" src={map} fill={true} />
        </div>

        <Detail
          selectedBuyDate={buyDate}
          onChangeBuyDate={(date) => setBuyDate(date)}
          selectedSellDate={sellDate}
          onChangeSellDate={(date) => setSellDate(date)}
        />
      </div>
    </main>
  );
}
