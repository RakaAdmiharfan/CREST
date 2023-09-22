"use client";

import faqData from "@/data/faq.json";
import { useState } from "react";
import Image from "next/image";

import phone from "@/../public/images/phone.svg";
import message from "@/../public/images/message.svg";
import linkedin from "@/../public/images/linkedin.svg";
import nicholas from "@/../public/images/nicholas.jpg";
import amjad from "@/../public/images/amjad.jpg";
import johan from "@/../public/images/johan.jpg";
import iskandar from "@/../public/images/iskandar.jpg";
import raka from "@/../public/images/raka.jpg";

export default function Profile({ name }: { name: string }) {
  let photo;
  let nama;
  let profesi;

  if (name === "Amjad") {
    photo = amjad;
    nama = "Amjad";
    profesi = "TNI";
  } else if (name === "Nicholas") {
    photo = nicholas;
    nama = "Nicholas";
    profesi = "Designer";
  } else if (name === "Johan") {
    photo = johan;
    nama = "Johan";
    profesi = "Pebisnis";
  } else if (name === "Iskandar") {
    photo = iskandar;
    nama = "Iskandar";
    profesi = "Mahasiswa";
  } else if (name === "Raka") {
    photo = raka;
    nama = "Raka";
    profesi = "Developer";
  }

  return (
    <div className="flex w-[14.9vw] h-full relative justify-center">
      <div className="w-[7.45vw] h-auto aspect-square absolute top-0 rounded-[100%] overflow-hidden z-10 flex">
        <Image alt={nama} src={photo} fill={true} />
      </div>
      <div className="bg-[#C8D6E29E] w-full h-auto aspect-[286/304] flex flex-col bottom-0 absolute rounded-[20px] shadow-[0_4px_30px_0px_rgba(0,0,0,0.25)]">
        <div className="flex w-full bottom-[15px] flex-col absolute items-center justify-center">
          <text className="flex w-[10.1vw] h-auto aspect-[194/64] items-center justify-center text-poppins font-medium text-[18px]">
            {nama}
          </text>
          <text className="flex w-[10.1vw] h-auto aspect-[194/64] items-center justify-center text-poppins font-medium text-[18px]">
            {profesi}
          </text>
          <div className="flex w-[8.6vw] h-auto aspect-[194/64] justify-between">
            <button className="w-[1.25vw] h-auto aspect-square z-10 relative">
              <Image alt="Linked In" src={linkedin} fill={true} />
            </button>
            <button className="w-[1.25vw] h-auto aspect-square z-10 relative">
              <Image alt="Message" src={message} fill={true} />
            </button>
            <button className="w-[1.25vw] h-auto aspect-square z-10 relative">
              <Image alt="Phone" src={phone} fill={true} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
