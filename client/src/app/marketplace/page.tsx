"use client";

import Image from "next/image";
import Search from "./components/search";
import Detail from "./components/detail";
import Maps from "./components/maps";
import Filter from "./components/filter";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import filter from "@/../public/images/filter.svg";
import houseData from "@/data/maps.json";
import { link } from "fs";

export default function Marketplace() {
  const [searchValue, setSearchValue] = useState("");
  const [buyDate, setBuyDate] = useState(null);
  const [sellDate, setSellDate] = useState(null);
  const [bisnisDesc, setBisnisDesc] = useState("");
  const [pribadiDesc, setPribadiDesc] = useState("");
  const [harga, setHarga] = useState(0);
  const [namaAgen, setNamaAgen] = useState("");
  const [nomorAgen, setNomorAgen] = useState("");
  const [link_map, setLink_Map] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [currentMap, setCurrentMap] = useState<any>([]);
  const [dataProperty, setDataProperty] = useState<any>([]);
  const [filterFlow, setFilterFlow] = useState(0);
  const [filteredCurrentMap, setFilteredCurrentMap] = useState<any>([]);
  const [filteredSearchCurrentMap, setFilteredSearchCurrentMap] =
    useState(dataProperty);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [id, setId] = useState(null);

  const formattedBuyDate = buyDate ? format(buyDate, "dd/MM/yyyy") : "";
  const formattedSellDate = sellDate ? format(sellDate, "dd/MM/yyyy") : "";

  const handleSearch = (value: string) => {
    if (filterFlow == 0) {
      setCurrentMap(dataProperty);
      setSearchValue(value);
      const filtered = dataProperty.filter((item: any) =>
        item.nama_properti.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentMap(filtered);
      setFilteredSearchCurrentMap(filtered);
      setIsSearchOn(true);
    } else {
      setSearchValue(value);
      const filtered = filteredCurrentMap.filter((item: any) =>
        item.nama_properti.toLowerCase().includes(value.toLowerCase())
      );
      setCurrentMap(filtered);
    }
  };

  const handleMaps = (
    bisnis: any,
    pribadi: any,
    harga: any,
    nama_agen: any,
    nomor_agen: any,
    link_map: any,
    isClick: any,
    id_properti: any
  ) => {
    setBisnisDesc(bisnis);
    setPribadiDesc(pribadi);
    setHarga(harga);
    setNamaAgen(nama_agen);
    setNomorAgen(nomor_agen);
    setLink_Map(link_map);
    setIsClick(isClick);
    setId(id_properti);
  };

  const handleFilter = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  };

  const handleFilterMap = (num: any) => {
    let mapNow;
    if (isSearchOn) {
      mapNow = filteredSearchCurrentMap;
    } else {
      mapNow = dataProperty;
    }
    if (num == 0) {
      setCurrentMap(mapNow);
    } else if (num == 1) {
      const filtered = mapNow.filter(
        (item: any) => item.harga_dasar < 500000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 2) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 500000000 && item.harga_dasar <= 1000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 3) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 1500000000 && item.harga_dasar <= 2000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 4) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 2000000000 && item.harga_dasar <= 2500000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 5) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 2500000000 && item.harga_dasar <= 3000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 6) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 3000000000 && item.harga_dasar <= 3500000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 7) {
      const filtered = mapNow.filter(
        (item: any) =>
          item.harga_dasar >= 3500000000 && item.harga_dasar <= 4000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    } else if (num == 8) {
      const filtered = mapNow.filter(
        (item: any) => item.harga_dasar > 4000000000
      );
      setCurrentMap(filtered);
      setFilteredCurrentMap(filtered);
    }
    setFilterFlow(num);
  };

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
      setId(response.data.propertiGetAllProperti[1].id_properti);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <main className="bg-[#EFF2FA] min-h-[100vh] relative overflow-hidden pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[110px] lg:pt-[95px] pb-[50px] xl:pb-[50px] lg:pb-[35px]">
      <div className="px-[6.6vw] lg:px-[12.6vw]">
        <div
          className="flex justify-between flex-row mb-[20px] sm:mb-[22px] md:mb-[25px] xl:mb-[30px] lg:mb-[20px]"
          data-aos="fade-down"
        >
          <Search onSearch={handleSearch} />
          <button
            className={`relative w-[6.66vw] lg:w-[3.646vw] text-gray-600 flex flex-row aspect-[24/20] lg:aspect-[70/60] ${
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
          className="w-full h-auto aspect-[312/187] lg:aspect-[1436/866] relative mb-[25px] sm:mb-[30px] md:mb-[35px] xl:mb-[75px] lg:mb-[55px]"
          data-aos="fade-right"
        >
          {showFilter ? (
            <div className="absolute z-30 top-0 right-0">
              <Filter filterMap={handleFilterMap} numFlow={filterFlow} />
            </div>
          ) : null}
          <Maps onClick={handleMaps} currentMap={currentMap} />
        </div>

        <div data-aos="fade-up">
          <Detail
            selectedBuyDate={buyDate}
            onChangeBuyDate={(date: any) => setBuyDate(date)}
            selectedSellDate={sellDate}
            onChangeSellDate={(date: any) => setSellDate(date)}
            deskripsiBisnis={bisnisDesc}
            deskripsiPribadi={pribadiDesc}
            harga={harga}
            nama_agen={namaAgen}
            nomor_agen={nomorAgen}
            link_map={link_map}
            isClick={isClick}
            id_properti={id}
          />
        </div>
      </div>
    </main>
  );
}
