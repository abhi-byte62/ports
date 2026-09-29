import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FiCpu, FiTrendingUp, FiActivity, FiShield, FiClock, FiLayers } from "react-icons/fi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

// High-resolution screenshots from desktop quant directory
import depthLadderImg from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import fifoQueueImg from "../assets/images/liquiditylens/02_fifo_queue_dynamics_table.png";
import markoutCurvesImg from "../assets/images/liquiditylens/03_adverse_selection_markout_curves.png";
import latencyMatrixImg from "../assets/images/liquiditylens/04_latency_sensitivity_matrix.png";
import strategyLabImg from "../assets/images/liquiditylens/05_strategy_backtest_lab.png";
import researchNotebookImg from "../assets/images/liquiditylens/06_research_experiments_notebook.png";
import cppBenchmarksImg from "../assets/images/liquiditylens/07_cpp_hardware_benchmarks.png";

const screenshots = [
  {
    id: "depth-ladder",
    title: "L3 Order Book Depth Ladder",
    badge: "FIXED-POINT LOB",
    image: depthLadderImg,
    description:
      "Interactive depth ladder rendering uncrossed limit order book state, top-5 weighted depth, dynamic order book imbalance (OBI), and live micro-price mid calculations.",
  },
  {
    id: "fifo-queue",
    title: "FIFO Queue & Priority Fill Dynamics",
    badge: "17,500 TRIALS (SEED 42)",
    image: fifoQueueImg,
    description:
      "Controlled FIFO queue simulation analyzing execution probability decay across 7 queue-ahead tiers with order-level cancellation attribution and 95% Wilson binomial confidence bounds.",
  },
  {
    id: "markout-curves",
    title: "Adverse Selection Markout Curves",
    badge: "ZERO LOOK-AHEAD",
    image: markoutCurvesImg,
    description:
      "Multi-horizon post-fill price trajectories across 7 discrete observation windows (1ms to 1s) quantifying maker spread capture vs. toxic order flow adverse selection.",
  },
  {
    id: "latency-matrix",
    title: "Microsecond Latency Sensitivity Matrix",
    badge: "4-STAGE DELAY BUDGET",
    image: latencyMatrixImg,
    description:
      "Quantifies fill rate degradation, adverse selection amplification, and cancellation race latency across 10µs, 50µs, 100µs, 250µs, and 500µs execution delays.",
  },
  {
    id: "strategy-lab",
    title: "Market Making Strategy Backtest Lab",
    badge: "INVENTORY RISK CONTROL",
    image: strategyLabImg,
    description:
      "Avellaneda-Stoikov inventory optimization vs. Hawkes intensity-skewed quoting evaluated under 1-second resampled mark-to-market Sharpe and strict cash-invariant P&L.",
  },
  {
    id: "research-notebook",
    title: "Empirical Research Lab (EXP-001..007)",
    badge: "HYPOTHESIS TESTING",
    image: researchNotebookImg,
    description:
      "Statistical research harness executing dynamic event replays, Pearson correlation OLS regressions for OBI return prediction, and cross-regime volatility stress testing.",
  },
  {
    id: "cpp-benchmarks",
    title: "C++ Core Hardware Performance Profile",
    badge: "4.5M+ EVT/S • ~220ns",
    image: cppBenchmarksImg,
    description:
      "Hardware benchmark comparisons (GCC C++17 -O3) demonstrating +110% throughput improvement and 52% latency reduction over floating-point baseline implementations.",
  },
];

