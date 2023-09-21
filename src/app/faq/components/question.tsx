"use client";

import faqData from "@/data/faq.json";
import { useState } from "react";
import Image from "next/image";

import plus from "@/../public/images/plus.svg";
import minus from "@/../public/images/minus.svg";

export default function Question() {
  const [handle1, setHandle1] = useState(0);
  const [handle2, setHandle2] = useState(0);
  const [handle3, setHandle3] = useState(0);
  const [handle4, setHandle4] = useState(0);
  const [handle5, setHandle5] = useState(0);

  return (
    <div>
      {handle1 === 1 ? (
        <div className="mb-[20px]">
          <button
            className="pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-t-[10px] flex items-center justify-between "
            onClick={() => {
              setHandle1(0);
            }}
          >
            <text className="text-[#FFF] text-[14px] font-bold text-poppins">
              {faqData.faq[0].question}
            </text>
            <div className="w-[1.25vw] h-auto aspect-square relative">
              <Image alt="Plus" src={minus} fill={true} />
            </div>
          </button>
          <div className="pl-[1.146vw] pr-[3.23vw] w-[41.875vw] aspect-[804/144] bg-[#8495BF] rounded-b-[10px] flex items-center ">
            <text className="text-[#FFF] text-[16px] font-normal text-poppins">
              {faqData.faq[0].answer}
            </text>
          </div>
        </div>
      ) : (
        <button
          className="mb-[20px] pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-[10px] flex items-center justify-between "
          onClick={() => {
            setHandle1(1);
          }}
        >
          <text className="text-[#FFF] text-[14px] font-bold text-poppins">
            {faqData.faq[0].question}
          </text>
          <div className="w-[1.25vw] h-auto aspect-square relative">
            <Image alt="Plus" src={plus} fill={true} />
          </div>
        </button>
      )}

      {handle2 === 1 ? (
        <div className="mb-[20px]">
          <button
            className="pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-t-[10px] flex items-center justify-between "
            onClick={() => {
              setHandle2(0);
            }}
          >
            <text className="text-[#FFF] text-[14px] font-bold text-poppins">
              {faqData.faq[1].question}
            </text>
            <div className="w-[1.25vw] h-auto aspect-square relative">
              <Image alt="Plus" src={minus} fill={true} />
            </div>
          </button>
          <div className="pl-[1.146vw] pr-[3.23vw] w-[41.875vw] aspect-[804/144] bg-[#8495BF] rounded-b-[10px] flex items-center ">
            <text className="text-[#FFF] text-[16px] font-normal text-poppins">
              {faqData.faq[1].answer}
            </text>
          </div>
        </div>
      ) : (
        <button
          className="mb-[20px] pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-[10px] flex items-center justify-between "
          onClick={() => {
            setHandle2(1);
          }}
        >
          <text className="text-[#FFF] text-[14px] font-bold text-poppins">
            {faqData.faq[1].question}
          </text>
          <div className="w-[1.25vw] h-auto aspect-square relative">
            <Image alt="Plus" src={plus} fill={true} />
          </div>
        </button>
      )}

      {handle3 === 1 ? (
        <div className="mb-[20px]">
          <button
            className="pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-t-[10px] flex items-center justify-between "
            onClick={() => {
              setHandle3(0);
            }}
          >
            <text className="text-[#FFF] text-[14px] font-bold text-poppins">
              {faqData.faq[2].question}
            </text>
            <div className="w-[1.25vw] h-auto aspect-square relative">
              <Image alt="Plus" src={minus} fill={true} />
            </div>
          </button>
          <div className="pl-[1.146vw] pr-[3.23vw] w-[41.875vw] aspect-[804/144] bg-[#8495BF] rounded-b-[10px] flex items-center ">
            <text className="text-[#FFF] text-[16px] font-normal text-poppins">
              {faqData.faq[2].answer}
            </text>
          </div>
        </div>
      ) : (
        <button
          className="mb-[20px] pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-[10px] flex items-center justify-between "
          onClick={() => {
            setHandle3(1);
          }}
        >
          <text className="text-[#FFF] text-[14px] font-bold text-poppins">
            {faqData.faq[2].question}
          </text>
          <div className="w-[1.25vw] h-auto aspect-square relative">
            <Image alt="Plus" src={plus} fill={true} />
          </div>
        </button>
      )}

      {handle4 === 1 ? (
        <div className="mb-[20px]">
          <button
            className="pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-t-[10px] flex items-center justify-between "
            onClick={() => {
              setHandle4(0);
            }}
          >
            <text className="text-[#FFF] text-[14px] font-bold text-poppins">
              {faqData.faq[3].question}
            </text>
            <div className="w-[1.25vw] h-auto aspect-square relative">
              <Image alt="Plus" src={minus} fill={true} />
            </div>
          </button>
          <div className="pl-[1.146vw] pr-[3.23vw] w-[41.875vw] aspect-[804/144] bg-[#8495BF] rounded-b-[10px] flex items-center ">
            <text className="text-[#FFF] text-[16px] font-normal text-poppins">
              {faqData.faq[3].answer}
            </text>
          </div>
        </div>
      ) : (
        <button
          className="mb-[20px] pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-[10px] flex items-center justify-between "
          onClick={() => {
            setHandle4(1);
          }}
        >
          <text className="text-[#FFF] text-[14px] font-bold text-poppins">
            {faqData.faq[3].question}
          </text>
          <div className="w-[1.25vw] h-auto aspect-square relative">
            <Image alt="Plus" src={plus} fill={true} />
          </div>
        </button>
      )}

      {handle5 === 1 ? (
        <div className="mb-[20px]">
          <button
            className="pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-t-[10px] flex items-center justify-between "
            onClick={() => {
              setHandle5(0);
            }}
          >
            <text className="text-[#FFF] text-[14px] font-bold text-poppins">
              {faqData.faq[4].question}
            </text>
            <div className="w-[1.25vw] h-auto aspect-square relative">
              <Image alt="Plus" src={minus} fill={true} />
            </div>
          </button>
          <div className="pl-[1.146vw] pr-[3.23vw] w-[41.875vw] aspect-[804/144] bg-[#8495BF] rounded-b-[10px] flex items-center ">
            <text className="text-[#FFF] text-[16px] font-normal text-poppins">
              {faqData.faq[4].answer}
            </text>
          </div>
        </div>
      ) : (
        <button
          className="mb-[20px] pl-[1.146vw] pr-[1.46vw] w-[41.875vw] aspect-[804/50] bg-[#212653] rounded-[10px] flex items-center justify-between "
          onClick={() => {
            setHandle5(1);
          }}
        >
          <text className="text-[#FFF] text-[14px] font-bold text-poppins">
            {faqData.faq[4].question}
          </text>
          <div className="w-[1.25vw] h-auto aspect-square relative">
            <Image alt="Plus" src={plus} fill={true} />
          </div>
        </button>
      )}
    </div>
  );
}
