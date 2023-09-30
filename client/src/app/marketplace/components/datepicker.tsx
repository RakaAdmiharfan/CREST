"use client";

import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { format } from "date-fns";
import calendar from "@/../public/images/calendar.svg";
import Image from "next/image";

export default function DatePicker({
  selectedDate,
  onChange,
  openDatePicker,
}: any) {
  const [isOpen, setIsOpen] = useState(openDatePicker);
  const formattedDate = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";

  return (
    <React.Fragment>
      <div className="mb-[5px] sm:mb-[10px] md:mb-[15px] xl:mb-[30px] lg:mb-[20px] flex flex-row">
        <div className="w-[59.1vw] lg:w-[14.8vw] relative h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] rounded-[3px] md:rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] justify-center flex items-center">
          <text className="absolute text-poppins text-[10px] sm:text-[14px] md:text-[17px] xl:text-[14px] lg:text-[12px]">
            {formattedDate}
          </text>
          <Datepicker
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            onClickOutside={() => setIsOpen(false)}
            onInputClick={() => setIsOpen(!isOpen)}
            readOnly={true}
            open={isOpen}
            showYearDropdown
            className="w-[59.1vw] lg:w-[14.8vw] h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] flex justify-center items-center bg-transparent z-[60] overflow-visible"
          />
        </div>
        <button
          className="w-[5.5vw] lg:w-[1.67vw] h-auto aspect-square relative mx-[3.6vw] lg:mx-[1vw] hover:opacity-60"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image alt="Calendar" src={calendar} fill={true} />
        </button>
      </div>
      {/* <div
        className="w-[59.1vw] lg:w-[14.8vw] relative h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] rounded-[3px] md:rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] justify-center flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <text className="absolute text-poppins text-[10px] sm:text-[14px] md:text-[17px] xl:text-[14px] lg:text-[12px]">
          {formattedDate}
        </text>
        <Datepicker
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          open={isOpen}
          showYearDropdown
          className="w-[59.1vw] lg:w-[14.8vw] h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] flex justify-center items-center bg-transparent"
        />
      </div> */}
    </React.Fragment>
  );
}
