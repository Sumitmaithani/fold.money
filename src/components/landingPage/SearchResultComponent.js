import Image from "next/image";
import React from "react";

export default function SearchResultComponent({
  name,
  date,
  money,
  title,
  img,
}) {
  return (
    <div>
      <div className="bg shadow-5 relative rounded-xxl bg">
        <header className="flex gap-4 px-5 py-2 place-content-between text-soft">
          <span className="font-semibold misc-xl">{name}</span>
          <span className="shrink-0 misc-xl">{date}</span>
        </header>
        <div className="flex items-center justify-between w-full p-5 border-t-[3px] border-softer">
          <p className="inline-flex font-medium leading-none font-gtAmerica text-[4.2rem]">
            <span className="text-lg font-medium text-subtle font-gtAmerica mr-0.5 leading-none text-[4.2rem]">
              -
            </span>
            <span className="text-lg font-normal mr-[2px]">₹</span>
            {money}
          </p>
          <div className="flex items-center gap-1 px-3 py-1 font-semibold uppercase origin-right scale-125 rounded bg-inset text-labelLg">
            <Image alt="restaurant Icon" width={26} height={26} src={img} />
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
