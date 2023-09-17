"use client";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="invest-easier h-[1000px] bg-no-repeat ">
        <div className="Tulisan Utama">
          <h1 className=""> Invest Easier</h1>
          <h5 className="w-[693px]">
            Use our cutting-edge technology to learn and unlock endless
            possibilities through real estate. Find out real estate investments
            tailored solely for your needs."
          </h5>
        </div>
        <div className="Tombol">
          <button className="button">Get Started</button>
          <button className="button">Learn More</button>
        </div>
      </div>
    </main>
  );
}
