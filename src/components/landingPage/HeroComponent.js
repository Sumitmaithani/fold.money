"use client";

import Image from "next/image";
import Lottie from "lottie-react";

import hero from "@/assets/images/hero-art.png";
import QR from "@/assets/images/qr.png";
import phone from "@/assets/animations/phone.json";
import phoneFrame from "@/assets/images/phone-frameUp.png";

export default function HeroComponent() {
  return (
    <div>
      <div className="bg-noise bg-inset ">
        <div className="flex justify-center ">
          <Image
            alt="colorful illustration drawn in hand drawn showing empty tea glass, coin, pizza etc"
            fetchPriority="high"
            width={500}
            height={576}
            src={hero}
            className="-mt-40"
          />
        </div>
        <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-12 mt-[56px]">
          <div className="col-span-6 col-start-4 group w-fit">
            <div className="relative">
              <h1 className="text-center opacity-1 !text-[10rem] !leading-[8.5rem]">
                <span>Be </span>
                <span className="relative">
                  <span className="absolute text-lg leading-none rounded-full ml-40 pl-2 w-1 h-2 bg-inset bg-noise z-10">
                    😜
                  </span>
                </span>
                <span>painfully aware.</span>
              </h1>
            </div>
            <p className="mt-5 text-center lg:-mx-1">
              Fold securely connects to your Bank accounts and gives a clear
              picture of your finances. So you can make better decisions and
              lead a healthier financial life.
            </p>
            <div className="flex justify-center gap-1 my-6">
              <div className="flex items-center gap-3 p-1 rounded-lg shadow-[0px_1px_0px_rgba(255,_255,_255,_0.53)] bg-[#DDDFE9]">
                <div className="p-3">
                  <h2 className="text-lg font-semibold text-soft">
                    Download iOS app
                  </h2>
                  <p className="xs text-subtle">
                    Currently in invite only Beta
                  </p>
                </div>
                <Image
                  alt="QR code to download the app from app store"
                  fetchPriority="high"
                  width={1023}
                  height={1023}
                  decoding="async"
                  data-nimg="1"
                  className="transition-all rounded shadow-3 hover:scale-[2] h-[100px] w-[100px] origin-bottom-right timing-fn-1"
                  src={QR}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center z-10 bg-noise bg-inset">
          <Image
            className=""
            alt="Upper frame of iphone with a locked icon on top against the black screen"
            loading="lazy"
            width={386}
            height={120}
            decoding="async"
            data-nimg="1"
            src={phoneFrame}
          />
        </div>
        <div className="flex justify-center items-center max-w-390 -mt-80">
          <Lottie animationData={phone} loop={true} />
        </div>
        <div className=" top-[177px] w-full bg pb-6">
          <p className=" z-10 mx-auto my-3 footnote text-center text-soft w-[65ch]">
            Fold establishes connection to your Banks through the Government
            regulated Account Aggregator Framework. OTP is required to connect
            bank accounts,
            <a
              className="link"
              target="_blank"
              href="https://docs.fold.money/supported-banks"
            >
              see the list of banks that support Fold
            </a>
            .
          </p>
        </div>
      </div>

      <div className="fixed z-50 p-1 ml-5 bottom-6 w-fit backdrop-blur bg-[#DDDFE9]/50 rounded-lg hover:scale-[2] origin-bottom-left timing-fn-1 transition-all">
        <Image
          alt="QR code to download the app from app store"
          width={1023}
          height={1023}
          className="rounded shadow-3 h-[100px] w-[100px]"
          src={QR}
        />
      </div>
    </div>
  );
}
