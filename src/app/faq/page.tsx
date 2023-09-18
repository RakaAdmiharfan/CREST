import Image from "next/image";
import Question from "./components/question";

import house from "@/../public/images/faq.svg";

export default function Faq() {
  return (
    <main className="bg-[#EFF2FA] relative h-[100vh]">
      <div className="flex flex-row mt-[36px] mx-[59px] space justify-between relative">
        <div className="w-[46vw] h-auto aspect-square relative">
          <Image alt="House" src={house} fill={true} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#1E2351] font-bold text-[80px]">FAQ</h1>
          <Question />
        </div>
      </div>
    </main>
  );
}
