"use client";

import Image from "next/image";
import Search from "./components/search";
import Maps from "./components/maps";
import Filter from "./components/filter";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";

import filter from "@/../public/images/filter.svg";
import arrowdownwhite from "@/../public/images/arrowdown.svg";
import arrowupwhite from "@/../public/images/arrowupwhite.svg";
import arrowdownblack from "@/../public/images/arrowdownblack.svg";
import arrowupblack from "@/../public/images/arrowupblack.svg";
import x from "@/../public/images/x.svg";
import rumah from "@/../public/images/rumah2.svg";

import houseData from "@/data/maps.json";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [bisnisDesc, setBisnisDesc] = useState("");
  const [pribadiDesc, setPribadiDesc] = useState("");
  const [flow, setFlow] = useState(0);
  const [showAssets, setShowAssets] = useState(false);
  const [currentMarker, setCurrentMarket] = useState({});
  const [assets, setAssets] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleFilter = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  // const handleAssets = {
  //   setAssets([...assets, currentMarker]);
  // };

  const handleMaps = (current) => {
    setCurrentMarket(current);
    if (assets.find((obj) => obj === current)) {
      setFlow(2);
    } else {
      setFlow(1);
    }
    // if (assets.length > 0) {
    //   for (const obj of assets) {
    //     if (obj === current) {
    //       setFlow(2);
    //     } else {
    //       setFlow(1);
    //     }
    //   }
    // } else {
    //   setFlow(1);
    // }
  };

  const handlePurchase = () => {
    setAssets([...assets, currentMarker]);
    setFlow(0);
  };

  const handleSell = () => {
    const updatedAssets = assets.filter((obj) => obj !== currentMarker);
    setFlow(0);
    setAssets(updatedAssets);
    console.log(assets);
  };

  return (
    <main>
      {flow === 0 ? (
        <div className="relative bg-[#FFFFFF] min-h-[100vh] pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[70px] overflow-hidden text-poppins pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px]">
          <div className="px-[6.6vw] lg:px-[12.6vw]">
            <div className="flex justify-between flex-row mb-[20px] sm:mb-[22px] md:mb-[25px] xl:mb-[30px] lg:mb-[20px]">
              <Search onSearch={handleSearch} />
              <button
                className="relative w-[6.66vw] lg:w-[3.646vw] text-gray-600 flex flex-row aspect-[70/60] bg-white rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center"
                onClick={handleFilter}
              >
                <div className="w-[2.7vw] lg:w-[1.56vw] h-auto aspect-square relative mx-[1vw] z-10 ">
                  <Image alt="Filter" src={filter} fill={true} />
                </div>
              </button>
            </div>

            <div className="w-full h-auto lg:aspect-[1436/796] flex flex-col-reverse lg:flex-row lg:rounded-[20px] overflow-hidden">
              <div
                className={`w-full lg:w-[20vw] h-full ${
                  showAssets ? "bg-[#464C87]" : "bg-[#30366C]"
                } flex flex-col rounded-[10px] lg:rounded-none overflow-hidden`}
              >
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Year
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] text-poppins">
                    2023
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Net Worth
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    $10.000
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Balance
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    $10.000
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Earnings
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    $10.000
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Assets
                  </text>
                  {showAssets ? (
                    <button
                      className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 "
                      onClick={() => setShowAssets(false)}
                    >
                      <Image alt="Arrow Up" src={arrowupwhite} fill={true} />
                    </button>
                  ) : (
                    <button
                      className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 "
                      onClick={() => setShowAssets(true)}
                    >
                      <Image
                        alt="Arrow Down"
                        src={arrowdownwhite}
                        fill={true}
                      />
                    </button>
                  )}
                </div>
                {showAssets ? (
                  <div className="overflow-auto w-full h-auto aspect-[312/150] lg:aspect-[384/301] no-scrollbar">
                    {assets.map((data, index) => (
                      <div key={index} className="w-full">
                        {assets.length > 0 ? (
                          <div className="w-full">
                            <div className="w-full h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                              <div className="flex flex-col">
                                <text className="text-[#FFFFFF] text-[10px] sm:text-[13px] md:text-[15px] xl:text-[13px] lg:text-[11px] font-medium text-poppins">
                                  {data.nama}
                                </text>
                                <text className="text-[#CFF1EF] text-[9px] sm:text-[12px] md:text-[14px] xl:text-[12px] lg:text-[10px] font-medium text-poppins">
                                  {data.deskripsi}
                                </text>
                              </div>
                              <text className="text-[#FFFFFF] font-medium text-poppins text-[13px] sm:text-[15px] md:text-[18px] xl:text-[18px] lg:text-[15px]">
                                {data.harga}
                              </text>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className=" bg-[#808080] w-[57vw] lg:w-[14.58vw] h-[1px]"></div>
                            </div>{" "}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex h-auto w-full lg:w-[54.8vw] lg:aspect-[1052/796] rounded-[5px] lg:rounded-none mb-[25px] sm:mb-[30px] md:mb-[35px] lg:mb-[0px] flex-col relative overflow-hidden">
                {showFilter ? (
                  <div className="absolute z-30 top-0 right-0">
                    <Filter />
                  </div>
                ) : null}
                <Maps onClick={handleMaps} />
                <button
                  className="w-[19.7vw] lg:w-[10.4vw] aspect-[71/17] h-auto lg:aspect-[200/47] absolute bg-white z-20 bottom-[48px] sm:bottom-[55px] md:bottom-[68px] xl:bottom-[60px] lg:bottom-[55px] ml-[2.2vw] lg:ml-[1.67vw] rounded-[5px] lg:rounded-[15px] flex items-center justify-center"
                  onClick={() => {
                    setFlow(3), setShowAssets(false);
                  }}
                >
                  <text className="text-[8px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px] text-black font-bold text-poppins">
                    Next A Year
                  </text>
                </button>
                <button
                  className="w-[19.7vw] lg:w-[10.4vw] aspect-[71/17] h-auto lg:aspect-[200/47] absolute bg-[#EB5B5B] z-20 bottom-[20px] ml-[2.2vw] lg:ml-[1.67vw] rounded-[5px] lg:rounded-[15px] flex items-center justify-center"
                  onClick={() => {
                    setFlow(3), setShowAssets(false);
                  }}
                >
                  <text className="text-[8px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px] text-white font-bold text-poppins">
                    End Simulation
                  </text>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : flow === 1 ? (
        <div className="relative bg-[#CED3DE] pt-[95px] xl:pt-[95px] lg:pt-[85px] h-[100vh] overflow-hidden text-poppins">
          <div className="px-[8.33vw]">
            <div className="w-full h-auto aspect-[1520/854] bg-white rounded-[20px] flex flex-col overflow-hidden">
              <div className="w-full h-auto aspect-[1520/74] bg-[#2E3362] flex items-center px-[2vw] justify-between">
                <text className="text-white text-[21px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  Property Details
                </text>
                <button
                  className="w-[1.25vw] h-auto aspect-square relative z-10 "
                  onClick={() => setFlow(0)}
                >
                  <Image alt="x" src={x} fill={true} />
                </button>
              </div>

              <div className="flex flex-row w-full h-full">
                <div className="w-[20vw] h-full bg-white flex flex-col relative items-center">
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Price
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.harga}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Condition
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      New
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Tipe
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Rumah
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Area
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      20x20
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <button
                    className="w-[7.7vw] h-auto aspect-[148/47] border-[3px] border-[#2E3362] rounded-[15px] absolute bottom-[40px] flex items-center justify-center"
                    onClick={handlePurchase}
                  >
                    <text className="text-poppins text-[14px] xl:text-[14px] lg:text-[12px] font-bold text-[#2E3362]">
                      Purchase
                    </text>
                  </button>
                </div>

                <div className="w-[1px] h-full bg-[#808080]"></div>

                <div className="w-[63.34vw] h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] flex flex-row justify-between">
                  <div className="flex flex-col">
                    <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                      {currentMarker.deskripsi}
                    </text>
                    <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                      Alamat
                    </text>
                    <div className="w-[26.875vw] flex flex-row">
                      <text className="text-[16px] xl:text-[16px] lg:text-[14px] font-medium text-poppins">
                        {currentMarker.bisnis}
                      </text>
                    </div>
                  </div>

                  <div className="w-[26vw] h-auto aspect-[500/500] relative z-10">
                    <Image
                      alt="Rumah"
                      src={rumah}
                      fill={true}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : flow === 2 ? (
        <div className="relative bg-[#CED3DE] pt-[95px] xl:pt-[95px] lg:pt-[85px] h-[100vh] overflow-hidden text-poppins">
          <div className="px-[8.33vw]">
            <div className="w-full h-auto aspect-[1520/854] bg-white rounded-[20px] flex flex-col overflow-hidden">
              <div className="w-full h-auto aspect-[1520/74] bg-[#2E3362] flex items-center px-[2vw] justify-between">
                <text className="text-white text-[21px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  Property Details
                </text>
                <button
                  className="w-[1.25vw] h-auto aspect-square relative z-10 "
                  onClick={() => setFlow(0)}
                >
                  <Image alt="x" src={x} fill={true} />
                </button>
              </div>

              <div className="flex flex-row w-full h-full">
                <div className="w-[20vw] h-full bg-white flex flex-col relative items-center">
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Price
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      $10.000
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px]text-poppins">
                      Condition
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      New
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Tipe
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Rumah
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Area
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      20x20
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <button
                    className="w-[7.7vw] h-auto aspect-[148/47] border-[3px] border-[#2E3362] rounded-[15px] absolute bottom-[40px] flex items-center justify-center"
                    onClick={handleSell}
                  >
                    <text className="text-poppins text-[14px] xl:text-[14px] lg:text-[12px] font-bold text-[#2E3362]">
                      Sell
                    </text>
                  </button>
                </div>

                <div className="w-[1px] h-full bg-[#808080]"></div>

                <div className="w-[63.34vw] h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] flex flex-row justify-between">
                  <div className="flex flex-col">
                    <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                      {currentMarker.deskripsi}
                    </text>
                    <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                      Alamat
                    </text>
                    <div className="w-[26.875vw] flex flex-row">
                      <text className="text-[16px] xl:text-[16px] lg:text-[14px] font-medium text-poppins">
                        {currentMarker.bisnis}
                      </text>
                    </div>
                  </div>

                  <div className="w-[26vw] h-auto aspect-[500/500] relative z-10">
                    <Image
                      alt="Rumah"
                      src={rumah}
                      fill={true}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#CED3DE] pt-[95px] xl:pt-[95px] lg:pt-[85px] h-[100vh] overflow-hidden text-poppins">
          <div className="px-[8.33vw]">
            <div className="w-full h-auto aspect-[1520/854] bg-white rounded-[20px] flex flex-col overflow-hidden">
              <div className="w-full h-auto aspect-[1520/74] bg-[#2E3362] flex items-center px-[2vw] justify-between">
                <text className="text-white text-[21px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  User Report
                </text>
                <Link
                  className="w-[1.25vw] h-auto aspect-square relative z-10 "
                  href="/"
                >
                  <Image alt="x" src={x} fill={true} />
                </Link>
              </div>

              <div className="flex flex-row w-full h-full">
                <div className="w-[20vw] h-full bg-white flex flex-col">
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Net Worth
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      $10.000
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Increase
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      10x
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Years
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      20
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Earnings
                    </text>
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      $2000
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div
                    className={`w-full ${
                      showAssets ? "bg-[#F8F8F8]" : "bg-white"
                    } h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]`}
                  >
                    <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Assets
                    </text>
                    {showAssets ? (
                      <button
                        className="w-[1.46vw] h-auto aspect-square relative z-10 "
                        onClick={() => setShowAssets(false)}
                      >
                        <Image alt="Arrow Up" src={arrowupblack} fill={true} />
                      </button>
                    ) : (
                      <button
                        className="w-[1.46vw] h-auto aspect-square relative z-10 "
                        onClick={() => setShowAssets(true)}
                      >
                        <Image
                          alt="Arrow Down"
                          src={arrowdownblack}
                          fill={true}
                        />
                      </button>
                    )}
                  </div>
                  {showAssets ? (
                    <div className="overflow-auto w-full h-auto aspect-[384/301] no-scrollbar">
                      {houseData.maps.map((data, index) => (
                        <div key={index} className="w-full">
                          <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                            <div className="flex flex-col">
                              <text className="text-[#1E2351] text-[13px] xl:text-[13px] lg:text-[11px] font-medium text-poppins">
                                {data.nama}
                              </text>
                              <text className="text-[#CFF1EF] text-[12px] xl:text-[12px] lg:text-[10px] font-medium text-poppins">
                                {data.deskripsi}
                              </text>
                            </div>
                            <text className="text-[#1E2351] font-medium text-[18px] xl:text-[18px] lg:text-[15px] text-poppins">
                              {data.harga}
                            </text>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className=" bg-[#808080] w-[14.58vw] h-[1px]"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="w-[1px] h-full bg-[#808080]"></div>

                <div className="w-[63.34vw] h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] flex flex-row justify-between">
                  <div className="flex flex-col">
                    <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                      Nama Property
                    </text>
                    <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                      Alamat
                    </text>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                      <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                        {" "}
                        Starting price
                      </text>
                      <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                        $10.000
                      </text>
                    </div>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                      <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                        {" "}
                        Current Price
                      </text>
                      <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                        $10.000
                      </text>
                    </div>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                      <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                        {" "}
                        Years on hold
                      </text>
                      <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                        $10.000
                      </text>
                    </div>
                    <div className="w-[26.875vw] flex flex-row">
                      <text className="text-[16px] xl:text-[16px] lg:text-[14px] font-medium text-poppins">
                        deskripsi
                      </text>
                    </div>
                  </div>

                  <div className="w-[26vw] h-auto aspect-[500/500] relative z-10">
                    <Image
                      alt="Rumah"
                      src={rumah}
                      fill={true}
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
