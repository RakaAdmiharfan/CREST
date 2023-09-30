"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import ceklis from "@/../public/images/ceklis.svg";

export default function Filter(props: any) {
  const [flow, setFlow] = useState(props.numFlow);

  const handleFilter = (num: number) => {
    let nums;
    if (flow === num) {
      setFlow(0);
      nums = 0;
    } else {
      setFlow(num);
      nums = num;
    }
    props.filterMap(nums);
  };

  return (
    <div className="w-[50vw] lg:w-[28.7vw] bg-white border-[1px] border-gray-500 h-auto aspect-[551/332] rounded-[10px] lg:rounded-[15px] flex flex-col justify-center px-[2.5vw]">
      <div className="w-[39vw] lg:w-[23.7vw] h-auto aspect-[455/268] flex flex-col justify-between py-[5px] lg:py-[0px]">
        <text className="text-[11px] sm:text-[15px] md:text-[18px] xl:text-[18px] lg:text-[15px] font-medium text-poppins mb-[5px] sm:mb-[7px] md:mb-[10px] lg:py-[0px]">
          Filter Berdasarkan Harga
        </text>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between w-[18vw] lg:w-[9.2vw] h-auto aspect-[177/204]">
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw] `}
                onClick={() => handleFilter(1)}
              >
                {flow === 1 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                {"< Rp 500jt"}
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(2)}
              >
                {flow === 2 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 500jt - 1M
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(3)}
              >
                {flow === 3 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 1.5M - 2M{" "}
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(4)}
              >
                {flow === 4 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 2M - 2.5M
              </text>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[18vw] lg:w-[9.2vw] h-auto aspect-[177/204]">
            {" "}
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(5)}
              >
                {flow === 5 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 2.5M - 3M
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(6)}
              >
                {flow === 6 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 3M - 3.5M
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(7)}
              >
                {flow === 7 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                Rp 3.5M - 4M{" "}
              </text>
            </div>
            <div className="flex flex-row">
              <button
                className={`w-[3vw] lg:w-[1.46vw] h-auto aspect-square border-[1px] rounded-[3px] sm:rounded-[4px] md:rounded-[5px] lg:rounded-[5px] border-black mr-[0.8vw]`}
                onClick={() => handleFilter(8)}
              >
                {flow === 8 ? (
                  <div className="w-[3vw] lg:w-[1.46vw] h-auto aspect-square relative z-10 ">
                    <Image alt="ceklis" src={ceklis} fill={true} />
                  </div>
                ) : null}
              </button>
              <text className="text-poppins text-[7px] sm:text-[11px] md:text-[14px] xl:text-[12px] lg:text-[10px]">
                {"> Rp 4M"}
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
