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
      <div className="bg-slate-100 min-h-[100vh] lg:h-[100vh] pt-[50px] xl:pt-[50px] lg:pt-[40px] pb-[30px] xl:pb-[60px] lg:pb-[50px] ">
        <div className="w-[full] h-auto aspect-[360/230] lg:aspect-[1920/476] flex flex-col justify-center items-center z-10">
          <div className="w-full h-auto aspect-[360/230] lg:aspect-[1920/476] absolute bg-black z-10 opacity-40"></div>
          <div className="absolute w-full h-auto aspect-[360/230] lg:aspect-[1920/476]">
            <Image
              src={gedung}
              fill={true}
              alt={"Invest Background"}
              objectFit="cover"
            ></Image>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="z-10 text-shadow text-white text-[50px] sm:text-[65px] md:text-[80px] xl:text-[75px] lg:text-[60px] text-montserrat">
              Invest
            </h1>
            <h5 className="z-10 text-shadow text-[14px] sm:text-[17px] md:text-[20px] xl:text-[18px] lg:text-[15px] text-poppins text-white text-justify">
              Pick our services suited for your needs
            </h5>
          </div>
        </div>

        <div className="flex bg-slate-100 flex-col-reverse lg:flex-row items-center justify-between px-[8.8vw] lg:px-[10.88vw] mt-[20px] sm:mt-[0px] md:mt-[0px] xl:mt-[45px] lg:mt-[35px] z-20">
          <Link
            href="/marketplace"
            className="w-[82.4vw] lg:w-[33.9vw] mt-[20px] sm:mt-[20px] md:mt-[-20px] lg:mt-[0px] h-auto aspect-[289/191] lg:aspect-[651/430] flex flex-col hover:bg-gray-100 justify-center items-center text-center rounded-[20px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] gap-[14px] sm:gap-[17px] md:gap-[20px] xl:gap-8 lg:gap-[22px] z-40"
          >
            <h3 className="text-black text-[23px] sm:text-[28px] md:text-[34px] xl:text-[38px] lg:text-[30px] font-semibold text-poppins">
              Marketplace
            </h3>
            <div className="w-[19.7vw] lg:w-[8.33vw] h-auto aspect-square relative">
              <Image alt="Kios" src={kios} fill={true} />
            </div>
            {/* <Image src={kios} alt="Kios" /> */}
            <p className="w-[75vw] lg:w-auto text-poppins text-[12px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.{" "}
            </p>
          </Link>
          <Link
            href="/simulasi"
            className="w-[82.4vw] lg:w-[33.9vw] h-auto aspect-[289/191] lg:aspect-[651/430] flex flex-col hover:bg-gray-100 justify-center items-center text-center  rounded-[20px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] gap-[14px] sm:gap-[17px] md:gap-[20px] xl:gap-8 lg:gap-[22px] z-40"
          >
            <h3 className="text-black text-[23px] sm:text-[28px] md:text-[34px] xl:text-[38px] lg:text-[30px] font-semibold text-poppins">
              Simulation
            </h3>
            <div className="w-[19.7vw] lg:w-[8.33vw] h-auto aspect-square relative">
              <Image alt="PC" src={pc} fill={true} />
            </div>
            {/* <Image src={pc} alt="PC" /> */}
            <p className="w-[75vw] lg:w-auto text-poppins text-[12px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
