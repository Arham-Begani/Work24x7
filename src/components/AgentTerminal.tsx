"use client";

import React, { useEffect, useState } from "react";
import { Bot, Check, Clock, Cpu, ShieldCheck, Terminal, Zap } from "lucide-react";

interface LogEntry {
  id: number;
  time: string;
  agent: string;
  action: string;
  status: string;
  badgeColor: string;
}

const initialLogs: LogEntry[] = [
  {
    id: 1,
    time: "02:14:08 AM",
    agent: "Agent-SRE",
    action: "Autonomous memory buffer optimization on prod cluster",
    status: "Resolved (42ms)",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    id: 2,
    time: "03:41:22 AM",
    agent: "Agent-Sales",
    action: "Enriched 84 inbound accounts & scheduled 6 qualified demos",
    status: "Synchronized",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
  {
    id: 3,
    time: "04:09:51 AM",
    agent: "Agent-Ops",
    action: "Cross-verified 1,420 invoice line items with ERP ledger",
    status: "100% Match",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    id: 4,
    time: "04:55:16 AM",
    agent: "Agent-Support",
    action: "Resolved customer tier-2 escalation with verified solution",
    status: "Closed (14s)",
    badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  },
];

export function AgentTerminal() {
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [uptimeSeconds, setUptimeSeconds] = useState(86400 * 14 + 3280);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h.toString().padStart(2, "0")}h ${m.toString().padStart(2, "0")}m ${s.toString().padStart(2, "0")}s`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 overflow-hidden transition-all duration-300 hover:border-zinc-700/80">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            work24x7-mesh-orchestrator :: preview-v0.9.4
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Continuous 24/7 Engine
          </div>
        </div>
      </div>

      {/* Grid Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-zinc-900/30 border-b border-zinc-800/50 text-xs">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
          <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Uptime Loop</div>
            <div className="font-mono text-zinc-200 font-semibold">{formatUptime(uptimeSeconds)}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
          <Bot className="w-4 h-4 text-purple-400 shrink-0" />
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Active Swarm</div>
            <div className="font-mono text-zinc-200 font-semibold">16 Autonomous Agents</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
          <Zap className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Task Latency</div>
            <div className="font-mono text-zinc-200 font-semibold">Avg 84ms response</div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/40 border border-zinc-800/40">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Guardrails</div>
            <div className="font-mono text-zinc-200 font-semibold">Zero Escape Failures</div>
          </div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs space-y-2.5 bg-black/40">
        <div className="text-zinc-500 text-[11px] pb-1 border-b border-zinc-900 flex items-center justify-between">
          <span>REAL-TIME AGENT TELEMETRY FEED (UNATTENDED MODE)</span>
          <span className="text-indigo-400">work24x7.ai</span>
        </div>

        {logs.map((log) => (
          <div
            key={log.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/30 transition-colors"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-zinc-500 text-[11px]">{log.time}</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold border bg-zinc-800 text-zinc-300 border-zinc-700">
                {log.agent}
              </span>
              <span className="text-zinc-300">{log.action}</span>
            </div>
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium border shrink-0 self-start sm:self-auto ${log.badgeColor}`}
            >
              <Check className="w-3 h-3" />
              {log.status}
            </span>
          </div>
        ))}

        <div className="pt-2 flex items-center gap-2 text-zinc-400 text-xs">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-zinc-500">
            Agents executing continuously while human team is offline...
          </span>
        </div>
      </div>
    </div>
  );
}
