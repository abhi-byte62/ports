import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiOutlineTerminal } from "react-icons/hi";
import { 
  FiShield, FiLayers, FiZap, FiActivity, 
  FiCheckCircle, FiCpu, FiCode, FiSearch, FiLock, FiPlay 
} from "react-icons/fi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

const metrics = [
  {
    category: "PRECISION",
    value: "100%",
    unit: "benchmark precision",
    label: "False Positive Elimination",
    badge: "ZERO FALSE POSITIVES",
    description: "Empirically verified across the OWASP Top 10 benchmark suite with zero false positive reports on hardened control routes.",
  },
  {
    category: "ARCHITECTURE",
    value: "17",
    unit: "monorepo workspaces",
    label: "Modular Subsystem Pipeline",
    badge: "MODULAR TYPESCRIPT",
    description: "Decoupled architecture spanning ScopeEngine, AST Analyzer, Auth Matrix, Verification Probes, and Cytoscape visualization.",
  },
  {
    category: "VERIFICATION",
    value: "50/50",
    unit: "test suites passing",
    label: "Unit & Integration Invariants",
    badge: "FULL COVERAGE",
    description: "Strict unit, integration, and E2E benchmark suites asserting RFC 1918 SSRF defenses, AST sinks, and BOLA invariants.",
  },
  {
    category: "EXPORT FORMATS",
    value: "SARIF",
    unit: "v2.1.0 compliant",
    label: "Standard Security Tooling",
    badge: "GITHUB SECURITY READY",
    description: "Native emission of deterministic JSON, standard SARIF v2.1.0, and automated executive markdown summary reports.",
  },
];

const architectureStages = [
  {
    name: "1. Scope & Perimeter Defense",
    protocol: "RFC 1918 / Loopback SSRF Guard",
    description:
      "Validates target domains and DNS resolutions against private IP blocks (127.0.0.0/8, 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) and AWS metadata services (169.254.169.254) before dispatching network probes.",
    tags: ["ssrf-guard", "rfc-1918-filter", "scope-engine", "dns-rebinding"],
  },
  {
    name: "2. Reconnaissance & Topology Discovery",
    protocol: "Multi-Worker Fingerprinting & AST Crawler",
    description:
      "Passively fingerprints server frameworks, security headers, and cookie configurations while crawling HTML pages, single-page application script bundles, and OpenAPI/GraphQL specifications.",
    tags: ["crawler-worker", "openapi-parser", "graphql-schema", "fingerprinting"],
  },
  {
    name: "3. JavaScript Intelligence & AST Flow",
    protocol: "Source-to-Sink Data-Flow Analyzer",
    description:
      "Constructs Abstract Syntax Trees (AST) across client-side scripts to trace untrusted sources (e.g., location.search, hash, postMessage) reaching dangerous execution sinks (innerHTML, eval, document.write) without runtime execution.",
    tags: ["ast-analysis", "dom-xss", "source-sink-tracking", "zero-dependency"],
  },
  {
    name: "4. Multi-Identity Authorization Engine",
    protocol: "Differential Role-Context Matrix",
    description:
      "Tests authorization boundaries by executing comparative requests across anonymous, low-privilege (User A, User B), and high-privilege (Admin) sessions to detect Horizontal BOLA/IDOR and Vertical Privilege Escalation.",
    tags: ["bola-detection", "idor-matrix", "privilege-escalation", "rbac-verification"],
  },
  {
    name: "5. Differential Verification Engine",
    protocol: "Bounded Baseline vs Probe Delta",
    description:
      "Replaces destructive blind scanning with differential probing: records baseline responses, normalizes nonces/timestamps, fires non-destructive verification tokens, and validates exact mathematical deltas.",
    tags: ["differential-analysis", "token-normalization", "safe-probes", "hypothesis-engine"],
  },
  {
    name: "6. Finding Vault & Attack Graph 2.0",
    protocol: "SecretRedactor + SARIF Export",
    description:
      "Scrubs sensitive API keys and session tokens before emitting findings with SHA-256 fingerprints, generating interactive Cytoscape attack topologies and SARIF v2.1.0 exports.",
    tags: ["secret-redaction", "sarif-v2.1", "cytoscape-graph", "sha256-evidence"],
  },
];

const architectureFootnotes = [
  "Non-Destructive Invariant: All verification probes are bounded, non-destructive, and strictly read-only or reversible.",
  "Deterministic Evidence: Every finding is backed by an immutable SHA-256 fingerprint computed from canonical request/response structures.",
  "Automated Secret Sanitization: Bearer tokens, AWS keys, Stripe secrets, and passwords are automatically redacted prior to storage or export.",
  "Attack-Surface Graph 2.0: Canonical graph representation correlating discovered endpoints, HTTP methods, authentication levels, and finding severities.",
];

