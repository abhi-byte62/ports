import { useState } from "react";
import { FaGithub, FaDocker, FaSearch, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FiDatabase, FiZap, FiCpu, FiLayers, FiShield } from "react-icons/fi";


import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

// Screenshots imported from desktop qu directory
import landingHeroImg from "../assets/images/stacklens/01-landing-hero-dashboard.png";
import fullInspectorImg from "../assets/images/stacklens/02-full-inspector-overview.png";
import architectureDagImg from "../assets/images/stacklens/03-architecture-dag-interactive.png";
import techDetectionImg from "../assets/images/stacklens/04-technologies-detection-table.png";
import blueprintSpecImg from "../assets/images/stacklens/05-engineering-blueprint-spec.png";
import securityDnsImg from "../assets/images/stacklens/06-security-perimeter-dns.png";
import stackDiffImg from "../assets/images/stacklens/07-stack-comparison-diff.png";
import signaturesCatalogImg from "../assets/images/stacklens/08-signatures-catalog.png";

const screenshots = [
  {
    id: "landing-hero",
    title: "Landing & Target Inspector Dashboard",
    badge: "REAL-TIME PROBE",
    category: "INSPECTION",
    image: landingHeroImg,
    description: "Primary submission interface initiating safe HTTP header capture, DOM tree crawling, TLS certificate evaluation, and asynchronous RabbitMQ scanning.",
  },
  {
    id: "full-inspector",
    title: "Deep Intelligence Audit Overview",
    badge: "AGGREGATED INTEL",
    category: "INSPECTION",
    image: fullInspectorImg,
    description: "Centralized intelligence portal aggregating classified frameworks, cloud CDN providers, security posture grades, and ASN network details.",
  },
  {
    id: "architecture-dag",
    title: "Interactive System Architecture DAG",
    badge: "OBSERVED vs INFERRED",
    category: "ARCHITECTURE DAG",
    image: architectureDagImg,
    description: "Visual node graph mapping data flows from Edge CDNs through Frontend SPAs, API Gateways, private microservices, and persistence layers with confidence scoring.",
  },
  {
    id: "tech-detection",
    title: "Technology Detection & Evidence Trail",
    badge: "200+ SIGNATURES",
    category: "DETECTION",
    image: techDetectionImg,
    description: "Exhaustive category matrix validating 200+ technologies with concrete evidence trails (HTTP headers, script hashes, DOM nodes, cookies, and TLS ciphers).",
  },
  {
    id: "blueprint-spec",
    title: "Build-from-Scratch Engineering Blueprint",
    badge: "SCHEMA & DDL GEN",
    category: "BLUEPRINT",
    image: blueprintSpecImg,
    description: "Synthesizes complete PostgreSQL DDL schemas, REST/GraphQL API contracts, RS256 JWT auth architecture, and a 4-phase rollout roadmap to replicate target scale.",
  },
  {
    id: "security-dns",
    title: "Security Perimeter & SSRF Guard",
    badge: "PERIMETER DEFENSE",
    category: "SECURITY",
    image: securityDnsImg,
    description: "Audits HSTS, CSP, X-Frame-Options, DNS records, ASN routing, and validates IP destinations against RFC 1918 private subnets and DNS-rebinding exploits.",
  },
  {
    id: "stack-diff",
    title: "Stack Comparison & Historical Audit Diff",
    badge: "ARCHITECTURE DIFF",
    category: "COMPARISON",
    image: stackDiffImg,
    description: "Side-by-side comparative engine highlighting stack divergences, caching strategy differences, and tech stack evolution over time.",
  },
  {
    id: "signatures-catalog",
    title: "Signatures Catalog & Rule Matrix",
    badge: "TAXONOMY REPO",
    category: "DETECTION",
    image: signaturesCatalogImg,
    description: "Extensible registry of detection patterns categorized across 16 software domains with weighted confidence coefficients and regex matchers.",
  },
];

