import Image from "next/image";
import LoginForm from "./components/loginform";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function Faq() {
  return (
    <div className="bg-white relative h-[100vh] w-[100vw] overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[50vw] h-full absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="z-10 flex justify-center flex-col items-center">
            <h1 className="text-[40px] text-white font-semibold mb-[30px]">
              New here?
            </h1>
            <h1 className="w-[28.85vw] text-[24px] text-white font-medium mb-[40px] text-center">
              Sign Up to enjoy our signature AI prediction technology
            </h1>
            <button className="bg-[#2E3362] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px]">
              <p className="text-white font-bold text-[14px]">Sign Up</p>
            </button>
          </div>
        </div>

        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[39.6vw] h-auto aspect-[760/696]">
            <h1 className="font-medium text-[27px] mb-[25px]">Welcome back!</h1>
            <p className="font-medium text-[14px] mb-[60px]">
              Log onto your account by filling your account information
            </p>
            <LoginForm />
            <div className="w-full mt-[35px] flex justify-between items-center">
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
              <p className="font-medium text-[16px]">or</p>
              <div className="w-[14.58vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-full mt-[35px] flex justify-center">
              <button className="w-[14.375vw] h-auto aspect-[276/47] border-[3px] text-[#2E3362] border-[#2E3362] rounded-[15px] flex justify-center items-center">
                <div className="w-[1.25vw] h-auto aspect-square relative mr-[0.83vw]">
                  <Image alt="Google" src={google} fill={true} />
                </div>
                <p className="text-[#2E3362] font-bold text-[12px]">
                  Sign in with Google
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
