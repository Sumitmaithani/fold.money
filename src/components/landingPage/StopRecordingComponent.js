"use client";

import Lottie from "lottie-react";
import Image from "next/image";

import stopRecording from "@/assets/animations/stoprecording.json";
import icon_category from "@/assets/svgs/icon-category.svg";
import email from "@/assets/svgs/email.svg";
import sms from "@/assets/svgs/sms.svg";

export default function StopRecordingComponent() {
  return (
    <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-12 mt-40">
      <div className="relative col-span-5">
        <div className="absolute inset-0">
          <div className="w-[325px] h-[652px] bg-inset rounded-[40px] p-6 mx-auto"></div>
        </div>
        <Lottie className="-mt-40" animationData={stopRecording} loop={true} />
      </div>
      <div className="col-span-6 col-start-7">
        <Image alt="icon category" src={icon_category} />
        <h2 className="my-5 text">
          Stop recording expenses
          <br />
          manually.
        </h2>
        <div className="flex gap-1">
          <p className="flex items-center gap-1 px-3 py-1 my-0 label-sm border rounded-full border-muted text-action-sec bg-[#FAFAFA]">
            <Image alt="email" src={email} />
            No Email scraping
          </p>
          <p className="flex items-center gap-1 px-3 py-1 my-0 label-sm border rounded-full border-muted text-action-sec bg-[#FAFAFA]">
            <Image alt="sms" src={sms} />
            No SMS scraping
          </p>
        </div>
        <p className="mt-5">
          It’s easy to forget, fall off the wagon, and miss. It’s hard to be
          diligent with expense tracking when you have to do it manually. Fold
          automatically pulls your expenses from your Bank accounts and
          categorises them. So you can relax and focus on things that are more
          important than tracking expenses.
        </p>
      </div>
    </div>
  );
}
