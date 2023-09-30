"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState } from "react";
import Search from "./components/search";
import PropList from "./components/propList";
import Pagination from "./components/pagination";
import { properties } from "./components/properties";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.nama_properti.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman

  // Hitung jumlah halaman
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Filter properti berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProperties = properties.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-full">
      <div className="Search">
        <h2 className="text-[#000] text-center text-poppins text-[28px] mt-[70px] lg:text-[60px] lg:mt-[140px] lg:mb-4">
          Manage Properties
        </h2>
      </div>

      <div className="ml-[5vw] lg:ml-[15.46vw] mt-[20px]">
        <div className="flex rounded-[9.046px] lg:rounded-[15px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#2E3362] justify-center w-[119px] mb-[11px] px-[18px] py-[6px] lg:mb-[16px] lg:w-[10.26vw] lg:p-[10px]">
          <Link
            href={{
              pathname: "/editProp",
            }}
            className=""
          >
            <h6 className="text-poppins font-semibold text-[10.856px] lg:text-[14px]">
              Add Properties
            </h6>
          </Link>
        </div>

        <Search onSearch={setSearchTerm} />

        <div className="max-h-[600px] overflow-y-auto no-scrollbar">
          <PropList
            data={filteredProperties}
            header={["ID", "Nama", "Alamat", "Edit"]}
          />
          {/* <Pagination current={handlePageChange} totalPages={totalPages} /> */}
        </div>
      </div>
    </div>
  );
}
