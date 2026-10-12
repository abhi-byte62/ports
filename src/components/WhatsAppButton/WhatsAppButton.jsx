import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "917259371549";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Abhishek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  return (
    <aside aria-label="WhatsApp Contact Line">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Abhishek on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-3.5 py-2 bg-[#0E0F15]/95 backdrop-blur-md border border-neutral-800 text-neutral-200 rounded-full shadow-lg shadow-black/50 hover:border-emerald-500/50 hover:text-white transition-all text-xs font-medium select-none"
      >
        {/* Live Indicator Dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <FaWhatsapp size={15} className="text-emerald-400 shrink-0" />
        <span className="hidden sm:inline text-xs font-medium text-neutral-300 group-hover:text-white">WhatsApp</span>

        {/* Hover Tooltip / Status Flyout */}
        <div className="absolute bottom-full right-0 mb-3 hidden group-hover:flex flex-col items-end pointer-events-none whitespace-nowrap">
          <div className="bg-[#12131A] border border-neutral-800 text-neutral-300 text-xs px-3 py-2 rounded-xl shadow-xl">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Available on WhatsApp</span>
            </div>
            <div className="text-neutral-200 font-normal">Click to start conversation</div>
          </div>
        </div>
      </a>
    </aside>
  );
}