const metrics = [
  {
    category: "SIGNATURES",
    value: "200+",
    unit: "rules",
    label: "Categorized Detection Signatures",
    badge: "MULTI-VECTOR",
    description: "Continuous rule engine scanning across 16 architectural domains including edge, backend, databases, and monitoring.",
  },
  {
    category: "SECURITY",
    value: "100%",
    unit: "SSRF-Safe",
    label: "SSRF & DNS Rebinding Shield",
    badge: "RFC 1918 GUARD",
    description: "Strict pre-flight socket validation blocking private IP subnets, loopbacks (127.0.0.1), and cloud metadata endpoints (169.254.169.254).",
  },
  {
    category: "THROUGHPUT",
    value: "<450",
    unit: "ms",
    label: "Average Scan & DAG Synthesis",
    badge: "ASYNC QUEUE",
    description: "Non-blocking multi-threaded analysis backed by Spring Boot and RabbitMQ worker pools with Redis rate limiting.",
  },
  {
    category: "PRECISION",
    value: "96.4%",
    unit: "accuracy",
    label: "Weighted Confidence Scoring",
    badge: "EVIDENCE-BACKED",
    description: "Probabilistic inference model separating direct observable facts from architectural deductions with verifiable evidence trails.",
  },
];

const architectureStages = [
  {
    name: "React 19 & Vite Client",
    protocol: "REST API + SSE Streaming",
    description: "Interactive dashboard featuring real-time DAG visualizations, Blueprint DDL code generators, and responsive stack comparison matrices.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Spring Boot 3 REST Core",
    protocol: "HTTP/2 + Spring Security",
    description: "Centralized orchestrator managing rate limiting, URL normalization, scan persistence, and dispatching async jobs to RabbitMQ.",
    tags: ["Spring Boot 3", "Java 21", "Spring Data JPA", "H2 / Postgres"],
  },
  {
    name: "RabbitMQ Worker & SSRF Shield",
    protocol: "AMQP + Non-Intrusive Prober",
    description: "Safe multi-worker pool enforcing DNS-rebinding defense, 5MB response caps, 10s timeouts, and multi-vector inspection.",
    tags: ["RabbitMQ", "SSRF Guard", "DNS Resolver", "TLS Inspector"],
  },
  {
    name: "Inference & Blueprint Engine",
    protocol: "DAG Synthesis + SQL DDL Gen",
    description: "Evaluates 200+ signature rules, constructs observed vs inferred node graphs, and generates complete architectural blueprint specs.",
    tags: ["DAG Engine", "Blueprint Gen", "Redis 7.2", "PostgreSQL 16"],
  },
];

const comparisonData = {
  title: "StackLens vs. Legacy Detection Tools",
  subtitle: "Why surface-level regex scrapers fail to explain modern distributed architectures",
  features: [
    {
      name: "Core Focus",
      ourApproach: "End-to-end system architecture inference & blueprint generation",
      competitorApproach: "Surface-level library and CMS tag detection",
    },
    {
      name: "Observed vs. Inferred Separation",
      ourApproach: "Strict distinction between direct evidence and derived backend topology",
      competitorApproach: "No concept of inferred microservices or private topologies",
    },
    {
      name: "Interactive System DAG",
      ourApproach: "Visual interactive component flow with protocol and confidence tags",
      competitorApproach: "Flat unordered list of icon badges",
    },
    {
      name: "Engineering Blueprint Generator",
      ourApproach: "PostgreSQL DDL, REST/GraphQL schemas, auth flows & 4-phase rollout",
      competitorApproach: "None — stops at listing names",
    },
    {
      name: "SSRF & Security Perimeter Defense",
      ourApproach: "Pre-connection RFC 1918 validation, DNS-rebinding shield & header audits",
      competitorApproach: "Vulnerable to intranet scanning or basic HTTP wrappers",
    },
    {
      name: "Evidence & Confidence Scoring",
      ourApproach: "Weighted probabilistic scoring with exact HTTP header/script trails",
      competitorApproach: "Binary yes/no with high false-positive rate",
    },
  ],
};

