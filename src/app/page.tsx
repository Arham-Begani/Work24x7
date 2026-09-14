import { AnimatedGears } from "@/components/AnimatedGears";
import { MiniGear } from "@/components/MiniGear";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#08090d] text-zinc-100 flex flex-col justify-between items-center px-6 py-12 selection:bg-zinc-800 selection:text-zinc-200 overflow-hidden font-sans">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Top spacer to balance vertical centering */}
      <div className="h-6 w-full" />

      {/* Main Center: Heading with MiniGear dot + Continuous Interlocking Gears + Work in Progress */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto max-w-xl mx-auto w-full">
        {/* Main Center Heading: Work24x7 [MiniGear] ai */}
        <h1 className="flex items-center justify-center text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] text-zinc-100 leading-none mb-6">
          <span>Work24x7</span>
          <span className="inline-flex items-center justify-center mx-1 sm:mx-2 align-middle">
            <MiniGear />
          </span>
          <span className="font-normal text-zinc-400">ai</span>
        </h1>

        {/* Continuously Interlocking Precision Steel Gears */}
        <div className="my-6 sm:my-8">
          <AnimatedGears />
        </div>

        {/* Work in Progress */}
        <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-zinc-300">
          Work in progress
        </h2>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-4xl text-center py-4">
        <p className="text-xs text-zinc-600 font-normal tracking-tight">
          © {new Date().getFullYear()} Work24x7.ai • All rights reserved.
        </p>
      </footer>
    </div>
  );
}
