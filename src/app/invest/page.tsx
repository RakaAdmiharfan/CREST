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
      <div className="bg-slate-100 h-[100vh] pt-[50px] xl:pt-[50px] lg:pt-[40px] pb-[60px] xl:pb-[60px] lg:pb-[50px] ">
        <div className="w-[full] h-auto aspect-[1920/476] flex flex-col justify-center items-center z-10">
          <div className="absolute w-full h-full">
            <Image src={gedung} fill={true} alt={"Invest Background"}></Image>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="z-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-white text-[75px] xl:text-[75px] lg:text-[60px] text-montserrat">
              Invest
            </h1>
            <h5 className="z-10 text-[18px] xl:text-[18px] lg:text-[15px] text-poppins text-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-justify">
              Pick our services suited for your needs
            </h5>
          </div>
        </div>

        <div className="flex bg-slate-100 flex-row items-center justify-between px-[10.88vw] mt-[45px] xl:mt-[45px] lg:mt-[35px] z-20">
          <div className="w-[33.9vw] h-auto aspect-[651/430] flex flex-col justify-center items-center text-center gap-8 xl:gap-8 lg:gap-[22px]">
            <h3 className="text-black text-[38px] xl:text-[38px] lg:text-[30px] font-semibold text-poppins">
              Marketplace
            </h3>
            <Link
              href="/marketplace"
              className="w-[8.33vw] h-auto aspect-square relative"
            >
              <Image alt="Kios" src={kios} fill={true} />
            </Link>
            {/* <Image src={kios} alt="Kios" /> */}
            <p className="text-poppins text-[16px] xl:text-[16px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.{" "}
            </p>
          </div>
          <div className="w-[33.9vw] h-auto aspect-[651/430] flex flex-col justify-center items-center text-center gap-8 xl:gap-8 lg:gap-[22px]">
            <h3 className="text-black text-[38px] xl:text-[38px] lg:text-[30px] font-semibold text-poppins">
              Simulation
            </h3>
            <Link
              href="/simulasi"
              className="w-[8.33vw] h-auto aspect-square relative"
            >
              <Image alt="PC" src={pc} fill={true} />
            </Link>
            {/* <Image src={pc} alt="PC" /> */}
            <p className="text-poppins text-[16px] xl:text-[16px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
