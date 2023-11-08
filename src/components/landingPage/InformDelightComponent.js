import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import graph from "@/assets/svgs/icon-graph.svg";
import BgLines from "@/assets/svgs/BgLines";
import iphone from "@/assets/images/iphone-frame.png";

const data = [
  "Cash flow keeps spending in check.",
  "Gain deeper insights with powerful tools.",
  "Balance trends helps make better decisions",
];

export default function InformDelightComponent() {
  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let interval;

  // Function to update the active index
  const updateActiveIndex = () => {
    setActiveIndex((activeIndex + 1) % data.length);
  };

  useEffect(() => {
    // Set up an interval to update the active index every 2 seconds
    interval = setInterval(updateActiveIndex, 3250);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (playVideo) {
        videoRef.current.pause();
        clearInterval(interval);
      } else {
        videoRef.current.play();
        interval = setInterval(updateActiveIndex, 3250);
      }
      setPlayVideo(!playVideo);
    }
  };

  return (
    <div>
      <div className="bg relative -mt-20 z-10">
        <p className="mx-auto text-center max-w-[60ch] z-10 relative pt-20">
          Just type in McDonald&#x27;s for example and see all the times you
          have spent at McDonald&#x27;s. Then type Gym Membership, realise
          there&#x27;s no such transactions. Look yourself in the mirror, stop
          eating from McDonald&#x27;s so much.
        </p>
      </div>
      <section className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-12 mt-40">
        <div className="flex flex-col justify-center col-span-5">
          <Image
            alt=""
            loading="lazy"
            width={75}
            height={75}
            decoding="async"
            data-nimg="1"
            src={graph}
          />
          <h2 className="my-5 h1">
            Inform &amp;
            <br />
            Delight.
          </h2>
          <p>
            Understand your financial health without drowning in numbers. Each
            nosedive, each swooping rise and each calm plateau gives real
            actionable insights. Take decisions, backed by Fold.
          </p>
        </div>
        <div className="relative col-span-5 col-start-7 px-2">
          <div className="w-[97%] relative">
            <BgLines />
          </div>
          <div className="overflow-hidden max-h-[800px] relative z-10">
            <Image
              alt=""
              loading="lazy"
              width="992"
              height="1600"
              decoding="async"
              data-nimg="1"
              className="relative mt-[52px]"
              src={iphone}
            />
            <video
              ref={videoRef}
              loop
              muted
              disableRemotePlayback
              playsInline
              autoPlay
              className="absolute top-[42px] -z-10 scale-[0.93] rounded-t-[36px] brightness-110"
              aria-label="Video of Fold app showing features in the following order - Cash flow, Chart settings, and total balance chart"
              id="inform-delight-video"
            >
              <source
                src="/assets/video/inform-delight.webm"
                type="video/webm"
              />
            </video>
          </div>
          <ul
            role="list"
            className="absolute space-y-4 translate-x-full -translate-y-1/2 -z-1 right-[36px] top-1/2 text-smAlt"
            id="inform-delight-feats"
            aria-label="List of fold app features shown in video"
          >
            {data.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full ${
                      index === activeIndex ? "bg-[#3B9DFB]" : "bg-muted"
                    }`}
                  ></div>
                  <span className="w-[17ch] false">{item}</span>
                </li>
              );
            })}
            <li className="flex items-center gap-2 ml-6">
              <button
                className="px-2 py-1 text-center border rounded-full border-soft bg-inset"
                aria-describedby="inform-delight-video"
                onClick={toggleVideo}
              >
                {playVideo ? "Pause" : "Play"}
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
