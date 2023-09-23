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

  // Add more employees here
];

export default function Home() {
  // const containerRef = useRef(null);
  // const [startX, setStartX] = useState<number | null>(null);
  // const [scrollLeftStart, setScrollLeftStart] = useState<number | null>(null);

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   setStartX(e.clientX);
  //   setScrollLeftStart(container.scrollLeft);

  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   const dx = startX !== null ? startX - e.clientX : 0;
  //   container.scrollLeft = scrollLeftStart !== null ? scrollLeftStart + dx : 0;
  // };

  // const handleMouseUp = () => {
  //   document.removeEventListener("mousemove", handleMouseMove);
  //   document.removeEventListener("mouseup", handleMouseUp);
  // };

  return (
    <main className=" bg-white">
      <div className="invest-easier h-[620px] overflow-hidden bg-no-repeat">
        <div className="Tulisan Utama ml-[6.25vw] mt-[150px]">
          <h1 className="text-montserrat w-[33.28vw] text-[70px]">
            {" "}
            Invest Easier
          </h1>
          <h5 className="w-[33.28vw] mt-[50px] text-poppins text-white text-justify text-[18px] text-shadow-md">
            Use our cutting-edge technology to learn and unlock endless
            possibilities through real estate. Find out real estate investments
            tailored solely for your needs."
          </h5>
        </div>

        <div className="Tombol ml-[6.25vw] mt-[50px] flex flex-row">
          <Link
            href="/Trending"
            className="w-[11.75vw] h-auto aspect-[228/47] button mr-[1vw] bg-[#2E3362] flex flex-col items-center justify-center text-white font-poppins font-semibold text-[14px] rounded-[15px]"
          >
            Explore Properties
          </Link>
          <Link
            href="/about"
            className="w-[7.45vw] h-auto aspect-[143/47] button border-white border-[3px] flex flex-col items-center justify-center text-white font-poppins font-semibold text-[14px] rounded-[15px]"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="Trending px-[4.16vw]" id="Trending">
        <div className="Title mt-[40px]">
          <h2 className="text-poppins font-semibold text-[43px]">Trending</h2>

          <div className="mt-[20px] flex justify-between">
            <h4 className="text-poppins text-[25px]">
              Explore trending properties
            </h4>
            <h4 className="flex items-center text-poppins text-[25px] font-medium">
              More
              <span className="ml-[1vw]">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-[4.16vw] pb-[8px] gap-[2vw] overflow-x-auto no-scrollbar mt-[40px] mb-[60px]">
        {properties.map((property, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-[30px] bg-[#FAFAFA] shadow-lg w-[18,75vw] h-auto aspect-[360/527] p-[2vw]"
          >
            <div className="w-[14.58vw] h-auto aspect-square relative">
              <Image
                alt={`Property ${index + 1}`}
                src={property.imgurl}
                fill={true}
              />
            </div>
            {/* <img src={property.imgurl} alt={`Property ${index + 1}`} /> */}
            <div className="w-[14.58vw] flex flex-row mt-[24px] justify-between">
              <h5 className="text-poppins text-[18px]">{property.Type}</h5>
              <h5 className="text-poppins text-[18px]">{property.Price}</h5>
            </div>
            <p className="w-[14.58vw] mt-[10px] text-[#C8C8C8] font-poppins text-base font-medium text-justify text-[14px] text-poppins">
              {property.Addres}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#EFF2FA] w-full h-auto aspect-[1920/812] flex justify-between">
        <div className="Title ml-[4.16vw] pt-[110px] w-[44.68vw]">
          <h2 className="text-poppins text-[42px]">
            Smart Investment Decisions
          </h2>
          <p className="text-[#212653] mt-[40px] w-[44.16vw] text-poppins text-[15px] text-justify">
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
        <div className="w-[50.37vw] h-auto aspect-[967/812] relative">
          <Image alt="Smart Investment" src={smart} fill={true} />
        </div>
      </div>

      <div className="bg-[#FFF] w-full h-auto aspect-[1920/812] flex justify-between">
        <div className="w-[50.37vw] h-auto aspect-[967/812] relative">
          <Image alt="Smart Investment" src={smartF} fill={true} />
        </div>
        <div className="Title mr-[4.16vw] pt-[110px] w-[44.68vw]">
          <h2 className="text-poppins text-[42px]">
            Smart Investment Decisions
          </h2>
          <p className="text-[#212653] mt-[40px] w-[44.16vw] text-poppins text-[15px] text-justify">
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
