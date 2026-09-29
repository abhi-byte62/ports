const CodeSnippet = ({ filename, language = "javascript", code, explanation }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#1C2942] bg-[#050914]">
      <div className="flex items-center justify-between border-b border-[#1C2942] bg-[#0D1424] px-4 py-2.5 text-xs">
        <span className="font-mono text-[#F5F7FF] font-medium">{filename}</span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8D99B5]">{language}</span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs text-[#F5F7FF] leading-relaxed">
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
