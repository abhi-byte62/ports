import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

import LiquidityLensShowcase from "../components/ProjectShowcase/LiquidityLensShowcase";
import DontTrustShowcase from "../components/ProjectShowcase/DontTrustShowcase";
import StackLensShowcase from "../components/ProjectShowcase/StackLensShowcase";
import TaskFlowShowcase from "../components/ProjectShowcase/TaskFlowShowcase";

const Projects = () => {
  return (
    <Section id="projects" className="py-24 bg-[#08080C] text-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Selected Engineering Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            In-depth breakdowns of sub-microsecond market simulation engines, AST taint runtimes, architecture inspectors, and distributed synchronization platforms.
          </p>
        </div>

        {/* -------------------------------------------------------------
            PROJECT 1: LIQUIDITYLENS
           ------------------------------------------------------------- */}
        <div className="pb-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                  LiquidityLens
                </h3>

                <p className="mt-2 text-base text-sky-400 font-medium font-sans">
                  C++17 Market Microstructure & L2 Order Book Simulation Engine
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  High-frequency market simulation engine processing tick-by-tick order flows with sub-microsecond latency. Evaluates adverse selection markout curves, FIFO queue priority dynamics, and self-exciting Hawkes jump processes without runtime dynamic allocations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-300">C++17</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">AVX-512</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Zero-Allocation</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Python</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">WebSocket</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/liquiditylens"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <span>Read Case Study</span>
                  <HiArrowRight size={14} />
                </Link>

                <a
                  href="https://github.com/abhi-byte62/liquiditylens"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <FaGithub size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LiquidityLensShowcase />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            PROJECT 2: DONTTRUST
           ------------------------------------------------------------- */}
        <div className="py-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                  DontTrust
                </h3>

                <p className="mt-2 text-base text-sky-400 font-medium font-sans">
                  AST Source-to-Sink Taint Engine & IDOR Security Runtime
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  Hybrid static and dynamic analysis engine that traverses JavaScript/TypeScript Abstract Syntax Trees (AST) to track tainted input propagation from HTTP entrypoints to execution sinks. Intercepts BOLA/IDOR vulnerabilities via multi-identity differential authorization replays.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-300">TypeScript</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Babel AST</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Node.js</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Differential Auth</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/donttrust"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <span>Read Case Study</span>
                  <HiArrowRight size={14} />
                </Link>

                <a
                  href="https://github.com/abhi-byte62/DontTrust"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <FaGithub size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <DontTrustShowcase />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            PROJECT 3: STACKLENS
           ------------------------------------------------------------- */}
        <div className="py-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                  StackLens
                </h3>

                <p className="mt-2 text-base text-sky-400 font-medium font-sans">
                  Automated Web Infrastructure & Architecture Dependency Scanner
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  Deep inspection tool that reconstructs complete backend and frontend architecture topologies from live endpoints. Features RFC 1918 private network SSRF defense, security header evaluation, and technology fingerprinting.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-300">Go</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">TypeScript</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">DNS Security</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">RFC 1918 Defense</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/stacklens"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <span>Read Case Study</span>
                  <HiArrowRight size={14} />
                </Link>

                <a
                  href="https://github.com/abhi-byte62/stacklens"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <FaGithub size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <StackLensShowcase />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            PROJECT 4: TASKFLOW
           ------------------------------------------------------------- */}
        <div className="py-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white">
                  TaskFlow
                </h3>

                <p className="mt-2 text-base text-sky-400 font-medium font-sans">
                  Real-Time OCC Distributed Collaboration & State Synchronization
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  Distributed collaboration engine with optimistic concurrency control (OCC) version vectors and zero-lock fractional indexing midpoint reordering. Guarantees deterministic state synchronization across concurrent clients over WebSockets.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-300">Java</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">Spring Boot</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">PostgreSQL</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">WebSocket</span>
                  <span className="text-neutral-600">&bull;</span>
                  <span className="text-neutral-300">OCC</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/taskflow"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md"
                >
                  <span>Read Case Study</span>
                  <HiArrowRight size={14} />
                </Link>

                <a
                  href="https://github.com/abhi-byte62/TaskFlow"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  <FaGithub size={15} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <TaskFlowShowcase />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            SPECIALIZED SYSTEMS ARCHIVE (Minimal Editorial Rows)
           ------------------------------------------------------------- */}
        <div className="pt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-3 border-b border-white/[0.08]">
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
              Specialized Implementations & Tooling
            </h3>
            <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0">SECONDARY ARCHIVE</span>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {/* TradeForge */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">TradeForge</h4>
                  <span className="text-xs font-mono text-neutral-500">C++20 &bull; WebSocket &bull; React</span>
                </div>
                <p className="text-sm text-neutral-400 mt-1 font-sans">
                  Real-time algorithmic trading & simulation platform with live Binance/Coinbase WS feeds, sub-millisecond risk checks, and portfolio PnL engine.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Link to="/tradeforge" className="text-sky-400 hover:text-sky-300 flex items-center gap-1">
                  Case Study <HiArrowRight size={12} />
                </Link>
                <a href="https://github.com/abhi-byte62/TradeForge" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white">
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Specter Proxy */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">Specter Proxy</h4>
                  <span className="text-xs font-mono text-neutral-500">Go &bull; Linux Sockets &bull; HTTP/2</span>
                </div>
                <p className="text-sm text-neutral-400 mt-1 font-sans">
                  High-throughput reverse proxy with dynamic token-bucket rate limiting, IP reputation scoring, and zero-allocation streaming body inspectors.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Link to="/specter-proxy" className="text-sky-400 hover:text-sky-300 flex items-center gap-1">
                  Case Study <HiArrowRight size={12} />
                </Link>
                <a href="https://github.com/abhi-byte62" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white">
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Packet Sniffer 3D */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold text-white">Packet Sniffer 3D</h4>
                  <span className="text-xs font-mono text-neutral-500">C++ &bull; WebGL &bull; PCAP Engine</span>
                </div>
                <p className="text-sm text-neutral-400 mt-1 font-sans">
                  PCAP network traffic capture parser with zero-copy ArrayBuffer decoding and GPU spatial network packet telemetry visualization.
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <Link to="/packet-sniffer" className="text-sky-400 hover:text-sky-300 flex items-center gap-1">
                  Case Study <HiArrowRight size={12} />
                </Link>
                <a href="https://github.com/abhi-byte62" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;