"use client";

export default function Lines() {
  return (
    <svg
      width="100%"
      viewBox="0 0 1400 1144"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-[reveal_1.5s_linear_0.2s_forwards] absolute -top-0.5"
    >
      <defs>
        <pattern
          id="vertical-mockups"
          width="7.6923076923076925%"
          height="100%"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="1144"
            strokeWidth="2"
            className="stroke-inset animate-dash"
          ></line>
        </pattern>
        <pattern
          id="horizontal-mockups"
          width="100%"
          height="4.545454545454546%"
        >
          <line
            x1="0"
            y1="0"
            x2="1400"
            y2="0"
            strokeWidth="2"
            className="stroke-inset animate-dash"
          ></line>
        </pattern>
      </defs>
      <rect
        fill="url(#vertical-mockups)"
        stroke="none"
        width="1400"
        height="1144"
      ></rect>
      <rect
        fill="url(#horizontal-mockups)"
        stroke="none"
        width="1400"
        height="1144"
      ></rect>
      <line
        x1="1400"
        y1="0"
        x2="1400"
        y2="1144"
        strokeWidth="2"
        className="stroke-inset animate-dash"
      ></line>
      <line
        x1="0"
        y1="0"
        x2="1400"
        y2="0"
        strokeWidth="2"
        className="stroke-white"
      ></line>
    </svg>
  );
}
