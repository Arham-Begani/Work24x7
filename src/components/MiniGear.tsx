"use client";

import React from "react";

export function MiniGear({ className = "w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" }: { className?: string }) {
  const teeth = 8;
  const outerR = 10;
  const rootR = 7.5;
  const toothWidth = 3.2;
  const toothHeight = 3.5;

  return (
    <span className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{
            animation: "spinCW 8s linear infinite",
            transformOrigin: "12px 12px",
          }}
        >
          {/* 8 Teeth */}
          {Array.from({ length: teeth }).map((_, i) => {
            const angle = (360 / teeth) * i;
            return (
              <rect
                key={`mini-tooth-${i}`}
                x={12 - toothWidth / 2}
                y={12 - outerR}
                width={toothWidth}
                height={toothHeight}
                rx="0.75"
                fill="#555555"
                stroke="#666666"
                strokeWidth="0.5"
                transform={`rotate(${angle} 12 12)`}
              />
            );
          })}

          {/* Main Body Rim */}
          <circle
            cx="12"
            cy="12"
            r={rootR}
            fill="#555555"
            stroke="#777777"
            strokeWidth="0.75"
          />

          {/* Inner Recess */}
          <circle
            cx="12"
            cy="12"
            r="4.8"
            fill="#18191c"
            stroke="#3a3d42"
            strokeWidth="0.5"
          />

          {/* Central Hub */}
          <circle
            cx="12"
            cy="12"
            r="2.8"
            fill="#555555"
            stroke="#888888"
            strokeWidth="0.5"
          />

          {/* Center Axle Bore */}
          <circle cx="12" cy="12" r="1.2" fill="#08090d" />
        </g>
      </svg>
    </span>
  );
}
