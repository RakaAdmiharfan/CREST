import Image from "next/image";

import house from "@/../public/images/faq.svg";
import abu from "@/../public/images/about_abu.svg";
import yellow from "@/../public/images/about_yellow.svg";
import yellow2 from "@/../public/images/about_yellow2.svg";

export default function Faq() {
  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden">
      <div className="flex flex-row pb-[60px] pt-[140px] justify-between relative">
        <div className="w-[50vw] h-auto aspect-square py-[1vw] relative flex pl-[3vw]">
          <div className="w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="w-[34.74vw] h-auto aspect-[667/708] ml-[-18.81vw] absolute bottom-[15px]">
            <Image alt="About" src={abu} fill={true} />
          </div>
        </div>
        <div className="w-[50vw] h-auto aspect-square relative flex pr-[3vw] items-center justify-center">
          <div className="flex flex-col justify-center w-[34.74vw]">
            <text className="text-[#1E2351] font-bold text-[45px] mb-[30px] text-poppins">
              WHY CHOOSE US
            </text>
            <text className="text-black text-[18px] mb-[30px] text-poppins">
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

      <div className="bg-white w-[100vw] h-auto aspect-[1920/1227] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-[15.23vw] h-auto aspect-[292.5/378.6] absolute top-[-50px] left-[-5vw] z-10">
          <Image alt="About Yellow" src={yellow} fill={true} />
        </div>
        <div className="w-[28.75vw] h-auto aspect-[552/398] absolute top-[-50px] right-[-10vw] z-10">
          <Image alt="About Yellow" src={yellow2} fill={true} />
        </div>
        <div className="w-[52.5vw] flex flex-col justify-center items-center">
          <text className="text-[#1E2351] font-bold text-[45px] mb-[20px] text-poppins">
            WHO WE ARE
          </text>
          <text className="text-black text-[16px] mb-[30px] text-poppins text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum non risus sed finibus. Curabitur mattis arcu justo, eget
            euismod tellus tincidunt ac. Etiam nulla ex, lacinia vel nunc ac,
            pharetra dignissim purus. Duis ut rhoncus ante. Praesent vitae erat
            ut quam pellentesque porttitor eu ut ligula. Quisque porta nisl vel
            augue fringilla posuere. Fusce vitae ligula suscipit, lacinia
            sapien.
          </text>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </main>
  );
}