const comparisonPoints = [
  {
    aspect: "Assessment Strategy",
    traditional: "Blind brute-force payload fuzzing with thousands of destructive SQLi/XSS payloads.",
    modern: "Topology modeling, AST flow analysis, and safe differential hypothesis verification.",
  },
  {
    aspect: "False Positive Rate",
    traditional: "High (often 30–50% FP), requiring extensive manual triage by security analysts.",
    modern: "0% False Positives on benchmark suite via multi-identity comparative delta verification.",
  },
  {
    aspect: "Client-Side DOM XSS",
    traditional: "Requires heavy headless browser execution or misses client-side source-sink flows entirely.",
    modern: "Fast AST-based static source-to-sink data-flow parsing with zero browser overhead.",
  },
  {
    aspect: "Authorization Testing",
    traditional: "Single-user crawling that cannot identify IDOR/BOLA or role privilege leaks.",
    modern: "Multi-identity matrix automatically comparing cross-user tenant boundary responses.",
  },
  {
    aspect: "Reporting & Export",
    traditional: "Proprietary HTML/PDF reports that cannot integrate easily into CI/CD pipelines.",
    modern: "Native SARIF v2.1.0 compliant output ready for GitHub Advanced Security and CI gates.",
  },
];

const benchmarkMatrix = [
  {
    route: "GET /api/v1/search?q=",
    category: "Reflected XSS",
    invariant: "Input reflected unencoded in response HTML",
    status: "DETECTED",
  },
  {
    route: "GET /api/v1/orders/:id",
    category: "Horizontal BOLA / IDOR",
    invariant: "Cross-tenant resource access without tenant authorization gate",
    status: "DETECTED",
  },
  {
    route: "GET /fetch-image?url=",
    category: "Server-Side Request Forgery (SSRF)",
    invariant: "Unrestricted internal subnet access blocked by ScopeEngine",
    status: "DETECTED",
  },
  {
    route: "GET /assets/app.js",
    category: "Client-Side DOM XSS",
    invariant: "location.search → innerHTML unencoded sink flow",
    status: "DETECTED",
  },
  {
    route: "GET /admin/stats",
    category: "CORS Misconfiguration",
    invariant: "Wildcard origin with credentials allowed",
    status: "DETECTED",
  },
  {
    route: "GET /api/v1/debug-status",
    category: "Information Disclosure",
    invariant: "Environment variables leaked in response",
    status: "DETECTED",
  },
  {
    route: "GET /api/v1/secure-health",
    category: "Control / Hardened Route",
    invariant: "Zero vulnerabilities present across 50 probes",
    status: "0 FINDINGS (NO FP)",
  },
];

const astCodeSnippet = `// AST Source-to-Sink DOM XSS Analyzer (Zero-Dependency Parser)
export class JsAnalyzer {
  public analyzeScript(sourceCode: string, filePath: string): AstFinding[] {
    const findings: AstFinding[] = [];
    const ast = parseJavaScriptToAst(sourceCode);

    const SOURCES = new Set(["location.search", "location.hash", "document.URL", "window.name"]);
    const SINKS = new Set(["innerHTML", "outerHTML", "eval", "document.write", "setTimeout"]);

    walkAst(ast, {
      AssignmentExpression(node) {
        const leftExpr = getMemberExpressionString(node.left);
        const rightExpr = getExpressionSources(node.right);

        if (SINKS.has(leftExpr) && rightExpr.some((src) => SOURCES.has(src))) {
          findings.push({
            ruleId: "DOM_XSS_SOURCE_TO_SINK",
            severity: "HIGH",
            file: filePath,
            sink: leftExpr,
            sources: rightExpr,
            evidence: sourceCode.slice(node.start, node.end),
            fingerprint: sha256(\`\${filePath}:\${leftExpr}:\${node.start}\`),
          });
        }
      },
    });

    return findings;
  }
}`;

