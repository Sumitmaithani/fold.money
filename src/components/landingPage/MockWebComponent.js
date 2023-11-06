"use client";

import Image from "next/image";

import mockup_light from "@/assets/images/mockup-web-light.jpeg";
import mockup_dark from "@/assets/images/mockup-web-dark.jpeg";
import dark from "@/assets/svgs/dark.svg";
import light from "@/assets/svgs/light.svg";
import logo from "@/assets/svgs/logo.svg";
import { useState } from "react";
import Lines from "@/assets/svgs/Lines";

export default function MockWebComponent() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="-mt-20">
      <section className="max-w-[calc(100vw-48px)] md:max-w-[calc(100vw-96px)] xl:max-w-[1400px] mx-auto relative pt-6 mt-6 grid grid-cols-[repeat(13,_minmax(0,_1fr))] grid-rows-[repeat(22,_minmax(0,_52px))]">
        <Lines />
        <div className="min-h-[52px] col-start-7 row-start-2 col-span-1 center z-10">
          <div className="bg-inset shadow-[inset_0px_0px_4px_rgba(0,_0,_0,_0.03)] p-1 w-full h-full rounded-xl">
            <label
              className="sr-only"
              id="headlessui-label-:r0:"
              htmlFor="headlessui-switch-:r3:"
            >
              Toggle theme of app mockups
            </label>
            <button
              className="flex items-center gap-1 p-1 rounded bg shadow-1"
              id="headlessui-switch-:r3:"
              role="switch"
              type="button"
              onClick={handleCheckboxChange}
            >
              <Image alt="dark mode icon" src={dark} />

              {isChecked ? (
                <span className="relative inline-flex h-2 w-4 items-center rounded-full p-[2px] bg-subtle">
                  <span className="translate-x-full inline-block h-[10px] w-[10px] transform rounded-full bg transition shadow-2"></span>
                </span>
              ) : (
                <span className="relative inline-flex h-2 w-4 items-center rounded-full p-[2px] bg-subtle">
                  <span className="translate-x-0 inline-block h-[10px] w-[10px] transform rounded-full bg transition shadow-2"></span>
                </span>
              )}

              <Image alt="light mode icon" src={light} />
            </button>
          </div>
        </div>
        <div className="relative z-10 col-span-11 col-start-2 row-start-4">
          <div className="absolute p-4 pt-0 bg-inset bg-noise rounded-xxl">
            <div>
              <div className="w-[175px] h-[38px] bg-muted rounded-lg my-2 flex items-center px-1">
                <Image alt="logo" src={logo} />
              </div>
              {isChecked ? (
                <Image
                  className="border rounded"
                  alt="Screenshot of Fold Track web app, it shows dashboard with navbar items like toggle random data, cmd+k search etc, and main section has three columns - left columns has calendar view with upcoming recurring transactions reminders. center columns has cumulative cash widget in first row which shows trend of your savings for last 30 days in a simple chart, and another row has multiple cards each with different bank account details with copy and download account statement buttons. Right card shows list of recent transactions with merchant name, amount. timestamp and category for this is hidden by ios app screenshot overlay"
                  width={2280}
                  height={1694}
                  src={mockup_light}
                />
              ) : (
                <Image
                  className="border rounded"
                  alt="Screenshot of Fold Track web app, it shows dashboard with navbar items like toggle random data, cmd+k search etc, and main section has three columns - left columns has calendar view with upcoming recurring transactions reminders. center columns has cumulative cash widget in first row which shows trend of your savings for last 30 days in a simple chart, and another row has multiple cards each with different bank account details with copy and download account statement buttons. Right card shows list of recent transactions with merchant name, amount. timestamp and category for this is hidden by ios app screenshot overlay"
                  width={2280}
                  height={1694}
                  src={mockup_dark}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
