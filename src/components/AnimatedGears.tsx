"use client";

import React, { useState } from "react";

export function AnimatedGears() {
  const [speed, setSpeed] = useState<"normal" | "fast">("normal");

  const teeth1 = 12;
  const teeth2 = 12;

  const rOuter = 60;
  const rPitch = 50;
  const toothWidth = 14;
  const toothHeight = 22;

  const duration = speed === "fast" ? "4s" : "9s";

  return (
    <div
      className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setSpeed("fast")}
      onMouseLeave={() => setSpeed("normal")}
      title="Hover to accelerate gears"
    >
      {/* Main SVG with 2 interlocking animated gears - pure #555555 mechanical finish */}
      <svg
        viewBox="0 0 310 210"
        className="w-72 sm:w-96 md:w-[420px] h-auto transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =================== GEAR 1 (Clockwise) =================== */}
        <g transform="translate(110, 125)">
          <g
            style={{
              animation: `spinCW ${duration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 12 Teeth */}
            {Array.from({ length: teeth1 }).map((_, i) => {
              const angle = (360 / teeth1) * i;
              return (
                <rect
                  key={`g1-tooth-${i}`}
                  x={-toothWidth / 2}
                  y={-rOuter}
                  width={toothWidth}
                  height={toothHeight}
                  rx="2"
                  fill="#555555"
                  transform={`rotate(${angle})`}
                />
              );
            })}

            {/* Outer Rim Ring */}
            <circle
              r={rPitch - 1}
              fill="#555555"
              stroke="#666666"
              strokeWidth="1"
            />

            {/* Recessed Track */}
            <circle
              r={rPitch - 12}
              fill="#07080d"
              stroke="#444444"
              strokeWidth="1"
            />

            {/* 4 Spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((spokeAngle) => (
              <line
                key={`g1-spoke-${spokeAngle}`}
                x1="0"
                y1="0"
                x2={rPitch - 12}
                y2="0"
                stroke="#555555"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${spokeAngle})`}
              />
            ))}

            {/* Inner Hub */}
            <circle
              r="22"
              fill="#555555"
              stroke="#666666"
              strokeWidth="1.5"
            />

            {/* Central Axle Hole */}
            <circle r="9" fill="#07080d" stroke="#333333" strokeWidth="2" />

            {/* Mechanical Bolt Accents */}
            {[0, 90, 180, 270].map((dotAngle) => (
              <circle
                key={`g1-dot-${dotAngle}`}
                cx="15"
                cy="0"
                r="1.5"
                fill="#777777"
                transform={`rotate(${dotAngle})`}
              />
            ))}
          </g>
        </g>

        {/* =================== GEAR 2 (Counter-Clockwise) =================== */}
        <g transform="translate(192, 70)">
          <g
            style={{
              animation: `spinCCW ${duration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 12 Teeth (15° offset for intermeshing) */}
            {Array.from({ length: teeth2 }).map((_, i) => {
              const angle = (360 / teeth2) * i + 15;
              return (
                <rect
                  key={`g2-tooth-${i}`}
                  x={-toothWidth / 2}
                  y={-rOuter}
                  width={toothWidth}
                  height={toothHeight}
                  rx="2"
                  fill="#555555"
                  transform={`rotate(${angle})`}
                />
              );
            })}

            {/* Outer Rim Ring */}
            <circle
              r={rPitch - 1}
              fill="#555555"
              stroke="#666666"
              strokeWidth="1"
            />

            {/* Recessed Track */}
            <circle
              r={rPitch - 12}
              fill="#07080d"
              stroke="#444444"
              strokeWidth="1"
            />

            {/* 6 Decorative Cutout Holes */}
            {[0, 60, 120, 180, 240, 300].map((holeAngle) => (
              <circle
                key={`g2-hole-${holeAngle}`}
                cx="25"
                cy="0"
                r="6.5"
                fill="#07080d"
                stroke="#444444"
                strokeWidth="1"
                transform={`rotate(${holeAngle})`}
              />
            ))}

            {/* Center Hub */}
            <circle
              r="18"
              fill="#555555"
              stroke="#666666"
              strokeWidth="1.5"
            />

            {/* Central Axle Hole */}
            <circle r="7.5" fill="#07080d" stroke="#333333" strokeWidth="2" />
          </g>
        </g>
      </svg>

      {/* Clean minimal hover hint */}
      <div className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
        <span>{speed === "fast" ? "Accelerated" : "Hover to accelerate"}</span>
      </div>

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
