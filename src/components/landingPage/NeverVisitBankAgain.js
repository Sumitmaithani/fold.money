import Image from "next/image";
import React from "react";

import computer from "@/assets/svgs/icon-computer.svg";
import webapp from "@/assets/images/web-app.jpeg";

export default function NeverVisitBankAgain() {
  return (
    <div>
      <div>
        <div className="bg-primary mb-[100px]">
          <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-12 pt-[150px]">
            <Image
              alt=""
              loading="lazy"
              width={75}
              height={75}
              decoding="async"
              data-nimg="1"
              className="col-span-1"
              src={computer}
            />
            <div className="flex items-center justify-between col-span-7 px-3 rounded bg">
              <div className="flex items-center text-md">
                <Image
                  alt="Padlock"
                  loading="lazy"
                  width={32}
                  height={32}
                  decoding="async"
                  data-nimg="1"
                  src="https://cdn.fold.money/icons/padlock.svg"
                />
                <span className="ml-3 text-md text-input-placeholder">
                  https://
                </span>
                app.fold.money
              </div>
              <div className="px-3 py-1 text-sm border-muted border rounded-full bg-[#FAFAFA]">
                Coming soon
              </div>
            </div>
            <h2 className="col-span-8 col-start-2 row-start-2 my-6 !text-white h1">
              Never visit your Bank’s website again.
            </h2>
            <p className="col-span-3 row-start-3 my-6 font-semibold text-right text-white xs">
              As great as our bank’s infrastructures are, they still haven’t
              caught up with the rest of the industry, software wise. Good
              thing, they don’t have to anymore.
            </p>
          </div>
        </div>
        <div className="max-w-[calc(100vw-48px)] lg:max-w-[1200px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Image
            alt="mockup of fold web app showing features like past and upcoming recurring transactions and cash flow chart"
            loading="lazy"
            width={1788}
            height={1374}
            decoding="async"
            data-nimg="1"
            className="col-span-9 col-start-4 -mt-[320px] rounded-xl shadow-5 mb-6"
            src={webapp}
          />
          <div className="col-span-6 bg-inset rounded-[20px] grid grid-cols-6 gap-4 overflow-hidden relative">
            <div className="bg-gradient-to-b from-[#F0F1F5] h-[150px] absolute top-0 w-full"></div>
            <div className="w-[1px] ml-[100%] col-span-1 my-6 bg-gradient-to-t from-muted"></div>
            <div className="flex flex-col justify-end col-span-5 col-start-2 pr-6">
              <div className="bg shadow-2 rounded-xl w-[320px] pb-3 -mt-4">
                <div className="flex items-center justify-between mx-4 my-2">
                  <p className="font-sans uppercase text-label font-semibold">
                    IFSC code
                  </p>
                  <p className="font-sans uppercase text-label font-semibold flex items-center gap-1">
                    HDFC0002233
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#20294C"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.814.5h3.872c.253 0 .485 0 .68.016.21.016.439.055.666.169.34.169.614.444.784.783.113.227.152.457.168.666.016.195.016.427.016.68v5.872c0 .253 0 .485-.016.68-.016.21-.055.439-.168.666a1.75 1.75 0 0 1-.784.784 1.775 1.775 0 0 1-.666.168C9.17 11 8.939 11 8.686 11H4.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V2.814c0-.253 0-.485.016-.68.016-.21.055-.439.169-.666a1.75 1.75 0 0 1 .783-.783c.227-.114.457-.153.666-.17C4.33.5 4.561.5 4.814.5Zm-.681 1.529h.001-.001Zm.002-.001a.628.628 0 0 1 .12-.017C4.38 2 4.552 2 4.84 2h3.82c.287 0 .459 0 .586.01a.64.64 0 0 1 .119.018.25.25 0 0 1 .107.107.6.6 0 0 1 .017.12c.01.126.011.298.011.585v5.82c0 .287 0 .459-.01.586a.629.629 0 0 1-.018.119.25.25 0 0 1-.107.107.63.63 0 0 1-.12.017c-.126.01-.298.011-.585.011H4.84c-.287 0-.459 0-.586-.01a.629.629 0 0 1-.119-.018.25.25 0 0 1-.107-.107.628.628 0 0 1-.017-.12A8.338 8.338 0 0 1 4 8.66V2.84c0-.287 0-.459.01-.586a.628.628 0 0 1 .018-.119.25.25 0 0 1 .107-.107Zm-.106.105v.001-.001Zm0 7.234v-.001.001Zm.104.104h.001-.001Zm5.234 0h-.001.001Zm.104-.104v-.001.001Zm0-7.234v.001-.001Zm-.105-.105h.001-.001Zm2.882 3.974A8.178 8.178 0 0 0 12 6V4.5h.048c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v6.234c0 .253 0 .485-.016.68-.016.21-.055.439-.169.666a1.75 1.75 0 0 1-.783.784 1.775 1.775 0 0 1-.666.168c-.195.016-.427.016-.68.016H7.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V12H7v.66c0 .287 0 .459.01.586a.64.64 0 0 0 .018.119.25.25 0 0 0 .107.107.6.6 0 0 0 .12.017c.126.01.298.011.585.011h3.82c.287 0 .459 0 .586-.01a.632.632 0 0 0 .119-.018.25.25 0 0 0 .107-.107.632.632 0 0 0 .017-.12c.01-.126.011-.297.011-.585V6.5a8.045 8.045 0 0 0-.005-.3.25.25 0 0 0-.194-.195.66.66 0 0 0-.053-.003Zm.223 7.365v-.001.001Zm-.104.104h-.001.001Zm-5.234 0h.001-.001Zm-.105-.105v.001-.001Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="flex items-center justify-between mx-4 my-2">
                  <p className="font-sans uppercase text-label font-semibold">
                    Expire Link
                  </p>
                  <p className="font-sans uppercase text-label font-semibold flex items-center gap-1">
                    In one week
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#676C92"
                      viewBox="0 0 16 16"
                      className="w-3 h-3"
                    >
                      <path d="M8.32 11.07a.498.498 0 0 1-.84 0l-3.4-5.303A.498.498 0 0 1 4.499 5H11.3c.394 0 .632.436.42.767l-3.402 5.304Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex items-center justify-between mx-4 my-2">
                  <p className="font-sans uppercase text-label font-semibold">
                    Password Protect
                  </p>
                  <div className="w-[38px] p-[3px] rounded-[33px] bg-subtle">
                    <div className="float-right w-3 h-3 rounded-full shadow bg"></div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mx-3 mt-5">
                  <div className="p-3 border border-[#DDDFE9] rounded grow text-sm font-semibold text-center">
                    Share Statement
                  </div>
                  <div className="p-3 border border-[#DDDFE9] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#20294C"
                    >
                      <path d="M12.75 14.19V5a.75.75 0 0 0-1.5 0v9.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72z"></path>
                      <path d="M3 12.25a.75.75 0 0 1 .75.75v5A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18v-5a.75.75 0 0 1 1.5 0v5A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-5a.75.75 0 0 1 .75-.75z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="pt-5 pb-6 text-lg font-normal text-soft">
                Download and Share
                <strong className="text-lg font-semibold text">
                  {" "}
                  Bank Statements{" "}
                </strong>
                without losing your data and temper.
              </p>
            </div>
          </div>
          <div className="col-span-6 bg-inset rounded-[20px] grid grid-cols-6 gap-4 overflow-hidden relative">
            <div className="bg-gradient-to-b from-[#F0F1F5] h-[150px] absolute top-0 w-full"></div>
            <div className="w-[1px] ml-[100%] col-span-1 my-6 bg-gradient-to-t from-muted"></div>
            <div className="flex flex-col justify-end col-span-5 col-start-2 pr-6">
              <div className="bg shadow-2 rounded-xl w-[320px] pt-4">
                <div className="p-3 border-t border-[#DDDFE9] border-dashed">
                  <p className="font-sans uppercase text-label font-semibold">
                    Swift BIC
                  </p>
                  <p className="flex items-center justify-between text-sm font-semibold">
                    ICICNBBCTS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#20294C"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.814.5h3.872c.253 0 .485 0 .68.016.21.016.439.055.666.169.34.169.614.444.784.783.113.227.152.457.168.666.016.195.016.427.016.68v5.872c0 .253 0 .485-.016.68-.016.21-.055.439-.168.666a1.75 1.75 0 0 1-.784.784 1.775 1.775 0 0 1-.666.168C9.17 11 8.939 11 8.686 11H4.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V2.814c0-.253 0-.485.016-.68.016-.21.055-.439.169-.666a1.75 1.75 0 0 1 .783-.783c.227-.114.457-.153.666-.17C4.33.5 4.561.5 4.814.5Zm-.681 1.529h.001-.001Zm.002-.001a.628.628 0 0 1 .12-.017C4.38 2 4.552 2 4.84 2h3.82c.287 0 .459 0 .586.01a.64.64 0 0 1 .119.018.25.25 0 0 1 .107.107.6.6 0 0 1 .017.12c.01.126.011.298.011.585v5.82c0 .287 0 .459-.01.586a.629.629 0 0 1-.018.119.25.25 0 0 1-.107.107.63.63 0 0 1-.12.017c-.126.01-.298.011-.585.011H4.84c-.287 0-.459 0-.586-.01a.629.629 0 0 1-.119-.018.25.25 0 0 1-.107-.107.628.628 0 0 1-.017-.12A8.338 8.338 0 0 1 4 8.66V2.84c0-.287 0-.459.01-.586a.628.628 0 0 1 .018-.119.25.25 0 0 1 .107-.107Zm-.106.105v.001-.001Zm0 7.234v-.001.001Zm.104.104h.001-.001Zm5.234 0h-.001.001Zm.104-.104v-.001.001Zm0-7.234v.001-.001Zm-.105-.105h.001-.001Zm2.882 3.974A8.178 8.178 0 0 0 12 6V4.5h.048c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v6.234c0 .253 0 .485-.016.68-.016.21-.055.439-.169.666a1.75 1.75 0 0 1-.783.784 1.775 1.775 0 0 1-.666.168c-.195.016-.427.016-.68.016H7.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V12H7v.66c0 .287 0 .459.01.586a.64.64 0 0 0 .018.119.25.25 0 0 0 .107.107.6.6 0 0 0 .12.017c.126.01.298.011.585.011h3.82c.287 0 .459 0 .586-.01a.632.632 0 0 0 .119-.018.25.25 0 0 0 .107-.107.632.632 0 0 0 .017-.12c.01-.126.011-.297.011-.585V6.5a8.045 8.045 0 0 0-.005-.3.25.25 0 0 0-.194-.195.66.66 0 0 0-.053-.003Zm.223 7.365v-.001.001Zm-.104.104h-.001.001Zm-5.234 0h.001-.001Zm-.105-.105v.001-.001Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
                <div className="p-3 border-t border-[#DDDFE9] border-dashed">
                  <p className="font-sans uppercase text-label font-semibold">
                    IFSC Code
                  </p>
                  <p className="flex items-center justify-between text-sm font-semibold">
                    ICIC0003168
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#20294C"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.814.5h3.872c.253 0 .485 0 .68.016.21.016.439.055.666.169.34.169.614.444.784.783.113.227.152.457.168.666.016.195.016.427.016.68v5.872c0 .253 0 .485-.016.68-.016.21-.055.439-.168.666a1.75 1.75 0 0 1-.784.784 1.775 1.775 0 0 1-.666.168C9.17 11 8.939 11 8.686 11H4.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V2.814c0-.253 0-.485.016-.68.016-.21.055-.439.169-.666a1.75 1.75 0 0 1 .783-.783c.227-.114.457-.153.666-.17C4.33.5 4.561.5 4.814.5Zm-.681 1.529h.001-.001Zm.002-.001a.628.628 0 0 1 .12-.017C4.38 2 4.552 2 4.84 2h3.82c.287 0 .459 0 .586.01a.64.64 0 0 1 .119.018.25.25 0 0 1 .107.107.6.6 0 0 1 .017.12c.01.126.011.298.011.585v5.82c0 .287 0 .459-.01.586a.629.629 0 0 1-.018.119.25.25 0 0 1-.107.107.63.63 0 0 1-.12.017c-.126.01-.298.011-.585.011H4.84c-.287 0-.459 0-.586-.01a.629.629 0 0 1-.119-.018.25.25 0 0 1-.107-.107.628.628 0 0 1-.017-.12A8.338 8.338 0 0 1 4 8.66V2.84c0-.287 0-.459.01-.586a.628.628 0 0 1 .018-.119.25.25 0 0 1 .107-.107Zm-.106.105v.001-.001Zm0 7.234v-.001.001Zm.104.104h.001-.001Zm5.234 0h-.001.001Zm.104-.104v-.001.001Zm0-7.234v.001-.001Zm-.105-.105h.001-.001Zm2.882 3.974A8.178 8.178 0 0 0 12 6V4.5h.048c.182 0 .371 0 .543.034a1.75 1.75 0 0 1 1.375 1.375c.035.172.034.361.034.543v6.234c0 .253 0 .485-.016.68-.016.21-.055.439-.169.666a1.75 1.75 0 0 1-.783.784 1.775 1.775 0 0 1-.666.168c-.195.016-.427.016-.68.016H7.814c-.253 0-.485 0-.68-.016a1.775 1.775 0 0 1-.666-.168 1.75 1.75 0 0 1-.783-.784 1.775 1.775 0 0 1-.17-.666 9.051 9.051 0 0 1-.015-.68V12H7v.66c0 .287 0 .459.01.586a.64.64 0 0 0 .018.119.25.25 0 0 0 .107.107.6.6 0 0 0 .12.017c.126.01.298.011.585.011h3.82c.287 0 .459 0 .586-.01a.632.632 0 0 0 .119-.018.25.25 0 0 0 .107-.107.632.632 0 0 0 .017-.12c.01-.126.011-.297.011-.585V6.5a8.045 8.045 0 0 0-.005-.3.25.25 0 0 0-.194-.195.66.66 0 0 0-.053-.003Zm.223 7.365v-.001.001Zm-.104.104h-.001.001Zm-5.234 0h.001-.001Zm-.105-.105v.001-.001Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </div>
              <p className="pt-5 pb-6 text-lg font-normal text-soft">
                Evict important
                <strong className="text-lg font-semibold text">
                  {" "}
                  Bank details{" "}
                </strong>
                from your notes app.
              </p>
            </div>
          </div>
          <div className="col-span-6 bg-inset rounded-[20px] grid grid-cols-6 gap-4 overflow-hidden relative">
            <div className="w-[1px] ml-[100%] col-span-1 my-6 bg-gradient-to-t from-muted"></div>
            <div className="flex flex-col justify-end col-span-5 col-start-2 pr-6">
              <Image
                alt="Mockup of cashflow chart tools showing colored labels for incoming, outgoing and invested"
                loading="lazy"
                width={744}
                height={340}
                decoding="async"
                data-nimg="1"
                className="px-4"
                src="https://fold.money/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcash-flow.396ff87c.png&w=1920&q=75"
              />
              <p className="pt-5 pb-6 text-lg font-normal text-soft">
                Corporations wish for the
                <strong className="text-lg font-semibold text">
                  {" "}
                  Cash Flow{" "}
                </strong>
                management tools we made for you.
              </p>
            </div>
          </div>
          <div className="col-span-6 bg-inset rounded-[20px] grid grid-cols-6 gap-4 overflow-hidden relative">
            <div className="w-[1px] ml-[100%] col-span-1 my-6 bg-gradient-to-t from-muted"></div>
            <div className="flex flex-col justify-end col-span-5 col-start-2 pr-6">
              <div className="px-4 py-3 rounded bg shadow-3 text-md text-input-placeholder">
                E.g. spent on Swiggy this month...
              </div>
              <p className="pt-5 pb-6 text-lg font-normal text-soft">
                Cmd + K and other missing
                <strong className="text-lg font-semibold text">
                  {" "}
                  modern tools
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
