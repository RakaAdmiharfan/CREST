import Image from "next/image";
import ChangePasswordForm from "./components/changepasswordform";
import Link from "next/link";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function ChangePassword() {
  return (
    <div className="bg-white relative pt-[0px] xl:pt-[57px] lg:pt-[54px] w-[100vw] min-h-[100vh] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row w-full h-auto aspect-auto lg:aspect-[1920/1000]">
        <div className="w-[100vw] lg:w-[50vw] h-full pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[0px] relative flex items-center justify-center">
          <div className="w-[82.2vw] lg:w-[39.6vw] h-auto aspect-auto lg:aspect-[760/696] flex flex-col mt-[10px] sm:mt-[15px] md:mt-[20px]">
            <text className="font-medium text-[20px] sm:text-[28px] md:text-[36px] xl:text-[27px] lg:text-[20px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Forgot Your Password?
            </text>
            <text className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[14px] lg:text-[11px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[60px] lg:mb-[30px] text-poppins text-[#000000]">
              Change it by filling the information below
            </text>
            <ChangePasswordForm />
          </div>
        </div>
        <div className="hidden lg:flex w-[50vw] h-[100vh] aspect-[360/300] absolute bg-black z-10 opacity-60 right-0"></div>
        <div className="w-[100vw] lg:w-[50vw] h-auto lg:h-[100vh] aspect-[360/300] lg:aspect-auto relative lg:absolute lg:right-0">
          <Image alt="House" src={house} fill={true} objectFit="cover" />
        </div>

        <div className="hidden w-[50vw] h-full relative lg:flex items-center justify-center">
          <div className="z-10 flex justify-center flex-col items-center">
            <text className="text-[40px] xl:text-[40px] lg:text-[32px] text-white text-shadow font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              Change Your Mind?
            </text>
            <text className="w-[28.85vw] text-[24px] xl:text-[24px] lg:text-[18px] text-white text-shadow font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins">
              Return to the homepage with the button below
            </text>
            <Link
              className="bg-[#2E3362] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Return
              </text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
