import { useState } from "react";
import { FiShield, FiAlertTriangle, FiCheckCircle, FiTerminal, FiPlay } from "react-icons/fi";

const PRESETS = [
  {
    id: "dom-xss",
    name: "Vulnerable: DOM XSS via hash sink",
    code: `// Tainted Source -> Execution Sink
const payload = window.location.hash.substring(1);
const targetDiv = document.getElementById("content");
targetDiv.innerHTML = decodeURIComponent(payload);`,
    vulnerability: "HIGH (CWE-79: DOM XSS)",
    status: "VULNERABLE",
    source: "window.location.hash",
    sink: "Element.innerHTML",
    path: ["Source: location.hash", "Transform: substring(1)", "Transform: decodeURIComponent", "Dangerous Sink: innerHTML"],
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    sarifRule: "AST-SEC-001/DOM-XSS-UNSANITIZED",
  },
  {
    id: "sanitized-safe",
    name: "Hardened: Safe textContent sanitization",
    code: `// Tainted Source -> Safe Property Sink
const payload = window.location.hash.substring(1);
const targetDiv = document.getElementById("content");
targetDiv.textContent = decodeURIComponent(payload);`,
    vulnerability: "NONE (Safe Property)",
    status: "SECURE",
    source: "window.location.hash",
    sink: "Element.textContent",
    path: ["Source: location.hash", "Transform: substring(1)", "Transform: decodeURIComponent", "Safe Sink: textContent"],
    sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    sarifRule: "PASS (0 Violations)",
  },
  {
    id: "bola-idor",
    name: "Differential Auth: Horizontal BOLA / IDOR",
    code: `// Cross-Tenant Resource Access Probe
const orgId = req.params.tenantId; // User A claims Tenant B
const report = await db.reports.findUnique({ where: { id: orgId } });
return res.json(report);`,
    vulnerability: "CRITICAL (CWE-639: BOLA/IDOR)",
    status: "VULNERABLE",
    source: "req.params.tenantId",
    sink: "db.reports.findUnique (Unfiltered Auth Scope)",
    path: ["Source: req.params.tenantId", "Tenant Token: Tenant_A", "Queried Resource: Tenant_B", "Sink: Response Exfiltration"],
    sha256: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
    sarifRule: "AUTH-DIFF-004/HORIZONTAL-BOLA",
  },
];

export default function ASTTaintMicroSimulator() {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = (preset) => {
    setIsAnalyzing(true);
    setSelectedPreset(preset);
    setTimeout(() => setIsAnalyzing(false), 300);
  };

  return (
    <div className="my-12 rounded-2xl border border-white/[0.1] bg-[#09090E] p-6 sm:p-8 text-white shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              LIVE AST TAINT INSPECTION ENGINE
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            Source-to-Sink Data-Flow & Differential Verification Sandbox
          </h3>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelect(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedPreset.id === p.id
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              {p.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Code View (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-black/40 p-4 font-mono text-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <FiTerminal />
                <span>INPUT JAVASCRIPT AST NODE</span>
              </span>
              <span className="text-[10px] text-neutral-500">BABEL PARSER</span>
            </div>

            <pre className="mt-4 text-neutral-200 leading-relaxed overflow-x-auto whitespace-pre font-mono text-[12px] bg-white/[0.01] p-3 rounded-lg border border-white/[0.04]">
              {selectedPreset.code}
            </pre>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-500">
            <span>Deterministic SHA-256 State:</span>
            <span className="text-neutral-400 font-mono truncate max-w-[200px]">
              {selectedPreset.sha256.substring(0, 16)}...
            </span>
          </div>
        </div>

        {/* Data-Flow Graph & SARIF Verdict (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase text-neutral-400">
                TAINT PROPAGATION PATH
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${
                  selectedPreset.status === "VULNERABLE"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                }`}
              >
                {selectedPreset.status === "VULNERABLE" ? (
                  <FiAlertTriangle size={12} />
                ) : (
                  <FiCheckCircle size={12} />
                )}
                <span>{selectedPreset.status}</span>
              </span>
            </div>

            {/* Step-by-step Taint Path */}
            <div className="mt-4 space-y-2 font-mono text-xs">
              {selectedPreset.path.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 rounded bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="text-neutral-500 text-[10px] w-5">0{idx + 1}</span>
                  <span
                    className={`${
                      step.includes("Dangerous") || step.includes("VULNERABLE") || step.includes("Exfiltration")
                        ? "text-rose-400 font-semibold"
                        : step.includes("Source")
                        ? "text-amber-400 font-semibold"
                        : step.includes("Safe")
                        ? "text-emerald-400 font-semibold"
                        : "text-neutral-300"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SARIF Verdict Output */}
          <div className="rounded-xl border border-white/[0.06] bg-black/50 p-4 font-mono text-xs">
            <div className="text-neutral-500 text-[10px] uppercase mb-1">
              SARIF v2.1.0 VERDICT RULE
            </div>
            <div className="text-sm font-semibold text-white">
              {selectedPreset.sarifRule}
            </div>
            <div className="text-neutral-400 text-[11px] mt-1">
              Severity: <span className="text-neutral-200">{selectedPreset.vulnerability}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