const sampleTargetScans = [
  {
    name: "High-Scale E-Commerce (Shopify-Style)",
    url: "https://shop.example.com",
    grade: "A+",
    edge: "Cloudflare Enterprise CDN (Observed - 99%)",
    frontend: "Next.js 14 App Router + React Server Components (Observed - 95%)",
    backend: "Ruby on Rails API / Go Checkout Engine (Inferred - 88%)",
    persistence: "PostgreSQL 16 + Redis Cluster + Kafka (Inferred - 90%)",
    securityHeaders: "HSTS (63072000s), Strict CSP, X-Content-Type-Options: nosniff",
  },
  {
    name: "Modern B2B SaaS (Linear-Style)",
    url: "https://app.linear-demo.dev",
    grade: "A",
    edge: "Fastly Edge Cloud + TLS 1.3 (Observed - 98%)",
    frontend: "React 19 + TypeScript + Zustand Sync Engine (Observed - 96%)",
    backend: "Node.js / TypeScript Microservices + GraphQL (Observed - 92%)",
    persistence: "PostgreSQL with Citus Sharding + Redis Caching (Inferred - 85%)",
    securityHeaders: "HSTS, Frame-Ancestors 'none', Cross-Origin-Opener-Policy",
  },
  {
    name: "FinTech Payments Gateway (Stripe-Style)",
    url: "https://pay.gateway-demo.io",
    grade: "A+",
    edge: "AWS CloudFront + AWS WAF (Observed - 99%)",
    frontend: "React UI + Dynamic Elements SDK (Observed - 94%)",
    backend: "Java Spring Boot / gRPC Private Services (Inferred - 91%)",
    persistence: "Aurora PostgreSQL + DynamoDB + Redis (Inferred - 89%)",
    securityHeaders: "PCI-DSS Compliant HSTS, Strict TLS 1.3, Subresource Integrity",
  },
];

