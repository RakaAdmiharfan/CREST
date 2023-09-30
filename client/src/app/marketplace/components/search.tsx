"use client";

import faqData from "@/data/faq.json";
import { useState, ChangeEvent } from "react";
import Image from "next/image";

import search from "@/../public/images/search.svg";

export type SearchProps = {
  onSearch: (value: string) => void;
};

export default function Search(props: SearchProps) {
  const { onSearch } = props;
  const [value, setValue] = useState("Search...");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="relative w-[77.2vw] lg:w-[68vw] text-gray-600 flex flex-row aspect-[278/21] lg:aspect-[1345/60] bg-white rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-poppins">
      <button className="w-[2.6vw] lg:w-[1.3vw] h-auto aspect-square relative mx-[2vw] lg:mx-[1vw] z-10 flex justify-center items-center">
        <Image alt="Search" src={search} fill={true} />
      </button>
      <input
        type={"search"}
        name={"search"}
        placeholder={"Search..."}
        className="bg-white flex w-full rounded-[5px] lg:rounded-[10px] absolute aspect-[278/21] lg:aspect-[1450/60] pl-[6vw] lg:pl-[3vw] focus:outline-none"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
