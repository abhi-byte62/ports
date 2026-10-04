import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FaFilePdf, FaFileWord, FaCheck, FaCopy } from "react-icons/fa";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";

const Resume = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPlainText = () => {
    fetch("/Abhishek_M_R_Resume.txt")
      .then((res) => res.text())
      .then((text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        navigator.clipboard.writeText("mrabhisheak@gmail.com");
      });
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white pt-24 pb-20">
      <SEO
        title="Resume | Abhishek M R - Software Engineer"
        description="Official ATS-optimized software engineering resume for Abhishek M R. Backend systems, distributed architecture, and low-latency C++/Java applications."
        keywords="Abhishek M R Resume, Software Engineer Resume, Backend Engineer, Java, C++, Systems Engineer"
      />

      <Container>
        {/* Navigation & Action Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 print:hidden">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
            >
              <FaFilePdf size={13} />
              Print / Save PDF (ATS)
            </button>

            <a
              href="/Abhishek_M_R_Resume.docx"
              download="Abhishek_M_R_Resume.docx"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <FaFileWord size={13} className="text-neutral-400" />
              DOCX
            </a>

            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              {copied ? (
                <>
                  <FaCheck size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied Plain Text!</span>
                </>
              ) : (
                <>
                  <FaCopy size={12} />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Paper Resume Container */}
        <div className="mx-auto max-w-4xl rounded-xl border border-white/[0.08] bg-[#0C0C12] p-8 sm:p-12 shadow-sm font-sans">
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/[0.08]">
            <Link
              to="/"
              className="inline-block text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
              aria-label="Return to Portfolio Home"
            >
              ABHISHEK M R
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Bengaluru, India · +91 7259371549 ·{" "}
              <a href="mailto:mrabhisheak@gmail.com" className="text-neutral-200 hover:underline">
                mrabhisheak@gmail.com
              </a>
            </p>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400">
              <a href="https://abhishekmr.vercel.app/" className="hover:text-white">
                abhishekmr.vercel.app
              </a>
              <span className="text-neutral-600">·</span>
              <a href="https://github.com/abhi-byte62" target="_blank" rel="noreferrer" className="hover:text-white">
                github.com/abhi-byte62
              </a>
              <span className="text-neutral-600">·</span>
              <a href="https://www.linkedin.com/in/abhishekmr029/" target="_blank" rel="noreferrer" className="hover:text-white">
                linkedin.com/in/abhishekmr029
              </a>
              <span className="text-neutral-600">·</span>
              <a href="https://leetcode.com/u/playboldAbhi/" target="_blank" rel="noreferrer" className="hover:text-white">
                leetcode.com/u/playboldAbhi
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-white/[0.08]">
            <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-sans">
              Software Engineer with a strong Computer Science foundation specializing in backend architectures, distributed systems, and low-latency C++/Java applications. Experienced in developing deterministic limit order book matching engines, event-driven microservices with RabbitMQ, stream backpressure pipelines, and optimistic concurrency control systems. Proficient in Data Structures, Algorithms, System Design, and building verified, high-throughput software.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-6 border-b border-white/[0.08]">
            <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-3">
              Technical Skills
            </h2>
            <div className="grid gap-2 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Languages:</span>
                <span className="text-neutral-300 sm:col-span-9">C++17, Java 21, JavaScript (ES6+), TypeScript, Python 3, C, SQL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Backend & Distributed:</span>
                <span className="text-neutral-300 sm:col-span-9">Spring Boot 3, Node.js, Express, FastAPI, RabbitMQ, WebSockets, RESTful APIs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Databases & Caching:</span>
                <span className="text-neutral-300 sm:col-span-9">PostgreSQL 16/17, MySQL, Redis 7 (Pub/Sub & Caching), Prisma ORM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Systems & Architecture:</span>
                <span className="text-neutral-300 sm:col-span-9">Limit Order Books (LOB), Fixed-Point Math, Stream Backpressure, Concurrency, Zero-Copy Buffers</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Infrastructure & Tools:</span>
                <span className="text-neutral-300 sm:col-span-9">Docker & Compose, Git, GitHub Actions, Linux / POSIX Shell, Postman, Vitest</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-medium text-white sm:col-span-3">Core CS Foundations:</span>
                <span className="text-neutral-300 sm:col-span-9">Data Structures & Algorithms, OOP, OS (Memory, I/O), DBMS, Computer Networks, System Design, OCC</span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="py-6 border-b border-white/[0.08] space-y-6">
            <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400">
              Selected Engineering Projects
            </h2>

            {/* TradeForge */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">TradeForge — Real-Time Paper Trading & Market Simulation Platform</span>
                  <span className="text-xs italic text-neutral-400 block sm:inline sm:ml-2">| TypeScript, Node.js, React 19, Native WebSockets, PostgreSQL 16, Canvas API, Docker</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <a href="https://github.com/abhi-byte62/tradeforge" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/tradeforge" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed font-sans">
                <li>Engineered an in-memory double-sided FIFO matching engine benchmarked at 247,000+ orders/sec with 4.10µs median execution latency.</li>
                <li>Built synchronous pre-trade risk engine enforcing 5x MIS leverage limits, tick increments, and ±10% circuit bands; modeled stochastic GBM jump pricing.</li>
                <li>Developed canvas-based candlestick charting with 5-level market depth ladder, atomic position ledger, and sub-10ms WebSocket distribution.</li>
              </ul>
            </div>

            {/* LiquidityLens */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">LiquidityLens — Market Microstructure Simulator & Matching Engine</span>
                  <span className="text-xs italic text-neutral-400 block sm:inline sm:ml-2">| C++17, Python 3.10, FastAPI, Fixed-Point Math, Hawkes Processes, WebSockets</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <a href="https://github.com/abhi-byte62/liquiditylens" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/liquiditylens" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed font-sans">
                <li>Developed a deterministic C++17 limit order book (LOB) matching engine supporting 4.5M+ events/s with ~220ns match latency.</li>
                <li>Utilized int64_t fixed-point arithmetic across matching and accounting pipelines, eliminating IEEE-754 floating-point drift.</li>
                <li>Simulated clustered order arrival dynamics with synthetic Hawkes processes and modeled FIFO queue priority across 10µs–500µs latency slips.</li>
                <li>Calculated zero look-ahead adverse selection markout curves at 10ms, 100ms, and 1s post-trade horizons; streamed L2 depth via WebSockets.</li>
              </ul>
            </div>

            {/* StackLens */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">StackLens — Website Architecture Inference & Intelligence Engine</span>
                  <span className="text-xs italic text-neutral-400 block sm:inline sm:ml-2">| Java 21, Spring Boot 3, RabbitMQ, PostgreSQL, Redis, React 19, TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <a href="https://github.com/abhi-byte62/stacklens" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/stacklens" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed font-sans">
                <li>Architected an asynchronous multi-vector probe engine reverse-engineering public web applications across 200+ weighted signatures.</li>
                <li>Implemented SSRF and DNS-rebinding perimeter defense by validating resolved target IPs against private RFC 1918 subnets prior to worker dispatch.</li>
                <li>Decoupled long-running external HTTP/TLS crawlers from client APIs using RabbitMQ message queues and Redis caching tiers.</li>
                <li>Synthesized PostgreSQL DDL schemas and REST/GraphQL API contracts from detected access patterns with interactive DAG topology generation.</li>
              </ul>
            </div>

            {/* DontTrust */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">DontTrust — Application Security Assessment & Attack-Surface Intelligence</span>
                  <span className="text-xs italic text-neutral-400 block sm:inline sm:ml-2">| TypeScript, Node.js, React 19, AST Analysis, Cytoscape.js, SARIF, Docker</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <a href="https://github.com/abhi-byte62/dontTrust" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/donttrust" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed font-sans">
                <li>Architected a distributed application security intelligence platform across 17 monorepo workspaces, achieving 100% precision with 0 false positives on benchmark suites.</li>
                <li>Built an AST-based JavaScript data-flow engine tracking untrusted client sources to dangerous execution sinks for DOM XSS without browser runtime overhead.</li>
                <li>Engineered a multi-identity differential authorization matrix comparing cross-role tenant responses to verify Horizontal BOLA/IDOR and Vertical Privilege Escalation.</li>
                <li>Constructed Attack-Surface Graph 2.0 with Cytoscape topology visualization, automated secret redaction, and standard SARIF v2.1.0 report generation.</li>
              </ul>
            </div>

            {/* TaskFlow */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-white text-sm">TaskFlow — Real-Time Collaborative Kanban & Distributed State Engine</span>
                  <span className="text-xs italic text-neutral-400 block sm:inline sm:ml-2">| React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, TanStack Query</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <a href="https://github.com/abhi-byte62/taskflow" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/taskflow" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed font-sans">
                <li>Engineered a real-time collaborative workspace with Optimistic Concurrency Control (OCC) using integer revision tags to reject stale writes.</li>
                <li>Implemented fractional midpoint indexing for O(1) card drag reordering, preventing expensive cascading updates across database rows.</li>
                <li>Integrated room-scoped Socket.io state synchronization with role-based access control (RBAC) enforced in atomic Prisma transactions.</li>
              </ul>
            </div>
          </div>

          {/* Open Source Contributions */}
          <div className="py-6 border-b border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400">
                Upstream Open Source Contributions
              </h2>
              <span className="text-xs font-mono text-neutral-500">Tier-1 Distributed Systems</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-white">Valkey (Linux Foundation / Key-Value Storage Engine)</span>
                  <span className="text-sky-400 font-mono"><a href="https://github.com/valkey-io/valkey" target="_blank" rel="noreferrer" className="hover:underline">[valkey-io/valkey]</a></span>
                </div>
                <p className="text-neutral-300 mt-0.5 leading-relaxed font-sans">
                  Fixed stream trimming integer truncation when MAXLEN ≥ 2^32 on 32-bit builds (<code className="text-neutral-200">src/t_stream.c</code>); eliminated static compression buffer re-entrancy risks in RDB serialization (<code className="text-neutral-200">src/rdb.c</code>); refactored core key eviction pipeline.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-white">Fastify Ecosystem (fastify-typebox, fastify-swagger, ajv-compiler)</span>
                  <span className="text-sky-400 font-mono"><a href="https://github.com/fastify" target="_blank" rel="noreferrer" className="hover:underline">[github.com/fastify]</a></span>
                </div>
                <p className="text-neutral-300 mt-0.5 leading-relaxed font-sans">
                  Implemented schema <code className="text-neutral-200">$ref</code> reference resolution for TypeBox validator compiler; added OpenAPI 3.x path parameter serialization support; updated route compiler TypeScript interfaces.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between">
                  <span className="font-bold text-white">QuantConnect Lean & QuickFIX (Quantitative & Protocol Engines)</span>
                  <span className="text-sky-400 font-mono"><a href="https://github.com/QuantConnect/Lean" target="_blank" rel="noreferrer" className="hover:underline">[Lean]</a> <a href="https://github.com/quickfix/quickfix" target="_blank" rel="noreferrer" className="hover:underline">[QuickFIX]</a></span>
                </div>
                <p className="text-neutral-300 mt-0.5 leading-relaxed font-sans">
                  Corrected multi-currency future settlement cash adjustments and lunch-break market bar counts in Lean (C#); fixed socket initiator disconnect notification callback propagation in QuickFIX (C++).
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-white/[0.08]">
            <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-white text-sm">Presidency University — Bengaluru, India</span>
              <span className="text-xs font-mono text-neutral-500">Expected 2027</span>
            </div>
            <p className="text-xs italic text-neutral-400 mt-0.5 font-sans">
              Bachelor of Technology (B.Tech) in Computer Science & Engineering
            </p>
            <p className="text-xs text-neutral-300 mt-1.5 font-sans">
              <strong className="text-white">Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design, Software Engineering.
            </p>
          </div>

          {/* Problem Solving & Certifications */}
          <div className="pt-6">
            <h2 className="text-[11px] font-mono font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Problem Solving & Verification
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-300 font-sans">
              <li>
                <strong className="text-white">Competitive Programming:</strong> Active problem solver on{" "}
                <a href="https://leetcode.com/u/playboldAbhi/" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">LeetCode (700+ Solved)</a>
                {" "}and{" "}
                <a href="https://codeforces.com/profile/playboldAbhi" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Codeforces</a>, focusing on Graph Algorithms, Dynamic Programming, and Amortized Complexity.
              </li>
              <li>
                <strong className="text-white">HackerRank Certifications:</strong> SQL (Advanced), Rest API (Intermediate), Problem Solving (Intermediate), Java (Basic).
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
