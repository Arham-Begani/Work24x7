"use client";

import React from "react";

export function AnimatedGears() {
  const teethCount = 16;
  const cycleDuration = "20s";

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none py-2 cursor-pointer group"
      title="Work24x7 Mechanical Engine"
    >
      <svg
        viewBox="0 0 320 210"
        className="w-72 sm:w-[420px] md:w-[480px] h-auto transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.12]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Constant directional physical drop shadow */}
          <filter id="gearCastShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="2"
              dy="6"
              stdDeviation="5"
              floodColor="#000000"
              floodOpacity="0.85"
            />
          </filter>

          {/* High-precision involute tooth: Base width=12, Tip width=7, chamfered land */}
          <path
            id="involuteTooth"
            d="M -3.2 -66 C -1 -66.3 1 -66.3 3.2 -66 C 4.2 -65.8 4.6 -64.8 4.7 -63.5 L 6 -45 C 4 -44.5 -4 -44.5 -6 -45 L -4.7 -63.5 C -4.6 -64.8 -4.2 -65.8 -3.2 -66 Z"
          />
        </defs>

        {/* =================== GEAR 1 (Left - Clockwise) =================== */}
        <g transform="translate(104, 105)" filter="url(#gearCastShadow)">
          <g
            style={{
              animation: `spinCW ${cycleDuration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 16 Machined Involute Teeth in satin #555555 */}
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (360 / teethCount) * i;
              return (
                <g key={`g1-tooth-${i}`} transform={`rotate(${angle})`}>
                  <use
                    href="#involuteTooth"
                    fill="#52565e"
                    stroke="#232528"
                    strokeWidth="0.75"
                  />
                  {/* Leading edge light highlight */}
                  <line
                    x1="-3.2"
                    y1="-65.5"
                    x2="-5.8"
                    y2="-45.5"
                    stroke="#9ba1ab"
                    strokeWidth="0.6"
                    opacity="0.85"
                  />
                  {/* Trailing edge shadow */}
                  <line
                    x1="3.2"
                    y1="-65.5"
                    x2="5.8"
                    y2="-45.5"
                    stroke="#1e2023"
                    strokeWidth="0.6"
                    opacity="0.9"
                  />
                </g>
              );
            })}

            {/* Gear Body Outer Rim */}
            <circle
              r="46"
              fill="#52565e"
              stroke="#7e8490"
              strokeWidth="0.8"
            />
            <circle
              r="44.8"
              fill="#4a4e55"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Recessed Milled Web Interior */}
            <circle
              r="36"
              fill="#16171a"
              stroke="#202226"
              strokeWidth="1.2"
            />
            <circle
              r="35.2"
              fill="none"
              stroke="#383b40"
              strokeWidth="0.5"
            />

            {/* 6 Precision Machined Weight-Reduction Bores */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g1-bore-${angle}`} transform={`rotate(${angle})`}>
                {/* Chamfer outer ring */}
                <circle
                  cx="24"
                  cy="0"
                  r="5.5"
                  fill="#1f2024"
                  stroke="#565961"
                  strokeWidth="0.6"
                />
                {/* Dark through-hole */}
                <circle
                  cx="24"
                  cy="0"
                  r="4.2"
                  fill="#08090d"
                  stroke="#101114"
                  strokeWidth="0.7"
                />
                {/* Inner bore shadow */}
                <path
                  d="M 20.5 0 A 4.2 4.2 0 0 1 27.5 0"
                  fill="none"
                  stroke="#383a3f"
                  strokeWidth="0.6"
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Turned Central Hub Boss */}
            <circle
              r="15"
              fill="#52565e"
              stroke="#7e8490"
              strokeWidth="0.8"
            />
            <circle
              r="13.8"
              fill="none"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Industrial Hex Arbor Bolt */}
            <polygon
              points="0,-7.5 6.5,-3.75 6.5,3.75 0,7.5 -6.5,3.75 -6.5,-3.75"
              fill="#5e626b"
              stroke="#222428"
              strokeWidth="0.75"
            />

            {/* Hex socket internal drive */}
            <polygon
              points="0,-3.8 3.3,-1.9 3.3,1.9 0,3.8 -3.3,1.9 -3.3,-1.9"
              fill="#08090d"
              stroke="#18191c"
              strokeWidth="0.5"
            />
          </g>
        </g>

        {/* =================== GEAR 2 (Right - Counter-Clockwise) =================== */}
        {/*
          Coplanar alignment at (216, 105).
          Center distance = 112px (exactly 2 * pitchRadius 56px).
          Phase offset: 360 / (16 * 2) = 11.25 degrees.
          Meshes seamlessly with Gear 1 without collision.
        */}
        <g transform="translate(216, 105)" filter="url(#gearCastShadow)">
          <g
            style={{
              animation: `spinCCW ${cycleDuration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 16 Machined Involute Teeth with 11.25° Phase Offset */}
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (360 / teethCount) * i + 11.25;
              return (
                <g key={`g2-tooth-${i}`} transform={`rotate(${angle})`}>
                  <use
                    href="#involuteTooth"
                    fill="#52565e"
                    stroke="#232528"
                    strokeWidth="0.75"
                  />
                  {/* Leading edge reflection */}
                  <line
                    x1="-3.2"
                    y1="-65.5"
                    x2="-5.8"
                    y2="-45.5"
                    stroke="#9ba1ab"
                    strokeWidth="0.6"
                    opacity="0.85"
                  />
                  {/* Trailing edge shadow */}
                  <line
                    x1="3.2"
                    y1="-65.5"
                    x2="5.8"
                    y2="-45.5"
                    stroke="#1e2023"
                    strokeWidth="0.6"
                    opacity="0.9"
                  />
                </g>
              );
            })}

            {/* Gear Body Outer Rim */}
            <circle
              r="46"
              fill="#52565e"
              stroke="#7e8490"
              strokeWidth="0.8"
            />
            <circle
              r="44.8"
              fill="#4a4e55"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Recessed Milled Web Interior */}
            <circle
              r="36"
              fill="#16171a"
              stroke="#202226"
              strokeWidth="1.2"
            />
            <circle
              r="35.2"
              fill="none"
              stroke="#383b40"
              strokeWidth="0.5"
            />

            {/* 6 Weight-Reduction Bores */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g2-bore-${angle}`} transform={`rotate(${angle})`}>
                <circle
                  cx="24"
                  cy="0"
                  r="5.5"
                  fill="#1f2024"
                  stroke="#565961"
                  strokeWidth="0.6"
                />
                <circle
                  cx="24"
                  cy="0"
                  r="4.2"
                  fill="#08090d"
                  stroke="#101114"
                  strokeWidth="0.7"
                />
                <path
                  d="M 20.5 0 A 4.2 4.2 0 0 1 27.5 0"
                  fill="none"
                  stroke="#383a3f"
                  strokeWidth="0.6"
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Turned Central Hub Boss */}
            <circle
              r="15"
              fill="#52565e"
              stroke="#7e8490"
              strokeWidth="0.8"
            />
            <circle
              r="13.8"
              fill="none"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Hex Bolt */}
            <polygon
              points="0,-7.5 6.5,-3.75 6.5,3.75 0,7.5 -6.5,3.75 -6.5,-3.75"
              fill="#5e626b"
              stroke="#222428"
              strokeWidth="0.75"
            />

            {/* Hex socket */}
            <polygon
              points="0,-3.8 3.3,-1.9 3.3,1.9 0,3.8 -3.3,1.9 -3.3,-1.9"
              fill="#08090d"
              stroke="#18191c"
              strokeWidth="0.5"
            />
          </g>
        </g>
      </svg>

      <style jsx global>{`
        @keyframes spinCW {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinCCW {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
