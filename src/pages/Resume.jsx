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
    <div className="min-h-screen bg-[#050914] text-[#F5F7FF] pt-24 pb-20">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/resume.pdf"
              download="Abhishek_M_R_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-4 py-2 text-xs font-semibold text-[#050914] transition-all hover:bg-[#6D96FF]"
            >
              <FaFilePdf size={14} />
              Download PDF (ATS)
            </a>

            <a
              href="/Abhishek_M_R_Resume.docx"
              download="Abhishek_M_R_Resume.docx"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-2 text-xs font-medium text-[#F5F7FF] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF]"
            >
              <FaFileWord size={14} className="text-[#4D7CFF]" />
              DOCX
            </a>

            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-2 text-xs font-medium text-[#8D99B5] transition-colors hover:border-[#4D7CFF] hover:text-[#F5F7FF]"
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
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#1C2942] bg-[#0D1424] p-8 sm:p-12 shadow-2xl shadow-[#050914]">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#1C2942]">
            <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FF]">
              ABHISHEK M R
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#8D99B5]">
              Bengaluru, India &nbsp;|&nbsp; +91 7259371549 &nbsp;|&nbsp;{" "}
              <a href="mailto:mrabhisheak@gmail.com" className="text-[#4D7CFF] hover:underline">
                mrabhisheak@gmail.com
              </a>
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-[#8D99B5]">
              <a href="https://abhishekmr.vercel.app/" className="hover:text-[#4D7CFF]">
                Portfolio: abhishekmr.vercel.app
              </a>
              <span>•</span>
              <a href="https://github.com/abhi-byte62" target="_blank" rel="noreferrer" className="hover:text-[#4D7CFF]">
                GitHub: abhi-byte62
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/abhishekmr029/" target="_blank" rel="noreferrer" className="hover:text-[#4D7CFF]">
                LinkedIn: in/abhishekmr029
              </a>
              <span>•</span>
              <a href="https://leetcode.com/u/playboldAbhi/" target="_blank" rel="noreferrer" className="hover:text-[#4D7CFF]">
                LeetCode: playboldAbhi
              </a>
              <span>•</span>
              <a href="https://codeforces.com/profile/playboldAbhi" target="_blank" rel="noreferrer" className="hover:text-[#4D7CFF]">
                Codeforces: playboldAbhi
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-[#1C2942]">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#8D99B5]">
              Software Engineer with a strong Computer Science foundation specializing in backend architectures, distributed systems, and low-latency C++/Java applications. Experienced in developing deterministic limit order book matching engines, event-driven microservices with RabbitMQ, stream backpressure pipelines, and optimistic concurrency control systems. Proficient in Data Structures, Algorithms, System Design, and building verified, high-throughput software.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-6 border-b border-[#1C2942]">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] mb-3">
              Technical Skills
            </h2>
            <div className="grid gap-2 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Languages:</span>
                <span className="text-[#8D99B5] sm:col-span-9">C++17, Java 21, JavaScript (ES6+), TypeScript, Python 3, C, SQL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Backend & Distributed:</span>
                <span className="text-[#8D99B5] sm:col-span-9">Spring Boot 3, Node.js, Express, FastAPI, RabbitMQ, WebSockets, RESTful APIs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Databases & Caching:</span>
                <span className="text-[#8D99B5] sm:col-span-9">PostgreSQL 16/17, MySQL, Redis 7 (Pub/Sub & Caching), Prisma ORM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Systems & Architecture:</span>
                <span className="text-[#8D99B5] sm:col-span-9">Limit Order Books (LOB), Fixed-Point Math, Stream Backpressure, Concurrency, Zero-Copy Buffers, WebGL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Infrastructure & Tools:</span>
                <span className="text-[#8D99B5] sm:col-span-9">Docker & Compose, Git, GitHub Actions, Linux / POSIX Shell, Postman, Vitest</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="font-semibold text-[#F5F7FF] sm:col-span-3">Core CS Foundations:</span>
                <span className="text-[#8D99B5] sm:col-span-9">Data Structures & Algorithms, OOP, OS (Memory, I/O), DBMS, Computer Networks, System Design, OCC</span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="py-6 border-b border-[#1C2942] space-y-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
              Selected Engineering Projects
            </h2>

            {/* StackLens */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-[#F5F7FF] text-sm">StackLens — Website Architecture Inference & Intelligence Engine</span>
                  <span className="text-xs italic text-[#8D99B5] block sm:inline sm:ml-2">| Java 21, Spring Boot 3, RabbitMQ, PostgreSQL, Redis, React 19, TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#4D7CFF]">
                  <a href="https://github.com/abhi-byte62/stackl" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/stacklens" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8D99B5] leading-relaxed">
                <li>Architected an asynchronous multi-vector probe engine reverse-engineering public web applications across 200+ weighted signatures.</li>
                <li>Implemented SSRF and DNS-rebinding perimeter defense by validating resolved target IPs against private RFC 1918 subnets prior to worker dispatch.</li>
                <li>Decoupled long-running external HTTP/TLS crawlers from client APIs using RabbitMQ message queues and Redis caching tiers.</li>
                <li>Synthesized PostgreSQL DDL schemas and REST/GraphQL API contracts from detected access patterns with interactive DAG topology generation.</li>
              </ul>
            </div>

            {/* LiquidityLens */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-[#F5F7FF] text-sm">LiquidityLens — Market Microstructure Simulator & Matching Engine</span>
                  <span className="text-xs italic text-[#8D99B5] block sm:inline sm:ml-2">| C++17, Python 3.10, FastAPI, Fixed-Point Math, Hawkes Processes, WebSockets</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#4D7CFF]">
                  <a href="https://github.com/abhi-byte62/liqudity" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/liquiditylens" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8D99B5] leading-relaxed">
                <li>Developed a deterministic C++17 limit order book (LOB) matching engine supporting 4.5M+ events/s with ~220ns match latency.</li>
                <li>Utilized int64_t fixed-point arithmetic across matching and accounting pipelines, eliminating IEEE-754 floating-point drift.</li>
                <li>Simulated clustered order arrival dynamics with synthetic Hawkes processes and modeled FIFO queue priority across 10µs–500µs latency slips.</li>
                <li>Calculated zero look-ahead adverse selection markout curves at 10ms, 100ms, and 1s post-trade horizons; streamed L2 depth via WebSockets.</li>
              </ul>
            </div>

            {/* TaskFlow */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-[#F5F7FF] text-sm">TaskFlow — Real-Time Collaborative Kanban & Distributed State Engine</span>
                  <span className="text-xs italic text-[#8D99B5] block sm:inline sm:ml-2">| React 18, Node.js, PostgreSQL 17, Prisma ORM, Socket.io, TanStack Query</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#4D7CFF]">
                  <a href="https://github.com/abhi-byte62/taskflow" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/taskflow" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8D99B5] leading-relaxed">
                <li>Engineered a real-time collaborative workspace with Optimistic Concurrency Control (OCC) using integer revision tags to reject stale writes.</li>
                <li>Implemented fractional midpoint indexing for O(1) card drag reordering, preventing expensive cascading updates across database rows.</li>
                <li>Integrated room-scoped Socket.io state synchronization with role-based access control (RBAC) enforced in atomic Prisma transactions.</li>
              </ul>
            </div>

            {/* Specter Proxy */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <span className="font-bold text-[#F5F7FF] text-sm">Specter Proxy — Stream Backpressure & Ephemeral TLS Interception Proxy</span>
                  <span className="text-xs italic text-[#8D99B5] block sm:inline sm:ml-2">| Node.js Streams, HTTP/HTTPS, TLS Termination, Dynamic SNI, Backpressure</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#4D7CFF]">
                  <a href="https://github.com/abhi-byte62/specter-proxy" target="_blank" rel="noreferrer" className="hover:underline">[GitHub]</a>
                  <Link to="/specter-proxy" className="hover:underline">[Case Study]</Link>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8D99B5] leading-relaxed">
                <li>Built a stream-oriented forward proxy for real-time packet inspection, latency injection, and synthetic network resilience testing.</li>
                <li>Enforced strict highWaterMark stream backpressure flow control to prevent heap bloat, maintaining a bounded ~35MB memory footprint.</li>
                <li>Implemented dynamic on-the-fly X.509 SNI certificate generation signed by an ephemeral local CA for seamless TLS MITM inspection.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-[#1C2942]">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[#F5F7FF] text-sm">Presidency University — Bengaluru, India</span>
              <span className="text-xs font-mono text-[#8D99B5]">Sept 2023 – Present | Expected 2027</span>
            </div>
            <p className="text-xs italic text-[#8D99B5] mt-0.5">
              Bachelor of Technology (B.Tech) in Computer Science & Engineering
            </p>
            <p className="text-xs text-[#8D99B5] mt-1.5">
              <strong className="text-[#F5F7FF]">Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems (DBMS), Computer Networks, System Design, Software Engineering.
            </p>
          </div>

          {/* Problem Solving & Certifications */}
          <div className="pt-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] mb-2">
              Problem Solving & Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#8D99B5]">
              <li>
                <strong className="text-[#F5F7FF]">Competitive Programming:</strong> Active problem solver on{" "}
                <a href="https://leetcode.com/u/playboldAbhi/" target="_blank" rel="noreferrer" className="text-[#4D7CFF] hover:underline">LeetCode (u/playboldAbhi)</a>
                {" "}and{" "}
                <a href="https://codeforces.com/profile/playboldAbhi" target="_blank" rel="noreferrer" className="text-[#4D7CFF] hover:underline">Codeforces (playboldAbhi)</a>, focusing on Graph Algorithms, Dynamic Programming, and Amortized Complexity.
              </li>
              <li>
                <strong className="text-[#F5F7FF]">HackerRank Certifications:</strong> SQL (Advanced), Rest API (Intermediate), Problem Solving (Intermediate), Java (Basic).
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
