import Image from "next/image";
import Question from "./components/question";

import house from "@/../public/images/faq.svg";

export default function Faq() {
  return (
    <main className="bg-[#EFF2FA] h-[124vh] relative">
      <div className="flex flex-row pt-[170px] mx-[59px] space justify-between relative">
        <div className="w-[46vw] h-auto aspect-square relative">
          <Image alt="House" src={house} fill={true} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#1E2351] font-bold text-[80px] mb-[10px]">
            FAQ
          </h1>
          <Question />
        </div>
      </div>
    </main>
  );
}
