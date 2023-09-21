"use client";
import Image from "next/image";
import "./page.css";

import kios from "@/../public/kios.svg";
import pc from "@/../public/pc.svg";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('../assets/gedung.svg')] w-full bg-cover origin-center h-[480px] flex flex-col justify-center items-center">
        <h1>Invest Easier</h1>
        <h5>Pick our services suited for your needs</h5>
      </div>
      <div className="bg-slate-100 flex justify-center items-center gap-52 px-52 py-20">
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <h3>Marketplace</h3>
          <Image src={kios} alt="Kios" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum non risus sed finibus.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <h3>Simulation</h3>
          <Image src={pc} alt="PC" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum non risus sed finibus.
          </p>
        </div>
      </div>
    </main>
  );
}