const metrics = [
  {
    category: "THROUGHPUT",
    value: "4.5M+",
    unit: "evt/sec",
    label: "C++ LOB Engine Throughput",
    badge: "BENCHMARK",
    description: "Single-threaded fixed-point int64_t matching core outperforming floating-point baseline by +110%.",
  },
  {
    category: "LATENCY",
    value: "~220",
    unit: "ns",
    label: "Average Event Processing Latency",
    badge: "SUB-MICROSECOND",
    description: "Ultra-low p50 processing latency with 1.1µs p90 tail latency under 150,000 continuous market events.",
  },
  {
    category: "REPLICATION",
    value: "17,500",
    unit: "trials",
    label: "Deterministic FIFO Queue Trials",
    badge: "SEED: 42",
    description: "Rigorous 95% Wilson binomial confidence intervals across 7 queue-ahead tiers (0 to 300 units).",
  },
  {
    category: "INTEGRITY",
    value: "100%",
    unit: "verified",
    label: "Strict Book & PnL Invariants",
    badge: "ZERO BIAS",
    description: "Guaranteed uncrossed order book state and exact conservation (Equity = Cash + Inventory × MidPrice).",
  },
];

const architectureStages = [
  {
    name: "Market Ingestion & Normalizer",
    protocol: "Binance Spot L2 + Hawkes L3",
    description:
      "Ingests real Binance BTCUSDT depth snapshots and trade ticks alongside synthetic multivariate Hawkes point processes into a unified nanosecond event schema.",
    tags: ["binance-rest", "hawkes-point-process", "nanosecond-ts", "schema-normalizer"],
  },
  {
    name: "Fixed-Point C++ Order Book",
    protocol: "int64_t Core Engine",
    description:
      "Maintains tick-indexed price ladders with zero dynamic heap allocation on hot paths, deterministic O(1) touch lookups, and strict invariant validation.",
    tags: ["cpp17-core", "fixed-point-math", "zero-heap-alloc", "uncrossed-invariants"],
  },
  {
    name: "Queue & Latency Execution Engine",
    protocol: "FIFO Attribution + Wire Delay",
    description:
      "Tracks exact resting volume ahead, decrements on cancellations ahead, and injects 10µs to 500µs wire/exchange delay budgets before allocating passive fills.",
    tags: ["fifo-queue-decay", "cancel-attribution", "wire-latency", "passive-fill"],
  },
  {
    name: "Strategy Lab & PnL Accounting",
    protocol: "Avellaneda-Stoikov + Hawkes Skew",
    description:
      "Executes inventory-constrained quoting algorithms, post-fill adverse selection markouts across 7 horizons, and 1s resampled mark-to-market Sharpe analytics.",
    tags: ["avellaneda-stoikov", "inventory-risk", "markout-curves", "invariant-pnl"],
  },
];

const architectureFootnotes = [
  "Zero look-ahead bias: Quoting strategies at timestamp t evaluate strictly past events (tau <= t) before evaluating subsequent market fills.",
  "Exact FIFO queue attribution: Evaluates order-level cancellations individually—cancellations ahead decrement Q_ahead while cancellations behind preserve queue rank.",
  "1-second resampled mark-to-market accounting: Eliminates irregular trade arrival distortions to compute statistically sound Sharpe ratios.",
  "Strict uncrossed book integrity: Continuously validates best_bid < best_ask across all real and synthetic market regimes.",
];

const comparisonPoints = [
  {
    aspect: "Passive Fill Modeling",
    traditional:
      "Naive midpoint or touch assumptions: assumes passive orders execute immediately whenever the price touches the quote level, ignoring queue volume.",
    solution:
      "Deterministic FIFO queue tracking: requires market trades to fully consume volume ahead (Q_ahead) with order-level cancellation decay before allocating fills.",
  },
  {
    aspect: "Price Representation & Precision",
    traditional:
      "IEEE 754 floating-point decimals prone to rounding errors, precision drift, and accidental crossed-book comparisons in high-speed loops.",
    solution:
      "Fixed-point int64_t discrete integer tick arithmetic eliminating floating-point errors and providing +110% throughput in C++17.",
  },
  {
    aspect: "Execution Latency Realism",
    traditional:
      "Zero latency assumptions: quotes post and cancel instantaneously, masking adverse selection and giving unrealistic backtest returns.",
    solution:
      "4-stage microsecond latency pipeline (10µs -> 500µs) simulating wire transit, exchange gateway processing, and queue race degradation.",
  },
  {
    aspect: "Post-Fill Alpha & Markouts",
    traditional:
      "End-of-day or arbitrary candle P&L calculations that fail to measure whether executions were systematically picked off by toxic informed flow.",
    solution:
      "Multi-horizon markout curves across 7 discrete observation windows (1ms to 1s) measuring maker spread capture vs. toxic adverse selection.",
  },
];

