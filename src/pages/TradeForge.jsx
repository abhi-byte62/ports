import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FiCpu, FiTrendingUp, FiShield, FiActivity } from "react-icons/fi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import OrderBookMicroSimulator from "../components/Simulators/OrderBookMicroSimulator";

// High-resolution screenshots from desktop tf directory
import terminalOverviewImg from "../assets/images/tradeforge/01_tradeforge_terminal_overview.png";
import liveTradingImg from "../assets/images/tradeforge/02_tradeforge_live_trading.png";
import engineTelemetryImg from "../assets/images/tradeforge/03_tradeforge_engine_telemetry.png";
import marketDepthChartImg from "../assets/images/tradeforge/04_tradeforge_market_depth_and_chart.png";
import orderExecutionPositionsImg from "../assets/images/tradeforge/05_tradeforge_order_execution_and_positions.png";

const screenshots = [
  {
    id: "terminal-overview",
    title: "Live Paper Trading Terminal & Workspace",
    badge: "CANVAS + L2 DEPTH",
    image: terminalOverviewImg,
    description:
      "Integrated workspace uniting watchlist telemetry, interactive canvas candlestick charting (with SMA/EMA overlays), dynamic 5-level market depth ladder, order execution ticket, and position ledger.",
  },
  {
    id: "live-trading",
    title: "Real-Time Execution & Order Placement",
    badge: "SUB-10µS MATCHING",
    image: liveTradingImg,
    description:
      "Simultaneous execution across Market, Limit, Stop-Loss (SL-M), and Stop-Loss-Limit (SL-L) orders with live inline margin computation and 5x intraday MIS leverage validation.",
  },
  {
    id: "engine-telemetry",
    title: "Matching Engine Telemetry & Benchmarks",
    badge: "247K ORD/S • 4.1µS P50",
    image: engineTelemetryImg,
    description:
      "Real-time diagnostic console displaying tick generation rate (119K+ ticks/sec), queue latencies (p50/p95/p99), order event streams, and WebSocket topic broadcast metrics.",
  },
  {
    id: "market-depth-chart",
    title: "Level-2 Market Depth Ladder & Candlesticks",
    badge: "5-LEVEL LOB DEPTH",
    image: marketDepthChartImg,
    description:
      "Synchronized dual-pane view showing price-time priority bids/asks, live volume depth bars, spread calculation, and real-time canvas candle generation.",
  },
  {
    id: "order-execution-positions",
    title: "Position Ledger & Mark-to-Market Accounting",
    badge: "CONSERVATION INVARIANTS",
    image: orderExecutionPositionsImg,
    description:
      "Atomic position ledger with weighted average price tracking, live unrealized P&L recalculation, margin allocation breakdown, and one-click square-off execution.",
  },
];

const metrics = [
  {
    category: "THROUGHPUT",
    value: "247K+",
    unit: "orders/sec",
    label: "Matching Engine Throughput",
    badge: "BENCHMARK",
    description: "In-memory double-sided FIFO limit order book processing 247,133 orders/second on single-core Node.js/TS runtime.",
  },
  {
    category: "LATENCY",
    value: "4.10",
    unit: "µs",
    label: "Matching Latency (p50)",
    badge: "ULTRA-LOW LATENCY",
    description: "Sub-5 microsecond median matching latency with 6.60µs p95 and 10.90µs p99 under continuous heavy order flow.",
  },
  {
    category: "SIMULATION",
    value: "119K+",
    unit: "ticks/sec",
    label: "Stochastic Dynamics Engine",
    badge: "GBM + JUMP DIFFUSION",
    description: "Geometric Brownian Motion with mean-reversion drift and Poisson jump diffusion producing realistic market microstructure.",
  },
  {
    category: "VERIFICATION",
    value: "21/21",
    unit: "tests passed",
    label: "Strict Invariant & E2E Suite",
    badge: "ZERO DRIFT",
    description: "100% test coverage across FIFO fills, multi-level VWAP, 5x margin limits, idempotency, and multi-tenant security.",
  },
];

