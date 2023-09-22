"use client";

import React from "react";
import { useState } from "react";

export default function Filter() {
  const [flow, setFlow] = useState(0);

  const handleFilter = (num: number) => {
    if (flow === num) {
      setFlow(0);
    } else {
      setFlow(num);
    }
  };

  return (
    <div className="w-[28.7vw] bg-white h-auto aspect-[551/332] rounded-[15px] flex flex-col justify-center px-[2.5vw]">
      <div className="w-[23.7vw] h-auto aspect-[455/268] flex flex-col justify-between">
        <text className="text-[18px] font-medium text-poppins">
          Filter Berdasarkan Harga
        </text>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between w-[9.2vw] h-auto aspect-[177/204]">
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 1 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(1)}
              ></button>
              <text className="text-poppins text-[14px]">{"< Rp 500jt"}</text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 2 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(2)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 500jt - 1M</text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 3 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(3)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 1.5M - 2M </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 4 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(4)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 2M - 2.5M</text>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[9.2vw] h-auto aspect-[177/204]">
            {" "}
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 5 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(5)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 2.5M - 3M</text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 6 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(6)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 3M - 3.5M</text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 7 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(7)}
              ></button>
              <text className="text-poppins text-[14px]">Rp 3.5M - 4M </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[1.46vw] h-auto aspect-square border-[1px] rounded-[5px] border-black mr-[0.8vw] ${
                  flow === 8 ? "bg-black" : null
                }`}
                onClick={() => handleFilter(8)}
              ></button>
              <text className="text-poppins text-[14px]">{"> Rp 4M"}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
