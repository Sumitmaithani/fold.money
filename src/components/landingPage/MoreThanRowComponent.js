"use-client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import icon_polygon from "@/assets/svgs/icon-polygon.svg";

export default function MoreThanRowComponent() {
  const controls = useAnimation();

  // Function to trigger animation on scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ x: scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flow-root">
      <Image alt="" className="mx-auto text-center" src={icon_polygon} />
      <h2 className="text-center max-w-[20ch] mx-auto">
        More than a row in a spreadsheet.
      </h2>
      <p className="mx-auto mt-4 text-soft w-fit">
        Not just the numbers, but the story as well
      </p>
    </div>
  );
}
