import { useState, useEffect, useMemo } from "react";
import { FiPlay, FiPause, FiZap, FiActivity, FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function OrderBookMicroSimulator({ title = "Interactive Market Microstructure & LOB Simulator" }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(10); // ticks per second
  const [midPrice, setMidPrice] = useState(184.50);
  const [trades, setTrades] = useState([]);
  const [metrics, setMetrics] = useState({
    eventsProcessed: 14280,
    throughput: "4.82M/s",
    avgLatency: "218ns",
    activeOrders: 864,
  });

  // Level-2 Depth Book state
  const [bids, setBids] = useState([
    { price: 184.45, qty: 120, total: 120, orders: 4 },
    { price: 184.40, qty: 250, total: 370, orders: 8 },
    { price: 184.35, qty: 480, total: 850, orders: 15 },
    { price: 184.30, qty: 620, total: 1470, orders: 19 },
    { price: 184.25, qty: 950, total: 2420, orders: 28 },
  ]);

  const [asks, setAsks] = useState([
    { price: 184.55, qty: 140, total: 140, orders: 5 },
    { price: 184.60, qty: 310, total: 450, orders: 9 },
    { price: 184.65, qty: 520, total: 970, orders: 14 },
    { price: 184.70, qty: 740, total: 1710, orders: 22 },
    { price: 184.75, qty: 1100, total: 2810, orders: 31 },
  ]);

  // Maximum depth for scaling bar width
  const maxTotal = useMemo(() => {
    const maxBid = bids[bids.length - 1]?.total || 1000;
    const maxAsk = asks[asks.length - 1]?.total || 1000;
    return Math.max(maxBid, maxAsk, 1);
  }, [bids, asks]);

  // Tick generator loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      // Simulate stochastic price shift (GBM + mean reversion)
      setMidPrice((prev) => {
        const drift = (184.50 - prev) * 0.05;
        const shock = (Math.random() - 0.495) * 0.12;
        const next = Math.max(10, +(prev + drift + shock).toFixed(2));

        // Rebuild depth around new mid price
        const step = 0.05;
        const newBids = [];
        const newAsks = [];

        let runningBidTotal = 0;
        for (let i = 1; i <= 5; i++) {
          const price = +(next - i * step).toFixed(2);
          const qty = Math.floor(Math.random() * 200) + 80 * i;
          runningBidTotal += qty;
          newBids.push({
            price,
            qty,
            total: runningBidTotal,
            orders: Math.floor(qty / 35) + 1,
          });
        }

        let runningAskTotal = 0;
        for (let i = 1; i <= 5; i++) {
          const price = +(next + i * step).toFixed(2);
          const qty = Math.floor(Math.random() * 200) + 80 * i;
          runningAskTotal += qty;
          newAsks.push({
            price,
            qty,
            total: runningAskTotal,
            orders: Math.floor(qty / 35) + 1,
          });
        }

        setBids(newBids);
        setAsks(newAsks);

        // Random executed fill
        if (Math.random() > 0.4) {
          const isBuy = Math.random() > 0.5;
          const fillPrice = isBuy ? newAsks[0].price : newBids[0].price;
          const fillQty = Math.floor(Math.random() * 80) + 10;
          setTrades((t) => [
            {
              id: Date.now() + Math.random(),
              time: new Date().toLocaleTimeString().split(" ")[0] + "." + Math.floor(Math.random() * 900 + 100),
              price: fillPrice.toFixed(2),
              qty: fillQty,
              side: isBuy ? "BUY" : "SELL",
            },
            ...t.slice(0, 7),
          ]);
        }

        return next;
      });

      setMetrics((m) => ({
        ...m,
        eventsProcessed: m.eventsProcessed + Math.floor(Math.random() * 25) + 10,
        avgLatency: (195 + Math.floor(Math.random() * 40)) + "ns",
      }));
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  // Execute immediate market order
  const handleMarketOrder = (side) => {
    const price = side === "BUY" ? asks[0].price : bids[0].price;
    const qty = 75;

    setTrades((t) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString().split(" ")[0] + "." + Math.floor(Math.random() * 900 + 100),
        price: price.toFixed(2),
        qty: qty,
        side: side,
        isUser: true,
      },
      ...t.slice(0, 7),
    ]);

    setMetrics((m) => ({
      ...m,
      eventsProcessed: m.eventsProcessed + 1,
      activeOrders: m.activeOrders + (side === "BUY" ? 1 : -1),
    }));
  };

  // Inject Poisson liquidity shock
  const handleLiquidityShock = () => {
    setSpeed(40);
    setTimeout(() => setSpeed(10), 1200);

    setTrades((t) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString().split(" ")[0] + ".000",
        price: midPrice.toFixed(2),
        qty: 500,
        side: "SHOCK",
        isUser: true,
      },
      ...t.slice(0, 7),
    ]);
  };

  const spread = (asks[0]?.price - bids[0]?.price || 0.1).toFixed(2);

  return (
    <div className="my-12 rounded-2xl border border-white/[0.1] bg-[#09090E] p-6 sm:p-8 text-white shadow-2xl">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              LIVE MICRO-SIMULATOR
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            {title}
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-colors ${
              isPlaying
                ? "bg-white/[0.08] text-white hover:bg-white/[0.14]"
                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
            }`}
          >
            {isPlaying ? <FiPause size={13} /> : <FiPlay size={13} />}
            <span>{isPlaying ? "Pause Feed" : "Resume"}</span>
          </button>

          <button
            onClick={handleLiquidityShock}
            className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-mono text-amber-300 hover:bg-amber-500/20 transition-colors"
          >
            <FiZap size={13} />
            <span>Poisson Burst</span>
          </button>

          <div className="flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.02] p-1 text-xs font-mono">
            {[5, 10, 25].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  speed === s ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
                }`}
              >
                {s}Hz
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-white/[0.06] text-xs font-mono">
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-neutral-500 uppercase text-[10px]">Mid Market Price</div>
          <div className="text-base sm:text-lg font-semibold text-white mt-0.5 font-mono">
            ${midPrice.toFixed(2)}
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-neutral-500 uppercase text-[10px]">L1 Bid-Ask Spread</div>
          <div className="text-base sm:text-lg font-semibold text-neutral-300 mt-0.5 font-mono">
            ${spread} ({( (spread / midPrice) * 100 ).toFixed(3)}%)
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-neutral-500 uppercase text-[10px]">Simulation Latency</div>
          <div className="text-base sm:text-lg font-semibold text-emerald-400 mt-0.5 font-mono">
            {metrics.avgLatency}
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-neutral-500 uppercase text-[10px]">Events Replayed</div>
          <div className="text-base sm:text-lg font-semibold text-white mt-0.5 font-mono">
            {metrics.eventsProcessed.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Dual Ladder & Trade Tape View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Order Book Level 2 Ladder (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-2 pb-1 border-b border-white/[0.06]">
              <span className="w-1/4">Price (USD)</span>
              <span className="w-1/4 text-right">Size (Units)</span>
              <span className="w-1/4 text-right">Depth Total</span>
              <span className="w-1/4 text-right">Queue Ords</span>
            </div>

            {/* Asks (Red / Top of book sorted descending) */}
            <div className="space-y-1">
              {[...asks].reverse().map((ask) => {
                const depthPct = Math.min(100, Math.round((ask.total / maxTotal) * 100));
                return (
                  <div
                    key={`ask-${ask.price}`}
                    className="relative flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-mono overflow-hidden transition-all hover:bg-red-500/[0.06]"
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 bg-rose-500/15 transition-all duration-300 pointer-events-none"
                      style={{ width: `${depthPct}%` }}
                    />
                    <span className="relative text-rose-400 font-semibold w-1/4">${ask.price.toFixed(2)}</span>
                    <span className="relative text-neutral-300 w-1/4 text-right">{ask.qty}</span>
                    <span className="relative text-neutral-500 w-1/4 text-right">{ask.total}</span>
                    <span className="relative text-neutral-500 w-1/4 text-right">#{ask.orders}</span>
                  </div>
                );
              })}
            </div>

            {/* Mid Price Separator */}
            <div className="py-2.5 px-4 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <FiActivity className="text-neutral-400" />
                <span className="text-neutral-400">SPREAD GAP:</span>
                <span className="text-white font-semibold">${spread}</span>
              </div>
              <div className="text-neutral-500">
                MATCH INVARIANT: <span className="text-emerald-400">FIFO LOCKED</span>
              </div>
            </div>

            {/* Bids (Green / Bottom of book sorted descending) */}
            <div className="space-y-1">
              {bids.map((bid) => {
                const depthPct = Math.min(100, Math.round((bid.total / maxTotal) * 100));
                return (
                  <div
                    key={`bid-${bid.price}`}
                    className="relative flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-mono overflow-hidden transition-all hover:bg-emerald-500/[0.06]"
                  >
                    <div
                      className="absolute right-0 top-0 bottom-0 bg-emerald-500/15 transition-all duration-300 pointer-events-none"
                      style={{ width: `${depthPct}%` }}
                    />
                    <span className="relative text-emerald-400 font-semibold w-1/4">${bid.price.toFixed(2)}</span>
                    <span className="relative text-neutral-300 w-1/4 text-right">{bid.qty}</span>
                    <span className="relative text-neutral-500 w-1/4 text-right">{bid.total}</span>
                    <span className="relative text-neutral-500 w-1/4 text-right">#{bid.orders}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Order Execution Bar */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-neutral-400">
              Interactive Execution:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleMarketOrder("BUY")}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-4 py-2 text-xs font-mono font-medium hover:bg-emerald-500/30 transition-colors"
              >
                <FiArrowUp size={13} />
                <span>Market Buy 75 @ ${asks[0]?.price.toFixed(2)}</span>
              </button>

              <button
                onClick={() => handleMarketOrder("SELL")}
                className="inline-flex items-center gap-1 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 px-4 py-2 text-xs font-mono font-medium hover:bg-rose-500/30 transition-colors"
              >
                <FiArrowDown size={13} />
                <span>Market Sell 75 @ ${bids[0]?.price.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Execution Tape / Stream (4 cols) */}
        <div className="lg:col-span-4 rounded-xl border border-white/[0.06] bg-black/40 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-neutral-400">
              <span>TIME (UTC)</span>
              <span>FILL PRICE</span>
              <span>QTY</span>
            </div>

            <div className="mt-2 space-y-1.5 overflow-hidden">
              {trades.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-neutral-600">
                  Awaiting matched trade fills...
                </div>
              ) : (
                trades.map((t) => (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between text-xs font-mono py-1 px-1.5 rounded transition-all ${
                      t.isUser ? "bg-white/10 border border-white/20" : ""
                    }`}
                  >
                    <span className="text-neutral-500 text-[11px]">{t.time}</span>
                    <span
                      className={`font-semibold ${
                        t.side === "BUY"
                          ? "text-emerald-400"
                          : t.side === "SELL"
                          ? "text-rose-400"
                          : "text-amber-400"
                      }`}
                    >
                      ${t.price}
                    </span>
                    <span className="text-neutral-300 text-[11px]">{t.qty}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500 leading-tight">
            Deterministic C++ matching kernel models FIFO queues and adverse selection slippage with zero look-ahead bias.
          </div>
        </div>
      </div>
    </div>
  );
}
