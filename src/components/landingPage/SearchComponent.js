import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

import lens from "@/assets/svgs/icon-lens.svg";
import taxi from "@/assets/svgs/taxi.svg";
import briefcase from "@/assets/svgs/briefcase.svg";
import restaurant from "@/assets/svgs/restaurant.svg";
import search from "@/assets/svgs/search.svg";
import arrowup from "@/assets/svgs/arrowup.svg";
import arrowDown from "@/assets/svgs/arrowDown.svg";
import tags from "@/assets/svgs/tags.svg";
import today from "@/assets/svgs/today.svg";
import month from "@/assets/svgs/month.svg";
import week from "@/assets/svgs/week.svg";
import SearchResultComponent from "./SearchResultComponent";
import SearchInvisibleComponent from "./SearchInvisibleComponent";

const data = [
  {
    text: "Coffee",
    name: "Sendhoor",
    date: "Today, 11:30 AM",
    money: "45",
    title: "Food & drinks",
    img: restaurant,
  },
  {
    text: "Salary",
    name: "ABC Pvt ltd",
    date: "02 July, 07:20 PM",
    money: "60,000",
    title: "Salary",
    img: briefcase,
  },
  {
    text: "Food",
    name: "Subway",
    date: "Today, 01:45 PM",
    money: "370",
    title: "Food & drinks",
    img: restaurant,
  },
  {
    text: "Commute",
    name: "Metro",
    date: "12 Aug, 08:50 AM",
    money: "50",
    title: "Transport",
    img: taxi,
  },
];

export default function SearchComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isRotated, setIsRotated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = async () => {
    setIsVisible(false);

    setTimeout(() => setIsVisible(true), 500);
    await controls.start({ rotate: 90 });
    setIsRotated(true);

    // Rotate back to 0 degrees
    await controls.start({ rotate: 0 });
    setIsRotated(false);

    setCurrentIndex((currentIndex + 1) % data.length);
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
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={controls}
                  transition={{
                    type: "keyframes",
                    damping: 10,
                    stiffness: 100,
                    duration: 0.4,
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Image
                    height={35}
                    width={35}
                    alt=""
                    className=""
                    src={search}
                  />
                </motion.div>
                <span className="sr-only" id="#next-search">
                  Show Next Search Item
                </span>
                <div className="flex gap-2">
                  <div className="h-[4rem] bg w-0.5 animate-pulse"></div>
                  <AnimatePresence mode="wait">
                    {isVisible ? (
                      <motion.div
                        initial={{
                          y: 150,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: isVisible ? 1 : 0,
                        }}
                        exit={{
                          y: 100,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "linear",
                        }}
                        className="flex gap-2"
                      >
                        <span
                          className="text-h3 leading-[4rem]"
                          aria-live="polite"
                        >
                          {data[currentIndex].text}
                        </span>
                      </motion.div>
                    ) : (
                      <span
                        className="text-h3 leading-[4rem]"
                        aria-live="polite"
                        style={{ display: "hidden" }}
                      >
                        {data[currentIndex].text}
                      </span>
                    )}
                  </AnimatePresence>
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

        <AnimatePresence mode="wait">
          {isVisible ? (
            <motion.div
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: isVisible ? 1 : 0,
              }}
              exit={{
                y: 100,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "linear",
              }}
              className="relative col-span-6 col-start-4 mt-6"
            >
              <div className="space-y-4">
                <SearchResultComponent
                  name={data[currentIndex].name}
                  date={data[currentIndex].date}
                  money={data[currentIndex].money}
                  title={data[currentIndex].title}
                  img={data[currentIndex].img}
                />

                <SearchInvisibleComponent />
              </div>
              <div className="w-full bg-gradient-to-t from-[#F0F1F5] absolute bottom-0 h-[180px] "></div>
            </motion.div>
          ) : (
            <div
              className="relative col-span-6 col-start-4 mt-6"
              style={{ display: "hidden" }}
            >
              <div className="space-y-4">
                <SearchResultComponent
                  name={data[currentIndex].name}
                  date={data[currentIndex].date}
                  money={data[currentIndex].money}
                  title={data[currentIndex].title}
                  img={data[currentIndex].img}
                />
                <SearchInvisibleComponent />
              </div>
              <div className="w-full bg-gradient-to-t from-[#F0F1F5] absolute bottom-0 h-[180px] "></div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
