import React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

interface Milestone {
  phase: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const milestones: Milestone[] = [
  {
    phase: "Phase 01",
    title: "Multi-Agent Core Engine",
    description: "Continuous agent orchestration loop, resilient memory, and tool routing.",
    status: "completed",
  },
  {
    phase: "Phase 02",
    title: "Sandboxed Tool & API Connectors",
    description: "Direct integrations with CRMs, GitHub, Slack, databases, and payment rails.",
    status: "completed",
  },
  {
    phase: "Phase 03",
    title: "Private Alpha Testing",
    description: "Stress-testing with select high-volume teams under unattended operating conditions.",
    status: "current",
  },
  {
    phase: "Phase 04",
    title: "Public Beta Release",
    description: "Instant self-serve deployments with dedicated custom agent swarm nodes.",
    status: "upcoming",
  },
];

export function ProgressTracker() {
  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-300 mb-3">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          Development Roadmap
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Building the Future of Autonomous Work
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-lg mx-auto">
          Here is our transparent build roadmap as we prepare to open access on work24x7.ai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {milestones.map((m, idx) => {
          const isCompleted = m.status === "completed";
          const isCurrent = m.status === "current";

          return (
            <div
              key={idx}
              className={`relative p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                isCurrent
                  ? "bg-gradient-to-b from-indigo-950/40 to-zinc-950 border-indigo-500/50 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30"
                  : isCompleted
                  ? "bg-zinc-900/40 border-zinc-800 text-zinc-300"
                  : "bg-zinc-950/40 border-zinc-800/60 text-zinc-500"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    {m.phase}
                  </span>
                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3 h-3" />
                      Done
                    </span>
                  )}
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 font-mono">
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      In Progress
                    </span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800/80 border border-zinc-700/50 text-zinc-400 font-mono">
                      Up Next
                    </span>
                  )}
                </div>

                <h3 className={`text-base font-semibold mb-2 ${isCurrent ? "text-white" : isCompleted ? "text-zinc-200" : "text-zinc-400"}`}>
                  {m.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {m.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
