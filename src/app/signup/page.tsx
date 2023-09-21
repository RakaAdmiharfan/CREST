import Image from "next/image";
import RegisterForm from "./components/registerform";
import Link from "next/link";

import house from "@/../public/images/rumahlogin.svg";
import google from "@/../public/images/google.svg";

export default function signup() {
  return (
    <div className="bg-white relative h-[122vh] pt-[100px] w-[100vw] overflow-hidden">
      <div className="flex flex-row w-full h-full">
        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[39.6vw] h-auto aspect-[760/696]">
            <h4 className="font-medium text-[27px] mb-[25px] text-poppins">
              Welcome!
            </h4>
            <h6 className="font-medium text-[14px] mb-[60px] text-poppins text-[#000000]">
              Sign up for an account by filling the required information
            </h6>
            <RegisterForm />
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
                <p className="text-[#2E3362] font-bold text-[12px] text-poppins">
                  Sign Up with Google
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50vw] h-full relative flex items-center justify-center">
          <div className="w-[50vw] h-full absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
          <div className="z-10 flex justify-center flex-col items-center">
            <h1 className="text-[40px] text-white font-semibold mb-[30px] text-poppins">
              Have an Account?
            </h1>
            <h1 className="w-[28.85vw] text-[24px] text-white font-medium mb-[40px] text-center text-poppins">
              Log back into your account by clicking the button below
            </h1>
            <Link
              className="bg-[#2E3362] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/login"
            >
              <p className="text-white font-bold text-[12px] text-poppins">
                Log In
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
