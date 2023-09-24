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
      name: "Apartemen X Jkarta 1",
      address: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandun...",
    },
    {
      id: 2,
      name: "Apartemen X Jkarta 2",
      address: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandun...",
    },
    {
      id: 3,
      name: "Apartemen X Jkarta 3",
      address: "Jl. Ganesa No 10, Lebak Siliwangi, Coblong, Bandun...",
    },
    // Add more properties here
  ]);

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#EFF2FA] relative overflow-hidden w-full h-screen">
      <div className="Search">
        <h2 className="mb-4 mt-[140px] text-[#000] text-center text-poppins">
          Manage Properties
        </h2>
      </div>

      <div className="ml-[297px]">
        <div className="flex mb-[16px] rounded-[15px] bg-[#2E3362] w-[10.26vw] p-[10px] justify-center">
          <Link href="/editProp" className="">
            <h6 className="text-poppins font-semibold">Add Properties</h6>
          </Link>
        </div>

        <Search onSearch={setSearchTerm} />

        <div>
          <PropList
            data={filteredProperties}
            header={["ID", "Nama", "Alamat", "Edit"]}
          />
          <Pagination
            current={function (x: number): void | undefined {
              throw new Error("Function not implemented.");
            }}
            totalPages={0}
          />
        </div>
      </div>
    </div>
  );
}
