import { useState } from "react";

const StackLensShowcase = () => {
  const [activeStep, setActiveStep] = useState(2);

  const architectureSteps = [
    { title: "Target Website", detail: "DNS records, TLS certificates, CDN edge headers" },
    { title: "Frontend Tier", detail: "React / Next.js static asset bundles, bundle analyzer" },
    { title: "API Gateway", detail: "Fastify reverse proxy, RFC 1918 private IP defense" },
    { title: "Backend Services", detail: "C++ matching engine & Node.js microservices" },
    { title: "Database & Cache", detail: "PostgreSQL 17 replicas & Valkey distributed cluster" },
    { title: "Infrastructure", detail: "Docker containers, Linux kernel socket tuning, POSIX" },
  ];

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0A0A10] p-5 sm:p-6 text-neutral-300 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-white font-medium">Architecture & Dependency Stack Inspector</span>
        </div>
        <span className="text-neutral-500 text-[11px]">Layered Decomposition</span>
      </div>

      <div className="pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {architectureSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? "border-sky-400/60 bg-sky-500/10 text-white"
                    : "border-white/[0.06] bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-neutral-200"
                }`}
              >
                <div className="text-[10px] text-neutral-500">0{idx + 1}</div>
                <div className="text-xs font-semibold mt-1 truncate">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Breakdown */}
        <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-sky-400 font-semibold text-xs">
              Layer 0{activeStep + 1}: {architectureSteps[activeStep].title}
            </span>
            <span className="text-[10px] text-neutral-500">Automated Fingerprint</span>
          </div>
          <p className="mt-1.5 text-neutral-300 text-xs font-sans leading-relaxed">
            {architectureSteps[activeStep].detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackLensShowcase;
