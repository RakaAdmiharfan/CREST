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
    <div className="relative w-[70vw] h-[60px] flex flex-row bg-[#E0E3EB] rounded-[10px]">
      <button className="w-[1.3vw] h-auto aspect-square relative mx-[1vw] z-10 ">
        <Image alt="Search" src={search} fill={true} />
      </button>
      <input
        type={"search"}
        name={"search"}
        placeholder={"Search..."}
        className="bg-[#E0E3EB] flex w-full focus:outline-none text-[#2E3362] rounded-[10px]"
        onChange={searchHandler}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
