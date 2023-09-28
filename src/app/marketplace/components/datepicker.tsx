"use client";

import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { format } from "date-fns";

export default function DatePicker({ selectedDate, onChange }) {
  const formattedDate = selectedDate ? format(selectedDate, "dd/MM/yyyy") : "";

  return (
    <React.Fragment>
      <div className="w-[59.1vw] lg:w-[14.8vw] relative h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] rounded-[3px] md:rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] justify-center flex items-center">
        <text className="absolute text-poppins text-[10px] sm:text-[14px] md:text-[17px] xl:text-[14px] lg:text-[12px]">
          {formattedDate}
        </text>
        <Datepicker
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          className="w-[59.1vw] lg:w-[14.8vw] h-auto aspect-[213/15] lg:aspect-[284/40] bg-[#F5F5F5] flex justify-center items-center bg-transparent"
        />
      </div>
    </React.Fragment>
  );
}