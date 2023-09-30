"use client";

import faqData from "@/data/faq.json";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import phone from "@/../public/images/phone.svg";
import message from "@/../public/images/message.svg";
import linkedin from "@/../public/images/linkedin.svg";
import instagram from "@/../public/images/instagram.svg";
import nicholas from "@/../public/images/nicholas.jpg";
import amjad from "@/../public/images/amjad.jpg";
import johan from "@/../public/images/johan.jpg";
import iskandar from "@/../public/images/iskandar.jpg";
import raka from "@/../public/images/raka.jpg";

export default function Profile({ name }: { name: string }) {
  let photo;
  let nama;
  let profesi;
  let link_linkedin = "";
  let link_instagram = "";

  if (name === "Amjad") {
    photo = amjad;
    nama = "Amjad";
    profesi = "Mahasiswa";
    link_linkedin =
      "https://www.linkedin.com/in/amjad-adhie-prasetyo-43a3601a1/";
    link_instagram = "https://www.instagram.com/amjad_adhie/";
  } else if (name === "Nicholas") {
    photo = nicholas;
    nama = "Nicholas";
    profesi = "Mahasiswa";
    link_linkedin = "https://www.linkedin.com/in/nicholas438/";
    link_instagram = "https://www.instagram.com/nicholas1.8";
  } else if (name === "Johan") {
    photo = johan;
    nama = "Johan";
    profesi = "Mahasiswa";
    link_linkedin =
      "https://www.linkedin.com/in/johan-hariara-sijabat-80538b258/";
    link_instagram = "https://www.instagram.com/johanhariara/";
  } else if (name === "Iskandar") {
    photo = iskandar;
    nama = "Iskandar";
    profesi = "Mahasiswa";
    link_linkedin =
      "https://www.linkedin.com/in/iskandar-muda-rizky-parlambang-266942215/";
    link_instagram = "https://www.instagram.com/iskandarmrp/";
  } else if (name === "Raka") {
    photo = raka;
    nama = "Raka";
    profesi = "Mahasiswa";
    link_linkedin = "https://www.linkedin.com/in/raka-admiharfan-3132b622a/";
    link_instagram = "https://www.instagram.com/rakaadmiharfan/";
  }

  return (
    <div className="flex w-[31.1vw] lg:w-[14.9vw] h-full relative justify-center flex-shrink-0">
      <div className="w-[15.5vw] lg:w-[7.45vw] h-auto aspect-square absolute top-0 rounded-[100%] overflow-hidden z-10 flex">
        <Image alt={nama} src={photo} fill={true} />
      </div>
      <div className="bg-[#C8D6E29E] w-[31.1vw] lg:w-full h-auto aspect-[112/119] lg:aspect-[286/304] flex flex-col bottom-0 absolute rounded-[7px] lg:rounded-[20px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_4px_30px_0px_rgba(0,0,0,0.25)]">
        <div className="flex w-[31.1vw] lg:w-full bottom-[15px] xl:bottom-[15px] lg:bottom-[10px] flex-col absolute items-center justify-center">
          <text className="flex w-[20.8vw] lg:w-[10.1vw] h-auto aspect-[75/25] lg:aspect-[194/64] items-center justify-center text-poppins font-medium text-[9px] sm:text-[13px] md:text-[18px] xl:text-[18px] lg:text-[16px]">
            {nama}
          </text>
          <text className="flex w-[20.8vw] lg:w-[10.1vw] h-auto aspect-[75/25] lg:aspect-[194/64] items-center justify-center text-poppins font-medium text-[9px] sm:text-[13px] md:text-[18px] xl:text-[18px] lg:text-[16px]">
            {profesi}
          </text>
          <div className="flex w-[18vw] lg:w-[8.6vw] h-auto aspect-[65/9.5] lg:aspect-[194/64] justify-between">
            <Link
              href={link_linkedin}
              target="_blank"
              className="w-[2.6vw] lg:w-[1.25vw] h-auto aspect-square z-10 relative"
            >
              <Image alt="Linked In" src={linkedin} fill={true} />
            </Link>
            <button className="w-[2.6vw] lg:w-[1.25vw] h-auto aspect-square z-10 relative">
              <Image alt="Message" src={message} fill={true} />
            </button>
            <Link
              href={link_instagram}
              target="_blank"
              className="w-[2.6vw] lg:w-[1.25vw] h-auto aspect-square z-10 relative"
            >
              <Image alt="Instagram" src={instagram} fill={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
