import { AnimatedGears } from "@/components/AnimatedGears";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#07080d] text-zinc-100 flex flex-col justify-between items-center px-6 py-10 selection:bg-indigo-500 selection:text-white overflow-hidden">
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 blur-[120px] pointer-events-none" />

      {/* Subtle top indicator */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-zinc-400 font-medium">work24x7.ai</span>
        </div>

        <a
          href="mailto:hello@work24x7.ai"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-all backdrop-blur-md"
        >
          <Mail className="w-3.5 h-3.5 text-zinc-500" />
          <span>hello@work24x7.ai</span>
        </a>
      </header>

      {/* Center Hero: Heading + Two Moving Animated Gears + Work in progress */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-12 max-w-3xl mx-auto w-full">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="tracking-wide">System Under Active Development</span>
        </div>

        {/* Main Center Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6">
          Work
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            24x7
          </span>
        </h1>

        {/* Two Animated Gears with Interactive & Visual Effects */}
        <div className="my-6 sm:my-8">
          <AnimatedGears />
        </div>

        {/* Work in Progress Subheading */}
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            <h2 className="text-lg sm:text-2xl font-semibold tracking-[0.28em] sm:tracking-[0.35em] uppercase text-zinc-200 font-mono">
              Work In Progress
            </h2>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto font-mono">
            Something powerful is in the machine. Check back soon.
          </p>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-4xl text-center py-4 border-t border-zinc-900/60">
        <p className="text-[11px] font-mono text-zinc-600">
          © {new Date().getFullYear()} Work24x7.ai • All rights reserved.
        </p>
      </footer>
    </div>
  );
}
