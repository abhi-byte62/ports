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
    <div className="overflow-hidden rounded-xl border border-[#1C2942] bg-[#050914] shadow-lg">
      <div className="flex items-center justify-between border-b border-[#1C2942] bg-[#0D1424] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          </span>
          {displayName && (
            <span className="font-mono text-[#F5F7FF] font-medium ml-2">{displayName}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#6D96FF] bg-[#162238] px-2 py-0.5 rounded border border-[#4D7CFF]/20">
            {language}
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] font-mono text-[#8D99B5] hover:text-[#F5F7FF] transition-colors px-2 py-0.5 rounded border border-transparent hover:border-[#1C2942] hover:bg-[#050914]"
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

      <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-xs text-[#F5F7FF] leading-relaxed">
        <code>{code}</code>
      </pre>

      {explanation && (
        <div className="border-t border-[#1C2942] bg-[#0D1424]/60 px-4 py-3 text-xs text-[#8D99B5]">
          <strong className="text-[#4D7CFF] font-mono">Engineering Note: </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
