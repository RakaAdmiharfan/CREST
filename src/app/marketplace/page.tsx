"use client";

import Image from "next/image";
import Search from "./components/search";
import Detail from "./components/detail";
import Maps from "./components/maps";
import Filter from "./components/filter";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { format } from "date-fns";

import filter from "@/../public/images/filter.svg";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [buyDate, setBuyDate] = useState(null);
  const [sellDate, setSellDate] = useState(null);
  const [bisnisDesc, setBisnisDesc] = useState("");
  const [pribadiDesc, setPribadiDesc] = useState("");
  const [harga, setHarga] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const formattedBuyDate = buyDate ? format(buyDate, "dd/MM/yyyy") : "";
  const formattedSellDate = sellDate ? format(sellDate, "dd/MM/yyyy") : "";

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleMaps = (bisnis, pribadi, harga) => {
    setBisnisDesc(bisnis);
    setPribadiDesc(pribadi);
    setHarga(harga);
  };

  const handleFilter = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden pt-[90px] pb-[60px]">
      <div className="px-[12.6vw] mt-[60px]">
        <div className="flex justify-between flex-row mb-[30px]">
          <Search onSearch={handleSearch} />
          <button
            className="relative w-[3.646vw] text-gray-600 flex flex-row aspect-[70/60] bg-white rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center"
            onClick={handleFilter}
          >
            <div className="w-[1.56vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Filter" src={filter} fill={true} />
            </div>
          </button>
        </div>

        <div className="w-full h-auto aspect-[1436/866] relative">
          {showFilter ? (
            <div className="absolute z-30 top-0 right-0">
              <Filter />
            </div>
          ) : null}
          <Maps onClick={handleMaps} />
        </div>

        <Detail
          selectedBuyDate={buyDate}
          onChangeBuyDate={(date) => setBuyDate(date)}
          selectedSellDate={sellDate}
          onChangeSellDate={(date) => setSellDate(date)}
          deskripsiBisnis={bisnisDesc}
          deskripsiPribadi={pribadiDesc}
          harga={harga}
        />
      </div>
    </main>
  );
}
