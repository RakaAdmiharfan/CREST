"use client";
import Link from "next/link";
import React, { useState } from "react";
// import inputBox  from './components/inputBox';

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([
    { id: 1, name: "Property 1", address: "Address 1" },
    { id: 2, name: "Property 2", address: "Address 2" },
    { id: 3, name: "Property 3", address: "Address 3" },
    // Add more properties here
  ]);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-screen">
      <div className="title">
        <h2 className="text-poppins mb-4 mt-[140px] text-[#000] text-center">
          Manage Properties
        </h2>
      </div>
      <div className="Nama Properti ml-[300px]">
        <div>
          <h5 className="text-poppins font-medium mb-[20px]">Nama Properti</h5>
          <div className="relative w-[68.75vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px]">
            <input
              type="Nama Properti"
              name="Nama Properti"
              placeholder={"Nama Properti"}
              className="bg-[#fff] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px] py-[10px] pr-[20px] pl-[20px]"
            />
          </div>
        </div>

        <div className="Alamat mt-[20px]">
          <h5 className="text-poppins mb-[20px]">Alamat</h5>
          <div className="relative w-[68.75vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
            <input
              type="Alamat"
              name="Alamat"
              placeholder={"Alamat"}
              className="bg-[#fff] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
            />
          </div>
        </div>

        <div className="Latitude Longitude mt-[20px] flex flex-row">
          <div className="Latitude mr-[40px]">
            <h5 className="text-poppins mb-[20px]">Latitude</h5>
            <div className="relative w-[33.22vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
              <input
                type="Latitude"
                name="Latitude"
                placeholder={"Latitude"}
                className="bg-[#fff] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
              />
            </div>
          </div>

          <div className="Longitude">
            <h5 className="text-poppins mb-[20px]">Longitude</h5>
            <div className="relative w-[33.22vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
              <input
                type={"Longitude"}
                name={"Longitude"}
                placeholder={"Longitude"}
                className="bg-[#FFF] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
              />
            </div>
          </div>
        </div>

        <div className="Price Multiplier Tipe mt-[20px] flex flex-row">
          <div className="Base Price mr-[40px]">
            <h5 className="text-poppins mb-[20px]">Base Price</h5>
            <div className="relative w-[18.95vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
              <input
                type="Base Price"
                name="Base Price"
                placeholder={"Base Price"}
                className="bg-[#fff] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
              />
            </div>
          </div>

          <div className="Multiplier mr-[40px]">
            <h5 className="text-poppins mb-[20px]">Multiplier</h5>
            <div className="relative w-[11.97vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
              <input
                type={"Multiplier"}
                name={"Multiplier"}
                placeholder={"Multiplier"}
                className="bg-[#FFF] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
              />
            </div>
          </div>

          <div className="Tipe">
            <h5 className="text-poppins mb-[20px]">Tipe</h5>
            <div className="relative w-[33.22vw] h-[50px] flex flex-row bg-[#FFF] rounded-[10px] py-[10px] pr-[20px] pl-[20px]">
              <input
                type="Tipe"
                name="Tipe"
                placeholder={"Tipe"}
                className="bg-[#fff] flex w-full focus:outline-none text-[#ADADAD] rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
