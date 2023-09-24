import Image from "next/image";
import LoginForm from "./components/loginform";
import Link from "next/link";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function Faq() {
  return (
    <div className="bg-white relative w-[100vw] h-[100vh] overflow-hidden pt-[57px] xl:pt-[57px] lg:pt-[54px]">
      <div className="flex flex-row w-full">
        <div className="w-[50vw] h-auto aspect-[960/1000] relative flex items-center justify-center">
          <div className="w-[50vw] h-[100vh] absolute">
            <Image alt="House" src={house} fill={true} objectFit="cover" />
          </div>
          <div className="z-10 flex justify-center flex-col items-center">
            <text className="text-[40px] xl:text-[40px] lg:text-[32px] text-white font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              New here?
            </text>
            <text className="w-[28.85vw] text-[24px] xl:text-[24px] lg:text-[18px] font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins text-white">
              Sign Up to enjoy our signature AI prediction technology
            </text>
            <Link
              className="bg-[#2E3362] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/signup"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Sign Up
              </text>
            </Link>
          </div>
        </div>

        <div className="w-[50vw] h-auto aspect-[960/1000] relative flex items-center justify-center">
          <div className="w-[39.6vw] h-auto aspect-[760/696] flex flex-col">
            <text className="font-medium text-[27px] xl:text-[27px] lg:text-[22px] mb-[25px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Welcome back!
            </text>
            <text className="font-medium text-[14px] xl:text-[14px] lg:text-[12px] mb-[60px] xl:mb-[60px] lg:mb-[45px] text-poppins">
              Log onto your account by filling your account information
            </text>
            <LoginForm />
            <div className="w-full mt-[35px] xl:mt-[35px] lg:mt-[25px] flex justify-between items-center">
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
              <p className="font-medium text-[16px] text-poppins">or</p>
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-full mt-[35px] xl:mt-[35px] lg:mt-[25px] flex justify-center">
              <button className="w-[14.375vw] h-auto aspect-[276/47] border-[3px] text-[#2E3362] border-[#2E3362] rounded-[15px] flex justify-center items-center">
                <div className="w-[1.25vw] h-auto aspect-square relative mr-[0.83vw]">
                  <Image alt="Google" src={google} fill={true} />
                </div>
                <text className="text-[#2E3362] font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                  Sign in with Google
                </text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