const differentialAuthSnippet = `// Differential Multi-Identity Authorization Verifier (BOLA/IDOR)
export async function verifyHorizontalBola(
  endpoint: EndpointContract,
  identityA: SessionContext,
  identityB: SessionContext
): Promise<VerificationResult | null> {
  // Step 1: Request resource owned by Identity A using Identity A's credentials
  const baseline = await executeProbe(endpoint.url, identityA);
  if (baseline.status !== 200) return null;

  // Step 2: Request Identity A's resource using Identity B's distinct credentials
  const probeResponse = await executeProbe(endpoint.url, identityB);

  // Step 3: Compute differential delta with dynamic token/timestamp normalization
  const normalizedBaseline = normalizeDynamicFields(baseline.body);
  const normalizedProbe = normalizeDynamicFields(probeResponse.body);

  if (probeResponse.status === 200 && structuralMatch(normalizedBaseline, normalizedProbe)) {
    return {
      type: "HORIZONTAL_BOLA_CONFIRMED",
      severity: "CRITICAL",
      confidence: 1.0,
      evidence: {
        resource: endpoint.url,
        ownerTenant: identityA.tenantId,
        attackerTenant: identityB.tenantId,
        sha256: computeFingerprint(probeResponse),
      },
    };
  }

  return null;
}`;

