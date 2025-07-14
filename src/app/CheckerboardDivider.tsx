import React from "react";

export default function CheckerboardDivider() {
  return (
    <div style={{ background: "#fff", width: "100%", overflow: "hidden" }}>
      <svg
        width="100%"
        height="64"
        viewBox="0 0 2000 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMax slice"
        style={{ display: "block" }}
      >
        {/* Two rows of checkerboard squares */}
        <g>
          {/* First row */}
          {Array.from({ length: 64 }).map((_, i) => (
            <rect
              key={`row1-${i}`}
              x={i * 32}
              y={0}
              width={32}
              height={32}
              fill={i % 2 === 0 ? "#111" : "#fff"}
            />
          ))}
          {Array.from({ length: 64 }).map((_, i) => (
            <rect
              key={`row1b-${i}`}
              x={(i + 1) * 32}
              y={0}
              width={32}
              height={32}
              fill={i % 2 === 0 ? "#fff" : "#111"}
            />
          ))}
          {/* Second row */}
          {Array.from({ length: 64 }).map((_, i) => (
            <rect
              key={`row2-${i}`}
              x={i * 32}
              y={32}
              width={32}
              height={32}
              fill={i % 2 === 0 ? "#fff" : "#111"}
            />
          ))}
          {Array.from({ length: 64 }).map((_, i) => (
            <rect
              key={`row2b-${i}`}
              x={i * 32 + 32}
              y={32}
              width={32}
              height={32}
              fill={i % 2 === 0 ? "#111" : "#fff"}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
