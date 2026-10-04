import { useState } from "react";

const scenarios = [
  {
    id: "taint",
    label: "AST Taint Trace",
    title: "Source-to-Sink Abstract Syntax Tree Propagation",
    terminalLines: [
      { type: "cmd", text: "$ donttrust analyze --entrypoint src/routes/users.ts --track-sinks" },
      { type: "info", text: "[AST_PARSER] Babel AST parsed 48 AST nodes across 3 scopes" },
      { type: "taint", text: "  [SOURCE]  req.params.userId (Identifier: HTTP_UNTRUSTED)" },
      { type: "trace", text: "  [PROP]    ├── BinaryExpression: const tenantKey = req.params.userId" },
      { type: "trace", text: "  [PROP]    └── CallExpression:   UserContext.findUnique({ id: tenantKey })" },
      { type: "sink",  text: "  [SINK]    prisma.user.update() without RBAC guard (BOLA/IDOR)" },
      { type: "alert", text: "[VERDICT]   HIGH RISK: Parameter reaches sink without authorization check" },
    ],
    summary: "Babel AST traversal maps untrusted HTTP inputs through variable assignments to sensitive execution sinks.",
  },
  {
    id: "diff_auth",
    label: "Differential BOLA Replay",
    title: "Multi-Tenant Authorization Discrepancy Engine",
    terminalLines: [
      { type: "cmd", text: "$ donttrust replay --baseline tenant_a.jwt --adversary tenant_b.jwt" },
      { type: "info", text: "[PROBE] Dispatching dual concurrent mutation requests..." },
      { type: "trace", text: "  [TENANT_A] GET /api/v1/workspaces/ws_9841  → HTTP 200 (Payload: 4.2KB)" },
      { type: "trace", text: "  [TENANT_B] GET /api/v1/workspaces/ws_9841  → HTTP 200 (LEAK DETECTED)" },
      { type: "alert", text: "[DISCREPANCY] Status match 200/200: Tenant B accessed Tenant A resource" },
      { type: "sink",  text: "[INTERCEPT] Generating deterministic regression reproduction script" },
    ],
    summary: "Replays authenticated sessions across different tenant tokens to detect Broken Object Level Authorization.",
  },
  {
    id: "ssrf",
    label: "RFC 1918 Guard",
    title: "Loopback & Private Network SSRF Interceptor",
    terminalLines: [
      { type: "cmd", text: "$ donttrust probe-scope --url http://169.254.169.254/latest/meta-data/" },
      { type: "info", text: "[SCOPE_ENGINE] Resolving DNS A/AAAA records..." },
      { type: "trace", text: "  [DNS_RESOLVE] 169.254.169.254 -> AWS Link-Local Metadata Service" },
      { type: "sink",  text: "  [FILTER]      Matched CIDR 169.254.0.0/16 [BLOCKED_PRIVATE_IP]" },
      { type: "alert", text: "[DEFENSE]     Request terminated prior to socket dispatch (Zero Network I/O)" },
    ],
    summary: "Pre-flight IP validation stops requests to loopback, link-local, and RFC 1918 ranges before dispatch.",
  },
];

const DontTrustShowcase = () => {
  const [activeTab, setActiveTab] = useState(scenarios[0]);

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0C0C12] overflow-hidden">
      {/* Window Titlebar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#0A0A0E] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 pl-2">
            donttrust // {activeTab.label.toLowerCase().replace(/ /g, "-")}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-md bg-white/[0.04] p-0.5 border border-white/[0.06]">
          {scenarios.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeTab.id === tab.id
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Frame: Terminal Audit Console */}
      <div className="bg-[#08080C] p-4 sm:p-5 font-mono text-xs">
        <div className="rounded-lg border border-white/[0.06] bg-[#050508] p-4 space-y-2">
          <div className="text-neutral-400 text-[11px] pb-2 border-b border-white/[0.06] flex items-center justify-between">
            <span>{activeTab.title}</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ACTIVE ENGINE
            </span>
          </div>

          <div className="space-y-1.5 pt-2 text-[12px] leading-relaxed">
            {activeTab.terminalLines.map((line, idx) => (
              <div
                key={idx}
                className={`truncate ${
                  line.type === "cmd"
                    ? "text-neutral-200 font-medium"
                    : line.type === "info"
                    ? "text-neutral-400"
                    : line.type === "taint"
                    ? "text-amber-300"
                    : line.type === "trace"
                    ? "text-neutral-300"
                    : line.type === "sink"
                    ? "text-rose-300"
                    : "text-rose-400 font-semibold"
                }`}
              >
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Caption */}
      <div className="border-t border-white/[0.06] bg-[#0A0A0E] px-4 py-2.5 text-[11px] font-mono text-neutral-400">
        {activeTab.summary}
      </div>
    </div>
  );
};

export default DontTrustShowcase;