const fixedPointSnippet = `// Fixed-Point Integer Price Engine & Invariant Verification
#include <cstdint>
#include <stdexcept>

namespace liquidity_lens {

using Price = int64_t;    // Fixed-point integer ticks (e.g. 1 tick = $0.01)
using Quantity = int64_t; // Scaled lot units
using Timestamp = int64_t;// Nanoseconds since epoch

struct PriceLevel {
    Price price;
    Quantity total_volume;
    uint32_t order_count;
};

class LimitOrderBook {
private:
    std::map<Price, Quantity, std::greater<Price>> bids_; // Best bid at begin()
    std::map<Price, Quantity, std::less<Price>> asks_;    // Best ask at begin()

public:
    inline Price best_bid() const {
        return bids_.empty() ? 0 : bids_.begin()->first;
    }

    inline Price best_ask() const {
        return asks_.empty() ? INT64_MAX : asks_.begin()->first;
    }

    // Invariant: Limit order book must remain strictly uncrossed at all times
    inline bool verify_invariants() const {
        if (!bids_.empty() && !asks_.empty()) {
            if (best_bid() >= best_ask()) {
                throw std::runtime_error("INVARIANT VIOLATION: Crossed book detected!");
            }
        }
        return true;
    }

    inline Price micro_price() const {
        if (bids_.empty() || asks_.empty()) return 0;
        Quantity q_b = bids_.begin()->second;
        Quantity q_a = asks_.begin()->second;
        if (q_b + q_a == 0) return (best_bid() + best_ask()) / 2;
        // Micro-price weighted by opposite side volume
        return (best_bid() * q_a + best_ask() * q_b) / (q_b + q_a);
    }
};

} // namespace liquidity_lens`;

const queueAttributionSnippet = `// Exact FIFO Queue Tracking & Order-Level Cancellation Attribution
class FIFOQueueTracker:
    """Tracks resting passive order queue priority under dynamic event replay."""
    
    def __init__(self, order_id: str, side: str, price_tick: int, initial_volume_ahead: int, orders_ahead_ids: set):
        self.order_id = order_id
        self.side = side
        self.price_tick = price_tick
        self.q_ahead = initial_volume_ahead
        self.orders_ahead_ids = set(orders_ahead_ids) # Exact order IDs resting in front
        self.is_filled = False
        self.fill_timestamp = None

    def on_cancel(self, cancel_order_id: str, cancel_qty: int, cancel_price: int):
        """Attribution: Only decrements queue-ahead if the cancelled order was ahead in FIFO queue."""
        if cancel_price != self.price_tick or self.is_filled:
            return
            
        if cancel_order_id in self.orders_ahead_ids:
            # Cancellation occurred ahead of our order -> queue priority advances!
            self.q_ahead = max(0, self.q_ahead - cancel_qty)
            self.orders_ahead_ids.discard(cancel_order_id)

    def on_trade(self, trade_side: str, trade_price: int, trade_qty: int, timestamp_ns: int):
        """Aggressive market orders eat volume ahead before executing resting limit orders."""
        if trade_price != self.price_tick or self.is_filled:
            return
            
        # Match only when trade aggresses against our passive side
        if (self.side == "BUY" and trade_side == "SELL") or (self.side == "SELL" and trade_side == "BUY"):
            if self.q_ahead >= trade_qty:
                self.q_ahead -= trade_qty
            else:
                remaining_fill = trade_qty - self.q_ahead
                self.q_ahead = 0
                self.is_filled = True
                self.fill_timestamp = timestamp_ns`;