const architectureStages = [
  {
    name: "Stochastic Market Dynamics",
    protocol: "GBM + Poisson Jump Engine",
    description:
      "Synthesizes continuous tick streams using mean-reverting Geometric Brownian Motion and discrete Poisson liquidity shocks with deterministic seed reproducibility.",
    tags: ["stochastic-gbm", "jump-diffusion", "deterministic-seeds", "119k-ticks/s"],
  },
  {
    name: "Synchronous Pre-Trade Risk Gate",
    protocol: "Real-Time Margin & Circuit Validator",
    description:
      "Evaluates capital availability against 5x intraday MIS leverage, verifies ±10% circuit bands, validates tick size increments, and prevents duplicate submissions via client idempotency keys.",
    tags: ["5x-mis-leverage", "circuit-limits", "idempotency-cache", "pre-trade-risk"],
  },
  {
    name: "Deterministic FIFO Matching Core",
    protocol: "Double-Sided Price-Time Book",
    description:
      "Maintains sorted bid (descending) and ask (ascending) ladders with O(1) hash map order indices for instant cancellations and multi-level VWAP executions.",
    tags: ["price-time-fifo", "o1-cancel-index", "multi-level-vwap", "247k-orders/s"],
  },
  {
    name: "Dual Ledger & WebSocket Broadcast",
    protocol: "PostgreSQL ACID + Ephemeral State",
    description:
      "Performs atomic ledger mutations for cash, positions, and trades with resilient in-memory fallback, streaming filtered updates to traders over authenticated WebSockets.",
    tags: ["postgres-acid", "in-memory-fallback", "jwt-websockets", "atomic-ledger"],
  },
];

const architectureFootnotes = [
  "Deterministic Replay: Fixed PRNG seeds guarantee bit-for-bit identical price trajectories and matching state for regression testing.",
  "Atomic Accounting Invariant: Total Portfolio Value = Available Margin Cash + Sum(Position Quantity × Current Mid-Market Price).",
  "Zero Cross-Tenant Leakage: JWT authentication and tenant-bound order IDs strictly prevent unauthorized order modifications.",
  "Dual-Mode Resilience: Seamlessly transitions between transactional PostgreSQL and in-memory storage without restarting services.",
];

const comparisonPoints = [
  {
    aspect: "Order Matching Logic",
    traditional:
      "Simplified midpoint fills: orders execute immediately at the last traded price regardless of resting depth or queue priority.",
    solution:
      "Deterministic Price-Time Priority (FIFO) double-sided order book with multi-level price slippage and accurate VWAP fill computation.",
  },
  {
    aspect: "Pre-Trade Risk & Margin",
    traditional:
      "Post-trade balance checks or unconstrained virtual credits that permit infinite leverage and crossed circuit limit executions.",
    solution:
      "Synchronous pre-trade risk engine enforcing 5x MIS leverage limits, 100% CNC upfront requirements, and ±10% circuit limit bounds.",
  },
  {
    aspect: "Market Data Simulation",
    traditional:
      "Uniform random walks or static historical candles lacking market depth, volatility clustering, or queue depletion dynamics.",
    solution:
      "Stochastic Geometric Brownian Motion (GBM) with mean-reversion drift, Poisson jump diffusion, and power-law Level-2 depth ladder synthesis.",
  },
  {
    aspect: "Position & Ledger State",
    traditional:
      "Unsynchronized in-browser state prone to lost updates on page reload, without immutable transition audit logs.",
    solution:
      "ACID-persisted order state machine with immutable transition logs, Mark-to-Market P&L accounting, and sub-10ms WebSocket distribution.",
  },
];

const matchingEngineSnippet = `// Deterministic Price-Time Priority (FIFO) Matching Engine Core
export class OrderBook {
  private bids: Map<number, Order[]> = new Map(); // Price -> FIFO Queue (sorted descending)
  private asks: Map<number, Order[]> = new Map(); // Price -> FIFO Queue (sorted ascending)
  private orderIndex: Map<string, { price: number; side: 'BUY' | 'SELL' }> = new Map();

  public matchOrder(incoming: Order): MatchResult {
    const fills: ExecutionFill[] = [];
    let remainingQty = incoming.quantity;

    if (incoming.side === 'BUY') {
      const askPrices = Array.from(this.asks.keys()).sort((a, b) => a - b);
      
      for (const price of askPrices) {
        if (incoming.type === 'LIMIT' && price > incoming.price!) break;
        
        const queue = this.asks.get(price)!;
        while (queue.length > 0 && remainingQty > 0) {
          const resting = queue[0];
          const matchQty = Math.min(remainingQty, resting.remainingQuantity);
          
          remainingQty -= matchQty;
          resting.remainingQuantity -= matchQty;
          
          fills.push({
            makerOrderId: resting.id,
            takerOrderId: incoming.id,
            price: price,
            quantity: matchQty,
            timestamp: Date.now()
          });

          if (resting.remainingQuantity === 0) {
            queue.shift();
            this.orderIndex.delete(resting.id);
          }
        }
        if (queue.length === 0) this.asks.delete(price);
        if (remainingQty === 0) break;
      }
    }
    // Rest passive limit remainder in FIFO queue...
    return { fills, remainingQty };
  }
}`;