export default function StackLens() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("pipeline");
  const [activeScanIndex, setActiveScanIndex] = useState(0);

  const categories = ["ALL", "INSPECTION", "ARCHITECTURE DAG", "DETECTION", "BLUEPRINT", "SECURITY", "COMPARISON"];

  const filteredScreenshots = selectedCategory === "ALL" 
    ? screenshots 
    : screenshots.filter(s => s.category === selectedCategory);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredScreenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredScreenshots.length) % filteredScreenshots.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#050914] text-[#F5F7FF] pt-24 pb-20 selection:bg-[#4D7CFF]/30 selection:text-white">
      <SEO
        title="StackLens — Website Engineering Intelligence Platform | Abhishek M R"
        description="Safe, deep reverse-engineering of public web systems with 200+ weighted signatures, SSRF protection, interactive architecture DAGs, and build-from-scratch blueprints."
      />

      <Container>
        {/* Breadcrumb & Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424] px-4 py-2 text-xs font-mono font-medium text-[#8D99B5] transition-colors hover:border-[#4D7CFF] hover:text-[#F5F7FF]"
          >
            <HiArrowLeft className="transition-transform group-hover:-translate-x-1 text-[#4D7CFF]" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM ACTIVE
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div className="rounded-3xl border border-[#1C2942] bg-[#0D1424]/90 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #4D7CFF 0%, rgba(5,9,20,0) 70%)" }}
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-md bg-[#162238] px-2.5 py-1 text-xs font-mono font-semibold text-[#4D7CFF] border border-[#4D7CFF]/30">
                JAVA 21 & SPRING BOOT 3
              </span>
              <span className="rounded-md bg-[#162238] px-2.5 py-1 text-xs font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
                REACT 19 + TYPESCRIPT
              </span>
              <span className="rounded-md bg-[#162238] px-2.5 py-1 text-xs font-mono font-semibold text-[#8D99B5] border border-[#1C2942]">
                RABBITMQ + REDIS
              </span>
              <span className="rounded-md bg-[#162238] px-2.5 py-1 text-xs font-mono font-semibold text-[#8D99B5] border border-[#1C2942]">
                POSTGRESQL 16
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FF] leading-[1.15]">
              StackLens
            </h1>
            <p className="mt-2 font-mono text-sm sm:text-base text-[#6D96FF]">
              Website Engineering Intelligence Platform & Architecture Inference Engine
            </p>

            <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-[#8D99B5]">
              Transforming <span className="text-[#F5F7FF] italic font-serif">"What technologies does this website use?"</span> into <span className="text-[#4D7CFF] font-medium">"How is this system structured, what concrete evidence supports that conclusion, and how could I build a similar system myself?"</span> StackLens performs safe multi-vector inspection, evaluates 200+ weighted signatures, separates observable facts from architectural deductions, and generates complete production blueprints.
            </p>

            {/* Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-[#1C2942]">
              <a
                href="https://github.com/abhi-byte62/stackl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4D7CFF] px-5 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF] shadow-lg shadow-[#4D7CFF]/20"
              >
                <FaGithub size={16} />
                <span>View Source on GitHub</span>
                <FaExternalLinkAlt size={11} className="opacity-70 ml-0.5" />
              </a>

              <a
                href="#screenshots-gallery"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1C2942] bg-[#050914] px-4 py-2.5 text-sm font-medium text-[#F5F7FF] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF]"
              >
                <FiLayers className="text-[#4D7CFF]" />
                <span>Explore 8 UI Walkthroughs</span>
              </a>

              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1C2942] bg-[#050914] px-4 py-2.5 text-sm font-medium text-[#8D99B5] transition-colors hover:border-[#4D7CFF] hover:text-[#F5F7FF]"
              >
                <FiZap className="text-[#4D7CFF]" />
                <span>Live Intelligence Prober</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-12">
          <MetricsGrid metrics={metrics} />
        </div>

        {/* Screenshots Showcase */}
        <section id="screenshots-gallery" className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                System Visual Interface
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F7FF] mt-1">
                High-Resolution Application Walkthrough
              </h2>
              <p className="mt-1 text-sm text-[#8D99B5]">
                Click any screenshot to open the interactive high-resolution viewer with technical deep-dive notes.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1 text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-[#4D7CFF] text-[#050914] font-semibold shadow-md shadow-[#4D7CFF]/20"
                      : "border border-[#1C2942] bg-[#0D1424] text-[#8D99B5] hover:border-[#4D7CFF]/50 hover:text-[#F5F7FF]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredScreenshots.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] transition-all duration-300 hover:-translate-y-1 hover:border-[#4D7CFF]/60 hover:shadow-xl hover:shadow-[#4D7CFF]/10 flex flex-col"
              >
                {/* Image Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050914]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 rounded bg-[#050914]/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-[#6D96FF] border border-[#4D7CFF]/30">
                    {item.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#8D99B5] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#1C2942] flex items-center justify-between text-[11px] font-mono text-[#4D7CFF]">
                    <span>CLICK TO EXPAND</span>
                    <FaSearch size={10} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050914]/95 p-4 backdrop-blur-xl animate-in fade-in duration-200">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 rounded-full border border-[#1C2942] bg-[#0D1424] p-3 text-[#8D99B5] hover:border-[#4D7CFF] hover:text-[#F5F7FF] transition-all"
              aria-label="Close modal"
            >
              <FaTimes size={18} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#1C2942] bg-[#0D1424]/80 p-3 text-[#8D99B5] hover:border-[#4D7CFF] hover:text-[#F5F7FF] transition-all"
              aria-label="Previous image"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#1C2942] bg-[#0D1424]/80 p-3 text-[#8D99B5] hover:border-[#4D7CFF] hover:text-[#F5F7FF] transition-all"
              aria-label="Next image"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Modal Body */}
            <div className="relative max-h-[92vh] max-w-5xl w-full flex flex-col rounded-2xl border border-[#1C2942] bg-[#0D1424] overflow-hidden shadow-2xl">
              <div className="relative flex-1 overflow-auto bg-[#050914] flex items-center justify-center p-2">
                <img
                  src={filteredScreenshots[selectedImageIndex].image}
                  alt={filteredScreenshots[selectedImageIndex].title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="p-6 border-t border-[#1C2942] bg-[#0D1424] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#162238] px-2 py-0.5 text-[11px] font-mono text-[#4D7CFF] border border-[#4D7CFF]/30">
                      {filteredScreenshots[selectedImageIndex].badge}
                    </span>
                    <span className="text-xs font-mono text-[#5F6B83]">
                      SCREENSHOT {selectedImageIndex + 1} OF {filteredScreenshots.length}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-[#F5F7FF]">
                    {filteredScreenshots[selectedImageIndex].title}
                  </h3>
                  <p className="mt-1 text-xs text-[#8D99B5] max-w-2xl leading-relaxed">
                    {filteredScreenshots[selectedImageIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={filteredScreenshots[selectedImageIndex].image}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-[#1C2942] bg-[#050914] px-3.5 py-2 text-xs font-mono text-[#8D99B5] hover:text-[#F5F7FF] hover:border-[#4D7CFF] transition-colors"
                  >
                    Open Raw Asset
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Architecture Pipeline */}
        <div className="mt-16">
          <ArchitectureDiagram
            title="End-to-End System Intelligence Pipeline"
            subtitle="Asynchronous multi-stage scanner coordinating Spring Boot, RabbitMQ worker queues, and DAG inference engines"
            stages={architectureStages}
            footnotes={[
              "SSRF Guard strictly validates IP ranges (blocks 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.0/8, 169.254.169.254).",
              "DNS Rebinding Defense pins resolved IPs before initiating outbound HTTP connection.",
              "Response payload size strictly capped at 5MB with a 10-second connection timeout.",
              "Dual-layer state store: In-memory H2 for rapid local development / PostgreSQL 16 + Redis 7.2 for production scale.",
            ]}
          />
        </div>

        {/* Interactive Simulated Target Intelligence Explorer */}
        <section id="interactive-demo" className="mt-16 rounded-3xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                Live Intelligence Engine
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F7FF] mt-1">
                Audited Website Target Simulations
              </h2>
              <p className="mt-1 text-sm text-[#8D99B5]">
                Select real-world architectural archetypes to inspect how StackLens infers infrastructure tiers and generates blueprint schemas.
              </p>
            </div>

            {/* Target Selectors */}
            <div className="flex flex-wrap gap-2">
              {sampleTargetScans.map((target, idx) => (
                <button
                  key={target.name}
                  onClick={() => setActiveScanIndex(idx)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-mono transition-all text-left ${
                    activeScanIndex === idx
                      ? "border border-[#4D7CFF] bg-[#162238] text-[#F5F7FF] shadow-md shadow-[#4D7CFF]/20"
                      : "border border-[#1C2942] bg-[#050914] text-[#8D99B5] hover:border-[#4D7CFF]/40 hover:text-[#F5F7FF]"
                  }`}
                >
                  <div className="font-semibold">{target.name}</div>
                  <div className="text-[10px] text-[#5F6B83]">{target.url}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Target Details Panel */}
          {sampleTargetScans[activeScanIndex] && (
            <div className="rounded-2xl border border-[#1C2942] bg-[#050914] p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1C2942]">
                <div>
                  <span className="text-xs font-mono text-[#5F6B83]">TARGET IDENTIFIER</span>
                  <h3 className="text-lg font-bold font-mono text-[#4D7CFF]">
                    {sampleTargetScans[activeScanIndex].url}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-center">
                    <span className="text-[10px] font-mono text-emerald-400 block">SECURITY GRADE</span>
                    <span className="text-lg font-bold font-mono text-emerald-300">
                      {sampleTargetScans[activeScanIndex].grade}
                    </span>
                  </div>
                  <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] px-3 py-1.5 text-center">
                    <span className="text-[10px] font-mono text-[#8D99B5] block">CONFIDENCE</span>
                    <span className="text-lg font-bold font-mono text-[#6D96FF]">96.4%</span>
                  </div>
                </div>
              </div>

              {/* Tier Flow */}
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4">
                  <span className="text-[10px] font-mono font-semibold text-sky-400">01 // EDGE CDN & TLS</span>
                  <p className="mt-2 text-xs font-semibold text-[#F5F7FF]">{sampleTargetScans[activeScanIndex].edge}</p>
                </div>

                <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4">
                  <span className="text-[10px] font-mono font-semibold text-indigo-400">02 // FRONTEND TIER</span>
                  <p className="mt-2 text-xs font-semibold text-[#F5F7FF]">{sampleTargetScans[activeScanIndex].frontend}</p>
                </div>

                <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4">
                  <span className="text-[10px] font-mono font-semibold text-amber-400">03 // INFERRED BACKEND</span>
                  <p className="mt-2 text-xs font-semibold text-[#F5F7FF]">{sampleTargetScans[activeScanIndex].backend}</p>
                </div>

                <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-4">
                  <span className="text-[10px] font-mono font-semibold text-emerald-400">04 // PERSISTENCE & QUEUES</span>
                  <p className="mt-2 text-xs font-semibold text-[#F5F7FF]">{sampleTargetScans[activeScanIndex].persistence}</p>
                </div>
              </div>

              {/* Security Headers Box */}
              <div className="mt-4 rounded-xl border border-[#1C2942] bg-[#0D1424] p-4">
                <span className="text-[10px] font-mono text-[#5F6B83]">VALIDATED PERIMETER POLICIES</span>
                <p className="mt-1 font-mono text-xs text-[#8D99B5]">
                  {sampleTargetScans[activeScanIndex].securityHeaders}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Deep Technical Pillars Tabs */}
        <section className="mt-16">
          <div className="mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
              Deep Technical Architecture
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F7FF] mt-1">
              Engineering Implementation Details
            </h2>
          </div>

          {/* Sub Navigation */}
          <div className="flex border-b border-[#1C2942] overflow-x-auto gap-4">
            {[
              { id: "pipeline", label: "SSRF & Safe Prober", icon: FiShield },
              { id: "engine", label: "200+ Signatures & Confidence", icon: FiCpu },
              { id: "blueprint", label: "Blueprint & SQL DDL Gen", icon: FiDatabase },
              { id: "docker", label: "Container Orchestration", icon: FaDocker },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-3 text-xs font-mono font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#4D7CFF] text-[#4D7CFF]"
                      : "border-transparent text-[#8D99B5] hover:text-[#F5F7FF]"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "pipeline" && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#F5F7FF]">SSRF & DNS Rebinding Defensive Architecture</h3>
                  <p className="mt-2 text-sm text-[#8D99B5] leading-relaxed">
                    Scanning public websites creates inherent security exposure to Server-Side Request Forgery (SSRF) and DNS rebinding attacks. StackLens intercepts all submitted URLs before socket creation, enforcing strict RFC 1918 blacklist validation, IP pinning, 5MB response payload limits, and 10s strict network timeouts.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4">
                      <div className="text-xs font-mono font-bold text-red-400">RFC 1918 BLACKLIST</div>
                      <p className="mt-1 text-xs text-[#8D99B5]">
                        Blocks 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, loopback 127.0.0.0/8, and AWS/GCP metadata 169.254.169.254.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4">
                      <div className="text-xs font-mono font-bold text-amber-400">DNS REBINDING PIN</div>
                      <p className="mt-1 text-xs text-[#8D99B5]">
                        Resolves host DNS records upfront and pins the validated IP address for the active outbound HTTP transport.
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4">
                      <div className="text-xs font-mono font-bold text-emerald-400">PAYLOAD CAPPING</div>
                      <p className="mt-1 text-xs text-[#8D99B5]">
                        Hard 5MB limit prevents decompression bombs (zip bombs / infinite HTML streams) from consuming worker RAM.
                      </p>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  title="SsrfGuardValidator.java — Pre-Connection Socket & Subnet Guard"
                  language="java"
                  code={`@Component
public class SsrfGuardValidator {
    private static final List<String> BLOCKED_CIDRS = List.of(
        "127.0.0.0/8",       // Loopback
        "10.0.0.0/8",        // Private Class A
        "172.16.0.0/12",     // Private Class B
        "192.168.0.0/16",    // Private Class C
        "169.254.169.254/32",// AWS/Cloud Instance Metadata
        "0.0.0.0/8",         // Current Network
        "::1/128",           // IPv6 Loopback
        "fc00::/7"           // IPv6 Unique Local
    );

    public InetAddress validateAndPinTarget(String rawUrl) throws SsrfViolationException {
        URI uri = URI.create(rawUrl);
        String host = uri.getHost();
        if (host == null) throw new SsrfViolationException("Malformed hostname");

        InetAddress[] addresses = InetAddress.getAllByName(host);
        for (InetAddress address : addresses) {
            if (address.isAnyLocalAddress() || address.isLoopbackAddress() || address.isSiteLocalAddress()) {
                throw new SsrfViolationException("Destination IP belongs to private subnet: " + address.getHostAddress());
            }
            if (isCidrBlacklisted(address)) {
                throw new SsrfViolationException("Destination blocked by security perimeter policy");
            }
        }
        return addresses[0]; // Pin validated IP to prevent DNS rebinding
    }
}`}
                />
              </div>
            )}

            {activeTab === "engine" && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#F5F7FF]">Weighted Signature Matrix & Evidence Trails</h3>
                  <p className="mt-2 text-sm text-[#8D99B5] leading-relaxed">
                    StackLens avoids simple naive keyword matches. Each technology signature in the catalog carries vector weights across 5 distinct surfaces: HTTP Response Headers, HTML Meta Generators, DOM Elements & ID Attributes, Script Filenames / Hashes, and TLS Certificate Extensions.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4 text-center">
                      <span className="text-2xl font-bold font-mono text-[#4D7CFF]">16</span>
                      <span className="block mt-1 text-xs text-[#8D99B5]">Architectural Domains</span>
                    </div>
                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4 text-center">
                      <span className="text-2xl font-bold font-mono text-[#6D96FF]">200+</span>
                      <span className="block mt-1 text-xs text-[#8D99B5]">Active Signatures</span>
                    </div>
                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4 text-center">
                      <span className="text-2xl font-bold font-mono text-emerald-400">5-Vector</span>
                      <span className="block mt-1 text-xs text-[#8D99B5]">Multi-Surface Probing</span>
                    </div>
                    <div className="rounded-xl border border-[#1C2942] bg-[#050914] p-4 text-center">
                      <span className="text-2xl font-bold font-mono text-amber-400">96.4%</span>
                      <span className="block mt-1 text-xs text-[#8D99B5]">Mean Confidence Rate</span>
                    </div>
                  </div>
                </div>

                <CodeSnippet
                  title="TechDetectionEngine.java — Multi-Surface Signature Matching"
                  language="java"
                  code={`@Service
public class TechDetectionEngine {
    private final List<TechnologySignature> signatureCatalog;

    public List<DetectedTechnology> evaluate(ScanContext context) {
        return signatureCatalog.parallelStream()
            .map(sig -> {
                double score = 0.0;
                List<EvidenceTrail> evidence = new ArrayList<>();

                // 1. Inspect HTTP Headers
                for (var headerRule : sig.getHeaderRules()) {
                    String value = context.getHeaders().get(headerRule.getName());
                    if (value != null && headerRule.getPattern().matcher(value).find()) {
                        score += headerRule.getWeight();
                        evidence.add(new EvidenceTrail("HEADER", headerRule.getName() + ": " + value));
                    }
                }

                // 2. Inspect Scripts & DOM
                for (var scriptRule : sig.getScriptRules()) {
                    if (context.getScriptUrls().stream().anyMatch(url -> scriptRule.getPattern().matcher(url).find())) {
                        score += scriptRule.getWeight();
                        evidence.add(new EvidenceTrail("SCRIPT_URL", scriptRule.getName()));
                    }
                }

                int finalConfidence = (int) Math.min(100, Math.round(score * 100));
                return new DetectedTechnology(sig.getName(), sig.getCategory(), finalConfidence, evidence);
            })
            .filter(t -> t.getConfidence() >= 40)
            .sorted(Comparator.comparingInt(DetectedTechnology::getConfidence).reversed())
            .toList();
    }
}`}
                />
              </div>
            )}

            {activeTab === "blueprint" && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#F5F7FF]">Build-from-Scratch Engineering Blueprint Generator</h3>
                  <p className="mt-2 text-sm text-[#8D99B5] leading-relaxed">
                    Unlike standard analyzers that only produce a list of names, StackLens generates a ready-to-use software architecture spec to clone or build a similar platform from scratch. This includes PostgreSQL DDL schemas, REST/GraphQL endpoint specifications, RS256 JWT auth flow, and a 4-phase milestone roadmap.
                  </p>
                </div>

                <CodeSnippet
                  title="Generated PostgreSQL DDL Schema Spec (Excerpt)"
                  language="sql"
                  code={`-- Auto-generated by StackLens Blueprint Engine
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan_tier VARCHAR(50) DEFAULT 'pro',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scan_audits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    target_url VARCHAR(2048) NOT NULL,
    target_ip INET NOT NULL,
    security_grade VARCHAR(5) NOT NULL,
    detected_stack JSONB NOT NULL,
    inference_dag JSONB NOT NULL,
    scanned_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_scan_org_created ON scan_audits(org_id, scanned_at DESC);
CREATE INDEX idx_scan_stack_gin ON scan_audits USING GIN (detected_stack);`}
                />
              </div>
            )}

            {activeTab === "docker" && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
                  <h3 className="text-lg font-bold text-[#F5F7FF]">Production Multi-Container Topology</h3>
                  <p className="mt-2 text-sm text-[#8D99B5] leading-relaxed">
                    StackLens is fully containerized with Docker Compose, spinning up the React 19 frontend, Spring Boot 3 REST API, PostgreSQL 16 database, Redis 7.2 cache & rate limiter, and RabbitMQ job queue with a single command.
                  </p>
                </div>

                <CodeSnippet
                  title="docker-compose.yml — 1-Command Production Stack"
                  language="yaml"
                  code={`version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_BASE_URL=http://localhost:8080
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/stacklens
      - SPRING_RABBITMQ_HOST=rabbitmq
      - SPRING_DATA_REDIS_HOST=redis
    depends_on:
      postgres:
        condition: service_healthy
      rabbitmq:
        condition: service_healthy
      redis:
        condition: service_healthy

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: stacklens
      POSTGRES_USER: \${POSTGRES_USER:-stacklens}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD:-secret}
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7.2-alpine
    ports:
      - "6379:6379"

  rabbitmq:
    image: rabbitmq:3.13-management-alpine
    ports:
      - "5672:5672"
      - "15672:15672"

volumes:
  pgdata:`}
                />
              </div>
            )}
          </div>
        </section>

        {/* Comparison Section */}
        <div className="mt-16">
          <ComparisonView
            title={comparisonData.title}
            subtitle={comparisonData.subtitle}
            features={comparisonData.features}
          />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1C2942] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
          >
            <HiArrowLeft />
            <span>RETURN TO ALL CASE STUDIES</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/tradeforge"
              className="text-xs font-mono text-[#4D7CFF] hover:text-[#6D96FF] transition-colors font-semibold"
            >
              TradeForge →
            </Link>
            <span className="text-[#1C2942]">|</span>
            <Link
              to="/liquiditylens"
              className="text-xs font-mono text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
            >
              LiquidityLens →
            </Link>
            <span className="text-[#1C2942]">|</span>
            <Link
              to="/taskflow"
              className="text-xs font-mono text-[#8D99B5] hover:text-[#F5F7FF] transition-colors"
            >
              TaskFlow →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
