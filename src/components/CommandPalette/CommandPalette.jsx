import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiSearch, FiCode, FiLayers, FiFileText, FiMail, 
  FiTerminal, FiCheck, FiCornerDownLeft, FiShield 
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const COMMANDS = [
  // Case Studies
  {
    id: "donttrust",
    title: "DontTrust — Application Security & Attack-Surface Intelligence Platform",
    category: "ENGINEERING CASE STUDIES",
    icon: FiShield,
    badge: "APP-SEC",
    tags: ["TypeScript", "Security", "AST", "DOM XSS", "BOLA", "IDOR", "Cytoscape", "SARIF", "React 19"],
    action: (navigate) => navigate("/donttrust"),
  },
  {
    id: "tradeforge",
    title: "TradeForge — Real-Time Paper Trading & Market Simulation",
    category: "ENGINEERING CASE STUDIES",
    icon: FiTerminal,
    badge: "FINTECH",
    tags: ["TypeScript", "Matching Engine", "L2 Depth", "WebSockets", "Paper Trading", "PostgreSQL"],
    action: (navigate) => navigate("/tradeforge"),
  },
  {
    id: "liquiditylens",
    title: "LiquidityLens — Market Microstructure & Matching Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiTerminal,
    badge: "C++17",
    tags: ["C++17", "LOB", "Hawkes", "FastAPI", "Fixed-Point", "Quant"],
    action: (navigate) => navigate("/liquiditylens"),
  },
  {
    id: "stacklens",
    title: "StackLens — Website Architecture Intelligence Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiLayers,
    badge: "DISTRIBUTED",
    tags: ["Java", "Spring Boot", "React 19", "RabbitMQ", "SSRF", "DAG", "PostgreSQL"],
    action: (navigate) => navigate("/stacklens"),
  },
  {
    id: "specter-proxy",
    title: "Specter Proxy — Stream Backpressure & TLS Proxy",
    category: "ENGINEERING CASE STUDIES",
    icon: FiTerminal,
    badge: "SYSTEMS",
    tags: ["Node.js Streams", "TLS MITM", "SNI", "Backpressure"],
    action: (navigate) => navigate("/specter-proxy"),
  },
  {
    id: "taskflow",
    title: "TaskFlow — Real-Time Collaborative State Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiCode,
    badge: "FULL-STACK",
    tags: ["Node.js", "React 18", "PostgreSQL", "Socket.io", "Prisma", "OCC"],
    action: (navigate) => navigate("/taskflow"),
  },
  {
    id: "packet-sniffer",
    title: "Packet Sniffer 3D — WebGL PCAP Topology Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiLayers,
    badge: "GRAPHICS",
    tags: ["Three.js", "WebGL", "PCAP", "Zero-Copy Buffers", "Vite"],
    action: (navigate) => navigate("/packet-sniffer"),
  },

  // Navigation
  {
    id: "nav-projects",
    title: "Jump to Featured Projects",
    category: "PORTFOLIO NAVIGATION",
    icon: FiLayers,
    action: (navigate) => {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
  },
  {
    id: "nav-opensource",
    title: "Jump to Open Source Contributions (Valkey, Fastify, Lean, QuickFIX)",
    category: "PORTFOLIO NAVIGATION",
    icon: FiCode,
    tags: ["Valkey", "Fastify", "TypeBox", "QuickFIX", "QuantConnect", "Lean", "Open Source", "Upstream"],
    action: (navigate) => {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("opensource");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
  },
  {
    id: "nav-skills",
    title: "Jump to Technical Competencies",
    category: "PORTFOLIO NAVIGATION",
    icon: FiCode,
    action: (navigate) => {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
  },
  {
    id: "nav-about",
    title: "Jump to Background & Approach",
    category: "PORTFOLIO NAVIGATION",
    icon: FiFileText,
    action: (navigate) => {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
  },
  {
    id: "nav-contact",
    title: "Jump to Contact & Links",
    category: "PORTFOLIO NAVIGATION",
    icon: FiMail,
    action: (navigate) => {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
  },
  {
    id: "nav-resume",
    title: "View Software Engineering Resume (Web & PDF)",
    category: "PORTFOLIO NAVIGATION",
    icon: FiFileText,
    action: (navigate) => navigate("/resume"),
  },


  // Actions
  {
    id: "act-resume",
    title: "Download Resume (PDF)",
    category: "QUICK ACTIONS",
    icon: FiFileText,
    action: () => window.open("/resume.pdf", "_blank"),
  },

  {
    id: "act-github",
    title: "Open GitHub Profile (@abhi-byte62)",
    category: "QUICK ACTIONS",
    icon: FaGithub,
    action: () => window.open("https://github.com/abhi-byte62", "_blank"),
  },
  {
    id: "act-copy-email",
    title: "Copy Primary Email (mrabhisheak@gmail.com)",
    category: "QUICK ACTIONS",
    icon: FiMail,
    isCopyEmail: true,
    action: (_, setCopiedEmail) => {
      navigator.clipboard.writeText("mrabhisheak@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    },
  },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Filter commands
  const filtered = COMMANDS.filter((cmd) => {
    if (!query) return true;
    const q = query.toLowerCase();
    const titleMatch = cmd.title.toLowerCase().includes(q);
    const catMatch = cmd.category.toLowerCase().includes(q);
    const tagMatch = cmd.tags && cmd.tags.some((t) => t.toLowerCase().includes(q));
    return titleMatch || catMatch || tagMatch;
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);


  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action(navigate, setCopiedEmail);
          if (!filtered[selectedIndex].isCopyEmail) {
            onClose();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#0E0E14] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3 bg-[#0A0A0E]">
          <FiSearch className="text-neutral-400 shrink-0" size={16} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, technology, or action..."
            className="w-full bg-transparent font-mono text-xs text-white placeholder-neutral-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-1.5 divide-y divide-white/[0.04]">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-xs font-mono text-neutral-400">No results found for "{query}"</p>
              <p className="mt-1 text-xs text-neutral-500">Try searching for "StackLens", "C++", "Spring", "Resume", or "Contact"</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action(navigate, setCopiedEmail);
                    if (!item.isCopyEmail) onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] text-white"
                      : "text-neutral-400 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-1.5 rounded-md border ${
                      isSelected ? "border-white/[0.15] bg-white/[0.08] text-white" : "border-white/[0.06] bg-white/[0.02] text-neutral-400"
                    }`}>
                      <Icon size={13} />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${isSelected ? "text-white" : "text-neutral-300"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="rounded bg-white/[0.04] px-1.5 py-0.2 text-[9px] font-mono text-neutral-400 border border-white/[0.06]">
                            {item.badge}
                          </span>
                        )}
                        {item.isCopyEmail && copiedEmail && (
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-mono text-emerald-400">
                            <FiCheck size={10} /> Copied!
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 block mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-neutral-400">
                        <span>SELECT</span>
                        <FiCornerDownLeft size={10} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#0A0A0E] px-4 py-2 text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Dismiss</span>
          </div>
          <span className="text-neutral-400">ABHISHEK M R</span>
        </div>
      </div>
    </div>
  );
}
