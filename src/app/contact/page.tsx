import Image from "next/image";

import house from "@/../public/images/contact.svg";
import envelope from "@/../public/images/envelope.svg";
import chat from "@/../public/images/chat.svg";
import phone from "@/../public/images/contact_phone.svg";
import plane from "@/../public/images/paperplane.svg";

import ContactForm from "./components/contact";

export default function Contact() {
  return (
    <main className="bg-[#EFF2FA] relative h-[100vh] overflow-hidden">
      <div className="flex flex-row pb-[60px] pt-[75px] justify-between relative">
        <div className="w-[50vw] h-auto aspect-square py-[1vw] relative flex pl-[3vw]">
          <div className="w-[46vw] h-auto aspect-square absolute">
            <Image alt="House" src={house} fill={true} />
          </div>
        </div>
        <div className="w-[50vw] h-auto aspect-square relative flex pr-[3vw] items-center justify-center">
          <div className="flex flex-col w-[27vw] items-center justify-center">
            <text className="text-black font-semibold text-[35px] mb-[10px] text-poppins">
              Send Us A Message
            </text>
            <div className="w-[27vw]">
              <ContactForm />
            </div>
            <div className="w-full mt-[20px] flex justify-between items-center">
              <div className="w-[7.9vw] h-[1px] bg-[#808080]"></div>
              <p className="font-medium text-[16px] text-poppins">or</p>
              <div className="w-[7.9vw] h-[1px] bg-[#808080]"></div>
            </div>
            <div className="w-[22.9vw] h-auto aspect-[440/80] flex flex-row mt-[20px] justify-between">
              <button className="w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[2vw] h-auto aspect-square relative">
                  <Image alt="Envelope" src={envelope} fill={true} />
                </div>
              </button>
              <button className="w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[2vw] h-auto aspect-square relative">
                  <Image alt="Chat" src={chat} fill={true} />
                </div>
              </button>
              <button className="w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[2vw] h-auto aspect-square relative">
                  <Image alt="Phone" src={phone} fill={true} />
                </div>
              </button>
              <button className="w-[4.16vw] h-auto aspect-square rounded-[100%] relative bg-white items-center justify-center flex">
                <div className="w-[2vw] h-auto aspect-square relative">
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
