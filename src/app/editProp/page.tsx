"use client";
import Link from "next/link";
import React, { useState } from "react";
import EditFormComponent from "./components/editForm";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([
    { id: 1, name: "Property 1", address: "Address 1" },
    { id: 2, name: "Property 2", address: "Address 2" },
    { id: 3, name: "Property 3", address: "Address 3" },
    { id: 4, name: "Property 4", address: "Address 4" },
    { id: 5, name: "Property 5", address: "Address 5" },
    { id: 6, name: "Property 6", address: "Address 6" },
    { id: 7, name: "Property 7", address: "Address 7" },
    { id: 8, name: "Property 8", address: "Address 8" },
    // Add more properties here
  ]);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-content">
      <div className="title">
        <h2 className="text-poppins mb-[24px] lg:mb-[32px] mt-[70px] lg:mt-[140px] text-[28px] lg:text-[60px] text-[#000] text-center">
          Manage Properties
        </h2>
      </div>
      <div className="Box ml-[32px] lg:ml-[300px]">
        <EditFormComponent />
      </div>
    </div>
  );
}
