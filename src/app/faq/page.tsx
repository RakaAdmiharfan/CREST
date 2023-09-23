import Image from "next/image";
import Question from "./components/question";

import house from "@/../public/images/faq.svg";

export default function Faq() {
  return (
    <main className="bg-[#EFF2FA] relative overflow-hidden min-h-[100vh]">
      <div className="flex flex-row pt-[75px] justify-between relative">
        <div className="w-[50vw] h-auto aspect-square py-[1vw] relative flex pl-[3vw]">
          <div className="w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
        </div>
        <div className="w-[50vw] h-auto aspect-square relative flex pr-[3vw] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#1E2351] font-bold text-[80px] mb-[10px] text-montserrat">
              FAQ
            </h1>
            <Question />
          </div>
        </div>
      </div>
    </main>
  );
}