const markoutSnippet = `// Zero Look-Ahead Multi-Horizon Post-Fill Markouts
import numpy as np

def compute_post_fill_markouts(fills_df, l2_mid_series, horizons_ms=[1, 5, 10, 50, 100, 500, 1000]):
    """
    Computes markout curves across discrete horizons tau with zero look-ahead bias.
    Markout_BUY(tau)  = (Mid(t_fill + tau) - Mid(t_fill)) / Mid(t_fill) * 10,000 bps
    Markout_SELL(tau) = (Mid(t_fill) - Mid(t_fill + tau)) / Mid(t_fill) * 10,000 bps
    """
    markout_matrix = np.zeros((len(fills_df), len(horizons_ms)))
    
    for row_idx, fill in fills_df.iterrows():
        t_fill = fill["fill_timestamp_ns"]
        p_mid_fill = fill["mid_price_at_fill"]
        side_multiplier = 1.0 if fill["side"] == "BUY" else -1.0
        
        for h_idx, tau_ms in enumerate(horizons_ms):
            tau_ns = tau_ms * 1_000_000
            # Query future mid-price strictly after execution timestamp
            p_future = l2_mid_series.asof(t_fill + tau_ns)
            if p_future is not None and not np.isnan(p_future):
                # Positive markout = profitable spread capture; Negative = adverse selection
                markout_bps = side_multiplier * ((p_future - p_mid_fill) / p_mid_fill) * 10_000.0
                markout_matrix[row_idx, h_idx] = markout_bps
                
    return np.nanmean(markout_matrix, axis=0)`;

const researchExperiments = [
  {
    id: "EXP-001",
    title: "Order Book Imbalance vs. Future Mid-Price Return",
    method: "Dynamic Event Replay",
    source: "Synthetic LOB Stream (btc_liquid_balanced)",
    metric: "r = +0.2347 (p = 9.98e-14 at 250ms)",
    desc: "Evaluates predictive association of top-level and depth-weighted OBI across 7 time horizons with zero look-ahead.",
  },
  {
    id: "EXP-002",
    title: "Queue Position vs. Fill Probability",
    method: "Controlled FIFO Simulation",
    source: "17,500 Independent Trials (Seed 42)",
    metric: "64.5% (Head) vs. 49.2% (Tail, 300 ahead)",
    desc: "Proves decisive execution edge of queue priority; computes 95% Wilson binomial confidence intervals across 7 tiers.",
  },
  {
    id: "EXP-003",
    title: "Latency vs. Adverse Selection Toxicity",
    method: "Dynamic C++ Simulation",
    source: "Binance Spot L2 + Real Trades",
    metric: "10µs -> 500µs Delay Budget",
    desc: "Quantifies fill degradation and adverse markout amplification as wire latency delays quote cancellation.",
  },
  {
    id: "EXP-004",
    title: "Pure Spread vs. Inventory-Skewed MM",
    method: "Dynamic C++ Simulation",
    source: "Real Binance + Volatility Regimes",
    metric: "Avellaneda-Stoikov & Hawkes Skew",
    desc: "Compares symmetric spread capture against inventory-penalized reservation pricing under sharp directional flow.",
  },
  {
    id: "EXP-005",
    title: "Hawkes Process Clustering Calibration",
    method: "MLE Calibration Model",
    source: "Trade Inter-Arrival Times",
    metric: "α/β = 0.85 Excitation Branching Ratio",
    desc: "Calibrates mutually exciting self/cross-intensity parameters to reproduce realistic volatility bursts.",
  },
  {
    id: "EXP-006",
    title: "Microstructure Regime Shift Stress Test",
    method: "Cross-Regime Evaluation",
    source: "4 Distinct Microstructure Datasets",
    metric: "Balanced, High-Vol, Momentum, Drought",
    desc: "Stress-tests quoting survival and fill attribution across extreme liquidity droughts and multi-tick spreads.",
  },
  {
    id: "EXP-007",
    title: "Real vs. Synthetic Feed Distributional Audit",
    method: "Distributional Comparison",
    source: "Real Binance L2 vs. Hawkes L3",
    metric: "Spread & Volume Profile Matching",
    desc: "Formal provenance verification benchmarking synthetic Hawkes L3 distributions against real Binance spot feeds.",
  },
];

