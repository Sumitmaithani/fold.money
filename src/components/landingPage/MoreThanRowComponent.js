"use-client";

import Image from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

import icon_polygon from "@/assets/svgs/icon-polygon.svg";
import left from "@/assets/images/left.png";
import center from "@/assets/images/center.png";
import right from "@/assets/images/right.png";
import shop from "@/assets/svgs/shop.svg";
import tyre from "@/assets/svgs/tyre.svg";

export default function MoreThanRowComponent() {
  const { scrollYProgress } = useScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  const x = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0, -200, -800],
    options
  );
  // const y = useTransform(scrollYProgress, [0, 0.7, 1], [-200, 0, 200], options);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [0, 1, 1, 0],
    options
  );

  return (
    <div className="flow-root">
      <Image alt="" className="mx-auto text-center" src={icon_polygon} />
      <h2 className="text-center max-w-[20ch] mx-auto">
        More than a row in a spreadsheet.
      </h2>
      <p className="mx-auto mt-4 text-soft w-fit">
        Not just the numbers, but the story as well
      </p>

      <div className="flex gap-5 mt-60 mb-40">
        <motion.div className="border-r border-softer">
          <Image className="" src={right} alt="left" />
          <div className="flex flex-col items-end gap-1 p-4 pt-0 pb-6 mt-6">
            <Image src={shop} alt="shop" />
            <p className="max-w-[25ch] text-right text-soft">
              Merchants are detected automatically based on where you made your
              purchase.
            </p>
          </div>
        </motion.div>
        {/* <motion.div>
          <Image className="w-6/12" src={center} alt="left" />
        </motion.div> */}
        <motion.div className="border-l border-softer">
          <Image className="" src={left} alt="right" />
          <div className="p-4 pt-0 pb-6 mt-6 space-y-1 transition-opacity justify-self-end">
            <Image src={tyre} alt="tyre" />
            <p className="max-w-[30ch] text-left text-soft">
              The{" "}
              <a className="link" href="/blog/introducing-f1">
                F1 engine
              </a>{" "}
              smartly categorises your transaction to an appropriate category.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
