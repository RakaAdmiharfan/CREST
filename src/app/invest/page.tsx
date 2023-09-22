"use client";
import Image from "next/image";
import Link from "next/link";

import kios from "@/../public/images/kios.svg";
import pc from "@/../public/images/pc.svg";
import gedung from "@/../public/images/gedungInvest.svg";

// shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]

export default function Home() {
  return (
    <main>
      <div className="bg-slate-100 pt-[90px] pb-[60px] ">
        <div className="w-[full] h-auto aspect-[1920/476] flex flex-col justify-center items-center z-10">
          <div className="absolute w-full h-full">
            <Image src={gedung} fill={true} alt={"Invest Background"}></Image>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="z-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-white">
              Invest
            </h1>
            <h5 className="z-10 text-[24px] text-poppins text-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-justify">
              Pick our services suited for your needs
            </h5>
          </div>
        </div>

        <div className="flex bg-slate-100 flex-row items-center justify-between px-[10.88vw] mt-[55px] z-20">
          <div className="w-[33.9vw] h-auto aspect-[651/430] flex flex-col justify-center items-center text-center gap-8">
            <h3 className="text-black text-5xl font-semibold text-poppins">
              Marketplace
            </h3>
            <Link
              href="/marketplace"
              className="w-[8.33vw] h-auto aspect-square relative"
            >
              <Image alt="Kios" src={kios} fill={true} />
            </Link>
            {/* <Image src={kios} alt="Kios" /> */}
            <p className="text-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.{" "}
            </p>
          </div>
          <div className="w-[33.9vw] h-auto aspect-[651/430] flex flex-col justify-center items-center text-center gap-8">
            <h3 className="text-black text-5xl font-semibold text-poppins">
              Simulation
            </h3>
            <Link
              href="/simulasi"
              className="w-[8.33vw] h-auto aspect-square relative"
            >
              <Image alt="PC" src={pc} fill={true} />
            </Link>
            {/* <Image src={pc} alt="PC" /> */}
            <p className="text-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.
            </p>
          </div>
        </div>
        {/* <div className="bg-slate-100 flex justify-center items-center gap-52 px-52 py-20">
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
      </div> */}
      </div>
    </main>
  );
}