const hardwareBenchmarks = [
  { metric: "LOB Processing Throughput", baseline: "2.42 M evt/s", cpp: "4.51 - 5.08 M evt/s", delta: "+86.4% to +110%" },
  { metric: "Average Event Latency", baseline: "413.1 ns (0.41 µs)", cpp: "196.7 - 221.7 ns (<0.23 µs)", delta: "-46.3% to -52.4%" },
  { metric: "Tail Latency (p90)", baseline: "1,994 ns (1.99 µs)", cpp: "1,098 - 1,108 ns (1.10 µs)", delta: "-44.4%" },
  { metric: "Tail Latency (p99)", baseline: "3,046 ns (3.05 µs)", cpp: "2,034 - 2,040 ns (2.04 µs)", delta: "-33.0%" },
  { metric: "Book Invariants", baseline: "Unchecked", cpp: "100% Guaranteed Uncrossed", delta: "Zero Violations" },
];

const LiquidityLens = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(screenshots[0]);

  return (
    <main className="min-h-screen bg-[#050914] py-32 text-[#F5F7FF]">
      <SEO
        title="LiquidityLens | Market Microstructure & C++ Execution Simulator Case Study | Abhishek M R"
        description="Engineering case study: Ultra-low-latency market microstructure research engine built in C++17, Python, FastAPI, and React. Analyzes LOB dynamics, FIFO queue priority, latency sensitivity, and adverse selection."
        keywords="C++17, Market Microstructure, Limit Order Book, High Frequency Trading Simulation, Fixed-Point Arithmetic, Hawkes Process, FIFO Queue, Quantitative Finance, Adverse Selection Markouts"
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-5xl mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Engineering Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-[#0D1B3A] px-2.5 py-1 text-xs font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
              FEATURED QUANTITATIVE CASE STUDY
            </span>
            <span className="rounded bg-[#0D1424] px-2.5 py-1 text-xs font-mono text-[#8D99B5] border border-[#1C2942]">
              C++17 SYSTEMS & LOW LATENCY
            </span>
            <span className="rounded bg-[#0D1424] px-2.5 py-1 text-xs font-mono text-[#8D99B5] border border-[#1C2942]">
              MARKET MICROSTRUCTURE RESEARCH
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FF]">
            LiquidityLens: Market Microstructure & C++ Execution Simulator
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#8D99B5] leading-relaxed max-w-3xl">
            An ultra-low-latency quantitative research platform and event-driven C++ simulation engine. Reconstructs deterministic limit order book (LOB) states from market event feeds, models FIFO queue positioning with order-level cancellation attribution, simulates multi-stage microsecond latency budgets (10µs &rarr; 500µs), and computes multi-horizon post-fill markouts with zero look-ahead bias.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "C++17 Core Engine",
              "Fixed-Point int64_t",
              "Python 3.10+",
              "FastAPI",
              "React 19",
              "NumPy & SciPy",
              "Hawkes Process MLE",
              "Binance Spot API",
              "WebSocket Streaming",
              "MinGW GCC -O3",
              "Docker Compose",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#1C2942] bg-[#0D1424] px-3.5 py-1.5 text-xs font-medium text-[#8D99B5]"
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

        {/* Interactive Screenshot Showcase */}
        <section className="mx-auto max-w-5xl mb-20">
          <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                RESEARCH WORKSTATION & VISUAL INTERFACES
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#F5F7FF] mt-1">
                Visual Inspection & Research Terminal Gallery
              </h2>
            </div>
            <p className="text-xs text-[#8D99B5] font-mono">
              Click tabs to inspect quantitative simulation views
            </p>
          </div>

          {/* Screenshot Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-xl border border-[#1C2942] bg-[#0D1424]">
            {screenshots.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveScreenshot(item)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                  activeScreenshot.id === item.id
                    ? "bg-[#4D7CFF] text-[#050914] font-semibold shadow-sm"
                    : "text-[#8D99B5] hover:text-[#F5F7FF] hover:bg-[#10182A]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Screenshot Display */}
          <div className="overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] shadow-2xl transition-all">
            <div className="border-b border-[#1C2942] bg-[#0D1424] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded bg-[#0D1B3A] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
                  {activeScreenshot.badge}
                </span>
                <h3 className="font-semibold text-sm text-[#F5F7FF]">
                  {activeScreenshot.title}
                </h3>
              </div>
              <p className="text-xs text-[#8D99B5] max-w-xl">
                {activeScreenshot.description}
              </p>
            </div>
            <div className="relative bg-[#050914] p-2 sm:p-4">
              <img
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                className="w-full rounded-xl object-contain border border-[#1C2942]"
              />
            </div>
          </div>
        </section>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Section 1: The Problem & Engineering Vision */}
          <section>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#F5F7FF] mb-6">
              1. The Research Challenge: Beyond Naive Backtesting in Market Microstructure
            </h2>
            <div className="prose prose-invert max-w-none text-[#8D99B5] text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                In high-frequency quantitative finance, naive backtesting frameworks fail because they overlook the structural mechanics of limit order book (LOB) matching. Traditional backtesters assume that a passive limit order executes the instant market trade prices touch the limit quote.
              </p>
              <p>
                In reality, passive market making is governed by the structural adversary of <strong className="text-[#F5F7FF]">Adverse Selection</strong>:
              </p>
              <blockquote className="border-l-2 border-[#4D7CFF] pl-4 italic text-[#F5F7FF] my-4 font-mono text-xs sm:text-sm">
                "When a liquidity provider posts a passive limit order, what is the probability that the order executes immediately before the market moves against the trader?"
              </blockquote>
              <p>
                LiquidityLens was engineered to simulate true electronic market-making dynamics:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#8D99B5]">
                <li>
                  <strong className="text-[#F5F7FF]">Exact FIFO Queue Priority:</strong> Orders must wait in line behind pre-existing resting depth. Market orders consume queue volume first before allocating fills.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Order-Level Cancellation Attribution:</strong> Cancellations ahead in the queue advance priority, while cancellations behind leave volume ahead intact.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Microsecond Latency Budgets:</strong> Simulates wire transmission and exchange gateway transit delays (10µs &rarr; 500µs), capturing fill degradation and race latency.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Zero Look-Ahead Post-Fill Markouts:</strong> Evaluates post-fill price trajectories across discrete horizons (1ms to 1s) to separate genuine spread capture from toxic adverse selection.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="Deterministic Microstructure & Execution Simulation Pipeline"
              subtitle="End-to-end event flow from real Binance / synthetic Hawkes feeds through fixed-point C++ LOB replay to research analytics."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - Fixed-Point C++ Core */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiCpu className="text-[#4D7CFF]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                TECHNICAL DEEP DIVE 01
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mb-4">
              Fixed-Point <code className="text-[#4D7CFF] font-mono">int64_t</code> Price Representation & Strict Invariant Guarantees
            </h3>

            <div className="text-[#8D99B5] text-sm leading-relaxed space-y-4">
              <p>
                Floating-point calculations (<code className="text-[#F5F7FF] font-mono">double</code>, <code className="text-[#F5F7FF] font-mono">float</code>) introduce subtle rounding inaccuracies that cause order book crossing bugs and non-deterministic sorting order in high-frequency matching loops.
              </p>
              <p>
                LiquidityLens eliminates floating-point comparisons from the core matching path by representing all price levels and volumes as discrete fixed-point integers (<code className="text-[#4D7CFF] font-mono">using Price = int64_t</code>). Prices are converted to discrete tick counts based on the instrument's minimum tick size (0.01 = 1 tick). This ensures bit-for-bit deterministic replay and unlocks compiler vectorization, accelerating throughput to <strong className="text-[#F5F7FF]">4.5M+ events/second</strong>.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="engine/core/limit_order_book.hpp"
                language="C++17"
                code={fixedPointSnippet}
                explanation="Fixed-point integer representation eliminates IEEE 754 precision drift while strict assert-driven invariants guarantee the book remains uncrossed across all continuous events."
              />
            </div>
          </section>

          {/* Section 4: Deep Dive - FIFO Queue Attribution */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiLayers className="text-[#4D7CFF]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                TECHNICAL DEEP DIVE 02
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mb-4">
              Deterministic FIFO Queue Tracking with Order-Level Cancellation Attribution
            </h3>

            <div className="text-[#8D99B5] text-sm leading-relaxed space-y-4">
              <p>
                When a passive order is submitted at a price level with existing resting volume, it is placed at the tail of that price level's FIFO queue (<code className="text-[#F5F7FF] font-mono">Q_ahead = RestingVolume</code>).
              </p>
              <p>
                LiquidityLens tracks the exact set of resting order IDs ahead. When an incoming cancellation occurs, the engine verifies whether the cancelled order ID was ahead in the queue:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#8D99B5]">
                <li>
                  <strong className="text-[#F5F7FF]">Cancellation Ahead:</strong> Decrements <code className="text-[#4D7CFF] font-mono">Q_ahead</code> by the cancelled quantity, advancing the order's execution priority.
                </li>
                <li>
                  <strong className="text-[#F5F7FF]">Cancellation Behind:</strong> Leaves <code className="text-[#4D7CFF] font-mono">Q_ahead</code> unchanged because cancellations behind do not advance queue rank.
                </li>
              </ul>
              <p>
                In empirical trials with 17,500 deterministic simulations (Seed 42), orders at the head of the queue achieved a <strong className="text-[#F5F7FF]">64.5% fill rate</strong> (P50 = 0.08 ms) compared to <strong className="text-[#F5F7FF]">49.2%</strong> for orders 300 units deep (P50 = 1.25 ms).
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="research/fifo_queue_tracker.py"
                language="Python 3.10"
                code={queueAttributionSnippet}
                explanation="Accurate cancellation attribution prevents synthetic overfilling and correctly models queue priority depletion during high-frequency liquidity withdrawals."
              />
            </div>
          </section>

          {/* Section 5: Deep Dive - Adverse Selection Markouts */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiTrendingUp className="text-[#4D7CFF]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                TECHNICAL DEEP DIVE 03
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mb-4">
              Zero Look-Ahead Multi-Horizon Post-Fill Markouts
            </h3>

            <div className="text-[#8D99B5] text-sm leading-relaxed space-y-4">
              <p>
                To quantify toxic flow without look-ahead bias, LiquidityLens isolates the post-fill price evolution across 7 discrete observation windows (1ms, 5ms, 10ms, 50ms, 100ms, 500ms, 1s).
              </p>
              <p>
                If post-fill markouts trend downward immediately after a fill, the market maker has suffered adverse selection (the incoming order was informed and swept through the book). If markouts remain flat or positive, the passive quote captured genuine spread compensation.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="research/markout_analytics.py"
                language="Python / NumPy"
                code={markoutSnippet}
                explanation="Zero look-ahead guarantees that quoting algorithms make decisions strictly using past data, while multi-horizon markout curves are evaluated post-hoc for statistical validation."
              />
            </div>
          </section>

          {/* Section 6: Research Experiments Suite */}
          <section>
            <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                  QUANTITATIVE RESEARCH HARNESS
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#F5F7FF] mt-1">
                  Empirical Microstructure Research Suite (EXP-001 &ndash; EXP-007)
                </h3>
              </div>
              <p className="text-xs text-[#8D99B5] font-mono">
                100% dynamic simulation outputs (No static placeholders)
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {researchExperiments.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-5 transition-all duration-200 hover:border-[#4D7CFF]/40 hover:bg-[#10182A]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded bg-[#0D1B3A] px-2.5 py-0.5 text-xs font-mono font-bold text-[#6D96FF] border border-[#4D7CFF]/20">
                      {exp.id}
                    </span>
                    <span className="text-[11px] font-mono text-[#5F6B83]">
                      {exp.method}
                    </span>
                  </div>

                  <h4 className="font-semibold text-sm text-[#F5F7FF] mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-xs text-[#8D99B5] mb-3 leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#1C2942] text-xs font-mono">
                    <span className="text-[#8D99B5]">{exp.source}</span>
                    <span className="text-[#4D7CFF] font-semibold">{exp.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Comparison Analysis */}
          <section>
            <ComparisonView
              title="Conventional Historical Backtesting vs. LiquidityLens Microstructure Engine"
              leftTitle="Standard Web/Python Backtesters"
              rightTitle="LiquidityLens C++ Simulation Engine"
              points={comparisonPoints}
            />
          </section>

          {/* Section 8: Hardware Benchmarks Matrix */}
          <section className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <FiShield className="text-[#4D7CFF]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
                SYSTEM PERFORMANCE VERIFICATION
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-[#F5F7FF] mb-4">
              C++17 Engine Micro-Benchmark Profile (150,000 Continuous Events)
            </h3>

            <p className="text-[#8D99B5] text-xs sm:text-sm leading-relaxed mb-6">
              Single-threaded performance benchmark compiled with MinGW GCC 13.2 C++17 (<code className="text-[#4D7CFF] font-mono">-O3 -Wall -Wextra</code>) on Windows x86_64 hardware:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#1C2942]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="border-b border-[#1C2942] bg-[#050914] text-[#8D99B5]">
                  <tr>
                    <th className="p-3.5">Component / Metric</th>
                    <th className="p-3.5">Floating-Point Baseline</th>
                    <th className="p-3.5">Fixed-Point int64_t Core</th>
                    <th className="p-3.5 text-right">Optimization Delta</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C2942] bg-[#0D1424]">
                  {hardwareBenchmarks.map((row, i) => (
                    <tr key={i} className="hover:bg-[#10182A]">
                      <td className="p-3.5 font-semibold text-[#F5F7FF]">{row.metric}</td>
                      <td className="p-3.5 text-[#8D99B5]">{row.baseline}</td>
                      <td className="p-3.5 text-[#4D7CFF] font-semibold">{row.cpp}</td>
                      <td className="p-3.5 text-right font-semibold text-emerald-400">{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Bottom Actions & Navigation */}
          <div className="flex flex-col items-center justify-between gap-6 pt-12 border-t border-[#1C2942] sm:flex-row">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/taskflow"
                className="text-sm font-medium text-[#8D99B5] hover:text-[#4D7CFF] transition-colors"
              >
                &larr; Next Case Study: TaskFlow
              </Link>
              <span className="text-[#1C2942]">|</span>
              <Link
                to="/packet-sniffer"
                className="text-sm font-medium text-[#4D7CFF] hover:text-[#6D96FF] transition-colors"
              >
                Packet Sniffer 3D &rarr;
              </Link>
            </div>

            <a
              href="https://github.com/abhi-byte62/liquiditylens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-5 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF]"
            >
              <FaGithub size={16} />
              Review Source Code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default LiquidityLens;
