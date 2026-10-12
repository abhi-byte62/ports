import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiSearch, FiCode, FiLayers, FiFileText, FiMail, 
  FiTerminal, FiCheck, FiCornerDownLeft, FiShield 
} from "react-icons/fi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const COMMANDS = [
  // Case Studies
  {
    id: "liquiditylens",
    title: "LiquidityLens — Market Microstructure & Matching Engine",
    category: "ENGINEERING MISSIONS",
    icon: FiTerminal,
    badge: "C++17",
    tags: ["C++17", "LOB", "Hawkes", "FastAPI", "Fixed-Point", "Quant", "220ns"],
    action: (navigate) => navigate("/liquiditylens"),
  },
  {
    id: "tradeforge",
    title: "TradeForge — Real-Time Paper Trading & Market Simulation",
    category: "ENGINEERING MISSIONS",
    icon: FiTerminal,
    badge: "FINTECH",
    tags: ["TypeScript", "Matching Engine", "L2 Depth", "WebSockets", "Paper Trading", "PostgreSQL", "247K"],
    action: (navigate) => navigate("/tradeforge"),
  },
  {
    id: "stacklens",
    title: "StackLens — Website Architecture Intelligence Engine",
    category: "ENGINEERING MISSIONS",
    icon: FiLayers,
    badge: "DISTRIBUTED",
    tags: ["Java", "Spring Boot", "React 19", "RabbitMQ", "SSRF", "DAG", "PostgreSQL"],
    action: (navigate) => navigate("/stacklens"),
  },
  {
    id: "taskflow",
    title: "TaskFlow — Real-Time Collaborative State Engine",
    category: "ENGINEERING MISSIONS",
    icon: FiCode,
    badge: "FULL-STACK",
    tags: ["Node.js", "React 18", "PostgreSQL", "Socket.io", "Prisma", "OCC"],
    action: (navigate) => navigate("/taskflow"),
  },
  {
    id: "donttrust",
    title: "DontTrust — Application Security & Attack-Surface Intelligence",
    category: "ENGINEERING MISSIONS",
    icon: FiShield,
    badge: "APP-SEC",
    tags: ["TypeScript", "Security", "AST", "DOM XSS", "BOLA", "IDOR", "Cytoscape", "SARIF", "React 19"],
    action: (navigate) => navigate("/donttrust"),
  },
  {
    id: "specter-proxy",
    title: "Specter Proxy — Stream Backpressure & TLS Proxy",
    category: "ENGINEERING MISSIONS",
    icon: FiTerminal,
    badge: "SYSTEMS",
    tags: ["Node.js Streams", "TLS MITM", "SNI", "Backpressure"],
    action: (navigate) => navigate("/specter-proxy"),
  },
  {
    id: "packet-sniffer",
    title: "Packet Sniffer 3D — WebGL PCAP Topology Engine",
    category: "ENGINEERING MISSIONS",
    icon: FiLayers,
    badge: "GRAPHICS",
    tags: ["Three.js", "WebGL", "PCAP", "Zero-Copy Buffers", "Vite"],
    action: (navigate) => navigate("/packet-sniffer"),
  },

  // Navigation
  {
    id: "nav-projects",
    title: "Jump to Selected Projects",
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
    tags: ["Valkey", "Fastify", "TypeBox", "QuickFIX", "QuantConnect", "Lean", "Open Source", "Upstream", "Checkstyle"],
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
    id: "act-whatsapp",
    title: "Chat on WhatsApp (Direct Message)",
    category: "QUICK ACTIONS",
    icon: FaWhatsapp,
    badge: "DIRECT",
    tags: ["whatsapp", "chat", "message", "contact", "ping", "wa", "direct"],
    action: () => window.open("https://wa.me/917259371549?text=Hi%20Abhishek,%20I%20saw%20your%20portfolio!", "_blank"),
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
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0B0F19]/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3.5 bg-white/[0.02]">
          <FiSearch className="text-slate-400 shrink-0" size={18} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, open source, skills, or actions..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block border border-white/[0.1] bg-white/[0.05] px-2 py-0.5 text-[11px] font-mono text-slate-400 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-sm font-medium text-slate-300">No results found for &quot;{query}&quot;</p>
              <p className="mt-1 text-xs text-slate-500">Try searching for &quot;LiquidityLens&quot;, &quot;C++&quot;, &quot;Valkey&quot;, &quot;Resume&quot;, or &quot;WhatsApp&quot;</p>
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.08] text-white"
                      : "text-slate-300 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-md ${
                      isSelected ? "bg-emerald-500/20 text-emerald-400" : "bg-white/[0.05] text-slate-400"
                    }`}>
                      <Icon size={15} />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${isSelected ? "text-white" : "text-slate-200"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="badge-modern text-[10px] py-0 px-1.5">
                            {item.badge}
                          </span>
                        )}
                        {item.isCopyEmail && copiedEmail && (
                          <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono border border-emerald-500/30">
                            <FiCheck size={10} /> Copied!
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                        <span>Select</span>
                        <FiCornerDownLeft size={11} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="flex items-center justify-between border-t border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span className="text-emerald-400">Active</span>
        </div>
      </div>
    </div>
  );
}

CommandPalette.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
