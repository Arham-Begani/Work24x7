import { AnimatedGears } from "@/components/AnimatedGears";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#07080d] text-zinc-100 flex flex-col justify-between items-center px-6 py-10 selection:bg-zinc-700 selection:text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span className="font-medium tracking-tight">work24x7.ai</span>
        </div>

        <a
          href="mailto:hello@work24x7.ai"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-zinc-500" />
          <span>hello@work24x7.ai</span>
        </a>
      </header>

      {/* Center Hero: Heading + Two #555555 Moving Animated Gears + Work in progress */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-12 max-w-3xl mx-auto w-full">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span className="tracking-wide">System Under Development</span>
        </div>

        {/* Main Center Heading - Solid White, No Gradient */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6">
          Work24x7
        </h1>

        {/* Two Animated Gears in #555555 */}
        <div className="my-6 sm:my-8">
          <AnimatedGears />
        </div>

        {/* Work in Progress Subheading */}
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-zinc-800" />
            <h2 className="text-lg sm:text-2xl font-semibold tracking-[0.3em] uppercase text-zinc-300 font-mono">
              Work In Progress
            </h2>
            <span className="h-[1px] w-8 sm:w-16 bg-zinc-800" />
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto font-mono">
            Something is in the works. Check back soon.
          </p>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-4xl text-center py-4 border-t border-zinc-900">
        <p className="text-[11px] font-mono text-zinc-600">
          © {new Date().getFullYear()} Work24x7.ai • All rights reserved.
        </p>
      </footer>
    </div>
  );
}
