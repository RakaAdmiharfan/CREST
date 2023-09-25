"use client";
import Image from "next/image";
import "./page.css";
import "./globals.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useRef, useState } from "react";
import Link from "next/link";

import smart from "@/../public/Home/smart.svg";
import smartF from "@/../public/Home/smartF.svg";

const properties = [
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
  {
    imgurl: "/Home/fotobox.png",
    Type: "House",
    Price: "Rp1.1M",
    Addres:
      "Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
  },
];

export default function Home() {
  return (
    <main className=" bg-white overflow-hidden">
      <div className="invest-easier h-[330px] sm:h-[370px] md:h-[450px] xl:h-[620px] lg:h-[450px] overflow-hidden bg-no-repeat">
        <div className="Tulisan Utama ml-[8vw] lg:ml-[6.25vw] mt-[90px] sm:mt-[130px] md:mt-[140px] xl:mt-[150px] lg:mt-[120px]">
          <h1 className="text-montserrat w-[78.8vw] lg:w-[33.28vw] text-[30px] sm:text-[40px] md:text-[50px] xl:text-[67px] lg:text-[54px]">
            {" "}
            Invest Easier
          </h1>
          <h5 className="w-[78.8vw] lg:w-[33.28vw] mt-[20px] sm:mt-[25px] md:mt-[35px] xl:mt-[50px] lg:mt-[35px] text-poppins text-white text-justify text-[13px] sm:text-[14px] md:text-[15px] xl:text-[18px] lg:text-[16px] text-shadow-md">
            Use our cutting-edge technology to learn and unlock endless
            possibilities through real estate. Find out real estate investments
            tailored solely for your needs.
          </h5>
        </div>

        <div className="Tombol ml-[8vw] lg:ml-[6.25vw] mt-[25px] sm:mt-[25px] md:mt-[35px] xl:mt-[50px] lg:mt-[35px] flex flex-row">
          <Link
            href="/Trending"
            className="w-[28.8vw] lg:w-[11.75vw] h-auto aspect-[104/21] lg:aspect-[228/47] button mr-[2.5vw] lg:mr-[1vw] bg-[#2E3362] flex flex-col items-center justify-center text-white font-poppins font-semibold text-[9px] sm:text-[12px] md:text-[14px] xl:text-[14px] lg:text-[12px] rounded-[15px]"
          >
            Explore Properties
          </Link>
          <Link
            href="/about"
            className="w-[18.5vw] lg:w-[7.45vw] h-auto aspect-[66.6/21] lg:aspect-[143/47] button border-white border-[3px] flex flex-col items-center justify-center text-white font-poppins font-semibold text-[9px] sm:text-[12px] md:text-[14px] xl:text-[14px] lg:text-[12px] rounded-[15px]"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="Trending px-[5.55vw] lg:px-[4.16vw]" id="Trending">
        <div className="Title mt-[20px] sm:mt-[25px] md:mt-[30px] xl:mt-[40px] lg:mt-[30px]">
          <h2 className="text-poppins font-semibold text-[20px] sm:text-[25px] md:text-[32px] xl:text-[43px] lg:text-[35px]">
            Trending
          </h2>

          <div className="mt-[7px] sm:mt-[10px] md:mt-[13px] xl:mt-[20px] lg:mt-[15px] flex justify-between">
            <h4 className="text-poppins text-[13px] sm:text-[15px] md:text-[19px] xl:text-[25px] lg:text-[20px]">
              Explore trending properties
            </h4>
            <h4 className="flex items-center text-poppins text-[13px] sm:text-[15px] md:text-[19px] xl:text-[25px] lg:text-[20px] font-medium">
              More
              <span className="ml-[1vw]">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-[5.55vw] lg:px-[4.16vw] pb-[4px] sm:pb-[5px] md:pb-[6px] xl:pb-[8px] lg:pb-[6px] gap-[3vw] lg:gap-[2vw] overflow-x-auto no-scrollbar mt-[8px] sm:mt-[15px] md:mt-[18px] xl:mt-[40px] lg:mt-[25px] mb-[30px] sm:mb-[35px] md:mb-[40px] xl:mb-[60px] lg:mb-[45px]">
        {properties.map((property, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-[10px] lg:rounded-[30px] bg-[#FAFAFA] shadow-lg w-[28.3vw] lg:w-[18,75vw] h-auto aspect-[102/130] lg:aspect-[360/527] p-[3vw] lg:p-[2vw]"
          >
            <div className="w-[21.66vw] lg:w-[14.58vw] h-auto aspect-square relative">
              <Image
                alt={`Property ${index + 1}`}
                src={property.imgurl}
                fill={true}
              />
            </div>
            <div className="w-[21.66vw] lg:w-[14.58vw] flex flex-row mt-[8px] sm:mt-[11px] md:mt-[13px] xl:mt-[24px] lg:mt-[16px] justify-between">
              <h5 className="text-poppins text-[8px] sm:text-[12px] md:text-[14px] xl:text-[18px] lg:text-[16px]">
                {property.Type}
              </h5>
              <h5 className="text-poppins text-[8px] sm:text-[12px] md:text-[14px] xl:text-[18px] lg:text-[16px]">
                {property.Price}
              </h5>
            </div>
            <p className="w-[21.66vw] lg:w-[14.58vw] mt-[2px] sm:mt-[3px] md:mt-[4px] xl:mt-[10px] lg:mt-[5px] text-[#C8C8C8] font-poppins font-medium text-justify text-[6px] sm:text-[8px] md:text-[10px] xl:text-[14px] lg:text-[12px]  text-poppins">
              {property.Addres}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#EFF2FA] w-full h-auto aspect-[360/154] lg:aspect-[1920/812] flex justify-between">
        <div className="Title ml-[4.4vw] lg:ml-[4.16vw] pt-[10px] sm:pt-[20px] md:pt-[30px] xl:pt-[110px] lg:pt-[85px] w-[45.27vw] lg:w-[44.68vw]">
          <h2 className="text-poppins text-[12px] sm:text-[16px] md:text-[23px] xl:text-[42px] lg:text-[32px]">
            Smart Investment Decisions
          </h2>
          <p className="text-[#212653] mt-[10px] sm:mt-[15px] md:mt-[20px] xl:mt-[40px] lg:mt-[30px] w-[43.8vw] lg:w-[44.16vw] text-poppins text-[5px] sm:text-[7px] md:text-[11px] xl:text-[15px] lg:text-[12px] text-justify">
            Unlock the future of real estate investment with AI-driven price
            prediction technology. Say goodbye to uncertainty and hello to
            informed decision-making. Our cutting-edge AI algorithms analyze
            vast datasets, market trends, and historical property data to
            provide you with accurate and reliable predictions for property
            prices. Whether you're a seasoned investor looking to maximize your
            returns or a first-time homebuyer searching for the perfect deal,
            our AI-powered solution empowers you to make smarter choices in the
            ever-evolving real estate market. Join us on the forefront of
            innovation and take the guesswork out of property investments today!
          </p>
        </div>
        <div className="w-[50.37vw] h-auto aspect-[183/154] lg:aspect-[967/812] relative">
          <Image
            alt="Smart Investment"
            src={smart}
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="bg-[#FFF] w-full h-auto aspect-[360/154] lg:aspect-[1920/812] flex justify-between">
        <div className="w-[50.37vw] h-auto aspect-[183/154] lg:aspect-[967/812] relative">
          <Image
            alt="Smart Investment"
            src={smartF}
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="Title mr-[4.4vw] lg:mr-[4.16vw] pt-[10px] sm:pt-[20px] md:pt-[30px] xl:pt-[110px] lg:pt-[85px] w-[45.27vw] lg:w-[44.68vw]">
          <h2 className="text-poppins text-[12px] sm:text-[16px] md:text-[23px] xl:text-[42px] lg:text-[32px]">
            Smart Investment Decisions
          </h2>
          <p className="text-[#212653] mt-[10px] sm:mt-[15px] md:mt-[20px] xl:mt-[40px] lg:mt-[30px] w-[43.8vw] lg:w-[44.16vw] text-poppins text-[5px] sm:text-[7px] md:text-[11px] xl:text-[15px] lg:text-[12px] text-justify">
            Unlock the future of real estate investment with AI-driven price
            prediction technology. Say goodbye to uncertainty and hello to
            informed decision-making. Our cutting-edge AI algorithms analyze
            vast datasets, market trends, and historical property data to
            provide you with accurate and reliable predictions for property
            prices. Whether you're a seasoned investor looking to maximize your
            returns or a first-time homebuyer searching for the perfect deal,
            our AI-powered solution empowers you to make smarter choices in the
            ever-evolving real estate market. Join us on the forefront of
            innovation and take the guesswork out of property investments today!
          </p>
        </div>
      </div>
    </main>
  );
}
