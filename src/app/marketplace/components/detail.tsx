"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "./datepicker";
import calendar from "@/../public/images/calendar.svg";
import rumahdetail from "@/../public/images/rumahdetail.svg";

export default function Detail({
  selectedBuyDate,
  selectedSellDate,
  onChangeBuyDate,
  onChangeSellDate,
  deskripsiBisnis,
  deskripsiPribadi,
}) {
  const [flow, setFlow] = useState(0);

  return (
    <div className="bg-white aspect-[1441/791] h-auto w-full rounded-[15px] flex flex-row">
      <div className="w-[30vw] flex flex-col">
        <div className="flex flex-row">
          <button
            className={`w-[15vw] h-auto aspect-[287/69] flex items-center justify-center rounded-tl-[15px] ${
              flow === 0 ? "bg-[#2E3362]" : "bg-[#98A8D0]"
            }`}
            onClick={() => setFlow(0)}
          >
            <text className="text-[18px] text-[#FFF] font-normal text-poppins">
              Bisnis
            </text>
          </button>
          <button
            className={`w-[15vw] h-auto aspect-[287/69] flex items-center justify-center ${
              flow === 1 ? "bg-[#2E3362]" : "bg-[#98A8D0]"
            }`}
            onClick={() => setFlow(1)}
          >
            <text className="text-[18px] text-[#FFF] font-normal text-poppins">
              Pribadi
            </text>
          </button>
        </div>

        <div className="px-[1.823vw] pt-[40px] flex flex-col">
          <text className="text-poppins text-[16px]">DESCRIPTION</text>
          <text className="mt-[10px] mb-[40px] text-[16px] text-poppins">
            {flow === 0 ? deskripsiBisnis : deskripsiPribadi}
          </text>

          <text className="mb-[5px] text-poppins text-[16px]">Buy Date</text>
          <div className="mb-[30px] flex flex-row">
            <DatePicker
              selectedDate={selectedBuyDate}
              onChange={onChangeBuyDate}
            />
            <div className="w-[1.67vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Calendar" src={calendar} fill={true} />
            </div>
          </div>

          <text className="mb-[5px] text-poppins text-[16px]">Sell Date</text>
          <div className="mb-[60px] flex flex-row">
            <DatePicker
              selectedDate={selectedSellDate}
              onChange={onChangeSellDate}
            />
            <div className="w-[1.67vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Calendar" src={calendar} fill={true} />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-[10.2vw] h-auto aspect-[196/61] rounded-[15px] border-[1px] border-black flex items-center justify-center">
              <text className="text-[#6C88CD] font-bold text-[18px] text-poppins">
                Calculate
              </text>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <Image alt="Rumah Detail" src={rumahdetail} fill={true} />
      </div>
    </div>
  );
}
