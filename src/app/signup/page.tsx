import Image from "next/image";
import RegisterForm from "./components/registerform";
import Link from "next/link";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function signup() {
  return (
    <div className="bg-white relative pt-[57px] xl:pt-[57px] lg:pt-[54px] w-[100vw] h-[100vh] overflow-hidden">
      <div className="flex flex-row w-full h-auto aspect-[1920/1000]">
        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[39.6vw] h-auto aspect-[760/696] flex flex-col">
            <text className="font-medium text-[27px] xl:text-[27px] lg:text-[20px] mb-[25px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Welcome!
            </text>
            <text className="font-medium text-[14px] xl:text-[14px] lg:text-[11px] mb-[60px] xl:mb-[60px] lg:mb-[30px] text-poppins text-[#000000]">
              Sign up for an account by filling the required information
            </text>
            <RegisterForm />
            <div className="w-full mt-[35px] xl:mt-[35px] lg:mt-[25px] flex justify-between items-center">
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
              <text className="font-medium text-[16px] xl:text-[16px] lg:text-[14px]">
                or
              </text>
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-full mt-[35px] xl:mt-[35px] lg:mt-[25px] flex justify-center">
              <button className="w-[14.375vw] h-auto aspect-[276/47] border-[3px] text-[#2E3362] border-[#2E3362] rounded-[15px] flex justify-center items-center">
                <div className="w-[1.25vw] h-auto aspect-square relative mr-[0.83vw]">
                  <Image alt="Google" src={google} fill={true} />
                </div>
                <text className="text-[#2E3362] font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                  Sign Up with Google
                </text>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[50vw] h-full absolute">
            <Image alt="House" src={house} fill={true} objectFit="cover" />
          </div>
          <div className="z-10 flex justify-center flex-col items-center">
            <text className="text-[40px] xl:text-[40px] lg:text-[32px] text-white font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              Have an Account?
            </text>
            <text className="w-[28.85vw] text-[24px] xl:text-[24px] lg:text-[18px] text-white font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins">
              Log back into your account by clicking the button below
            </text>
            <Link
              className="bg-[#2E3362] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/login"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Log In
              </text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
