import Image from "next/image";
import React from "react";

import money from "@/assets/images/money-anxiety.png";
import coin from "@/assets/images/falling-coin.png";

export default function AnxietyComponent() {
  return (
    <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto bg mt-40">
      <div className="grid grid-cols-12 border-t gap-x-4 border-t-input">
        <div className="col-span-4 col-start-5 border-t border-t-[white] -mt-[1px] translate-x-4"></div>
        <div className="col-span-6 col-start-4 pt-6 border-l border-r border-r-input border-l-input">
          <Image
            alt="Illustration of a 5000 rupee note in copper color with ANXIETY written it in bold letter across the note"
            loading="lazy"
            width={1708}
            height={893}
            decoding="async"
            data-nimg="1"
            className="pb-6 pt-[64px] mb-6 scale-125"
            src={money}
          />
          <div className="border-t border-t-input"></div>
          <h2 className="leading-none">
            <span className="font-semibold tracking-wide uppercase text-md text-soft">
              Our Goal
            </span>
            <br className="mt-1 mb-2" />
            <span className="h1 max-w-[20ch]">
              To separate anxiety from money.
            </span>
          </h2>
          <p className="my-5">
            Tom &amp; Jerry, Jim &amp; Pam, Chai &amp; Biscuit are examples of
            desirable pairs. An example of undesirable pair is money &amp;
            anxiety. Does it have to be this way? What can software and good
            design in their limited reach do to decimate the pair? This is the
            question we asked ourselves.
          </p>
          <a
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold leading-none text-white rounded-full bg-link w-fit hocus:brightness-90"
            href="blog/manifesto.html"
          >
            Read our manifesto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="10"
              fill="#fff"
            >
              <path
                fillRule="evenodd"
                d="M21.253.336a1 1 0 0 0 .082 1.411l2.535 2.254H1a1 1 0 1 0 0 2h22.87l-2.534 2.252a1 1 0 1 0 1.328 1.495l4.5-4a1 1 0 0 0 0-1.494l-4.5-4.001a1 1 0 0 0-1.411.083z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="origin-bottom-left scale-x-[0.785] translate-y-[100px] -rotate-90 border-t border-t-[white]"></div>
          <div className="border-b border-b-input pt-[100px] origin-bottom-right scale-x-75"></div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 py-6 my-6">
        <div className="col-span-6 col-start-2">
          <h2 className="leading-none">
            <span className="font-semibold tracking-wide uppercase text-md text-soft">
              You know,
            </span>
            <br className="mt-1 mb-2" />
            <span className="h1 max-w-[20ch]">It’s just money, after-all.</span>
          </h2>
          <p className="my-5">
            An equal source of stress, and joy. Exhilaration and anxiety, a
            centrepiece for most of our spinning around in lives. A belief
            ingrained from childhood, that money is complex, you’re not enough
            to handle it. But a few good habits, some restraint, awareness, and
            tools that don’t make you feel dumb have the power to change that.
          </p>
        </div>
        <div className="relative col-span-2 col-start-9">
          <Image
            alt="Illustration of a silver coin falling, coin has no amount and it shows 6 stages of falling with slightly rotated after each stage"
            loading="lazy"
            width={157}
            height={1043}
            decoding="async"
            data-nimg="1"
            className="absolute -top-[220px] left-5"
            src={coin}
          />
        </div>
      </div>
    </div>
  );
}
