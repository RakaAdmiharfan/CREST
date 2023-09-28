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
    // Add more properties here
  ]);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-content">
      <div className="title">
        <h2 className="text-poppins mb-4 mt-[140px] text-[#000] text-center">
          Manage Properties
        </h2>
      </div>
      <div className="Box ml-[32px] lg:ml-[300px]">
        <EditFormComponent />
      </div>
    </div>
  );
}
