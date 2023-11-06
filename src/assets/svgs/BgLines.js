import React from "react";

export default function BgLines() {
  return (
    <svg
      width="100%"
      viewBox="0 0 480 150"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-[reveal_1.5s_linear_0.2s_forwards] absolute top-1 left-1"
    >
      <defs>
        <pattern id="vertical-delight-frame" width="12.5%" height="100%">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="150"
            strokeWidth="2"
            className="stroke-inset animate-dash"
          ></line>
        </pattern>
        <pattern
          id="horizontal-delight-frame"
          width="100%"
          height="33.333333333333336%"
        >
          <line
            x1="0"
            y1="0"
            x2="480"
            y2="0"
            strokeWidth="2"
            className="stroke-inset animate-dash"
          ></line>
        </pattern>
      </defs>
      <rect
        fill="url(#vertical-delight-frame)"
        stroke="none"
        width="480"
        height="150"
      ></rect>
      <rect
        fill="url(#horizontal-delight-frame)"
        stroke="none"
        width="480"
        height="150"
      ></rect>
      <line
        x1="480"
        y1="0"
        x2="480"
        y2="150"
        strokeWidth="2"
        className="stroke-inset animate-dash"
      ></line>
      <line
        x1="0"
        y1="0"
        x2="480"
        y2="0"
        strokeWidth="2"
        className="stroke-white"
      ></line>
    </svg>
  );
}
