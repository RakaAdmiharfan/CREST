"use client";

import Image from "next/image";
import Search from "./components/search";
import Maps from "./components/maps";
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
  const [isEnd, setIsEnd] = useState(false);
  const [showAssets, setShowAssets] = useState(false);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleMaps = (bisnis, pribadi) => {
    setBisnisDesc(bisnis);
    setPribadiDesc(pribadi);
  };

  return (
    <main>
      {!isEnd ? (
        <div className="relative bg-[#FFFFFF] h-[200vh] overflow-hidden text-poppins">
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
              <div
                className={`w-[20vw] h-full ${
                  showAssets ? "bg-[#464C87]" : "bg-[#30366C]"
                } flex flex-col`}
              >
                <div className="w-full bg-[#30366C] h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                  <h1 className="text-[#FFFFFF] font-medium">Year</h1>
                  <h1 className="text-[#FFFFFF] font-medium">2023</h1>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                  <h1 className="text-[#FFFFFF] font-medium">Net Worth</h1>
                  <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                  <h1 className="text-[#FFFFFF] font-medium">Balance</h1>
                  <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                  <h1 className="text-[#FFFFFF] font-medium">Earnings</h1>
                  <h1 className="text-[#FFFFFF] font-medium">$10.000</h1>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                  <h1 className="text-[#FFFFFF] font-medium">Assets</h1>
                  {showAssets ? (
                    <button
                      className="w-[1.46vw] h-auto aspect-square relative z-10 "
                      onClick={() => setShowAssets(false)}
                    >
                      <Image alt="Arrow Up" src={arrowupwhite} fill={true} />
                    </button>
                  ) : (
                    <button
                      className="w-[1.46vw] h-auto aspect-square relative z-10 "
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
                  <div className="overflow-auto w-full h-auto aspect-[384/301] no-scrollbar">
                    {houseData.maps.map((data, index) => (
                      <div key={index} className="w-full">
                        <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                          <div className="flex flex-col">
                            <h1 className="text-[#FFFFFF] text-[13px] font-medium">
                              {data.nama}
                            </h1>
                            <h1 className="text-[#CFF1EF] text-[12px] font-medium">
                              {data.deskripsi}
                            </h1>
                          </div>
                          <h1 className="text-[#FFFFFF] font-medium">
                            {data.harga}
                          </h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className=" bg-[#808080] w-[14.58vw] h-[1px]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex h-auto w-[54.28vw] aspect-[1052/796] flex-col relative">
                <Maps onClick={handleMaps} />
                <button
                  className="w-[10.4vw] h-auto aspect-[200/47] absolute bg-[#EB5B5B] z-20 bottom-[20px] ml-[1.67vw] rounded-[15px] flex items-center justify-center"
                  onClick={() => {
                    setIsEnd(true), setShowAssets(false);
                  }}
                >
                  <h2 className="text-[12px] text-white font-bold">
                    End Simulation
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#CED3DE] h-[200vh] overflow-hidden text-poppins">
          <div className="px-[8.33vw] mt-[60px]">
            <div className="w-full h-auto aspect-[1520/854] bg-white rounded-[20px] flex flex-col overflow-hidden">
              <div className="w-full h-auto aspect-[1520/74] bg-[#2E3362] flex items-center px-[2vw] justify-between">
                <h1 className="text-white text-[21px] font-medium">
                  User Report
                </h1>
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
                    <h1 className="text-[#1E2351] font-medium">Net Worth</h1>
                    <h1 className="text-[#1E2351] font-medium">$10.000</h1>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <h1 className="text-[#1E2351] font-medium">Increase</h1>
                    <h1 className="text-[#1E2351] font-medium">10x</h1>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <h1 className="text-[#1E2351] font-medium">Years</h1>
                    <h1 className="text-[#1E2351] font-medium">20</h1>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                    <h1 className="text-[#1E2351] font-medium">Earnings</h1>
                    <h1 className="text-[#1E2351] font-medium">$2000</h1>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div
                    className={`w-full ${
                      showAssets ? "bg-[#F8F8F8]" : "bg-white"
                    } h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]`}
                  >
                    <h1 className="text-[#1E2351] font-medium">Assets</h1>
                    {/* <button className="w-[1.46vw] h-auto aspect-square relative z-10">
                      <Image alt="Arrow" src={arrowdownblack} fill={true} />
                    </button> */}
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
                              <h1 className="text-[#1E2351] text-[13px] font-medium">
                                {data.nama}
                              </h1>
                              <h1 className="text-[#CFF1EF] text-[12px] font-medium">
                                {data.deskripsi}
                              </h1>
                            </div>
                            <h1 className="text-[#1E2351] font-medium">
                              {data.harga}
                            </h1>
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

                <div className="w-[63.34vw] h-full bg-[#EFF2FA] pt-[35px] pl-[3.125vw] pr-[4.16vw] flex flex-row justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-[27px] font-medium">Nama Property</h1>
                    <h2 className="text-[#5D716F] font-medium mb-[18px]">
                      Alamat
                    </h2>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                      <h2 className="text-[20px] font-medium">
                        {" "}
                        Starting price
                      </h2>
                      <h2 className="">$10.000</h2>
                    </div>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                      <h2 className="text-[20px] font-medium">
                        {" "}
                        Current Price
                      </h2>
                      <h2 className="">$10.000</h2>
                    </div>
                    <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                      <h2 className="text-[20px] font-medium">
                        {" "}
                        Years on hold
                      </h2>
                      <h2 className="">$10.000</h2>
                    </div>
                    <div className="w-[26.875vw] flex flex-row">
                      <h2 className="text-[18px] font-medium">deskripsi</h2>
                    </div>
                  </div>

                  <div className="w-[26vw] h-auto aspect-[500/500] relative z-10">
                    <Image alt="Rumah" src={rumah} fill={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="px-[12.6vw] mt-[60px]">
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

          <div className="flex h-auto w-[54.28vw] aspect-[1052/796] flex-col relative">
            <Maps onClick={handleMaps} />
            <button className="w-[10.4vw] h-auto aspect-[200/47] absolute bg-[#EB5B5B] z-20 bottom-[20px] ml-[1.67vw] rounded-[15px] flex items-center justify-center">
              <h2 className="text-[12px] text-white font-bold">
                End Simulation
              </h2>
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="px-[8.33vw] mt-[60px]">
        <div className="w-full h-auto aspect-[1520/854] bg-white rounded-[20px] flex flex-col overflow-hidden">
          <div className="w-full h-auto aspect-[1520/74] bg-[#2E3362] flex items-center px-[2vw] justify-between">
            <h1 className="text-white text-[21px] font-medium">User Report</h1>
            <button className="w-[1.25vw] h-auto aspect-square relative z-10 ">
              <Image alt="x" src={x} fill={true} />
            </button>
          </div>

          <div className="flex flex-row w-full h-full">
            <div className="w-[20vw] h-full bg-white flex flex-col">
              <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                <h1 className="text-[#1E2351] font-medium">Net Worth</h1>
                <h1 className="text-[#1E2351] font-medium">$10.000</h1>
              </div>
              <div className="w-full h-[1px] bg-[#808080]"></div>
              <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                <h1 className="text-[#1E2351] font-medium">Increase</h1>
                <h1 className="text-[#1E2351] font-medium">10x</h1>
              </div>
              <div className="w-full h-[1px] bg-[#808080]"></div>
              <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                <h1 className="text-[#1E2351] font-medium">Years</h1>
                <h1 className="text-[#1E2351] font-medium">20</h1>
              </div>
              <div className="w-full h-[1px] bg-[#808080]"></div>
              <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                <h1 className="text-[#1E2351] font-medium">Earnings</h1>
                <h1 className="text-[#1E2351] font-medium">$2000</h1>
              </div>
              <div className="w-full h-[1px] bg-[#808080]"></div>
              <div className="w-full h-auto aspect-[384/100] flex flex-row items-center justify-between px-[1.46vw]">
                <h1 className="text-[#1E2351] font-medium">Assets</h1>
                <button className="w-[1.46vw] h-auto aspect-square relative z-10">
                  <Image alt="Arrow" src={arrowblack} fill={true} />
                </button>
              </div>
            </div>

            <div className="w-[1px] h-full bg-[#808080]"></div>

            <div className="w-[63.34vw] h-full bg-[#EFF2FA] pt-[35px] pl-[3.125vw] pr-[4.16vw] flex flex-row justify-between">
              <div className="flex flex-col">
                <h1 className="text-[27px] font-medium">Nama Property</h1>
                <h2 className="text-[#5D716F] font-medium mb-[18px]">Alamat</h2>
                <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                  <h2 className="text-[20px] font-medium"> Starting price</h2>
                  <h2 className="">$10.000</h2>
                </div>
                <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                  <h2 className="text-[20px] font-medium"> Current Price</h2>
                  <h2 className="">$10.000</h2>
                </div>
                <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] items-center justify-between">
                  <h2 className="text-[20px] font-medium"> Years on hold</h2>
                  <h2 className="">$10.000</h2>
                </div>
                <div className="w-[26.875vw] flex flex-row">
                  <h2 className="text-[18px] font-medium">deskripsi</h2>
                </div>
              </div>

              <div className="w-[26vw] h-auto aspect-[500/500] relative z-10">
                <Image alt="Rumah" src={rumah} fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
