import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiSearch, FiCode, FiLayers, FiFileText, FiGithub, FiMail, 
  FiExternalLink, FiTerminal, FiCheck, FiArrowRight, FiCornerDownLeft 
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const COMMANDS = [
  // Case Studies
  {
    id: "stacklens",
    title: "StackLens — System Intelligence & DAG Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiLayers,
    badge: "NEW",
    tags: ["Java", "Spring Boot", "React 19", "RabbitMQ", "SSRF", "DAG", "PostgreSQL"],
    action: (navigate) => navigate("/stacklens"),
  },
  {
    id: "liquiditylens",
    title: "LiquidityLens — Market Microstructure Simulator",
    category: "ENGINEERING CASE STUDIES",
    icon: FiTerminal,
    badge: "C++17",
    tags: ["C++17", "LOB", "Hawkes", "FastAPI", "Fixed-Point", "Quant"],
    action: (navigate) => navigate("/liquiditylens"),
  },
  {
    id: "taskflow",
    title: "TaskFlow — OCC Kanban & State Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiCode,
    badge: "FULL-STACK",
    tags: ["Node.js", "React 18", "PostgreSQL", "Socket.io", "Prisma", "OCC"],
    action: (navigate) => navigate("/taskflow"),
  },
  {
    id: "packet-sniffer",
    title: "Packet Sniffer 3D — WebGL PCAP Visualizer",
    category: "ENGINEERING CASE STUDIES",
    icon: FiLayers,
    badge: "GRAPHICS",
    tags: ["Three.js", "WebGL", "PCAP", "Zero-Copy Buffers", "Vite"],
    action: (navigate) => navigate("/packet-sniffer"),
  },
  {
    id: "specter-proxy",
    title: "Specter Proxy — Stream Backpressure Engine",
    category: "ENGINEERING CASE STUDIES",
    icon: FiTerminal,
    badge: "SYSTEMS",
    tags: ["Node.js Streams", "TLS MITM", "SNI", "Backpressure"],
    action: (navigate) => navigate("/specter-proxy"),
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
    id: "nav-about",
    title: "Jump to About Engineer",
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
    id: "nav-skills",
    title: "Jump to Technical Skills Matrix",
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

  // Actions
  {
    id: "act-resume",
    title: "View / Download Resume (PDF)",
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
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
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
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 bg-[#050914]/80 backdrop-blur-md p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#1C2942] bg-[#0D1424] shadow-2xl shadow-[#4D7CFF]/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b border-[#1C2942] px-4 py-3.5 bg-[#080E1B]">
          <FiSearch className="text-[#4D7CFF] shrink-0" size={18} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, technology, or action..."
            className="w-full bg-transparent font-mono text-sm text-[#F5F7FF] placeholder-[#5F6B83] focus:outline-none"
          />
          <kbd className="hidden sm:inline-block rounded border border-[#1C2942] bg-[#0D1424] px-2 py-0.5 text-[10px] font-mono text-[#8D99B5]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#1C2942]/30">
          {filtered.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm font-mono text-[#8D99B5]">No results found for "{query}"</p>
              <p className="mt-1 text-xs text-[#5F6B83]">Try searching for "StackLens", "C++", "Spring", "Resume", or "Contact"</p>
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
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#162238] text-[#F5F7FF] border border-[#4D7CFF]/40 shadow-sm"
                      : "text-[#8D99B5] hover:bg-[#10182A] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg border ${
                      isSelected ? "border-[#4D7CFF]/50 bg-[#4D7CFF]/10 text-[#4D7CFF]" : "border-[#1C2942] bg-[#050914] text-[#8D99B5]"
                    }`}>
                      <Icon size={14} />
                    </div>

                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isSelected ? "text-[#F5F7FF]" : "text-[#D1D7E6]"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="rounded bg-[#050914] px-1.5 py-0.5 text-[10px] font-mono text-[#6D96FF] border border-[#4D7CFF]/30">
                            {item.badge}
                          </span>
                        )}
                        {item.isCopyEmail && copiedEmail && (
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-mono text-emerald-400">
                            <FiCheck size={10} /> Copied!
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-[#5F6B83] block mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isSelected && (
                      <span className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-[#4D7CFF]">
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
        <div className="flex items-center justify-between border-t border-[#1C2942] bg-[#080E1B] px-4 py-2.5 text-[11px] font-mono text-[#5F6B83]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Dismiss</span>
          </div>
          <span className="text-[#4D7CFF]">ABHISHEK M R PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}
