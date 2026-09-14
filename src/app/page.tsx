import { AgentTerminal } from "@/components/AgentTerminal";
import { ProgressTracker } from "@/components/ProgressTracker";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle,
  Cpu,
  Layers,
  Lock,
  Mail,
  RotateCw,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col selection:bg-indigo-500 selection:text-white overflow-hidden">
      {/* Ambient background glows & grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] ambient-glow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] ambient-glow-secondary pointer-events-none" />

      {/* Navigation / Header */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white font-mono">
                Work<span className="text-indigo-400">24x7</span><span className="text-pink-400">.ai</span>
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono hidden sm:block">Autonomous AI Workforce</p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Building v1.0 • Live Q2</span>
          </div>

          <a
            href="mailto:hello@work24x7.ai"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-all backdrop-blur-md"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>Contact Us</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 sm:px-6 pt-10 pb-20 max-w-6xl mx-auto w-full">
        {/* Hero Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md shadow-sm shadow-indigo-500/10">
          <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>work24x7.ai is currently under active construction</span>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Work That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              Never Sleeps.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We are engineering autonomous AI agents capable of executing complex workflows,
            monitoring critical operations, and delivering high-value business outcomes 24 hours a day,
            7 days a week.
          </p>
        </div>

        {/* Waitlist Form Component */}
        <div className="w-full max-w-md mb-8">
          <WaitlistForm />
          <p className="text-center text-[12px] text-zinc-500 mt-3 font-mono">
            🛡️ Zero spam. Early access invites distributed on a rolling basis.
          </p>
        </div>

        {/* Key Metrics / Highlights Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl my-8">
          <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400">24/7/365</div>
            <div className="text-xs text-zinc-400 mt-1">Continuous Execution</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">&lt; 100ms</div>
            <div className="text-xs text-zinc-400 mt-1">Autonomous Event Dispatch</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">Zero</div>
            <div className="text-xs text-zinc-400 mt-1">Human Burnout or Fatigue</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 backdrop-blur-md text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-pink-400">99.99%</div>
            <div className="text-xs text-zinc-400 mt-1">Target Mission Reliability</div>
          </div>
        </div>

        {/* Interactive Agent Terminal HUD */}
        <div className="w-full my-6">
          <AgentTerminal />
        </div>

        {/* Feature Highlights Grid */}
        <div className="w-full max-w-4xl mt-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-300 mb-3">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Core Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why 24/7 Autonomous Operations?
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
              Traditional businesses lose 16 hours every day to downtime and handoffs. Work24x7 bridges the gap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <RotateCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unattended Autonomy</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Agents execute mission-critical pipelines during off-hours, triaging tickets, reconciling ledgers, and resolving alerts before your team wakes up.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multi-Agent Swarm</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Specialized agents for sales, support, data pipelines, and infrastructure communicate across shared state with deterministic peer verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deterministic Guardrails</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Safe sandboxes, scoped permissions, auditable action logs, and human-in-the-loop triggers ensure agents never overstep operational boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* Development Progress Roadmap */}
        <ProgressTracker />

        {/* Secondary Call to Action Box */}
        <div className="w-full max-w-4xl p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-zinc-900/60 to-zinc-950 border border-indigo-500/30 text-center relative overflow-hidden backdrop-blur-md shadow-2xl shadow-indigo-500/10">
          <div className="relative z-10 space-y-4 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to automate your operations around the clock?
            </h3>
            <p className="text-sm text-zinc-400">
              We are selectively onboarding design partners and high-velocity teams for the Work24x7 closed pilot program.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:partners@work24x7.ai?subject=Design%20Partner%20Inquiry%20-%20Work24x7.ai"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-900 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-md"
              >
                <span>Partner with Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@work24x7.ai"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700/60 transition-all"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>hello@work24x7.ai</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span>work24x7.ai</span>
            <span>—</span>
            <span>All systems nominal</span>
          </div>

          <div>
            © {new Date().getFullYear()} Work24x7.ai. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@work24x7.ai"
              className="hover:text-zinc-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Twitter/X
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
