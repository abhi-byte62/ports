import { useEffect, useState } from "react";

const TerminalCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cell, setCell] = useState({ col: 0, row: 0 });
  const [hoverType, setHoverType] = useState("default");
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      // Snap to character grid (8x16px terminal cells)
      const col = Math.floor(x / 8);
      const row = Math.floor(y / 16);
      setCell({ col, row });

      // Detect hover target type
      const target = document.elementFromPoint(x, y);
      if (target) {
        const tag = target.tagName.toLowerCase();
        const role = target.getAttribute("role");
        const href = target.getAttribute("href");
        const onclick = target.onclick;

        if (tag === "a" || href || role === "button" || role === "link" || onclick) {
          setHoverType("pointer");
        } else if (tag === "input" || tag === "textarea" || target.isContentEditable) {
          setHoverType("ibeam");
        } else if (tag === "code" || tag === "pre" || target.closest("pre, code")) {
          setHoverType("code");
        } else {
          setHoverType("default");
        }
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const cursorChar = hoverType === "ibeam" ? "│" : hoverType === "pointer" ? "►" : "█";
  const cursorClass = `terminal-cursor cursor-${hoverType}`;

  // Inject styles once
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .terminal-cursor {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        font-family: "Fira Code", "JetBrains Mono", monospace;
        font-size: 16px;
        line-height: 1;
        color: #00ff9d;
        text-shadow: 0 0 4px #00ff9d, 0 0 8px #00ff9d80;
        transition: left 0.02s linear, top 0.02s linear, opacity 0.1s;
        will-change: left, top, opacity;
      }
      .terminal-cursor.cursor-pointer {
        color: #00f0ff;
        text-shadow: 0 0 4px #00f0ff, 0 0 8px #00f0ff80;
      }
      .terminal-cursor.cursor-ibeam {
        color: #a855f7;
        text-shadow: 0 0 4px #a855f7, 0 0 8px #a855f780;
        animation: ibeamBlink 1.06s step-end infinite;
      }
      .terminal-cursor.cursor-code {
        color: #facc15;
        text-shadow: 0 0 4px #facc15, 0 0 8px #facc1580;
      }
      @keyframes ibeamBlink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .terminal-cursor-pos {
        position: fixed;
        bottom: 8px;
        right: 8px;
        z-index: 9998;
        font-family: "Fira Code", "JetBrains Mono", monospace;
        font-size: 10px;
        color: #8f8f9a;
        background: #0a0a0c;
        border: 1px solid #2e2e3a;
        padding: 2px 6px;
        border-radius: 3px;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .cursor-mode {
        color: #00f0ff;
        font-weight: 600;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      {/* Terminal cursor - fixed position, follows mouse */}
      <div
        className={cursorClass}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: hoverType === "ibeam" ? 1 : blink ? 1 : 0,
        }}
        aria-hidden="true"
      >
        {cursorChar}
      </div>

      {/* Position readout - bottom right like terminal status */}
      <div className="terminal-cursor-pos" aria-hidden="true">
        <span>Ln {cell.row + 1}, Col {cell.col + 1}</span>
        <span className="cursor-mode">[{hoverType.toUpperCase()}]</span>
      </div>
    </>
  );
};

export default TerminalCursor;