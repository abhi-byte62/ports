const CodeSnippet = ({ filename, language = "javascript", code, explanation }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#222A32] bg-[#080A0C]">
      <div className="flex items-center justify-between border-b border-[#222A32] bg-[#101419] px-4 py-2.5 text-xs">
        <span className="font-mono text-[#F2F5F7] font-medium">{filename}</span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B96A3]">{language}</span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs text-[#F2F5F7] leading-relaxed">
        <code>{code}</code>
      </pre>

      {explanation && (
        <div className="border-t border-[#222A32] bg-[#101419]/60 px-4 py-3 text-xs text-[#8B96A3]">
          <strong className="text-[#5CE6A8] font-mono">Engineering Note: </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
