"use client";

import Link from "next/link";
import React, { useState } from "react";

function PropList({ data, header }: { data: any[]; header: any[] }) {
  return (
    <div className="mt-[30px] w-[70vw]">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item) => {
              return (
                <th className="w-auto h-auto font-poppins text-black text-left pb-[8px]">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="border-b-[1px] border-black border-opacity-30"
              >
                {Object.values(item).map((isi: any) => {
                  return <td className="w-auto h-auto py-[18.5px]">{isi}</td>;
                })}
                <td className=" w-auto h-auto py-[18.5px]">
                  <Link
                    href="/editProp"
                    className="flex rounded-[15px] w-[04.94vw] px-[1px] py-[5px] justify-center border-[#6C88CD] border-[3px]"
                  >
                    <h6 className="text-[#6C88CD] font-poppins">Edit</h6>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PropList;
