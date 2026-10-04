import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const CodeSnippet = ({ filename, title, language = "javascript", code, explanation }) => {
  const [copied, setCopied] = useState(false);
  const displayName = filename || title;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0A0A0E] shadow-sm">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0E0E14] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          {displayName && (
            <span className="font-mono text-neutral-300 font-medium text-xs">{displayName}</span>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
            {language}
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 hover:text-white transition-colors px-2 py-0.5 rounded hover:bg-white/[0.06]"
            aria-label="Copy code snippet"
          >
            {copied ? (
              <>
                <FiCheck className="text-emerald-400" size={12} />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <FiCopy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-xs text-neutral-200 leading-relaxed">
        <code>{code}</code>
      </pre>

      {explanation && (
        <div className="border-t border-white/[0.06] bg-[#0C0C12] px-4 py-3 text-xs text-neutral-400 font-sans">
          <strong className="text-white font-medium">Engineering Note: </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
