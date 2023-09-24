import Image from "next/image";

import house from "@/../public/images/faq.svg";
import abu from "@/../public/images/about_abu.svg";
import yellow from "@/../public/images/about_yellow.svg";
import yellow2 from "@/../public/images/about_yellow2.svg";

import Profile from "./components/profile";

export default function About() {
  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden">
      <div className="flex flex-row pb-[60px] xl:pb-[60px] lg:pb-[20px] pt-[75px] xl:pt-[75px] lg:pt-[60px] justify-between relative">
        <div className="w-[50vw] h-auto aspect-square py-[1vw] relative flex pl-[7.8vw]">
          <div className="w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="w-[34.74vw] h-auto aspect-[667/708] ml-[-18.81vw] absolute bottom-[15px] xl:bottom-[15px] lg:bottom-[15px]">
            <Image alt="About" src={abu} fill={true} />
          </div>
        </div>
        <div className="w-[50vw] h-auto aspect-square relative flex flex-row-reverse pr-[3vw]">
          <div className="flex flex-col justify-center w-[34.74vw]">
            <text className="text-[#1E2351] font-bold text-[45px] xl:text-[45px] lg:text-[37px] mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              WHY CHOOSE US
            </text>
            <text className="text-black text-[18px] xl:text-[18px] lg:text-[15px] mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              interdum non risus sed finibus. Curabitur mattis arcu justo, eget
              euismod tellus tincidunt ac. Etiam nulla ex, lacinia vel nunc ac,
              pharetra dignissim purus. Duis ut rhoncus ante. Praesent vitae
              erat ut quam pellentesque porttitor eu ut ligula. Quisque porta
              nisl vel augue fringilla posuere. Fusce vitae ligula suscipit,
              lacinia sapien.
            </text>
          </div>
        </div>
      </div>

      <div className="bg-white w-[100vw] py-[140px] xl:py-[140px] lg:py-[115px] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-[15.23vw] h-auto aspect-[292.5/378.6] absolute top-[-50px] xl:top-[-50px] lg:top-[-35px] left-[-5vw] z-10">
          <Image alt="About Yellow" src={yellow} fill={true} />
        </div>
        <div className="w-[28.75vw] h-auto aspect-[552/398] absolute top-[-50px] xl:top-[-50px] lg:top-[-35px] right-[-10vw] z-10">
          <Image alt="About Yellow" src={yellow2} fill={true} />
        </div>
        <div className="w-[52.5vw] flex flex-col justify-center items-center mb-[40px]">
          <text className="text-[#1E2351] font-bold text-[45px] xl:text-[45px] lg:text-[37px] mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins">
            WHO WE ARE
          </text>
          <text className="text-black text-[16px] xl:text-[16px] lg:text-[13px] mb-[30px] xl:mb-[30px] lg:mb-[20px] text-poppins text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum non risus sed finibus. Curabitur mattis arcu justo, eget
            euismod tellus tincidunt ac. Etiam nulla ex, lacinia vel nunc ac,
            pharetra dignissim purus. Duis ut rhoncus ante. Praesent vitae erat
            ut quam pellentesque porttitor eu ut ligula. Quisque porta nisl vel
            augue fringilla posuere. Fusce vitae ligula suscipit, lacinia
            sapien.
          </text>
        </div>
        <div className="flex flex-col w-[66vw] h-auto aspect-[1258/794] items-center justify-between">
          <div className="flex flex-row justify-between w-full h-auto aspect-[1258/357]">
            <Profile name={"Amjad"} />
            <Profile name={"Nicholas"} />
            <Profile name={"Johan"} />
          </div>
          <div className="flex flex-row justify-between w-[40.2vw] h-auto aspect-[772/357]">
            <Profile name={"Iskandar"} />
            <Profile name={"Raka"} />
          </div>
        </div>
      </div>
    </main>
  );
}
