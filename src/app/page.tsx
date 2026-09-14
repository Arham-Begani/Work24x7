import { AnimatedGears } from "@/components/AnimatedGears";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#08090d] text-zinc-100 flex flex-col justify-between items-center px-6 py-8 sm:py-10 selection:bg-zinc-800 selection:text-zinc-200 overflow-hidden font-sans">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-2 text-[13px] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-medium tracking-tight text-zinc-300">work24x7.ai</span>
        </div>

        <a
          href="mailto:hello@work24x7.ai"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-zinc-500" />
          <span>hello@work24x7.ai</span>
        </a>
      </header>

      {/* Center Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-10 sm:py-14 max-w-2xl mx-auto w-full">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-medium tracking-[0.06em] text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <span>System In Active Development</span>
        </div>

        {/* Main Center Heading: Work24x7.ai */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.04em] text-zinc-100 leading-none mb-6">
          Work24x7<span className="font-normal text-zinc-400">.ai</span>
        </h1>

        {/* Physically Interlocking Metallic Gears with Interactive Hover */}
        <div className="my-6 sm:my-8">
          <AnimatedGears />
        </div>

        {/* Work in Progress Subheading */}
        <div className="space-y-2 mt-4">
          <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-zinc-200">
            Work in progress
          </h2>

          <p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-sm mx-auto">
            Engineering an autonomous operations engine. Check back soon.
          </p>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 w-full max-w-4xl text-center py-4 border-t border-zinc-900/80">
        <p className="text-xs text-zinc-600 font-normal tracking-tight">
          © {new Date().getFullYear()} Work24x7.ai • All rights reserved.
        </p>
      </footer>
    </div>
  );
}
