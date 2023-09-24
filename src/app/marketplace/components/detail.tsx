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
  harga,
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
            <text className="text-[18px] xl:text-[18px] lg:text-[16px] text-[#FFF] font-normal text-poppins">
              Bisnis
            </text>
          </button>
          <button
            className={`w-[15vw] h-auto aspect-[287/69] flex items-center justify-center ${
              flow === 1 ? "bg-[#2E3362]" : "bg-[#98A8D0]"
            }`}
            onClick={() => setFlow(1)}
          >
            <text className="text-[18px] xl:text-[18px] lg:text-[16px] text-[#FFF] font-normal text-poppins">
              Pribadi
            </text>
          </button>
        </div>

        <div className="px-[1.823vw] pt-[40px] xl:pt-[40px] lg:pt-[25px] flex flex-col">
          {flow === 2 ? (
            <div className="flex flex-col">
              <text className="text-poppins text-[20px] xl:text-[20px] lg:text-[16px] font-medium">
                AI Estimation
              </text>
              <div className="flex flex-row justify-between w-[26.354vw]">
                <text className="flex mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Base Price
                </text>
                <text className="flex mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  {harga}
                </text>
              </div>
              <div className="flex flex-row justify-between w-[26.354vw]">
                <text className="flex mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Estimated Price
                </text>
                <text className="flex mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  $10.000
                </text>
              </div>
              <div className="flex flex-row justify-between w-[26.354vw]">
                <text className="flex mb-[40px] xl:mb-[40px] lg:mb-[25px] mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Years
                </text>
                <text className="flex mb-[40px] xl:mb-[40px] lg:mb-[25px] mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                  10
                </text>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <text className="text-poppins text-[16px] xl:text-[16px] lg:text-[14px]">
                DESCRIPTION
              </text>
              <text className="mb-[40px] xl:mb-[40px] lg:mb-[25px] mt-[10px] xl:mt-[10px] lg:mt-[7px] text-[16px] xl:text-[16px] lg:text-[14px] text-poppins">
                {flow === 0 ? deskripsiBisnis : deskripsiPribadi}
              </text>
            </div>
          )}

          <text className="mb-[5px] xl:mb-[5px] lg:mb-[3px] text-poppins text-[16px] xl:text-[16px] lg:text-[14px]">
            Buy Date
          </text>
          <div className="mb-[30px] xl:mb-[30px] lg:mb-[20px] flex flex-row">
            <DatePicker
              selectedDate={selectedBuyDate}
              onChange={onChangeBuyDate}
            />
            <div className="w-[1.67vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Calendar" src={calendar} fill={true} />
            </div>
          </div>

          <text className="mb-[5px] xl:mb-[5px] lg:mb-[3px] text-poppins text-[16px] xl:text-[16px] lg:text-[14px]">
            Sell Date
          </text>
          <div className="mb-[60px] xl:mb-[60px] lg:mb-[45px] flex flex-row">
            <DatePicker
              selectedDate={selectedSellDate}
              onChange={onChangeSellDate}
            />
            <div className="w-[1.67vw] h-auto aspect-square relative mx-[1vw] z-10 ">
              <Image alt="Calendar" src={calendar} fill={true} />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="w-[10.2vw] h-auto aspect-[196/61] rounded-[15px] border-[1px] border-black flex items-center justify-center"
              onClick={() => setFlow(2)}
            >
              <text className="text-[#6C88CD] font-bold text-[18px] xl:text-[18px] lg:text-[16px] text-poppins">
                Calculate
              </text>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <Image
          alt="Rumah Detail"
          src={rumahdetail}
          fill={true}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
