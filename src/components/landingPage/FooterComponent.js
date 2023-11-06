import Image from "next/image";
import React from "react";

import qr from "@/assets/images/qr.png";
import key from "@/assets/images/privacy-key.png";
import team from "@/assets/images/team-footer.jpeg";

export default function FooterComponent() {
  return (
    <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto mt-[300px] mb-6 bg grid grid-cols-12 gap-4">
      <div className="flex flex-col-reverse items-center justify-center col-span-4 row-span-2 gap-2 p-4 bg-link rounded-xxl">
        <h2 className="pb-1 text-lg font-normal text-white">
          Scan &amp; Download
        </h2>
        <Image
          alt="QR code to download the app from app store"
          loading="lazy"
          width={120}
          height={120}
          decoding="async"
          data-nimg="1"
          className="mt-1 rounded shadow-3"
          src={qr}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          className="self-start w-5"
        >
          <path d="M14.902 5.034c.606-.71 1.033-1.68 1.033-2.66 0-.134-.01-.268-.03-.374-.993.038-2.186.634-2.891 1.44-.567.615-1.084 1.594-1.084 2.573 0 .154.03.298.04.346.06.01.16.029.268.029.885 0 1.998-.576 2.664-1.354zm.696 1.555c-1.481 0-2.694.874-3.469.874-.825 0-1.898-.816-3.19-.816C6.484 6.647 4 8.605 4 12.292c0 2.304.914 4.733 2.057 6.298C7.031 19.915 7.886 21 9.118 21c1.212 0 1.75-.778 3.26-.778 1.53 0 1.878.759 3.22.759 1.331 0 2.216-1.181 3.06-2.343.934-1.334 1.332-2.63 1.342-2.698-.08-.019-2.624-1.027-2.624-3.84 0-2.439 1.998-3.533 2.117-3.62-1.322-1.833-3.339-1.89-3.895-1.89z"></path>
        </svg>
      </div>
      <div className="col-span-4 row-span-4 bg-inset rounded-xxl p-5 flex flex-col gap-0.5 justify-end relative">
        <Image
          alt="Illustration of a golden key"
          loading="lazy"
          width={400}
          height={409}
          decoding="async"
          data-nimg="1"
          className="absolute -right-6 -top-6 -rotate-12"
          src={key}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          className="fill"
        >
          <path
            fillRule="evenodd"
            d="M5.42 12.365a1 1 0 0 1 1.218.72 9.624 9.624 0 0 0 1.622 3.373A9.654 9.654 0 0 0 16 20.334a9.654 9.654 0 0 0 7.773-3.919 9.624 9.624 0 0 0 1.59-3.33 1 1 0 1 1 1.936.499 11.61 11.61 0 0 1-1.51 3.433l1.496 2.029a1 1 0 0 1-1.61 1.187l-1.167-1.583c-.751.8-1.614 1.495-2.564 2.059l1.155 2.713a1 1 0 1 1-1.84.783l-1.119-2.627c-.99.376-2.043.621-3.14.714v3.042a1 1 0 1 1-2 0v-3.042a11.599 11.599 0 0 1-3.14-.714l-1.119 2.627a1 1 0 1 1-1.84-.783l1.155-2.713a11.72 11.72 0 0 1-2.564-2.059l-1.168 1.583a1 1 0 1 1-1.61-1.187l1.497-2.029a11.609 11.609 0 0 1-1.51-3.433 1 1 0 0 1 .72-1.218z"
            clipRule="evenodd"
          ></path>
        </svg>
        <h2 className="h3">
          <a className="link" href="blog/privacy-by-design.html">
            Our <br />
            approach to <br />
            Privacy.
          </a>
        </h2>
      </div>
      <nav
        aria-label="footer navbar"
        className="p-6 bg-inset rounded-xxl col-span-4 row-span-3"
      >
        <ul
          className="flex flex-col justify-center h-full space-y-1"
          role="list"
        >
          <li>
            <a
              className="font-semibold link text-md"
              href="blog/manifesto.html"
            >
              Manifesto
            </a>
          </li>
          <li>
            <a className="font-semibold link text-md" href="team.html">
              Careers
            </a>
          </li>
          <li>
            <a className="font-semibold link text-md" href="blog.html">
              Blog
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="https://discord.gg/kBbRKFHwxC"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="http://twitter.com/foldmoney_"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="http://instagram.com/foldmoney_/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="https://www.linkedin.com/company/foldmoney/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="https://docs.fold.money/privacy-policy"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="font-semibold link text-md"
              target="_blank"
              href="https://docs.fold.money/terms-of-service"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
      <div className="bg-[yellow] col-span-4 row-span-2 h-[278px] relative rounded-xxl group overflow-hidden">
        <Image
          alt="Photo taken in 2586Labs office, from left to right - Vikas, Akash and Nishant. Nishant is looking at camera and mid laugh"
          loading="lazy"
          width={800}
          height={633}
          decoding="async"
          data-nimg="1"
          className="transition-transform duration-500 group-hover:scale-110"
          src={team}
        />
        <div className="absolute flex items-center justify-between w-full px-4 bottom-4">
          <a
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold leading-none rounded-full text bg w-fit hocus:brightness-90"
            href="team.html"
          >
            Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="10"
              fill="#fff"
              className="fill"
            >
              <path
                fillRule="evenodd"
                d="M21.253.336a1 1 0 0 0 .082 1.411l2.535 2.254H1a1 1 0 1 0 0 2h22.87l-2.534 2.252a1 1 0 1 0 1.328 1.495l4.5-4a1 1 0 0 0 0-1.494l-4.5-4.001a1 1 0 0 0-1.411.083z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-6 bg-inset rounded-xxl col-span-4 row-span-1">
        <p className="text-sm">
          © 2023 Reach out to me at
          <a
            className="link"
            href="cdn-cgi/l/email-protection.html#49212c252526092f26252d672426272c30"
          >
            <span
              className="__cf_email__"
              data-cfemail="d6beb3babab996b0b9bab2f8bbb9b8b3af"
            >
              {" "}
              sumitmaithani824@gmail.com
            </span>
          </a>
          . Built by ❤️
        </p>
      </div>
    </div>
  );
}