export default function DontTrust() {
  return (
    <div className="min-h-screen bg-[#050914] text-[#F5F7FF] pt-24 pb-20">
      <SEO
        title="DontTrust | Application Security Assessment & Attack-Surface Intelligence"
        description="Deep dive case study on DontTrust: a TypeScript-based application security assessment and attack-surface intelligence platform with AST data-flow analysis and differential authorization verification."
        keywords="DontTrust, Application Security, AST Analysis, DOM XSS, BOLA, IDOR, SARIF, React 19, Cytoscape, TypeScript, Vulnerability Scanner"
      />

      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {/* Header Hero */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-[#4D7CFF]/30 bg-[#4D7CFF]/10 px-3 py-1 text-xs font-mono font-semibold text-[#6D96FF]">
              SPECIALIZED SYSTEM & SECURITY TOOLING
            </span>
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-400">
              100% BENCHMARK PRECISION
            </span>
            <span className="rounded-md border border-[#1C2942] bg-[#0D1424] px-3 py-1 text-xs font-mono text-[#8D99B5]">
              SARIF v2.1.0 COMPLIANT
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7FF]">
            DontTrust
          </h1>

          <p className="text-base sm:text-xl text-[#BAC5D8] leading-relaxed">
            A distributed, research-grade web application security assessment platform in TypeScript across 17 monorepo workspaces. Integrates discovery, AST data-flow analysis, multi-identity differential authorization, and standard SARIF reporting to verify vulnerabilities with zero false positives.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/abhi-byte62/dontTrust"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-4 py-2.5 text-xs font-semibold text-[#050914] transition-all hover:bg-[#6D96FF]"
            >
              <FaGithub size={15} />
              View Repository on GitHub
            </a>
            <a
              href="#benchmark-matrix"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-4 py-2.5 text-xs font-medium text-[#F5F7FF] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF]"
            >
              <FiCheckCircle size={14} className="text-emerald-400" />
              Benchmark Invariants
            </a>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-12">
          <MetricsGrid metrics={metrics} />
        </div>

        {/* Live Assessment Pipeline Terminal Output Showcase */}
        <div className="mt-16 rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-[#1C2942] pb-4 mb-4">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#8D99B5]">
              <HiOutlineTerminal size={18} className="text-[#4D7CFF]" />
              <span className="font-semibold text-[#F5F7FF]">DONTTRUST SCAN ENGINE & TELEMETRY STREAM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 font-medium">ASSESSMENT PASS</span>
            </div>
          </div>

          <div className="rounded-xl border border-[#1C2942]/60 bg-[#050914] p-4 font-mono text-xs text-[#BAC5D8] space-y-2 overflow-x-auto">
            <p className="text-[#5F6B83]">$ donttrust-cli scan http://127.0.0.1:8080 --scope strict-domain --active</p>
            <p className="text-[#4D7CFF]">[1/6 ScopeEngine] Enforcing RFC 1918 / Loopback SSRF guards... (Target: 127.0.0.1 Allowed for Lab Test)</p>
            <p className="text-[#8D99B5]">[2/6 ReconWorker] Fingerprinted Nginx 1.25, Express 4.19, React 19 SPA bundles.</p>
            <p className="text-[#8D99B5]">[3/6 JsAnalyzer] Parsed 14 client JS AST trees. Detected 1 Source-to-Sink DOM XSS flow (location.search → innerHTML).</p>
            <p className="text-[#8D99B5]">[4/6 AuthMatrix] Probing Horizontal BOLA matrix across 3 identity roles (Admin, UserA, UserB)...</p>
            <p className="text-amber-400">[!] Hypothesis BOLA_ORDER_IDOR transitioned CANDIDATE → INVESTIGATING → VERIFIED (Delta Match: 100%).</p>
            <p className="text-[#8D99B5]">[5/6 DiffEngine] Executed 50 verification probes. 0 destructive operations performed.</p>
            <p className="text-emerald-400">[6/6 SARIF Vault] Redacted 4 API tokens. Emitted build/scan-result.json and build/reports/sarif-v2.1.0.json</p>
            <div className="pt-2 border-t border-[#1C2942]/50 text-[#8D99B5] flex justify-between text-[11px]">
              <span>Verified Findings: 6 High/Critical, 0 False Positives</span>
              <span className="text-emerald-400">Score: 100% Precision</span>
            </div>
          </div>
        </div>

        {/* Architecture & Pipeline Stages */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#F5F7FF]">
              Unified Assessment & Verification Pipeline
            </h2>
            <p className="mt-2 text-sm text-[#8D99B5] max-w-3xl">
              From RFC 1918 perimeter guards to multi-identity differential verification and SARIF emission.
            </p>
          </div>

          <ArchitectureDiagram
            stages={architectureStages}
            footnotes={architectureFootnotes}
          />
        </div>

        {/* Benchmark Results Table */}
        <div id="benchmark-matrix" className="mt-16 rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <FiShield className="text-emerald-400" size={20} />
              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FF]">
                OWASP Top 10 Benchmark Precision Evaluation
              </h2>
            </div>
            <p className="mt-1.5 text-xs sm:text-sm text-[#8D99B5]">
              Evaluated against an intentionally vulnerable benchmark suite covering critical injection, authorization, and SSRF flaws alongside hardened control endpoints.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-[#1C2942] bg-[#080E1B] text-[#8D99B5] font-mono uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4">Target Route</th>
                  <th className="py-3 px-4">Vulnerability Category</th>
                  <th className="py-3 px-4">Security Invariant</th>
                  <th className="py-3 px-4 text-right">Measured Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2942]/50 font-mono text-xs">
                {benchmarkMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#10182A] transition-colors">
                    <td className="py-3 px-4 text-[#F5F7FF] font-semibold">{row.route}</td>
                    <td className="py-3 px-4 text-[#BAC5D8]">{row.category}</td>
                    <td className="py-3 px-4 text-[#8D99B5]">{row.invariant}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`inline-flex rounded px-2 py-0.5 text-[11px] font-bold ${
                        row.status.includes("DETECTED")
                          ? "bg-[#4D7CFF]/10 text-[#6D96FF] border border-[#4D7CFF]/30"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Deep Dives & Code Snippets */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4D7CFF]">
              <FiCode size={18} />
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F7FF]">
                Client-Side AST Source-to-Sink Analysis
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#8D99B5] leading-relaxed">
              Detects DOM-based Cross-Site Scripting (DOM XSS) by walking AST nodes in client JavaScript files to map untrusted browser inputs (<code className="text-[#6D96FF]">location.search</code>, <code className="text-[#6D96FF]">hash</code>) directly into dangerous DOM sinks without relying on heavy headless browsers.
            </p>
            <CodeSnippet code={astCodeSnippet} language="typescript" title="packages/js-analyzer/src/index.ts" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4D7CFF]">
              <FiLock size={18} />
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F7FF]">
                Multi-Identity Differential Authorization
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#8D99B5] leading-relaxed">
              Executes comparative probes between authenticated contexts (User A vs User B vs Admin) against identical target endpoints, normalizing volatile timestamps and nonces to detect multi-tenant BOLA / IDOR leaks with mathematical precision.
            </p>
            <CodeSnippet code={differentialAuthSnippet} language="typescript" title="packages/auth-analyzer/src/verifier.ts" />
          </div>
        </div>

        {/* Comparison vs Traditional Scanners */}
        <div className="mt-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
              ARCHITECTURAL ADVANTAGE
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#F5F7FF]">
              DontTrust vs Traditional Blind Scanners
            </h2>
          </div>
          <ComparisonView
            title="Why Deterministic Topology Modeling Outperforms Blind Fuzzing"
            points={comparisonPoints}
          />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1C2942] pt-8">
          <Link
            to="/tradeforge"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Next Case Study: TradeForge
          </Link>

          <a
            href="https://github.com/abhi-byte62/dontTrust"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-4 py-2 text-xs font-medium text-[#F5F7FF] hover:border-[#4D7CFF] transition-colors"
          >
            <FaGithub size={14} />
            Explore Source Code
          </a>
        </div>
      </Container>
    </div>
  );
}
