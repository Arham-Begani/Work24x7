"use client";

import React, { useState } from "react";

export function AnimatedGears() {
  const [isHovered, setIsHovered] = useState(false);

  // 16-tooth precision industrial gears
  const teethCount = 16;
  const cycleDuration = isHovered ? "8s" : "22s";

  return (
    <div
      className="relative flex flex-col items-center justify-center cursor-pointer select-none group py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Interactive mechanical mesh"
    >
      <svg
        viewBox="0 0 320 210"
        className="w-72 sm:w-[420px] md:w-[480px] h-auto transition-all duration-700 ease-out group-hover:scale-[1.04]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic physical drop shadow: deepens on hover */}
          <filter id="gearCastShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="2"
              dy={isHovered ? "7" : "4"}
              stdDeviation={isHovered ? "6" : "4"}
              floodColor="#000000"
              floodOpacity={isHovered ? "0.95" : "0.8"}
            />
          </filter>

          {/* Machined Steel Sheen - Left Gear */}
          <linearGradient id="steelPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6e7278" />
            <stop offset="22%" stopColor="#4a4d52" />
            <stop offset="45%" stopColor="#82878e" />
            <stop offset="50%" stopColor={isHovered ? "#b8bfc9" : "#9da3ab"} />
            <stop offset="68%" stopColor="#555555" />
            <stop offset="90%" stopColor="#3c3e42" />
            <stop offset="100%" stopColor="#2c2e32" />
          </linearGradient>

          {/* Machined Steel Sheen - Right Gear */}
          <linearGradient id="steelSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#757980" />
            <stop offset="25%" stopColor="#4e5157" />
            <stop offset="47%" stopColor="#8c9199" />
            <stop offset="52%" stopColor={isHovered ? "#c0c7d4" : "#a5abb5"} />
            <stop offset="70%" stopColor="#555555" />
            <stop offset="92%" stopColor="#383a3e" />
            <stop offset="100%" stopColor="#282a2e" />
          </linearGradient>

          {/* Rim Bevel */}
          <linearGradient id="rimBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#9ca2ad" : "#8b9099"} />
            <stop offset="50%" stopColor="#555555" />
            <stop offset="100%" stopColor="#25272a" />
          </linearGradient>

          {/* Recessed Web Interior */}
          <radialGradient id="recessWeb" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#26282b" />
            <stop offset="85%" stopColor="#131416" />
            <stop offset="100%" stopColor="#0a0a0c" />
          </radialGradient>

          {/* Turned Hub Boss */}
          <radialGradient id="hubBoss" cx="38%" cy="38%" r="62%">
            <stop offset="0%" stopColor={isHovered ? "#a3a9b3" : "#8c9199"} />
            <stop offset="45%" stopColor="#555555" />
            <stop offset="85%" stopColor="#2f3136" />
            <stop offset="100%" stopColor="#1e2023" />
          </radialGradient>

          {/* Bolt Shading */}
          <linearGradient id="boltShading" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ea4ad" />
            <stop offset="50%" stopColor="#585c63" />
            <stop offset="100%" stopColor="#25272b" />
          </linearGradient>

          {/* High-precision involute tooth */}
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
              transition: "animation-duration 0.6s ease",
            }}
          >
            {/* 16 Machined Involute Teeth */}
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (360 / teethCount) * i;
              return (
                <g key={`g1-tooth-${i}`} transform={`rotate(${angle})`}>
                  <use
                    href="#involuteTooth"
                    fill="url(#steelPrimary)"
                    stroke="#232528"
                    strokeWidth="0.75"
                  />
                  {/* Leading edge light reflection */}
                  <line
                    x1="-3.2"
                    y1="-65.5"
                    x2="-5.8"
                    y2="-45.5"
                    stroke={isHovered ? "#d4d8df" : "#a8afb8"}
                    strokeWidth={isHovered ? "0.75" : "0.5"}
                    opacity={isHovered ? "1" : "0.8"}
                  />
                  {/* Trailing edge flank shadow */}
                  <line
                    x1="3.2"
                    y1="-65.5"
                    x2="5.8"
                    y2="-45.5"
                    stroke="#1c1d20"
                    strokeWidth="0.5"
                    opacity="0.9"
                  />
                </g>
              );
            })}

            {/* Gear Body Rim */}
            <circle
              r="46"
              fill="url(#rimBevel)"
              stroke={isHovered ? "#9297a1" : "#7a7f87"}
              strokeWidth="0.75"
            />
            <circle
              r="44.5"
              fill="url(#steelPrimary)"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Recessed Milled Web */}
            <circle
              r="36"
              fill="url(#recessWeb)"
              stroke="#1d1e21"
              strokeWidth="1.2"
            />
            <circle
              r="35.2"
              fill="none"
              stroke="#3a3d42"
              strokeWidth="0.6"
              opacity="0.5"
            />

            {/* 6 Weight-Reduction Bores */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g1-bore-${angle}`} transform={`rotate(${angle})`}>
                <circle
                  cx="24"
                  cy="0"
                  r="5.5"
                  fill="#1c1d20"
                  stroke="#585c63"
                  strokeWidth="0.6"
                />
                <circle
                  cx="24"
                  cy="0"
                  r="4.2"
                  fill="#07080d"
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
              fill="url(#hubBoss)"
              stroke={isHovered ? "#9297a1" : "#7a7f87"}
              strokeWidth="0.8"
            />
            <circle
              r="13.8"
              fill="none"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Hex Nut */}
            <polygon
              points="0,-7.5 6.5,-3.75 6.5,3.75 0,7.5 -6.5,3.75 -6.5,-3.75"
              fill="url(#boltShading)"
              stroke="#1e2023"
              strokeWidth="0.75"
            />

            {/* Hex socket internal drive */}
            <polygon
              points="0,-3.8 3.3,-1.9 3.3,1.9 0,3.8 -3.3,1.9 -3.3,-1.9"
              fill="#07080d"
              stroke="#18191c"
              strokeWidth="0.5"
            />
          </g>
        </g>

        {/* =================== GEAR 2 (Right - Counter-Clockwise) =================== */}
        <g transform="translate(216, 105)" filter="url(#gearCastShadow)">
          <g
            style={{
              animation: `spinCCW ${cycleDuration} linear infinite`,
              transformOrigin: "0px 0px",
              transition: "animation-duration 0.6s ease",
            }}
          >
            {/* 16 Machined Involute Teeth with 11.25° Phase Offset */}
            {Array.from({ length: teethCount }).map((_, i) => {
              const angle = (360 / teethCount) * i + 11.25;
              return (
                <g key={`g2-tooth-${i}`} transform={`rotate(${angle})`}>
                  <use
                    href="#involuteTooth"
                    fill="url(#steelSecondary)"
                    stroke="#232528"
                    strokeWidth="0.75"
                  />
                  {/* Leading edge reflection */}
                  <line
                    x1="-3.2"
                    y1="-65.5"
                    x2="-5.8"
                    y2="-45.5"
                    stroke={isHovered ? "#d4d8df" : "#a8afb8"}
                    strokeWidth={isHovered ? "0.75" : "0.5"}
                    opacity={isHovered ? "1" : "0.8"}
                  />
                  {/* Trailing edge shadow */}
                  <line
                    x1="3.2"
                    y1="-65.5"
                    x2="5.8"
                    y2="-45.5"
                    stroke="#1c1d20"
                    strokeWidth="0.5"
                    opacity="0.9"
                  />
                </g>
              );
            })}

            {/* Gear Body Rim */}
            <circle
              r="46"
              fill="url(#rimBevel)"
              stroke={isHovered ? "#9297a1" : "#7a7f87"}
              strokeWidth="0.75"
            />
            <circle
              r="44.5"
              fill="url(#steelSecondary)"
              stroke="#2d2f33"
              strokeWidth="0.5"
            />

            {/* Recessed Milled Web Interior */}
            <circle
              r="36"
              fill="url(#recessWeb)"
              stroke="#1d1e21"
              strokeWidth="1.2"
            />
            <circle
              r="35.2"
              fill="none"
              stroke="#3a3d42"
              strokeWidth="0.6"
              opacity="0.5"
            />

            {/* 6 Weight-Reduction Bores */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g2-bore-${angle}`} transform={`rotate(${angle})`}>
                <circle
                  cx="24"
                  cy="0"
                  r="5.5"
                  fill="#1c1d20"
                  stroke="#585c63"
                  strokeWidth="0.6"
                />
                <circle
                  cx="24"
                  cy="0"
                  r="4.2"
                  fill="#07080d"
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
              fill="url(#hubBoss)"
              stroke={isHovered ? "#9297a1" : "#7a7f87"}
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
              fill="url(#boltShading)"
              stroke="#1e2023"
              strokeWidth="0.75"
            />

            {/* Hex socket */}
            <polygon
              points="0,-3.8 3.3,-1.9 3.3,1.9 0,3.8 -3.3,1.9 -3.3,-1.9"
              fill="#07080d"
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
