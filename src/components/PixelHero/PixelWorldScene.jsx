import { useEffect, useRef, useState } from "react";

export default function PixelWorldScene() {
  const canvasRef = useRef(null);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setUptime((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = Math.min(430, Math.max(320, canvas.parentElement?.clientHeight || 360)));

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          width = canvas.width = entry.contentRect.width;
          height = canvas.height = Math.min(430, Math.max(320, entry.contentRect.height || 360));
        }
      }
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Stars
    const starCount = 42;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.52),
      size: Math.random() > 0.85 ? 3 : Math.random() > 0.5 ? 2 : 1,
      color: Math.random() > 0.7 ? "#55E6C1" : Math.random() > 0.4 ? "#8AA4FF" : "#FFD166",
      twinkleSpeed: 0.02 + Math.random() * 0.035,
      alpha: Math.random(),
    }));

    // Skyline Buildings
    const buildingWidths = [45, 60, 36, 72, 46, 78, 34, 62, 54, 46, 84, 52, 64];
    let bX = 0;
    const buildings = [];
    let bIdx = 0;
    while (bX < width + 100) {
      const bw = buildingWidths[bIdx % buildingWidths.length];
      const bh = 80 + ((bIdx * 35) % 110);
      const windowRows = Math.floor(bh / 14);
      const windowCols = Math.floor(bw / 10);
      const windows = [];
      for (let r = 0; r < windowRows; r++) {
        for (let c = 0; c < windowCols; c++) {
          if (Math.random() > 0.35) {
            windows.push({
              r,
              c,
              on: Math.random() > 0.35,
              color: Math.random() > 0.65 ? "#FFD166" : Math.random() > 0.3 ? "#55E6C1" : "#8AA4FF",
              blinkRate: 0.005 + Math.random() * 0.02,
              counter: Math.random() * 10,
            });
          }
        }
      }
      buildings.push({ x: bX, w: bw, h: bh, windows });
      bX += bw + 8;
      bIdx++;
    }

    // Data packets
    const packets = [
      { x: 0, y: height * 0.45, speed: 2.0, color: "#55E6C1" },
      { x: width * 0.45, y: height * 0.45, speed: 1.6, color: "#8AA4FF" },
      { x: width * 0.85, y: height * 0.45, speed: 2.4, color: "#FFD166" },
    ];

    let frame = 0;
    let isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let isVisible = true;
    let isTabActive = !document.hidden;

    const render = () => {
      frame++;
      ctx.imageSmoothingEnabled = false;

      // 1. Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, "#050811");
      skyGrad.addColorStop(0.5, "#0A1022");
      skyGrad.addColorStop(1, "#121A33");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Pixel Moon in top-right
      const moonX = Math.min(width - 50, Math.max(200, width * 0.82));
      const moonY = 32;
      ctx.fillStyle = "#FFD166";
      // 12x12 stepped pixel circle
      ctx.fillRect(moonX + 3, moonY, 6, 1);
      ctx.fillRect(moonX + 1, moonY + 1, 10, 1);
      ctx.fillRect(moonX, moonY + 2, 12, 8);
      ctx.fillRect(moonX + 1, moonY + 10, 10, 1);
      ctx.fillRect(moonX + 3, moonY + 11, 6, 1);
      // Crater details
      ctx.fillStyle = "#E5B842";
      ctx.fillRect(moonX + 3, moonY + 3, 2, 2);
      ctx.fillRect(moonX + 7, moonY + 6, 3, 2);
      ctx.fillRect(moonX + 2, moonY + 7, 2, 2);

      // 3. Stars
      for (const star of stars) {
        if (!isReducedMotion) {
          star.alpha += star.twinkleSpeed;
        }
        const a = 0.3 + Math.abs(Math.sin(star.alpha)) * 0.7;
        ctx.fillStyle = star.color;
        ctx.globalAlpha = a;
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
      }
      ctx.globalAlpha = 1.0;

      // 4. Distant City Skyline
      const groundY = height - 70;
      for (const b of buildings) {
        ctx.fillStyle = "#0D1426";
        ctx.fillRect(Math.floor(b.x), Math.floor(groundY - b.h), Math.floor(b.w), Math.floor(b.h));
        
        if (b.w > 50) {
          ctx.fillStyle = "#2B3854";
          ctx.fillRect(Math.floor(b.x + b.w / 2 - 1), Math.floor(groundY - b.h - 18), 2, 18);
          ctx.fillStyle = frame % 60 < 30 ? "#55E6C1" : "#FF6B6B";
          ctx.fillRect(Math.floor(b.x + b.w / 2 - 2), Math.floor(groundY - b.h - 20), 4, 3);
        }

        for (const w of b.windows) {
          if (!isReducedMotion) {
            w.counter += w.blinkRate;
            if (Math.sin(w.counter) > 0.98) {
              w.on = !w.on;
            }
          }
          if (w.on) {
            ctx.fillStyle = w.color;
            ctx.globalAlpha = 0.8;
            ctx.fillRect(
              Math.floor(b.x + 4 + w.c * 10),
              Math.floor(groundY - b.h + 8 + w.r * 14),
              5,
              6
            );
          }
        }
        ctx.globalAlpha = 1.0;
      }

      // 5. Network Wire & moving packets
      ctx.strokeStyle = "#1A2540";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY - 40);
      ctx.lineTo(width, groundY - 40);
      ctx.stroke();

      for (const pkt of packets) {
        if (!isReducedMotion) {
          pkt.x += pkt.speed;
          if (pkt.x > width + 20) pkt.x = -20;
        }
        ctx.fillStyle = pkt.color;
        ctx.fillRect(Math.floor(pkt.x), Math.floor(groundY - 42), 6, 4);
      }

      // 6. Floor Deck with Retro Pixel Grid
      ctx.fillStyle = "#0A0E1C";
      ctx.fillRect(0, groundY, width, height - groundY);
      
      ctx.strokeStyle = "#162038";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, groundY);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 2;
      ctx.stroke();

      // 7. Developer Workstation
      const stationX = Math.max(width * 0.5 - 130, Math.min(width * 0.62, width - 310));
      const stationY = groundY - 8;

      // Server Tower
      ctx.fillStyle = "#141E36";
      ctx.fillRect(Math.floor(stationX - 44), Math.floor(stationY - 74), 32, 74);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 2;
      ctx.strokeRect(Math.floor(stationX - 44), Math.floor(stationY - 74), 32, 74);

      // Server LEDs
      for (let s = 0; s < 5; s++) {
        const ledY = stationY - 67 + s * 13;
        ctx.fillStyle = "#080D1A";
        ctx.fillRect(Math.floor(stationX - 39), Math.floor(ledY), 22, 7);
        
        const isBlinking = ((frame + s * 15) % 40) < 20;
        ctx.fillStyle = isBlinking ? "#55E6C1" : "#133D35";
        ctx.fillRect(Math.floor(stationX - 36), Math.floor(ledY + 2), 4, 3);

        ctx.fillStyle = (frame + s * 23) % 50 < 25 ? "#8AA4FF" : "#1B243B";
        ctx.fillRect(Math.floor(stationX - 30), Math.floor(ledY + 2), 4, 3);

        ctx.fillStyle = "#FFD166";
        ctx.fillRect(Math.floor(stationX - 23), Math.floor(ledY + 2), 4, 3);
      }

      // Desk Surface
      ctx.fillStyle = "#1A2744";
      ctx.fillRect(Math.floor(stationX - 10), Math.floor(stationY - 26), 240, 8);
      ctx.fillStyle = "#141E36";
      ctx.fillRect(Math.floor(stationX - 8), Math.floor(stationY - 18), 8, 18);
      ctx.fillRect(Math.floor(stationX + 218), Math.floor(stationY - 18), 8, 18);

      // --- Monitor 1 (Left - Terminal) ---
      ctx.fillStyle = "#070B16";
      ctx.fillRect(Math.floor(stationX), Math.floor(stationY - 80), 64, 50);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 2;
      ctx.strokeRect(Math.floor(stationX), Math.floor(stationY - 80), 64, 50);
      ctx.fillStyle = "#253354";
      ctx.fillRect(Math.floor(stationX + 27), Math.floor(stationY - 30), 10, 5);

      // Terminal lines
      ctx.fillStyle = "#55E6C1";
      ctx.fillRect(Math.floor(stationX + 4), Math.floor(stationY - 74), 18, 3);
      ctx.fillStyle = "#94A3B8";
      ctx.fillRect(Math.floor(stationX + 4), Math.floor(stationY - 68), 44, 2);
      ctx.fillRect(Math.floor(stationX + 4), Math.floor(stationY - 63), 34, 2);
      ctx.fillRect(Math.floor(stationX + 4), Math.floor(stationY - 58), 50, 2);
      if (Math.floor(frame / 28) % 2 === 0) {
        ctx.fillStyle = "#55E6C1";
        ctx.fillRect(Math.floor(stationX + 4), Math.floor(stationY - 52), 4, 4);
      }

      // --- Monitor 2 (Center - Matching Engine / Depth Ladder) ---
      ctx.fillStyle = "#060913";
      ctx.fillRect(Math.floor(stationX + 70), Math.floor(stationY - 94), 86, 64);
      ctx.strokeStyle = "#55E6C1";
      ctx.lineWidth = 2;
      ctx.strokeRect(Math.floor(stationX + 70), Math.floor(stationY - 94), 86, 64);
      ctx.fillStyle = "#253354";
      ctx.fillRect(Math.floor(stationX + 107), Math.floor(stationY - 32), 12, 6);

      const lY = stationY - 87;
      // Asks
      ctx.fillStyle = "#FF6B6B";
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY), 30, 3);
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 5), 45, 3);
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 10), 22, 3);
      // Spread
      ctx.fillStyle = "#FFD166";
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 16), 74, 2);
      // Bids
      ctx.fillStyle = "#55E6C1";
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 21), 38, 3);
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 26), 56, 3);
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 31), 28, 3);
      ctx.fillRect(Math.floor(stationX + 76), Math.floor(lY + 36), 64, 3);

      // Heartbeat line
      ctx.strokeStyle = "#8AA4FF";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(stationX + 76, lY + 47);
      ctx.lineTo(stationX + 90, lY + 47);
      ctx.lineTo(stationX + 95, lY + 42);
      ctx.lineTo(stationX + 100, lY + 50);
      ctx.lineTo(stationX + 105, lY + 47);
      ctx.lineTo(stationX + 148, lY + 47);
      ctx.stroke();

      // --- Monitor 3 (Right - Architecture Graph) ---
      ctx.fillStyle = "#070B16";
      ctx.fillRect(Math.floor(stationX + 162), Math.floor(stationY - 80), 64, 50);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 2;
      ctx.strokeRect(Math.floor(stationX + 162), Math.floor(stationY - 80), 64, 50);
      ctx.fillStyle = "#253354";
      ctx.fillRect(Math.floor(stationX + 189), Math.floor(stationY - 30), 10, 5);

      // Topology Nodes
      ctx.fillStyle = "#8AA4FF";
      ctx.fillRect(Math.floor(stationX + 170), Math.floor(stationY - 70), 6, 6);
      ctx.fillRect(Math.floor(stationX + 210), Math.floor(stationY - 70), 6, 6);
      ctx.fillRect(Math.floor(stationX + 190), Math.floor(stationY - 48), 8, 8);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(stationX + 173, stationY - 67);
      ctx.lineTo(stationX + 194, stationY - 44);
      ctx.lineTo(stationX + 213, stationY - 67);
      ctx.stroke();

      // --- Coffee Mug with Rising Steam ---
      ctx.fillStyle = "#FFD166";
      ctx.fillRect(Math.floor(stationX + 6), Math.floor(stationY - 36), 8, 10);
      ctx.fillStyle = "#080D1A";
      ctx.fillRect(Math.floor(stationX + 7), Math.floor(stationY - 35), 6, 2);
      if (!isReducedMotion) {
        const steamPhase = (frame % 40) / 40;
        ctx.fillStyle = "rgba(230, 234, 242, 0.6)";
        ctx.fillRect(Math.floor(stationX + 8 + Math.sin(frame * 0.08) * 2), Math.floor(stationY - 40 - steamPhase * 11), 2, 2);
      }

      // --- Developer Avatar Typing ---
      const devX = stationX + 101;
      const devY = stationY - 24;

      // Chair backrest
      ctx.fillStyle = "#0E1528";
      ctx.fillRect(Math.floor(devX - 14), Math.floor(devY - 38), 28, 38);
      ctx.strokeStyle = "#334366";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(Math.floor(devX - 14), Math.floor(devY - 38), 28, 38);

      // Hair & Head
      ctx.fillStyle = "#2D3748";
      ctx.fillRect(Math.floor(devX - 7), Math.floor(devY - 44), 14, 11);
      // Headphones
      ctx.fillStyle = "#55E6C1";
      ctx.fillRect(Math.floor(devX - 9), Math.floor(devY - 40), 3, 5);
      ctx.fillRect(Math.floor(devX + 6), Math.floor(devY - 40), 3, 5);

      // Hoodie Body
      ctx.fillStyle = "#1A2744";
      ctx.fillRect(Math.floor(devX - 10), Math.floor(devY - 33), 20, 21);
      ctx.fillStyle = "#55E6C1";
      ctx.fillRect(Math.floor(devX - 4), Math.floor(devY - 33), 8, 3);

      // Typing Arms
      const isTyping = Math.floor(frame / 12) % 2 === 0;
      ctx.fillStyle = "#8AA4FF";
      ctx.fillRect(Math.floor(devX - 8), Math.floor(devY - 23 + (isTyping ? 0 : 2)), 6, 8);
      ctx.fillRect(Math.floor(devX + 2), Math.floor(devY - 23 + (isTyping ? 2 : 0)), 6, 8);

      // Keyboard
      ctx.fillStyle = "#080D1A";
      ctx.fillRect(Math.floor(devX - 12), Math.floor(devY - 14), 24, 6);
      ctx.fillStyle = "#55E6C1";
      ctx.globalAlpha = 0.5;
      ctx.fillRect(Math.floor(devX - 10), Math.floor(devY - 13), 20, 3);
      ctx.globalAlpha = 1.0;

      if (!isReducedMotion && isVisible && isTabActive) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const startAnimation = () => {
      if (!animationFrameId && !isReducedMotion && isVisible && isTabActive) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.05 }
    );

    if (canvas.parentElement) {
      visibilityObserver.observe(canvas.parentElement);
    }

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    render();

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="pixel-frame overflow-hidden">
      {/* Top Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#1A2744] border-b-2 border-[#334366] text-[9px] font-pixel text-[#E6EAF2]">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 bg-[#55E6C1] animate-pixel-blink" />
          <span>DEV_WORKSTATION.SYS</span>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-[#FFD166]">
          <span>UPTIME: {uptime}S</span>
          <span className="text-[#55E6C1]">[60FPS]</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[270px] sm:h-[330px] md:h-[360px] bg-[#050811]">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 pointer-events-none pixel-scanlines opacity-25" />
      </div>

      {/* Bottom Status Ticker */}
      <div className="px-3.5 py-1.5 bg-[#0F172A] border-t-2 border-[#334366] flex items-center justify-between text-[9px] font-pixel text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <span className="text-[#55E6C1]">● ONLINE</span>
          <span className="text-[#64748B]">|</span>
          <span className="text-white">C++17 / JAVA 21 / GO</span>
        </div>
        <div className="text-[#FFD166]">
          [BLR_STATION]
        </div>
      </div>
    </div>
  );
}
