import { useState, useEffect } from "react";

const LiquidityLensShowcase = () => {
  const [midPrice, setMidPrice] = useState(184.50);
  const [spread, setSpread] = useState(0.02);
  const [p99Latency, setP99Latency] = useState(214);

  const [asks, setAsks] = useState([
    { price: 184.55, size: 820, total: 3240 },
    { price: 184.54, size: 640, total: 2420 },
    { price: 184.53, size: 910, total: 1780 },
    { price: 184.52, size: 490, total: 870 },
    { price: 184.51, size: 380, total: 380 },
  ]);

  const [bids, setBids] = useState([
    { price: 184.49, size: 410, total: 410 },
    { price: 184.48, size: 690, total: 1100 },
    { price: 184.47, size: 860, total: 1960 },
    { price: 184.46, size: 520, total: 2480 },
    { price: 184.44, size: 980, total: 3460 },
  ]);

  const [recentTrades, setRecentTrades] = useState([
    { time: "14:02:44.891", side: "BUY", price: 184.51, size: 120, latency: "214ns" },
    { time: "14:02:44.891", side: "SELL", price: 184.49, size: 85, latency: "228ns" },
    { time: "14:02:44.890", side: "BUY", price: 184.51, size: 250, latency: "209ns" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.49) * 0.04;
      const newMid = Number((midPrice + delta).toFixed(2));
      setMidPrice(newMid);
      setSpread(0.02);
      setP99Latency(208 + Math.floor(Math.random() * 20));

      const askBase = newMid + 0.01;
      const bidBase = newMid - 0.01;

      let askSum = 0;
      const newAsks = [0, 1, 2, 3, 4].map((i) => {
        const p = Number((askBase + i * 0.01).toFixed(2));
        const s = Math.floor(200 + Math.random() * 800);
        askSum += s;
        return { price: p, size: s, total: askSum };
      }).reverse();

      let bidSum = 0;
      const newBids = [0, 1, 2, 3, 4].map((i) => {
        const p = Number((bidBase - i * 0.01).toFixed(2));
        const s = Math.floor(200 + Math.random() * 800);
        bidSum += s;
        return { price: p, size: s, total: bidSum };
      });

      setAsks(newAsks);
      setBids(newBids);

      const isBuy = Math.random() > 0.5;
      const tradePrice = isBuy ? newAsks[newAsks.length - 1].price : newBids[0].price;
      const now = new Date();
      const timeStr = `${now.toTimeString().split(" ")[0]}.${String(now.getMilliseconds()).padStart(3, "0")}`;

      setRecentTrades((prev) => [
        {
          time: timeStr,
          side: isBuy ? "BUY" : "SELL",
          price: tradePrice,
          size: Math.floor(50 + Math.random() * 250),
          latency: `${205 + Math.floor(Math.random() * 25)}ns`,
        },
        ...prev.slice(0, 3),
      ]);
    }, 1600);

    return () => clearInterval(interval);
  }, [midPrice]);

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0A0A10] p-5 sm:p-6 text-neutral-300 font-mono text-xs">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-white font-medium">L2 Order Book & Execution Depth</span>
        </div>
        <div className="text-neutral-500 text-[11px]">
          P99 Latency: <span className="text-sky-400 font-semibold">{p99Latency}ns</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        {/* L2 Ladder */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-3 pb-2 text-[11px] text-neutral-500">
            <div>Price</div>
            <div className="text-right">Size</div>
            <div className="text-right">Depth</div>
          </div>

          {/* ASKS */}
          <div className="space-y-1">
            {asks.map((ask) => {
              const depthPct = Math.min(100, (ask.total / 3500) * 100);
              return (
                <div key={ask.price} className="relative grid grid-cols-3 py-0.5 px-1.5 rounded">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-rose-500/10 rounded pointer-events-none"
                    style={{ width: `${depthPct}%` }}
                  />
                  <span className="text-rose-400 z-10">{ask.price.toFixed(2)}</span>
                  <span className="text-right text-neutral-300 z-10">{ask.size}</span>
                  <span className="text-right text-neutral-500 z-10">{ask.total}</span>
                </div>
              );
            })}
          </div>

          {/* Spread / Mid Bar */}
          <div className="my-2 py-1 px-2 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
            <span className="text-neutral-400">Mid: <strong className="text-white font-semibold">${midPrice.toFixed(2)}</strong></span>
            <span className="text-neutral-500">Spread: ${spread.toFixed(2)}</span>
          </div>

          {/* BIDS */}
          <div className="space-y-1">
            {bids.map((bid) => {
              const depthPct = Math.min(100, (bid.total / 3500) * 100);
              return (
                <div key={bid.price} className="relative grid grid-cols-3 py-0.5 px-1.5 rounded">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 rounded pointer-events-none"
                    style={{ width: `${depthPct}%` }}
                  />
                  <span className="text-emerald-400 z-10">{bid.price.toFixed(2)}</span>
                  <span className="text-right text-neutral-300 z-10">{bid.size}</span>
                  <span className="text-right text-neutral-500 z-10">{bid.total}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Execution stream */}
        <div className="md:col-span-5 md:border-l md:border-white/[0.08] md:pl-5 flex flex-col justify-between">
          <div>
            <div className="text-[11px] text-neutral-500 pb-2 border-b border-white/[0.08]">
              Executed Match Stream
            </div>
            <div className="space-y-2 mt-3">
              {recentTrades.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className={t.side === "BUY" ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>
                      {t.side}
                    </span>
                    <span className="text-neutral-200">${t.price.toFixed(2)}</span>
                    <span className="text-neutral-500">({t.size})</span>
                  </div>
                  <span className="text-neutral-500">{t.latency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.08] text-[10px] text-neutral-500">
            Engine: Zero-allocation RingBuffer &bull; AVX-512 SIMD
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityLensShowcase;