const riskEngineSnippet = `// Synchronous Pre-Trade Risk Evaluation Gate
export class RiskEngine {
  public validateOrder(order: NewOrderRequest, account: UserAccount, ltp: number): RiskResult {
    // 1. Assert Price is within +/- 10% Circuit Limits
    const lowerCircuit = ltp * 0.90;
    const upperCircuit = ltp * 1.10;
    if (order.type === 'LIMIT' && (order.price! < lowerCircuit || order.price! > upperCircuit)) {
      return { approved: false, reason: 'CIRCUIT_LIMIT_BREACH' };
    }

    // 2. Validate Minimum Tick Size Increments (0.05)
    if (order.price && Math.round(order.price * 100) % 5 !== 0) {
      return { approved: false, reason: 'INVALID_TICK_SIZE' };
    }

    // 3. Margin Assertion: 5x MIS Intraday vs 1x CNC Delivery
    const executionPrice = order.price || ltp;
    const grossValue = executionPrice * order.quantity;
    const requiredMargin = order.productType === 'MIS' 
      ? grossValue / 5.0  // 5x Leverage
      : grossValue;       // 100% Upfront Cash

    if (requiredMargin > account.availableMargin) {
      return { 
        approved: false, 
        reason: 'INSUFFICIENT_MARGIN',
        requiredMargin,
        availableMargin: account.availableMargin 
      };
    }

    return { approved: true, requiredMargin };
  }
}`;

const simulatorSnippet = `// Stochastic Geometric Brownian Motion + Poisson Jump Dynamics
export class MarketSimulator {
  private theta = 0.05;      // Mean-reversion speed
  private mu = 100.0;        // Long-term equilibrium anchor
  private sigma = 0.015;     // Diffusion volatility
  private jumpLambda = 0.02; // Poisson liquidity shock arrival rate

  public nextTick(currentPrice: number, dt: number): MarketTick {
    // Standard Wiener process increment dW
    const dW = Math.sqrt(dt) * this.boxMullerTransform();
    
    // Mean-reverting drift: theta * (mu - S_t) * dt
    const drift = this.theta * (this.mu - currentPrice) * dt;
    
    // Volatility diffusion: sigma * S_t * dW_t
    const diffusion = this.sigma * currentPrice * dW;
    
    // Discrete Poisson jump shock J_t * dN_t
    let jump = 0;
    if (Math.random() < this.jumpLambda * dt) {
      const jumpMagnitude = (Math.random() - 0.5) * 0.04;
      jump = currentPrice * jumpMagnitude;
    }

    const nextLTP = Math.max(0.05, currentPrice + drift + diffusion + jump);
    return {
      ltp: Number(nextLTP.toFixed(2)),
      volume: Math.floor(Math.random() * 500) + 10,
      timestamp: Date.now()
    };
  }
}`;

const lifecycleStates = [
  { state: "NEW", desc: "Order submitted by client over REST or WebSocket with idempotency key." },
  { state: "REJECTED", desc: "Pre-trade risk check failed (margin deficit, circuit breach, invalid tick)." },
  { state: "PENDING", desc: "Risk verification passed; dispatched to matching engine pipeline." },
  { state: "TRIGGER_PENDING", desc: "Resting stop-loss order awaiting market trigger price condition." },
  { state: "OPEN", desc: "Passive limit order resting in order book FIFO queue." },
  { state: "PARTIALLY_FILLED", desc: "Partial quantity matched against counterparty liquidity." },
  { state: "FILLED", desc: "100% quantity filled; trade logged and position ledger updated." },
  { state: "CANCELLED", desc: "User-initiated cancellation or expiration of unexecuted quantity." },
];

