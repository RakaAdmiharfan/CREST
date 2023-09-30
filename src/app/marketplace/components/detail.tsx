"use client";

import { useState, ChangeEvent, useRef, useEffect } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css";

import DatePicker from "./datepicker";
import rumah from "@/../public/images/rumahss.jpeg";

export default function Detail({
  selectedBuyDate,
  selectedSellDate,
  onChangeBuyDate,
  onChangeSellDate,
  deskripsiBisnis,
  deskripsiPribadi,
  harga,
  nama_agen,
  nomor_agen,
  link_map,
  isClick,
}) {
  const [flow, setFlow] = useState(0);
  const [dateRange, setDateRange] = useState(0);
  const [openDatePickerBuy, setOpenDatePickerBuy] = useState(false);
  const [openDatePickerSell, setOpenDatePickerSell] = useState(false);
  const [closeDatePicker, setCloseDatePicker] = useState(true);
  const [isCantCalculate, setIsCantCalculate] = useState(false);

  const handleCalculate = () => {
    if (differenceInDays(selectedSellDate, selectedBuyDate) > 0) {
      setIsCantCalculate(false);
      setDateRange(differenceInDays(selectedSellDate, selectedBuyDate));
      setFlow(2);
    } else {
      setIsCantCalculate(true);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="bg-white aspect-[312/401] lg:aspect-[1441/791] h-auto w-full rounded-[5px] lg:rounded-[15px] flex-col-reverse flex lg:flex-row overflow-hidden">
      <div className="w-full aspect-[312/237] lg:w-[30vw] flex flex-col">
        <div className="flex flex-row">
          <button
            className={`w-1/2 lg:w-[15vw] h-auto aspect-[159/19] lg:aspect-[287/69] flex items-center justify-center lg:rounded-tl-[15px] py-[1vw] ${
              flow === 0 ? "bg-[#2E3362]" : "bg-[#98A8D0]"
            } hover:opacity-70`}
            onClick={() => setFlow(0)}
          >
            <text className="text-[10px] sm:text-[14px] md:text-[18px] xl:text-[18px] lg:text-[16px] text-[#FFF] font-normal text-poppins">
              Bisnis
            </text>
          </button>
          <button
            className={`w-1/2 lg:w-[15vw] h-auto aspect-[159/19] lg:aspect-[287/69] flex items-center justify-center ${
              flow === 1 ? "bg-[#2E3362]" : "bg-[#98A8D0]"
            } hover:opacity-70`}
            onClick={() => setFlow(1)}
          >
            <text className="text-[10px] sm:text-[14px] md:text-[18px] xl:text-[18px] lg:text-[16px] text-[#FFF] font-normal text-poppins">
              Pribadi
            </text>
          </button>
        </div>

        <div className="px-[5.2vw] lg:px-[1.823vw] pt-[10px] sm:pt-[13px] md:pt-[15px] xl:pt-[40px] lg:pt-[25px] flex flex-col">
          {flow === 2 ? (
            <div className="flex flex-col">
              <text className="text-poppins text-[12px] sm:text-[17px] md:text-[23px] xl:text-[20px] lg:text-[16px] font-medium">
                AI Estimation
              </text>
              <div className="flex flex-row justify-between w-[76.4vw] lg:w-[26.354vw]">
                <text className="flex mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Base Price
                </text>
                <text className="flex mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  {harga}
                </text>
              </div>
              <div className="flex flex-row justify-between w-[76.4vw] lg:w-[26.354vw]">
                <text className="flex mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Estimated Price
                </text>
                <text className="flex mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  $10.000
                </text>
              </div>
              <div className="flex flex-row justify-between w-[76.4vw] lg:w-[26.354vw]">
                <text className="flex mb-[7px] sm:mb-[10px] md:mb-[15px] xl:mb-[40px] lg:mb-[25px] mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  Years
                </text>
                <text className="flex mb-[7px] sm:mb-[10px] md:mb-[15px] xl:mb-[40px] lg:mb-[25px] mt-[5px] sm:mt-[6px] md:mt-[7px]xl:mt-[10px] lg:mt-[7px] text-[10px] sm:text-[14px] md:text-[17px] xl:text-[16px] lg:text-[14px] text-poppins">
                  10
                </text>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              {isClick ? (
                <div className="flex flex-col">
                  <text className="text-poppins text-[12px] sm:text-[17px] md:text-[23px] xl:text-[16px] lg:text-[14px]">
                    DESCRIPTION
                  </text>
                  <text className="mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-[11px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px] text-poppins">
                    {flow === 0 ? deskripsiBisnis : deskripsiPribadi}
                  </text>
                  <text className="mb-[10px] sm:mb-[20px] md:mb-[40px] xl:mb-[40px] lg:mb-[25px] mt-[5px] sm:mt-[6px] md:mt-[7px] xl:mt-[10px] lg:mt-[7px] text-poppins text-[11px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px]">
                    {`CP: ${nama_agen} (${nomor_agen})`}
                  </text>
                </div>
              ) : null}
            </div>
          )}

          <text className="mb-[2px] sm:mb-[3px] md:mb-[5px] xl:mb-[5px] lg:mb-[3px] text-poppins text-[11px] sm:text-[16px] md:text-[22px] xl:text-[16px] lg:text-[14px]">
            Buy Date
          </text>
          <DatePicker
            selectedDate={selectedBuyDate}
            onChange={onChangeBuyDate}
            openDatePicker={openDatePickerBuy}
          />
          {/* <div className="mb-[5px] sm:mb-[10px] md:mb-[15px] xl:mb-[30px] lg:mb-[20px] flex flex-row">
            <DatePicker
              selectedDate={selectedBuyDate}
              onChange={onChangeBuyDate}
              openDatePicker={openDatePickerBuy}
              closeDatePicker={closeDatePicker}
            />
            <button
              className="w-[5.5vw] lg:w-[1.67vw] h-auto aspect-square relative mx-[3.6vw] lg:mx-[1vw]"
              onClick={() => setOpenDatePickerBuy(!openDatePickerBuy)}
            >
              <Image alt="Calendar" src={calendar} fill={true} />
            </button>
          </div> */}

          <text className="mb-[2px] sm:mb-[3px] md:mb-[5px] xl:mb-[5px] lg:mb-[3px] text-poppins text-[11px] sm:text-[16px] md:text-[22px] xl:text-[16px] lg:text-[14px]">
            Sell Date
          </text>
          <div className="mb-[9px] sm:mb-[15px] md:mb-[40px] xl:mb-[30px] lg:mb-[25px]">
            <DatePicker
              selectedDate={selectedSellDate}
              onChange={onChangeSellDate}
              openDatePicker={openDatePickerSell}
            />
          </div>
          {/* <div className="mb-[15px] sm:mb-[30px] md:mb-[55px] xl:mb-[60px] lg:mb-[45px] flex flex-row">
            <DatePicker
              selectedDate={selectedSellDate}
              onChange={onChangeSellDate}
            />
            <div className="w-[5.5vw] lg:w-[1.67vw] h-auto aspect-square relative mx-[3.6vw] lg:mx-[1vw]">
              <Image alt="Calendar" src={calendar} fill={true} />
            </div>
          </div> */}

          <div className="flex flex-col justify-center items-center">
            {isCantCalculate ? (
              <text
                className="text-poppins font-medium text-[#EB5B5B] text-[6px] sm:text-[10px] md:text-[13px] xl:text-[15px] lg:text-[14px]"
                data-aos="fade-down"
              >
                Input ulang tanggal
              </text>
            ) : null}
            <button
              className="w-[14.1vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:w-[10.2vw] h-auto aspect-[51/15] lg:aspect-[196/61] rounded-[5px] lg:rounded-[15px] border-[1px] border-black flex items-center justify-center"
              onClick={() => handleCalculate()}
            >
              <text className="text-[#6C88CD] font-bold text-[8px] sm:text-[13px] md:text-[16px] xl:text-[18px] lg:text-[16px] text-poppins">
                Calculate
              </text>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:h-full aspect-[312/164] lg:aspect-auto relative">
        <Image
          alt="Rumah Detail"
          src={isClick ? link_map : rumah}
          fill={true}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
