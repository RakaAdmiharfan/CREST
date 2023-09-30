"use client";
import Link from "next/link";
import React, { useState } from "react";
import EditFormComponent from "./components/editForm";
import properties from "../ManageProp/page";
import { useRouter } from "next/router";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  interface paramId {
    params: { id: number };
  }

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
