import { AnimatedGears } from "@/components/AnimatedGears";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#08090d] text-zinc-100 flex flex-col justify-between items-center px-6 py-12 selection:bg-zinc-800 selection:text-zinc-200 overflow-hidden font-sans">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Empty top placeholder to balance vertical centering */}
      <div className="h-6 w-full" />

      {/* Main Center: Heading + Continuous Interlocking Mechanical Gears + Work in Progress */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto max-w-xl mx-auto w-full">
        {/* Main Center Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] text-zinc-100 leading-none mb-6">
          Work24x7<span className="font-normal text-zinc-400">.ai</span>
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
