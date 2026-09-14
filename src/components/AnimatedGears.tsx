"use client";

import React, { useState } from "react";

export function AnimatedGears() {
  const [speed, setSpeed] = useState<"normal" | "fast">("normal");

  // Number of teeth for each gear
  const teeth1 = 12;
  const teeth2 = 12;

  // Radii
  const rOuter = 60;
  const rPitch = 50;
  const rRoot = 42;
  const toothWidth = 14;
  const toothHeight = 22;

  // Spacing
  // Center distance between two 12-tooth gears with rPitch = 50 is exactly 100px.
  // We place Gear 1 at (110, 130) and Gear 2 at (192, 74)
  // dx = 82, dy = -56 => distance = sqrt(82^2 + 56^2) = sqrt(6724 + 3136) = sqrt(9860) ~ 99.3px ~ 100px
  // Angle of line connecting Gear 1 to Gear 2: atan2(-56, 82) = -34.3 degrees (~ -34 deg)
  // For teeth to mesh along this axis, Gear 2's tooth gap must align with Gear 1's tooth peak along the line of centers.

  const duration = speed === "fast" ? "4s" : "9s";

  return (
    <div
      className="relative flex flex-col items-center justify-center cursor-pointer select-none group"
      onMouseEnter={() => setSpeed("fast")}
      onMouseLeave={() => setSpeed("normal")}
      title="Hover to accelerate gears"
    >
      {/* Ambient background glow behind the gears */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-500/25 blur-3xl -z-10 animate-pulse transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-70" />

      {/* Main SVG with 2 interlocking animated gears */}
      <svg
        viewBox="0 0 310 210"
        className="w-72 sm:w-96 md:w-[420px] h-auto drop-shadow-[0_0_25px_rgba(99,102,241,0.35)] transition-transform duration-500 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gear 1 Gradients (Electric Indigo & Violet) */}
          <linearGradient id="gear1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <radialGradient id="gear1Core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.95" />
          </radialGradient>

          {/* Gear 2 Gradients (Cyan, Sky Blue & Emerald) */}
          <linearGradient id="gear2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <radialGradient id="gear2Core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#0891b2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0.95" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="meshGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* =================== GEAR 1 (Larger, Primary - Clockwise) =================== */}
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
                  rx="3"
                  fill="url(#gear1Grad)"
                  transform={`rotate(${angle})`}
                  className="transition-colors duration-300"
                />
              );
            })}

            {/* Outer Rim Ring */}
            <circle
              r={rPitch - 1}
              fill="url(#gear1Grad)"
              stroke="#c084fc"
              strokeWidth="2"
              strokeOpacity="0.8"
            />

            {/* Cutout Ring (recessed track) */}
            <circle
              r={rPitch - 12}
              fill="#0b0d17"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />

            {/* 4 Spokes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((spokeAngle) => (
              <line
                key={`g1-spoke-${spokeAngle}`}
                x1="0"
                y1="0"
                x2={rPitch - 12}
                y2="0"
                stroke="url(#gear1Grad)"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${spokeAngle})`}
                opacity="0.85"
              />
            ))}

            {/* Inner Hub */}
            <circle
              r="22"
              fill="url(#gear1Core)"
              stroke="#e9d5ff"
              strokeWidth="2"
              className="drop-shadow-md"
            />

            {/* Central Axle Hole */}
            <circle r="9" fill="#090a0f" stroke="#a855f7" strokeWidth="2.5" />

            {/* Decorative Bolt Dots */}
            {[0, 90, 180, 270].map((dotAngle) => (
              <circle
                key={`g1-dot-${dotAngle}`}
                cx="15"
                cy="0"
                r="1.8"
                fill="#ffffff"
                transform={`rotate(${dotAngle})`}
                opacity="0.9"
              />
            ))}
          </g>
        </g>

        {/* =================== GEAR 2 (Secondary - Counter-Clockwise) =================== */}
        <g transform="translate(192, 70)">
          {/*
            Gear 2 rotates counter-clockwise.
            To mesh with Gear 1 at ~-34 deg angle, it has an initial phase offset of 15 degrees.
          */}
          <g
            style={{
              animation: `spinCCW ${duration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 12 Teeth */}
            {Array.from({ length: teeth2 }).map((_, i) => {
              const angle = (360 / teeth2) * i + 15;
              return (
                <rect
                  key={`g2-tooth-${i}`}
                  x={-toothWidth / 2}
                  y={-rOuter}
                  width={toothWidth}
                  height={toothHeight}
                  rx="3"
                  fill="url(#gear2Grad)"
                  transform={`rotate(${angle})`}
                  className="transition-colors duration-300"
                />
              );
            })}

            {/* Outer Rim Ring */}
            <circle
              r={rPitch - 1}
              fill="url(#gear2Grad)"
              stroke="#67e8f9"
              strokeWidth="2"
              strokeOpacity="0.8"
            />

            {/* Cutout Track */}
            <circle
              r={rPitch - 12}
              fill="#06121e"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />

            {/* 6 Decorative Cutout Holes */}
            {[0, 60, 120, 180, 240, 300].map((holeAngle) => (
              <circle
                key={`g2-hole-${holeAngle}`}
                cx="25"
                cy="0"
                r="6.5"
                fill="#030712"
                stroke="#22d3ee"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                transform={`rotate(${holeAngle})`}
              />
            ))}

            {/* Center Hub */}
            <circle
              r="18"
              fill="url(#gear2Core)"
              stroke="#a5f3fc"
              strokeWidth="2"
              className="drop-shadow-md"
            />

            {/* Axle Hole */}
            <circle r="7.5" fill="#090a0f" stroke="#38bdf8" strokeWidth="2.5" />
          </g>
        </g>

        {/* =================== MESH INTERACTION SPARK / GLOW =================== */}
        {/* At contact point between the two gears (~ 151, 98) */}
        <g transform="translate(151, 98)">
          <circle
            r="4"
            fill="#ffffff"
            filter="url(#meshGlow)"
            className="animate-ping opacity-60"
          />
          <circle r="2" fill="#ffffff" />
          <circle r="6" fill="#a855f7" opacity="0.3" className="animate-pulse" />
        </g>
      </svg>

      {/* Interactive indicator hint */}
      <div className="flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/60 text-[11px] font-mono text-zinc-400 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        <span>{speed === "fast" ? "Gears accelerated ⚡" : "Interlocking autonomous engine"}</span>
      </div>

      {/* Global CSS Keyframes for the two gears */}
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
