import PropTypes from "prop-types";
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
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-100"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="PLAYBOLD OS Command Terminal"
    >
      <div
        className="w-full max-w-2xl overflow-hidden pixel-frame-elevated shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top OS Window Header */}
        <div className="flex items-center justify-between px-3.5 py-1.5 bg-[#141E36] border-b-2 border-[#334366] text-[9px] font-pixel text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#55E6C1]" />
            <span className="text-[#55E6C1]">PLAYBOLD_COMMAND_TERMINAL.EXE</span>
          </div>
          <span className="text-[#FFD166]">[ESC TO EXIT]</span>
        </div>

        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b-2 border-[#334366] px-4 py-3 bg-[#080D1A]">
          <FiSearch className="text-[#55E6C1] shrink-0" size={16} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, technology, or action..."
            className="w-full bg-transparent font-mono text-xs text-white placeholder-[#64748B] focus:outline-none"
          />
          <kbd className="hidden sm:inline-block border-2 border-[#334366] bg-[#141E36] px-1.5 py-0.5 text-[9px] font-pixel text-[#94A3B8]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#334366]/40">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-xs font-pixel text-[#FF6B6B]">NO_MATCHING_COMMANDS: "{query}"</p>
              <p className="mt-2 text-xs text-[#94A3B8] font-mono">Try searching for "LiquidityLens", "C++", "Spring", "Resume", or "Contact"</p>
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
                  className={`flex items-center justify-between p-2.5 text-xs transition-colors cursor-pointer border-2 ${
                    isSelected
                      ? "bg-[#1A2744] border-[#55E6C1] text-white shadow-[2px_2px_0px_#04070D]"
                      : "border-transparent text-[#94A3B8] hover:bg-[#141E36]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-1.5 border-2 ${
                      isSelected ? "border-[#55E6C1] bg-[#080D1A] text-[#55E6C1]" : "border-[#334366] bg-[#0F172A] text-[#94A3B8]"
                    }`}>
                      <Icon size={14} />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${isSelected ? "text-white" : "text-[#E6EAF2]"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="pixel-tag pixel-tag-teal !text-[7px]">
                            {item.badge}
                          </span>
                        )}
                        {item.isCopyEmail && copiedEmail && (
                          <span className="inline-flex items-center gap-1 bg-[#55E6C1]/20 px-1.5 py-0.2 text-[9px] font-pixel text-[#55E6C1] border border-[#55E6C1]">
                            <FiCheck size={9} /> COPIED!
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-[#64748B] block mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:flex items-center gap-1 font-pixel text-[8px] text-[#55E6C1]">
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
        <div className="flex items-center justify-between border-t-2 border-[#334366] bg-[#080D1A] px-4 py-2 text-[9px] font-pixel text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <span>[UP/DOWN] NAVIGATE</span>
            <span>[ENTER] SELECT</span>
          </div>
          <span className="text-[#55E6C1]">STATUS: ONLINE</span>
        </div>
      </div>
    </div>
  );
}

CommandPalette.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
