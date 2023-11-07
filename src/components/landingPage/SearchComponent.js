import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import lens from "@/assets/svgs/icon-lens.svg";
import taxi from "@/assets/svgs/taxi.svg";
import restaurant from "@/assets/svgs/restaurant.svg";
import search from "@/assets/svgs/search.svg";
import arrowup from "@/assets/svgs/arrowup.svg";
import arrowDown from "@/assets/svgs/arrowDown.svg";
import tags from "@/assets/svgs/tags.svg";
import today from "@/assets/svgs/today.svg";
import month from "@/assets/svgs/month.svg";
import week from "@/assets/svgs/week.svg";

export default function SearchComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleSearch = () => {
    console.warn("click");
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto mt-40 z-1">
      <div className="grid grid-cols-12 gap-x-4">
        <Image
          alt=""
          loading="lazy"
          width={75}
          height={74}
          className="col-span-12 mx-auto text-center"
          src={lens}
        />
        <div className="relative col-span-8 col-start-3">
          <h2 className="leading-[1.75] text-center">
            Search. Recall
            <br />
            Filter
          </h2>{" "}
          <button onClick={handleSearch} className="transition">
            <div className="absolute inset-0 flex items-center w-full">
              <div className="bg-[#332E2E]/80 w-full backdrop-blur text-white shadow-5 rounded-xl text-left px-4 py-[19px] text-normal flex justify-between flex-row-reverse">
                <Image alt="" className="" src={search} />
                <span className="sr-only" id="#next-search">
                  Show Next Search Item
                </span>

                <div className="flex gap-2">
                  <div className="h-[4rem] bg w-0.5 animate-pulse"></div>
                  <div>
                    <span className="text-h3 leading-[4rem]" aria-live="polite">
                      Coffee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-between col-span-10 col-start-2 -mt-1">
          <ul className="flex gap-1 -mt-[51px] opacity-30">
            <li className="flex items-center gap-1 pr-2 pl-1 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={arrowup} />
              Incoming
            </li>
            <li className="flex items-center gap-1 pr-2 pl-1 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={arrowDown} />
              Outgoing
            </li>
            <li className="flex items-center gap-1 pr-2 pl-1 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={tags} />
              Tags
            </li>
          </ul>
          <ul className="flex gap-1 -mt-[51px] opacity-30">
            <li className="flex items-center gap-1 pl-1 pr-2 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={today} />
              Today
            </li>
            <li className="flex items-center gap-1 pl-1 pr-2 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={month} />
              This month
            </li>
            <li className="flex items-center gap-1 pl-1 pr-2 py-[6px] leading-none tracking-wide uppercase border rounded-full border-muted text-sm h-fit">
              <Image alt="" src={week} />
              This week
            </li>
          </ul>
        </div>
        <div className="col-span-1"></div>
        <div className="h">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                initial={{
                  rotate: "Ødeg",
                  scale: 0,
                }}
                animate={{
                  rotate: "360deg",
                  scale: 1,
                }}
                exit={{
                  rotate: "Ødeg",
                  scale: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "backInOut",
                }}
                className="relative col-span-6 col-start-4 mt-6"
              >
                <div className="space-y-4">
                  <div>
                    <div className="bg shadow-5 relative rounded-xxl bg">
                      <header className="flex gap-4 px-5 py-2 place-content-between text-soft">
                        <span className="font-semibold misc-xl">Sendhoor</span>
                        <span className="shrink-0 misc-xl">
                          Today, 11:30 AM
                        </span>
                      </header>
                      <div className="flex items-center justify-between w-full p-5 border-t-[3px] border-softer">
                        <p className="inline-flex font-medium leading-none font-gtAmerica text-[4.2rem]">
                          <span className="text-lg font-medium text-subtle font-gtAmerica mr-0.5 leading-none text-[4.2rem]">
                            -
                          </span>
                          <span className="text-lg font-normal mr-[2px]">
                            ₹
                          </span>
                          45
                        </p>
                        <div className="flex items-center gap-1 px-3 py-1 font-semibold uppercase origin-right scale-125 rounded bg-inset text-labelLg">
                          <Image
                            alt="restaurant Icon"
                            width={26}
                            height={26}
                            src={restaurant}
                          />
                          Food &amp; drinks
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg shadow-5 relative rounded-xxl bg">
                      <header className="flex gap-4 px-5 py-2 place-content-between text-soft invisible">
                        <span className="font-semibold misc-xl">Sendhoor</span>
                        <span className="shrink-0 misc-xl"></span>
                      </header>
                      <div className="flex items-center justify-between w-full p-5 border-t-[3px] border-softer">
                        <p className="inline-flex font-medium leading-none font-gtAmerica text-[4.2rem] invisible">
                          <span className="text-lg font-medium text-subtle font-gtAmerica mr-0.5 leading-none text-[4.2rem]">
                            -
                          </span>
                          <span className="text-lg font-normal mr-[2px]">
                            ₹
                          </span>
                          45
                        </p>
                        <div className="flex items-center gap-1 px-3 py-1 font-semibold uppercase origin-right scale-125 rounded bg-inset text-labelLg invisible">
                          <img
                            alt="taxi Icon"
                            loading="lazy"
                            width={26}
                            height={26}
                            src={taxi}
                          />
                          Transport
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gradient-to-t from-[#F0F1F5] absolute bottom-0 h-[180px] "></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
