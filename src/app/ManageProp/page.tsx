"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState } from "react";
import Search from "./components/search";

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
    <div className="p-4 bg-[#EFF2FA] w-1920px">
      <div className="Search">
        <h2 className="mb-4 mt-[140px] text-[#000] text-center">
          Manage Properties
        </h2>
      </div>

      <div className="ml-[297px]">
        <div className="flex mb-[16px] rounded-[15px] bg-[#2E3362] w-[10.26vw] p-[10px] justify-center">
          <Link href="/" className="">
            <h6>Add Properties</h6>
          </Link>
        </div>

        <Search onSearch={setSearchTerm} />

        <div className="mt-[30px] vw-[]">
          <table className="w-full table-fixed border-spacing-1">
            <thead className="border-[3px]">
              <tr>
                <th className="w-1/6 font-poppins text-black">ID</th>
                <th className="w-2/6 font-poppins text-black">Nama Properti</th>
                <th className="w-2/6 font-poppins text-black">Alamat</th>
                <th className="w-1/6 font-poppins text-black">Edit</th>
              </tr>
            </thead>
            <tbody className="border-[3px]">
              {filteredProperties.map((property) => (
                <tr key={property.id}>
                  <td>{property.id}</td>
                  <td>{property.name}</td>
                  <td>{property.address}</td>
                  <td>
                    <button className="bg-blue-500 text-white p-2 rounded-md">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
