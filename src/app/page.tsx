"use client";
import Image from "next/image";
import "./page.css";
import "./globals.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useRef, useState } from "react";
import Link from "next/link";

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
      <div className="invest-easier h-[801.5px] overflow-hidden bg-no-repeat">
        <div className="Tulisan Utama ml-[120px] mt-[156px] font-morserat">
          <h1 className=""> Invest Easier</h1>
          <h5 className="w-[560px] mt-[68px] font-poppins text-white text-justify text-shadow-md">
            Use our cutting-edge technology to learn and unlock endless
            possibilities through real estate. Find out real estate investments
            tailored solely for your needs."
          </h5>
        </div>

        <div className="Tombol ml-[120px] mt-[100px]">
          <Link
            href="/Trending"
            className="button mr-[30px] bg-[#2E3362] py-[10px] px-[30px] text-white font-poppins font-semibold text-lg rounded-[15px]"
          >
            Explore Properties
          </Link>
          <Link
            href="/about"
            className="button border-white border-[3px] text-white font-poppins font-semibold text-lg py-[10px] px-[30px] rounded-[15px]"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="Trending ml-[80px]" id="Trending">
        <div className="Title mt-[80px]">
          <h2>Trending</h2>

          <div className="mt-[24px] flex justify-between">
            <h4>Explore trending properties</h4>
            <h4 className="flex items-center mr-[80px]">
              More
              <span className="text-lg mt-[7  px] ml-[20px]">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-20 gap-10 overflow-x-auto no-scrollbar mt-[48px] mb-[60px]">
        {properties.map((property, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-[30px] bg-[#FAFAFA] shadow-lg p-10 gap-[32px] w-[18,75vw] h-auto aspect-[360/527]"
          >
            <img src={property.imgurl} alt={`Property ${index + 1}`} />
            <div className="flex flex-row mt-[32px] justify-between">
              <h5>{property.Type}</h5>
              <h5>{property.Price}</h5>
            </div>
            <p className="mt-[10px] text-[#C8C8C8] font-poppins text-base font-medium w-[17.5vw] text-justify">
              {property.Addres}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#EFF2FA] h-[629px] flex justify-between">
        <div className="Title ml-[80px] pt-[120px] w-[44.68vw]">
          <h2>Smart Investment Decisions</h2>
          <p className="text-[#212653] mt-[60px] w-[44.16vw] text-justify">
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
        <div className="mw-[50.38vw]">
          <img src="/Home/smart.svg" alt="Smart Investment" />
        </div>
      </div>

      <div className="bg-[#FFF] h-[629px] flex justify-between">
        <div className="w-[50.38vw]">
          <img src="/Home/smartF.svg" alt="Smart Investment" />
        </div>
        <div className="Title mr-[102px] pt-[120px]  w-[44.68vw]">
          <h2>Smart Investment Decisions</h2>
          <p className="text-[#212653] mt-[60px] w-[44.16vw] text-justify">
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
