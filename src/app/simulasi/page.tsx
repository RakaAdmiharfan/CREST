"use client";

import Image from "next/image";
import Search from "./components/search";
import Maps from "./components/maps";
import Filter from "./components/filter";
import { useState, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import houseData from "@/data/maps.json";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [flow, setFlow] = useState(0);
  const [showAssets, setShowAssets] = useState(false);
  const [showAssetsHistory, setShowAssetsHistory] = useState(false);
  const [currentMarker, setCurrentMarket] = useState({});
  const [assets, setAssets] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [year, setYear] = useState(2023);
  const [assetsHistory, setAssetsHistory] = useState([]);
  const [isCantBuy, setIsCantBuy] = useState(false);
  const [currentAssetsHistory, setCurrentAssetsHistory] = useState({});
  const [tahunSimulasi, setTahunSimulasi] = useState(0);
  const [netWorth, setNetWorth] = useState(10);
  const [balance, setBalance] = useState(10);
  const [earnings, setEarnings] = useState(0);
  const [currentMap, setCurrentMap] = useState([]);
  const [dataProperty, setDataProperty] = useState([]);
  const [filterFlow, setFilterFlow] = useState(0);
  const [filteredCurrentMap, setFilteredCurrentMap] = useState([]);
  const [filteredSearchCurrentMap, setFilteredSearchCurrentMap] = useState([]);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [dataSimulasi, setDataSimulasi] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/properti");
      setDataProperty(response.data.propertiGetAllProperti);
      setCurrentMap(response.data.propertiGetAllProperti);
      setDataSimulasi(response.data.propertiGetAllProperti);
      console.log("oks");
      console.log(dataProperty);
      console.log(response.data.propertiGetAllProperti);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleSearch = (value: string) => {
    if (filterFlow == 0) {
      setCurrentMap(dataSimulasi);
      setSearchValue(value);
      const filtered = dataSimulasi.filter((item) =>
        item.nama_properti.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentMap(filtered);
      setFilteredSearchCurrentMap(filtered);
      setIsSearchOn(true);
    } else {
      setSearchValue(value);
      const filtered = filteredCurrentMap.filter((item) =>
        item.nama_properti.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentMap(filtered);
    }
  };

  const handleFilterMap = (num) => {
    let mapNow;
    if (isSearchOn) {
      mapNow = filteredSearchCurrentMap;
    } else {
      mapNow = dataSimulasi;
    }
    if (num == 0) {
      setCurrentMap(mapNow);
    } else if (num == 1) {
      const filtered = mapNow.filter((item) => item.harga_dasar < 500000000);
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 2) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 500000000 && item.harga_dasar <= 1000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 3) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 1500000000 && item.harga_dasar <= 2000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 4) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 2000000000 && item.harga_dasar <= 2500000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 5) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 2500000000 && item.harga_dasar <= 3000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 6) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 3000000000 && item.harga_dasar <= 3500000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 7) {
      const filtered = mapNow.filter(
        (item) =>
          item.harga_dasar >= 3500000000 && item.harga_dasar <= 4000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 8) {
      const filtered = mapNow.filter((item) => item.harga_dasar > 4000000000);
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    }
    setFilterFlow(num);
  };

  const handleFilter = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  const handleMaps = (current) => {
    console.log(assets);
    setCurrentMarket(current);
    console.log(current);
    if (assets.find((obj) => obj.id_properti === current.id_properti)) {
      setFlow(2);
      console.log("halo");
    } else {
      setFlow(1);
    }
  };

  const handleShowAssets = (current) => {
    setCurrentMarket(current);
    setFlow(2);
  };

  useEffect(() => {
    let uang = balance - currentMarker.harga_dasar / 1000000000;
    console.log("oy", netWorth + currentMarker.harga_dasar / 1000000000 + uang);
  }, [netWorth, balance, currentMarker.harga_dasar]);

  useEffect(() => {
    console.log("okss", netWorth);
  }, [netWorth]);

  const handlePurchase = () => {
    let harga;
    if (year === 2023) {
      harga = currentMarker.harga_dasar;
    } else {
      harga = currentMarker.harga_sekarang;
    }

    if (harga / 1000000000 > balance) {
      setIsCantBuy(true);
    } else {
      if (year === 2023) {
        let uang = balance - currentMarker.harga_dasar / 1000000000;
        currentMarker.tahun_beli = year;
        currentMarker.harga_sekarang = currentMarker.harga_dasar;
        setAssets([...assets, currentMarker]);
        setBalance(uang);
        setEarnings(earnings + currentMarker.biaya_sewa / 1000000000);
        setFlow(0);
        setCurrentMap(dataSimulasi);
      } else {
        let uang = balance - currentMarker.harga_sekarang / 1000000000;
        currentMarker.tahun_beli = year;
        setAssets([...assets, currentMarker]);
        setBalance(uang);
        setEarnings(earnings + currentMarker.biaya_sewa / 1000000000);
        setFlow(0);
        setCurrentMap(dataSimulasi);
      }
    }
    setFilterFlow(0);
  };

  const handleSell = () => {
    const updatedAssets = assets.filter(
      (obj) => obj.id_properti !== currentMarker.id_properti
    );
    const foundAsset = assets.find(
      (obj) => obj.id_properti === currentMarker.id_properti
    );
    if (foundAsset) {
      foundAsset.years_on_hold = year - foundAsset.tahun_beli;
      setAssetsHistory([...assetsHistory, foundAsset]);
    }
    setFlow(0);
    setAssets(updatedAssets);
    setCurrentMap(dataSimulasi);
    if (year === 2023) {
      let uang = balance + currentMarker.harga_dasar / 1000000000;
      setEarnings(earnings - currentMarker.biaya_sewa / 1000000000);
      setBalance(uang);
    } else {
      let uang = balance + currentMarker.harga_sekarang / 1000000000;
      setEarnings(earnings - currentMarker.biaya_sewa / 1000000000);
      setBalance(uang);
    }
    setFilterFlow(0);
  };

  const handleEnd = () => {
    if (assets.length > 0) {
      const updatedAssetsHistory = [...assetsHistory];
      for (let i = 0; i < assets.length; i++) {
        const foundAsset = assets[i];
        foundAsset.years_on_hold = year - foundAsset.tahun_beli;
        updatedAssetsHistory.push(foundAsset);
        if (assetsHistory.length == 0) {
          setCurrentAssetsHistory(foundAsset);
        }
      }
      setAssetsHistory(updatedAssetsHistory);
    }
    if (assetsHistory.length > 0) {
      setCurrentAssetsHistory(assetsHistory[0]);
    }
    setShowAssets(false), setTahunSimulasi(year - 2023), setFlow(3);
  };

  const handleAssetSummary = (data) => {
    if (window.innerWidth >= 1200) {
      setCurrentAssetsHistory(data);
    } else {
      setCurrentAssetsHistory(data), setFlow(4);
    }
  };

  const handleNextYear = () => {
    let balanceNow = balance + earnings;
    setYear(year + 1);
    setBalance(balanceNow);
    if (year === 2023) {
      for (let i = 0; i < dataSimulasi.length; i++) {
        dataSimulasi[i].harga_sekarang = dataSimulasi[i].harga_dasar;
      }
    } else {
      for (let i = 0; i < dataSimulasi.length; i++) {
        dataSimulasi[i].harga_sekarang =
          dataSimulasi[i].harga_sekarang * dataSimulasi[i].pengali;
      }
    }

    let variabel = 0;
    if (year === 2023) {
      for (let i = 0; i < assets.length; i++) {
        assets[i].harga_sekarang = assets[i].harga_dasar;
        variabel = variabel + assets[i].harga_dasar / 1000000000;
      }
    } else {
      for (let i = 0; i < assets.length; i++) {
        assets[i].harga_sekarang = assets[i].harga_sekarang * assets[i].pengali;
        variabel = variabel + assets[i].harga_sekarang / 1000000000;
      }
    }
    setNetWorth(variabel + balanceNow);
  };

  return (
    <main>
      {flow === 0 ? (
        <div className="relative bg-white min-h-[100vh] pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[70px] overflow-hidden text-poppins pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px]">
          <div className="px-[6.6vw] lg:px-[12.6vw]">
            <div
              className="flex justify-between flex-row mb-[20px] sm:mb-[22px] md:mb-[25px] xl:mb-[30px] lg:mb-[20px]"
              data-aos="fade-down"
            >
              <Search onSearch={handleSearch} />
              <button
                className={`relative w-[6.66vw] lg:w-[3.646vw] text-gray-600 flex flex-row aspect-[70/60] ${
                  showFilter ? "bg-gray-200" : "bg-white"
                } rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center`}
                onClick={handleFilter}
              >
                <div className="w-[2.7vw] lg:w-[1.56vw] h-auto aspect-square relative mx-[1vw] z-10 ">
                  <Image alt="Filter" src={filter} fill={true} />
                </div>
              </button>
            </div>

            <div
              className="w-full h-auto lg:aspect-[1436/796] flex flex-col-reverse lg:flex-row lg:rounded-[20px] overflow-hidden"
              data-aos="fade-up"
            >
              <div
                className={`w-full lg:w-[20vw] h-full ${
                  showAssets ? "bg-[#464C87]" : "bg-[#30366C]"
                } flex flex-col rounded-[10px] lg:rounded-none overflow-hidden`}
              >
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Year
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    {year}
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Net Worth
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    {netWorth} M
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Balance
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    {balance} M
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Earnings
                  </text>
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    {earnings} M
                  </text>
                </div>
                <div className="w-full h-[1px] bg-[#808080]"></div>
                <div className="w-full bg-[#30366C] h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                  <text className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] md:text-[23px] xl:text-[18px] lg:text-[15px] text-poppins">
                    Assets
                  </text>
                  {showAssets ? (
                    <button
                      className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 hover:opacity-50"
                      onClick={() => setShowAssets(false)}
                    >
                      <Image alt="Arrow Up" src={arrowupwhite} fill={true} />
                    </button>
                  ) : (
                    <button
                      className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 hover:opacity-50"
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
                          <button
                            className="w-full"
                            onClick={() => handleShowAssets(data)}
                          >
                            <div className="w-full h-auto aspect-[312/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[3.88vw] lg:px-[1.46vw]">
                              <div className="flex flex-col items-start">
                                <text className="text-[#FFFFFF] text-[10px] sm:text-[13px] md:text-[15px] xl:text-[13px] lg:text-[11px] font-medium text-poppins">
                                  {data.nama_properti}
                                </text>
                                <text className="text-[#CFF1EF] text-[9px] sm:text-[12px] md:text-[14px] xl:text-[12px] lg:text-[10px] font-medium text-poppins">
                                  {data.tipe}
                                </text>
                              </div>
                              <text className="text-[#FFFFFF] font-medium text-poppins text-[13px] sm:text-[15px] md:text-[18px] xl:text-[18px] lg:text-[15px]">
                                {year === 2023
                                  ? data.harga_dasar / 1000000000 + "M"
                                  : data.harga_sekarang / 1000000000 + "M"}
                              </text>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className=" bg-[#808080] w-[57vw] lg:w-[14.58vw] h-[1px]"></div>
                            </div>{" "}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex h-auto w-full lg:w-[54.8vw] lg:aspect-[1052/796] rounded-[5px] lg:rounded-none mb-[25px] sm:mb-[30px] md:mb-[35px] lg:mb-[0px] flex-col relative overflow-hidden">
                {showFilter ? (
                  <div className="absolute z-30 top-0 right-0">
                    <Filter filterMap={handleFilterMap} numFlow={filterFlow} />
                  </div>
                ) : null}
                <Maps onClick={handleMaps} currentMap={currentMap} />
                <button
                  className="w-[19.7vw] lg:w-[10.4vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] aspect-[71/17] h-auto lg:aspect-[200/47] absolute bg-white z-20 bottom-[48px] sm:bottom-[55px] md:bottom-[68px] xl:bottom-[60px] lg:bottom-[55px] ml-[2.2vw] lg:ml-[1.67vw] rounded-[5px] lg:rounded-[15px] flex items-center justify-center"
                  onClick={handleNextYear}
                >
                  <text className="text-[8px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px] text-black font-bold text-poppins">
                    Next A Year
                  </text>
                </button>
                <button
                  className="w-[19.7vw] lg:w-[10.4vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] aspect-[71/17] h-auto lg:aspect-[200/47] absolute bg-[#EB5B5B] z-20 bottom-[20px] ml-[2.2vw] lg:ml-[1.67vw] rounded-[5px] lg:rounded-[15px] flex items-center justify-center"
                  onClick={handleEnd}
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
        <div className="relative bg-[#CED3DE] pt-[75px] sm:pt-[110px] md:pt-[140px] xl:pt-[95px] lg:pt-[85px] min-h-[100vh] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px] overflow-hidden text-poppins">
          <div className="px-[5vw] lg:px-[8.33vw]">
            <div
              className="w-full h-auto aspect-[324/670] lg:aspect-[1520/854] bg-white rounded-[5px] lg:rounded-[20px] flex flex-col overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full h-auto aspect-[324/48] lg:aspect-[1520/74] bg-[#2E3362] flex items-center px-[4.4vw] lg:px-[2vw] justify-between">
                <text className="text-white text-[17px] sm:text-[23px] md:text-[29px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  Property Details
                </text>
                <button
                  className="w-[4.4vw] lg:w-[1.25vw] h-auto aspect-square relative z-10 hover:opacity-50"
                  onClick={() => (
                    setFlow(0),
                    setIsCantBuy(false),
                    setCurrentMap(dataSimulasi),
                    setFilterFlow(0)
                  )}
                >
                  <Image alt="x" src={x} fill={true} />
                </button>
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/248] relative z-10">
                <Image alt="Rumah" src={rumah} fill={true} objectFit="cover" />
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/55] flex-col flex pl-[5.5vw] justify-center">
                <text className="text-[12px] sm:text-[15px] md:text-[19px] font-semibold text-poppins">
                  {currentMarker.nama_properti}
                </text>
                <text className="text-[#5D716F] text-[11px] sm:text-[14px] md:text-[18px] font-semibold text-poppins">
                  {currentMarker.tipe}
                </text>
              </div>
              <div className="lg:hidden w-full h-[1px] bg-[#808080]"></div>

              <div className="flex flex-row w-full h-full">
                <div className="w-full lg:w-[20vw] h-full bg-white flex flex-col relative items-center">
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Price
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {year === 2023
                        ? currentMarker.harga_dasar / 1000000000 + "M"
                        : currentMarker.harga_sekarang / 1000000000 + "M"}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Condition
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.kondisi}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Tipe
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.tipe}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Area
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.area}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="lg:hidden w-[79.4vw] h-auto flex mt-[10px] sm:mt-[15px] md:mt-[20px]">
                    <text className="text-[#1E2351] font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.deskripsi_bisnis}.{" "}
                      {currentMarker.deskripsi_pribadi}
                    </text>
                  </div>
                  <button
                    className="w-[20vw] lg:w-[7.7vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] h-auto aspect-[73/23] lg:aspect-[148/47] border-[3px] border-[#2E3362] rounded-[8px] lg:rounded-[15px] absolute bottom-[20px] sm:bottom-[25px] md:bottom-[30px] lg:bottom-[40px] flex items-center justify-center"
                    onClick={handlePurchase}
                  >
                    <text className="text-poppins text-[12px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] font-bold text-[#2E3362]">
                      Purchase
                    </text>
                  </button>
                  {isCantBuy ? (
                    <text
                      className="text-[#EB5B5B] text-poppins text-[12px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] absolute bottom-[50px] sm:bottom-[70px] md:bottom-[90px] lg:bottom-[80px]"
                      data-aos="fade-down"
                    >
                      Balance tidak cukup
                    </text>
                  ) : null}
                </div>

                <div className="hidden lg:flex w-[1px] h-full bg-[#808080]"></div>

                <div className="hidden w-[63.34vw] h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] lg:flex flex-row justify-between">
                  <div className="flex flex-col">
                    <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                      {currentMarker.nama_properti}
                    </text>
                    <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                      {currentMarker.alamat}
                    </text>
                    <div className="w-[26.875vw] flex flex-row">
                      <text className="text-[16px] xl:text-[16px] lg:text-[14px] font-medium text-poppins">
                        {currentMarker.deskripsi_bisnis}.{" "}
                        {currentMarker.deskripsi_pribadi}
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
        <div className="relative bg-[#CED3DE] pt-[75px] sm:pt-[110px] md:pt-[140px] xl:pt-[95px] lg:pt-[85px] min-h-[100vh] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px] overflow-hidden text-poppins">
          <div className="px-[5vw] lg:px-[8.33vw]">
            <div
              className="w-full h-auto aspect-[324/670] lg:aspect-[1520/854] bg-white rounded-[5px] lg:rounded-[20px] flex flex-col overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full h-auto aspect-[324/48] lg:aspect-[1520/74] bg-[#2E3362] flex items-center px-[4.4vw] lg:px-[2vw] justify-between">
                <text className="text-white text-[17px] sm:text-[23px] md:text-[29px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  Property Details
                </text>
                <button
                  className="w-[4.4vw] lg:w-[1.25vw] h-auto aspect-square relative z-10 hover:opacity-50"
                  onClick={() => (
                    setFlow(0), setCurrentMap(dataSimulasi), setFilterFlow(0)
                  )}
                >
                  <Image alt="x" src={x} fill={true} />
                </button>
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/248] relative z-10">
                <Image alt="Rumah" src={rumah} fill={true} objectFit="cover" />
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/55] flex-col flex pl-[5.5vw] justify-center">
                <text className="text-[12px] sm:text-[15px] md:text-[19px] font-semibold text-poppins">
                  {currentMarker.nama_properti}
                </text>
                <text className="text-[#5D716F] text-[11px] sm:text-[14px] md:text-[18px] font-semibold text-poppins">
                  {currentMarker.alamat}
                </text>
              </div>
              <div className="lg:hidden w-full h-[1px] bg-[#808080]"></div>

              <div className="flex flex-row w-full h-full">
                <div className="w-full lg:w-[20vw] h-full bg-white flex flex-col relative items-center">
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Price
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {year === 2023
                        ? currentMarker.harga_dasar / 1000000000 + "M"
                        : currentMarker.harga_sekarang / 1000000000 + "M"}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Condition
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.kondisi}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Tipe
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.tipe}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Area
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.area}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="lg:hidden w-[79.4vw] h-auto flex mt-[10px] sm:mt-[15px] md:mt-[20px]">
                    <text className="text-[#1E2351] font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentMarker.deskripsi_bisnis}.{" "}
                      {currentMarker.deskripsi_pribadi}
                    </text>
                  </div>
                  <button
                    className="w-[20vw] lg:w-[7.7vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] h-auto aspect-[73/23] lg:aspect-[148/47] border-[3px] border-[#2E3362] rounded-[8px] lg:rounded-[15px] absolute bottom-[20px] sm:bottom-[25px] md:bottom-[30px] lg:bottom-[40px] flex items-center justify-center"
                    onClick={handleSell}
                  >
                    <text className="text-poppins text-[12px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] font-bold text-[#2E3362]">
                      Sell
                    </text>
                  </button>
                </div>

                <div className="hidden lg:flex w-[1px] h-full bg-[#808080]"></div>

                <div className="hidden w-[63.34vw] h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] lg:flex flex-row justify-between">
                  <div className="flex flex-col">
                    <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                      {currentMarker.nama_properti}
                    </text>
                    <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                      {currentMarker.alamat}
                    </text>
                    <div className="w-[26.875vw] flex flex-row">
                      <text className="text-[16px] xl:text-[16px] lg:text-[14px] font-medium text-poppins">
                        {currentMarker.deskripsi_bisnis}.{" "}
                        {currentMarker.deskripsi_pribadi}
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
      ) : flow === 3 ? (
        <div className="relative bg-[#CED3DE] pt-[75px] sm:pt-[110px] md:pt-[140px] xl:pt-[95px] lg:pt-[85px] min-h-[100vh] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px] overflow-hidden text-poppins">
          <div className="px-[5vw] lg:px-[8.33vw]">
            <div
              className="w-full h-auto aspect-[324/670] lg:aspect-[1520/854] bg-white rounded-[5px] lg:rounded-[20px] flex flex-col overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full h-auto aspect-[324/48] lg:aspect-[1520/74] bg-[#2E3362] flex items-center  px-[4.4vw] lg:px-[2vw] justify-between">
                <text className="text-white text-[17px] sm:text-[23px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  User Report
                </text>
                <Link
                  className="w-[4.4vw] lg:w-[1.25vw] h-auto aspect-square relative z-10 hover:opacity-50"
                  href="/"
                >
                  <Image alt="x" src={x} fill={true} />
                </Link>
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/248] relative z-10">
                <Image alt="Rumah" src={rumah} fill={true} objectFit="cover" />
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/55] flex-col flex pl-[5.5vw] justify-center">
                <text className="text-[12px] sm:text-[15px] md:text-[19px] font-semibold text-poppins">
                  {currentAssetsHistory.nama_properti}
                </text>
                <text className="text-[#5D716F] text-[11px] sm:text-[14px] md:text-[18px] font-semibold text-poppins">
                  {currentAssetsHistory.alamat}
                </text>
              </div>
              <div className="lg:hidden w-full h-[1px] bg-[#808080]"></div>

              <div className="flex flex-row w-full h-full">
                <div className="w-full lg:w-[20vw] h-full bg-white flex flex-col items-center">
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Net Worth
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {netWorth} M
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Increase
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {netWorth / 10}x
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Years
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {tahunSimulasi}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Earnings
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {earnings} M
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div
                    className={`w-full ${
                      showAssets ? "bg-[#F8F8F8]" : "bg-white"
                    } h-auto aspect-[324/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]`}
                  >
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Assets
                    </text>
                    {showAssetsHistory ? (
                      <button
                        className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 hover:opacity-50"
                        onClick={() => setShowAssetsHistory(false)}
                      >
                        <Image alt="Arrow Up" src={arrowupblack} fill={true} />
                      </button>
                    ) : (
                      <button
                        className="w-[3.88vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 hover:opacity-50"
                        onClick={() => setShowAssetsHistory(true)}
                      >
                        <Image
                          alt="Arrow Down"
                          src={arrowdownblack}
                          fill={true}
                        />
                      </button>
                    )}
                  </div>
                  {showAssetsHistory ? (
                    <div className="overflow-auto w-full h-auto aspect-[324/155] lg:aspect-[384/301] no-scrollbar">
                      {assetsHistory.map((data, index) => (
                        <div key={index} className="w-full">
                          <button
                            className="w-full h-auto aspect-[324/50] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]"
                            onClick={() => handleAssetSummary(data)}
                          >
                            <div className="flex flex-col items-start">
                              <text className="text-[#1E2351] font-semibold lg:font-medium text-[11px] sm:text-[13px] md:text-[17px] xl:text-[13px] lg:text-[11px] text-poppins">
                                {data.nama_properti}
                              </text>
                              <text className="text-black font-semibold text-[10px] sm:text-[13px] md:text-[16px] xl:text-[12px] lg:text-[10px] lg:font-medium text-poppins">
                                {data.tipe}
                              </text>
                            </div>
                            <text className="text-[#1E2351] font-semibold lg:font-medium text-[14px] sm:text-[17px] md:text-[21px] xl:text-[18px] lg:text-[15px] text-poppins">
                              {data.harga_sekarang / 1000000000} M
                            </text>
                          </button>
                          <div className="flex items-center justify-center">
                            <div className=" bg-[#808080] w-[14.58vw] h-[1px]"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="w-[1px] h-full bg-[#808080]"></div>

                {assetsHistory.length > 0 ? (
                  <div className="w-[63.34vw] hidden lg:flex h-full bg-[#EFF2FA] py-[35px] xl:py-[35px] lg:py-[25px] pl-[3.125vw] pr-[4.16vw] flex-row justify-between">
                    <div className="flex flex-col">
                      <text className="text-[27px] xl:text-[27px] lg:text-[22px] font-medium text-poppins">
                        {currentAssetsHistory.nama_properti}
                      </text>
                      <text className="text-[#5D716F] font-medium mb-[18px] xl:mb-[18px] lg:mb-[10px] text-poppins text-[14px] xl:text-[14px] lg:text-[12px]">
                        {currentAssetsHistory.alamat}
                      </text>
                      <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                        <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                          {" "}
                          Starting price
                        </text>
                        <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                          {currentAssetsHistory.harga_dasar / 1000000000} M
                        </text>
                      </div>
                      <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                        <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                          {" "}
                          Current Price
                        </text>
                        <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                          {currentAssetsHistory.harga_sekarang / 1000000000} M
                        </text>
                      </div>
                      <div className="w-[26.875vw] h-auto aspect-[516/36] flex flex-row mb-[14px] xl:mb-[14px] lg:mb-[8px] items-center justify-between">
                        <text className="text-[20px] xl:text-[20px] lg:text-[16px] font-medium text-poppins">
                          {" "}
                          Years on hold
                        </text>
                        <text className="font-medium text-[18px] xl:text-[18px] lg:text-[14px] text-poppins">
                          {currentAssetsHistory.years_on_hold}
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#CED3DE] pt-[75px] sm:pt-[110px] md:pt-[140px] xl:pt-[95px] lg:pt-[85px] min-h-[100vh] pb-[20px] sm:pb-[25px] md:pb-[30px] lg:pb-[0px] overflow-hidden text-poppins">
          <div className="px-[5vw] lg:px-[8.33vw]">
            <div
              className="w-full h-auto aspect-[324/670] lg:aspect-[1520/854] bg-white rounded-[5px] lg:rounded-[20px] flex flex-col overflow-hidden"
              data-aos="fade-up"
            >
              <div className="w-full h-auto aspect-[324/48] lg:aspect-[1520/74] bg-[#2E3362] flex items-center  px-[4.4vw] lg:px-[2vw] justify-between">
                <text className="text-white text-[17px] sm:text-[23px] xl:text-[21px] lg:text-[17px] font-medium text-poppins">
                  Asset Summary
                </text>
                <button
                  className="w-[4.4vw] lg:w-[1.25vw] h-auto aspect-square relative z-10 hover:opacity-50"
                  onClick={() => setFlow(3)}
                >
                  <Image alt="x" src={x} fill={true} />
                </button>
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/248] relative z-10">
                <Image alt="Rumah" src={rumah} fill={true} objectFit="cover" />
              </div>

              <div className="w-full lg:hidden h-auto aspect-[324/55] flex-col flex pl-[5.5vw] justify-center">
                <text className="text-[12px] sm:text-[15px] md:text-[19px] font-semibold text-poppins">
                  {currentAssetsHistory.nama_properti}
                </text>
                <text className="text-[#5D716F] text-[11px] sm:text-[14px] md:text-[18px] font-semibold text-poppins">
                  {currentAssetsHistory.alamat}
                </text>
              </div>

              <div className="flex flex-row w-full h-full">
                <div className="w-full lg:w-[20vw] h-full bg-white flex flex-col items-center">
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Starting Price
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentAssetsHistory.harga_dasar / 1000000000} M
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Current Price
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentAssetsHistory.harga_sekarang / 1000000000} M
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto aspect-[324/34] lg:aspect-[384/100] flex flex-row items-center justify-between px-[5.5vw] lg:px-[1.46vw]">
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      Years on Hold
                    </text>
                    <text className="text-[#1E2351] font-semibold lg:font-medium text-[12px] sm:text-[15px] md:text-[19px] xl:text-[18px] lg:text-[15px] text-poppins">
                      {currentAssetsHistory.years_on_hold}
                    </text>
                  </div>
                  <div className="w-full h-[1px] bg-[#808080]"></div>
                  <div className="w-full h-auto flex px-[5.5vw]">
                    <text className="text-black text-poppins text-[11px] sm:text-[14px] md:text-[18px] mt-[10px] sm:mt-[15px] md:mt-[20px]">
                      deskripsi
                    </text>
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
