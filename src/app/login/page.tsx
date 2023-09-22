import Image from "next/image";
import LoginForm from "./components/loginform";
import Link from "next/link";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function Faq() {
  return (
    <div className="bg-white relative w-[100vw] overflow-hidden pt-[90px]">
      <div className="flex flex-row w-full">
        <div className="w-[50vw] h-auto aspect-[960/1000] relative flex items-center justify-center">
          <div className="w-[50vw] h-full absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="z-10 flex justify-center flex-col items-center">
            <text className="text-[40px] text-white font-semibold mb-[30px] text-poppins">
              New here?
            </text>
            <text className="w-[28.85vw] text-[24px] font-medium mb-[40px] text-center text-poppins text-white">
              Sign Up to enjoy our signature AI prediction technology
            </text>
            <Link
              className="bg-[#2E3362] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/signup"
            >
              <text className="text-white font-bold text-[12px] text-poppins">
                Sign Up
              </text>
            </Link>
          </div>
        </div>

        <div className="w-[50vw] h-auto aspect-[960/1000] relative flex items-center justify-center">
          <div className="w-[39.6vw] h-auto aspect-[760/696] flex flex-col">
            <text className="font-medium text-[27px] mb-[25px] text-poppins">
              Welcome back!
            </text>
            <text className="font-medium text-[14px] mb-[60px] text-poppins">
              Log onto your account by filling your account information
            </text>
            <LoginForm />
            <div className="w-full mt-[35px] flex justify-between items-center">
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
              <p className="font-medium text-[16px] text-poppins">or</p>
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-full mt-[35px] flex justify-center">
              <button className="w-[14.375vw] h-auto aspect-[276/47] border-[3px] text-[#2E3362] border-[#2E3362] rounded-[15px] flex justify-center items-center">
                <div className="w-[1.25vw] h-auto aspect-square relative mr-[0.83vw]">
                  <Image alt="Google" src={google} fill={true} />
                </div>
                <text className="text-[#2E3362] font-bold text-[12px] text-poppins">
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