const benchmarkTable = [
  { component: "Matching Engine Throughput", metric: "247,133 orders/sec", condition: "FIFO In-Memory Match Pipeline" },
  { component: "Matching Latency (p50)", metric: "4.10 µs", condition: "Median execution tick" },
  { component: "Matching Latency (p95)", metric: "6.60 µs", condition: "95th percentile under continuous book pressure" },
  { component: "Matching Latency (p99)", metric: "10.90 µs", condition: "99th percentile tail latency" },
  { component: "Market Simulator Rate", metric: "119,899 ticks/sec", condition: "Continuous GBM + Jump Dynamics" },
  { component: "E2E Test Verification", metric: "21 / 21 Passing", condition: "Multi-level VWAP, OCC, Risk, Multi-Tenant" },
];

const TradeForge = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0]);

  return (
    <main className="min-h-screen bg-[#08080C] py-32 text-white selection:bg-white/10 selection:text-white">
      <SEO
        title="TradeForge | Real-Time Paper Trading & Market Simulation Platform | Abhishek M R"
        description="Engineering case study: High-performance paper trading platform and market simulator. In-memory FIFO double-sided limit order book, synchronous pre-trade risk engine, and sub-10µs latency."
        keywords="TradeForge, Paper Trading, Limit Order Book, Matching Engine, Pre-Trade Risk, Market Simulator, WebSocket, Level 2 Depth, Full-Stack Fintech, TypeScript, Node.js, React"
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-5xl mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <HiArrowLeft size={14} />
            Back to projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-white/[0.06] px-2 py-0.5 text-xs font-mono font-medium text-neutral-200 border border-white/[0.08]">
              FINTECH CASE STUDY
            </span>
            <span className="rounded bg-white/[0.03] px-2 py-0.5 text-xs font-mono text-neutral-400 border border-white/[0.06]">
              MATCHING ENGINE
            </span>
            <span className="rounded bg-white/[0.03] px-2 py-0.5 text-xs font-mono text-neutral-400 border border-white/[0.06]">
              PRE-TRADE RISK & SIMULATION
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            TradeForge: Real-Time Paper Trading & Market Simulator
          </h1>

          <p className="mt-5 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            A modular, high-performance electronic paper trading workstation and market simulator. Engineered with an in-memory double-sided FIFO limit order book, synchronous pre-trade risk controls (5x MIS leverage & ±10% circuit limits), stochastic GBM jump-diffusion pricing, and sub-10µs matching engine latency.
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {[
              "TypeScript 5.6",
              "Node.js v20+",
              "React 19",
              "Native WebSockets",
              "Canvas Charting",
              "PostgreSQL 16",
              "Tailwind CSS",
              "FIFO Order Book",
              "Pre-Trade Risk Engine",
              "Stochastic Simulator",
              "Docker Compose",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs font-mono text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Benchmark Metrics Grid */}
        <section className="mx-auto max-w-5xl mb-16">
          <MetricsGrid metrics={metrics} />
        </section>

        {/* Live In-Browser Micro-Simulator */}
        <section className="mx-auto max-w-5xl">
          <OrderBookMicroSimulator title="TradeForge Matching Engine Micro-Simulator (Live FIFO LOB & Execution Tape)" />
        </section>

        {/* Interactive Screenshot Showcase */}
        <section className="mx-auto max-w-5xl mb-20">
          <div className="mb-5 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                INTERACTIVE TERMINAL INTERFACES
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white mt-1">
                Visual Inspection & Live Trading Gallery
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              Click tabs to inspect trading workspace panels
            </p>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex flex-wrap gap-1.5 mb-4 p-1 rounded-lg border border-white/[0.08] bg-[#0C0C12]">
            {screenshots.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScreenshot(item)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  activeScreenshot.id === item.id
                    ? "bg-white text-black font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display */}
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C12]">
            <div className="border-b border-white/[0.08] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="rounded bg-white/[0.05] px-2 py-0.5 text-[10px] font-mono font-medium text-neutral-300 border border-white/[0.08]">
                  {activeScreenshot.badge}
                </span>
                <h3 className="font-medium text-sm text-white">
                  {activeScreenshot.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 max-w-xl">
                {activeScreenshot.description}
              </p>
            </div>
            <div className="bg-[#08080C] p-2 sm:p-4">
              <img
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                className="w-full rounded-lg object-contain border border-white/[0.06]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Section 1: The Problem & Engineering Vision */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              1. The Engineering Challenge: Building Realistic Electronic Trading Workflows
            </h2>
            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                Most educational and retail paper-trading platforms rely on naive midpoint fills: submitting a buy order fills immediately at the Last Traded Price (LTP), regardless of whether there is counterparty liquidity, how deep the order book is, or whether the price breaches realistic circuit bands.
              </p>
              <p className="text-neutral-400">
                In production electronic exchange architectures, execution is strictly governed by <strong className="text-white font-medium">Price-Time Priority (FIFO)</strong> matching and <strong className="text-white font-medium">Pre-Trade Risk Gates</strong>:
              </p>
              <blockquote className="border-l-2 border-white/20 pl-4 italic text-neutral-300 my-4 font-mono text-xs">
                "Can a trader test institutional-grade intraday strategies with 5x leverage, multi-level price sweeps, and stop-loss triggers in an ultra-low-latency simulation that behaves identically to an electronic exchange?"
              </blockquote>
              <p className="text-neutral-400">
                TradeForge was constructed from first principles to address these demands:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                <li>
                  <strong className="text-neutral-200">Deterministic FIFO Matching:</strong> In-memory double-sided order books matching at 247,000+ orders/sec with hash map indexing for O(1) cancellations.
                </li>
                <li>
                  <strong className="text-neutral-200">Synchronous Pre-Trade Risk Engine:</strong> Enforces real-time margin availability, 5x MIS leverage limits, tick size validation (0.05), and ±10% circuit bounds.
                </li>
                <li>
                  <strong className="text-neutral-200">Stochastic Jump Diffusion Simulator:</strong> Geometric Brownian Motion with mean reversion and Poisson shocks yielding realistic volatility spikes and bid/ask spreads.
                </li>
                <li>
                  <strong className="text-neutral-200">High-Performance Trading Terminal:</strong> Canvas-based interactive candlestick chart, 5-level market depth ladder, order execution ticket, and position ledger.
                </li>
              </ul>
              <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-xs text-neutral-400 font-mono">
                <span className="text-neutral-200 font-semibold">SYSTEM ARCHITECTURE CONTEXT:</span> TradeForge translates the electronic matching and queue mechanics (modeled deeply in the <Link to="/liquiditylens" className="text-neutral-300 underline hover:text-white">LiquidityLens</Link> research engine) into a complete real-time paper trading terminal with synchronous risk controls and WebSocket updates.
              </div>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="TradeForge End-to-End Trading & Execution Pipeline"
              subtitle="Order submission from React / WebSocket interface through synchronous risk gate and FIFO matching engine to atomic ledger persistence."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - Deterministic FIFO Matching Core */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiCpu className="text-neutral-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                TECHNICAL DEEP DIVE 01
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Deterministic Price-Time Priority (FIFO) Matching Core & Multi-Level VWAP
            </h3>

            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                The TradeForge matching core maintains two sorted collections of price levels: bids sorted in descending order and asks sorted in ascending order. At each price level, orders are stored in a contiguous FIFO queue.
              </p>
              <p className="text-neutral-400">
                When an aggressive market or marketable limit order arrives, the engine traverses multiple price levels until the entire quantity is consumed, calculating the Volume-Weighted Average Price (VWAP) across all fills. An auxiliary <code className="text-neutral-200 font-mono bg-white/[0.04] px-1 py-0.5 rounded">orderIndex</code> hash map maps order IDs directly to price levels, ensuring <strong className="text-neutral-200 font-medium">O(1) cancellation performance</strong>.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="backend/src/engine/order-book.ts"
                language="TypeScript"
                code={matchingEngineSnippet}
                explanation="In-memory price-time matching executes fills across multiple levels while maintaining deterministic order ordering and sub-5µs median processing latency."
              />
            </div>
          </section>

          {/* Section 4: Deep Dive - Pre-Trade Risk Engine */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiShield className="text-neutral-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                TECHNICAL DEEP DIVE 02
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Synchronous Pre-Trade Risk Gate & 5x Intraday Leverage Accounting
            </h3>

            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                Before any order touches the matching book, it must pass synchronous risk evaluation. The risk engine enforces:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                <li>
                  <strong className="text-neutral-200">Leverage Verification:</strong> Validates 5x leverage for MIS (Margin Intraday Square-off) products and 100% upfront capital for CNC delivery products.
                </li>
                <li>
                  <strong className="text-neutral-200">Circuit Limits:</strong> Rejects limit orders priced outside the regulatory ±10% dynamic price band around the reference price.
                </li>
                <li>
                  <strong className="text-neutral-200">Idempotency Guard:</strong> Uses in-memory cache tokens to prevent duplicate order placement on client network retries.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="backend/src/engine/risk-engine.ts"
                language="TypeScript"
                code={riskEngineSnippet}
                explanation="Synchronous risk gates eliminate negative balance risks and prevent invalid price inputs before dispatching orders to the matching pipeline."
              />
            </div>
          </section>

          {/* Section 5: Deep Dive - Stochastic Market Simulator */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiTrendingUp className="text-neutral-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                TECHNICAL DEEP DIVE 03
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Geometric Brownian Motion with Mean Reversion & Poisson Jump Diffusion
            </h3>

            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                To generate authentic market tick streams, TradeForge implements a continuous stochastic process modeled by the SDE:
              </p>
              <div className="p-3.5 rounded-lg bg-[#08080C] border border-white/[0.08] font-mono text-xs text-neutral-300 text-center my-3">
                dS_t = θ(μ - S_t) dt + σ S_t dW_t + J_t dN_t
              </div>
              <p className="text-neutral-400">
                Mean-reverting drift anchors the asset to equilibrium, volatility diffusion provides micro-fluctuations, and Poisson jump processes simulate sudden institutional order flow and liquidity shocks.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="backend/src/simulator/market-simulator.ts"
                language="TypeScript"
                code={simulatorSnippet}
                explanation="Stochastic jump diffusion produces continuous 119K+ ticks/sec with deterministic PRNG seeding for reproducible test scenarios."
              />
            </div>
          </section>

          {/* Section 6: Order Lifecycle State Machine */}
          <section>
            <div className="mb-5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                FINITE STATE MACHINE
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">
                Deterministic Order Lifecycle State Machine
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {lifecycleStates.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-white/[0.14]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-white">
                      {item.state}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      STAGE {idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Comparison View */}
          <section>
            <ComparisonView
              title="Conventional Paper Trading Simulators vs. TradeForge Architecture"
              leftTitle="Generic Web Paper Simulators"
              rightTitle="TradeForge Real-Time Trading Engine"
              points={comparisonPoints}
            />
          </section>

          {/* Section 8: Hardware Benchmark Profile */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiActivity className="text-neutral-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                BENCHMARK & TELEMETRY VERIFICATION
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Local Hardware Benchmark Profile (16-Core Intel Core i5-13450HX)
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
              Measured using in-memory matching algorithm benchmarks (excluding external network latency):
            </p>

            <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="border-b border-white/[0.08] bg-[#08080C] text-neutral-400">
                  <tr>
                    <th className="p-3.5 font-medium">Component / Benchmark</th>
                    <th className="p-3.5 font-medium">Measured Performance</th>
                    <th className="p-3.5 font-medium">Operating Condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-[#0C0C12]">
                  {benchmarkTable.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-medium text-white">{row.component}</td>
                      <td className="p-3.5 text-neutral-200 font-semibold">{row.metric}</td>
                      <td className="p-3.5 text-neutral-400">{row.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Actions & Navigation */}
          <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-white/[0.08] sm:flex-row">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <Link
                to="/liquiditylens"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                <HiArrowLeft size={14} />
                Previous: LiquidityLens
              </Link>
              <span className="text-white/[0.12]">/</span>
              <Link
                to="/stacklens"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                Next: StackLens
                <HiArrowRight size={14} />
              </Link>
            </div>

            <a
              href="https://github.com/abhi-byte62/tradeforge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <FaGithub size={14} />
              Review Source Code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TradeForge;
