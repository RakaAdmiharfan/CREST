"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState } from "react";
import Search from "./components/search";
import PropList from "./components/propList";
import Pagination from "./components/pagination";

export default function PropertyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState([
    {
      id: 1,
      namaProperti: "Apartemen X Jkarta 1",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 1",
      Longitude: "Longitude 1",
      BasePrice: "Base Price 1",
      Multiplier: "Multiplier 1",
      Tipe: "Tipe 1",
      DeskripsiBisnis: "Deskripsi Bisnis 1",
      DeskripsiPribadi: "Deskripsi Pribadi 1",
    },
    {
      id: 2,
      namaProperti: "Apartemen X Jkarta 2",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 2",
      Longitude: "Longitude 2",
      BasePrice: "Base Price 2",
      Multiplier: "Multiplier 2",
      Tipe: "Tipe 2",
      DeskripsiBisnis: "Deskripsi Bisnis 2",
      DeskripsiPribadi: "Deskripsi Pribadi 2",
    },
    {
      id: 3,
      namaProperti: "Apartemen X Jkarta 3",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 3",
      Longitude: "Longitude 3",
      BasePrice: "Base Price 3",
      Multiplier: "Multiplier 3",
      Tipe: "Tipe 3",
      DeskripsiBisnis: "Deskripsi Bisnis 3",
      DeskripsiPribadi: "Deskripsi Pribadi 3",
    },
    {
      id: 4,
      namaProperti: "Apartemen X Jkarta 4",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 4",
      Longitude: "Longitude 4",
      BasePrice: "Base Price 4",
      Multiplier: "Multiplier 4",
      Tipe: "Tipe 4",
      DeskripsiBisnis: "Deskripsi Bisnis 4",
      DeskripsiPribadi: "Deskripsi Pribadi 4",
    },
    {
      id: 5,
      namaProperti: "Apartemen X Jkarta 5",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 5",
      Longitude: "Longitude 5",
      BasePrice: "Base Price 5",
      Multiplier: "Multiplier 5",
      Tipe: "Tipe 5",
      DeskripsiBisnis: "Deskripsi Bisnis 5",
      DeskripsiPribadi: "Deskripsi Pribadi 5",
    },
    {
      id: 6,
      namaProperti: "Apartemen X Jkarta 6",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 6",
      Longitude: "Longitude 6",
      BasePrice: "Base Price 6",
      Multiplier: "Multiplier 6",
      Tipe: "Tipe 6",
      DeskripsiBisnis: "Deskripsi Bisnis 6",
      DeskripsiPribadi: "Deskripsi Pribadi 6",
    },
    {
      id: 7,
      namaProperti: "Apartemen X Jkarta 7",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 7",
      Longitude: "Longitude 7",
      BasePrice: "Base Price 7",
      Multiplier: "Multiplier 7",
      Tipe: "Tipe 7",
      DeskripsiBisnis: "Deskripsi Bisnis 7",
      DeskripsiPribadi: "Deskripsi Pribadi 7",
    },
    {
      id: 8,
      namaProperti: "Apartemen X Jkarta 8",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 8",
      Longitude: "Longitude 8",
      BasePrice: "Base Price 8",
      Multiplier: "Multiplier 8",
      Tipe: "Tipe 8",
      DeskripsiBisnis: "Deskripsi Bisnis 8",
      DeskripsiPribadi: "Deskripsi Pribadi 8",
    },
    {
      id: 9,
      namaProperti: "Apartemen X Jkarta 9",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 9",
      Longitude: "Longitude 9",
      BasePrice: "Base Price 9",
      Multiplier: "Multiplier 9",
      Tipe: "Tipe 9",
      DeskripsiBisnis: "Deskripsi Bisnis 9",
      DeskripsiPribadi: "Deskripsi Pribadi 9",
    },
    {
      id: 10,
      namaProperti: "Apartemen X Jkarta 10",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 10",
      Longitude: "Longitude 10",
      BasePrice: "Base Price 10",
      Multiplier: "Multiplier 10",
      Tipe: "Tipe 10",
      DeskripsiBisnis: "Deskripsi Bisnis 10",
      DeskripsiPribadi: "Deskripsi Pribadi 10",
    },
    {
      id: 11,
      namaProperti: "Apartemen X Jkarta 11",
      Alamat: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandung...",
      Latitude: "Latitude 11",
      Longitude: "Longitude 11",
      BasePrice: "Base Price 11",
      Multiplier: "Multiplier 11",
      Tipe: "Tipe 11",
      DeskripsiBisnis: "Deskripsi Bisnis 11",
      DeskripsiPribadi: "Deskripsi Pribadi 11",
    },
  ]);

  const filteredProperties = properties.filter((property) =>
    property.namaProperti.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="flex rounded-[9.046px] lg:rounded-[15px] bg-[#2E3362] justify-center w-[119px] mb-[11px] px-[18px] py-[6px] lg:mb-[16px] lg:w-[10.26vw] lg:p-[10px]">
          <Link
            href={{
              pathname: "/editProp",
              query: { id: "new" },
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
