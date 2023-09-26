import Image from "next/image";

import house from "@/../public/images/contact.svg";
import envelope from "@/../public/images/envelope.svg";
import chat from "@/../public/images/chat.svg";
import phone from "@/../public/images/contact_phone.svg";
import plane from "@/../public/images/paperplane.svg";

import ContactForm from "./components/contact";

export default function Contact() {
  return (
    <main className="bg-[#EFF2FA] relative min-h-[100vh] overflow-hidden">
      <div className="flex flex-row pb-[15px] sm:pb-[25px] md:pb-[35px] xl:pb-[60px] lg:pb-[50px] pt-[70px] sm:pt-[95px] md:pt-[130px] xl:pt-[75px] lg:pt-[60px] justify-between relative">
        <div className="hidden lg:flex w-[50vw] h-auto aspect-square py-[1vw] relative pl-[3vw]">
          <div className="w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
        </div>
        <div className="w-[100vw] lg:w-[50vw] h-auto lg:aspect-square relative flex lg:pr-[3vw] items-center justify-center">
          <div className="flex flex-col w-[77.7vw] lg:w-[27vw] items-center justify-center">
            <text className="text-black font-semibold text-[30px] sm:text-[45px] md:text-[60px] xl:text-[35px] lg:text-[27px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[10px] lg:mb-[7px] text-poppins">
              Send Us A Message
            </text>
            <div className="w-[77.7vw] lg:w-[27vw]">
              <ContactForm />
            </div>
            <div className="w-full mt-[10px] sm:mt-[15px] md:mt-[20px] xl:mt-[20px] lg:mt-[15px] flex justify-between items-center">
              <div className="w-[20.5vw] lg:w-[7.9vw] h-[1px] bg-[#808080]"></div>
              <p className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[16px] lg:text-[14px] text-poppins">
                or
              </p>
              <div className="w-[20.5vw] lg:w-[7.9vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-[59.4vw] lg:w-[22.9vw] h-auto aspect-[214/39] lg:aspect-[440/80] flex flex-row  mt-[10px] sm:mt-[15px] md:mt-[20px] xl:mt-[20px] lg:mt-[15px] justify-between">
              <button className="w-[10.8vw] lg:w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[5vw] lg:w-[2vw] h-auto aspect-square relative">
                  <Image alt="Envelope" src={envelope} fill={true} />
                </div>
              </button>
              <button className="w-[10.8vw] lg:w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[5vw] lg:w-[2vw] h-auto aspect-square relative">
                  <Image alt="Chat" src={chat} fill={true} />
                </div>
              </button>
              <button className="w-[10.8vw] lg:w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[5vw] lg:w-[2vw] h-auto aspect-square relative">
                  <Image alt="Phone" src={phone} fill={true} />
                </div>
              </button>
              <button className="w-[10.8vw] lg:w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[5vw] lg:w-[2vw] h-auto aspect-square relative">
                  <Image alt="Plane" src={plane} fill={true} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
