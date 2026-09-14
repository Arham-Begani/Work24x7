"use client";

import React, { useState } from "react";

export function AnimatedGears() {
  const [speed, setSpeed] = useState<"normal" | "fast">("normal");

  const teethCount = 12;

  // Mechanical Dimensions
  // Pitch radius = 54px.
  // Root radius = 42px (base of teeth, top of rim).
  // Outer radius = 64px (tips of teeth).
  // Center distance between coplanar gears = 2 * Pitch Radius = 108px.
  // Gear 1 at (105, 105), Gear 2 at (213, 105).
  // Both gears are strictly coplanar on y = 105, side-by-side (not stacked or one above another).

  const duration = speed === "fast" ? "4s" : "9s";

  return (
    <div
      className="relative flex flex-col items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setSpeed("fast")}
      onMouseLeave={() => setSpeed("normal")}
      title="Hover to accelerate gears"
    >
      <svg
        viewBox="0 0 320 210"
        className="w-80 sm:w-[420px] md:w-[480px] h-auto transition-transform duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic brushed steel shader for Gear 1 */}
          <linearGradient id="metalGear1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7a7a7a" />
            <stop offset="25%" stopColor="#484848" />
            <stop offset="48%" stopColor="#9a9a9a" />
            <stop offset="52%" stopColor="#b5b5b5" />
            <stop offset="70%" stopColor="#555555" />
            <stop offset="100%" stopColor="#383838" />
          </linearGradient>

          {/* Metallic brushed steel shader for Gear 2 (counter-angled reflection) */}
          <linearGradient id="metalGear2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#828282" />
            <stop offset="28%" stopColor="#4a4a4a" />
            <stop offset="50%" stopColor="#adadad" />
            <stop offset="72%" stopColor="#555555" />
            <stop offset="100%" stopColor="#353535" />
          </linearGradient>

          {/* Hub & Axle metallic shaders */}
          <radialGradient id="metalHub" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#999999" />
            <stop offset="50%" stopColor="#555555" />
            <stop offset="100%" stopColor="#2b2b2b" />
          </radialGradient>

          <linearGradient id="metalNut" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b3b3b3" />
            <stop offset="50%" stopColor="#666666" />
            <stop offset="100%" stopColor="#333333" />
          </linearGradient>

          {/* Trapezoidal tooth profile with involute-style rounded corners */}
          {/* Base: r=42, width=16 (x: -8 to 8). Tip: r=64, width=10 (x: -5 to 5). */}
          <path
            id="trapezoidTooth"
            d="M -4.5 -64 Q 0 -64.6 4.5 -64 Q 5.5 -63.8 5.8 -62 L 8 -42 L -8 -42 L -5.8 -62 Q -5.5 -63.8 -4.5 -64 Z"
          />
        </defs>

        {/* =================== GEAR 1 (Left - Clockwise) =================== */}
        <g transform="translate(105, 105)">
          <g
            style={{
              animation: `spinCW ${duration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 12 Involute Tapered Teeth in metallic #555555 */}
            {Array.from({ length: teethCount }).map((_, i) => (
              <g key={`g1-tooth-${i}`} transform={`rotate(${(360 / teethCount) * i})`}>
                <use
                  href="#trapezoidTooth"
                  fill="url(#metalGear1)"
                  stroke="#222222"
                  strokeWidth="0.8"
                />
                {/* Tooth highlight edge */}
                <line
                  x1="-4.5"
                  y1="-63.5"
                  x2="-7.5"
                  y2="-42.5"
                  stroke="#a3a3a3"
                  strokeWidth="0.6"
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Gear Body Rim (Outer Circle r=44) */}
            <circle
              r="44"
              fill="url(#metalGear1)"
              stroke="#8a8a8a"
              strokeWidth="1"
            />

            {/* Machined Circular Groove (Recessed web track) */}
            <circle
              r="34"
              fill="#18181b"
              stroke="#383838"
              strokeWidth="1.2"
            />
            <circle
              r="31"
              fill="#111113"
              stroke="#262626"
              strokeWidth="0.8"
            />

            {/* 6 Machined Lightening / Weight-Reduction Holes */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g1-hole-${angle}`} transform={`rotate(${angle})`}>
                <circle
                  cx="23"
                  cy="0"
                  r="5.5"
                  fill="#07080d"
                  stroke="#404040"
                  strokeWidth="1"
                />
                <circle
                  cx="23"
                  cy="0"
                  r="4.5"
                  fill="none"
                  stroke="#1f1f1f"
                  strokeWidth="0.8"
                />
              </g>
            ))}

            {/* Center Boss / Hub */}
            <circle
              r="15"
              fill="url(#metalHub)"
              stroke="#9e9e9e"
              strokeWidth="1.2"
            />

            {/* Machined Axle Hex Nut */}
            <polygon
              points="0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4"
              fill="url(#metalNut)"
              stroke="#262626"
              strokeWidth="0.8"
            />

            {/* Central Dark Bore / Shaft Hole */}
            <circle r="3.5" fill="#07080d" stroke="#1c1c1c" strokeWidth="1" />
          </g>
        </g>

        {/* =================== GEAR 2 (Right - Counter-Clockwise) =================== */}
        {/*
          Strictly coplanar with Gear 1 at y = 105, x = 105 + 108 = 213.
          Center distance = 108px (exactly 2 * pitch radius).
          Initial offset of 15° gives Gear 2 a valley directly at the mesh point (left, 180°),
          allowing Gear 1's tooth (right, 0°) to interlock and mesh physically without overlap!
        */}
        <g transform="translate(213, 105)">
          <g
            style={{
              animation: `spinCCW ${duration} linear infinite`,
              transformOrigin: "0px 0px",
            }}
          >
            {/* 12 Involute Tapered Teeth with 15° Phase Offset */}
            {Array.from({ length: teethCount }).map((_, i) => (
              <g
                key={`g2-tooth-${i}`}
                transform={`rotate(${(360 / teethCount) * i + 15})`}
              >
                <use
                  href="#trapezoidTooth"
                  fill="url(#metalGear2)"
                  stroke="#222222"
                  strokeWidth="0.8"
                />
                {/* Tooth highlight edge */}
                <line
                  x1="-4.5"
                  y1="-63.5"
                  x2="-7.5"
                  y2="-42.5"
                  stroke="#a3a3a3"
                  strokeWidth="0.6"
                  opacity="0.8"
                />
              </g>
            ))}

            {/* Gear Body Rim (Outer Circle r=44) */}
            <circle
              r="44"
              fill="url(#metalGear2)"
              stroke="#8a8a8a"
              strokeWidth="1"
            />

            {/* Machined Circular Groove */}
            <circle
              r="34"
              fill="#18181b"
              stroke="#383838"
              strokeWidth="1.2"
            />
            <circle
              r="31"
              fill="#111113"
              stroke="#262626"
              strokeWidth="0.8"
            />

            {/* 6 Machined Lightening Holes */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={`g2-hole-${angle}`} transform={`rotate(${angle})`}>
                <circle
                  cx="23"
                  cy="0"
                  r="5.5"
                  fill="#07080d"
                  stroke="#404040"
                  strokeWidth="1"
                />
                <circle
                  cx="23"
                  cy="0"
                  r="4.5"
                  fill="none"
                  stroke="#1f1f1f"
                  strokeWidth="0.8"
                />
              </g>
            ))}

            {/* Center Boss / Hub */}
            <circle
              r="15"
              fill="url(#metalHub)"
              stroke="#9e9e9e"
              strokeWidth="1.2"
            />

            {/* Machined Axle Hex Nut */}
            <polygon
              points="0,-8 6.9,-4 6.9,4 0,8 -6.9,4 -6.9,-4"
              fill="url(#metalNut)"
              stroke="#262626"
              strokeWidth="0.8"
            />

            {/* Central Dark Bore / Shaft Hole */}
            <circle r="3.5" fill="#07080d" stroke="#1c1c1c" strokeWidth="1" />
          </g>
        </g>
      </svg>

      {/* Subtle mechanical status text */}
      <div className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
        <span>{speed === "fast" ? "Mechanical Mesh • 2x Velocity" : "Coplanar Mesh • Interlocking"}</span>
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
