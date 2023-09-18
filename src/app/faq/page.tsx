import Image from "next/image";
import Question from "./components/question";

export default function Faq() {
  return (
    <main className="bg-[#EFF2FA] relative">
      <div className="flex flex-row mt-[36px] mx-[59px] space justify-between">
        <div className="w-[48.28vw] h-auto aspect-square relative">
          <Image alt="House" src="/public/images/faq.svg" fill={true} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#1E2351] font-bold text-[96px]">FAQ</h1>
          <Question />
        </div>
      </div>
    </main>
  );
}
