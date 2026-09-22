const CodeSnippet = ({ filename, language = "javascript", code, explanation }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-2 text-xs">
        <span className="font-mono text-zinc-300">{filename}</span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-500">{language}</span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs text-zinc-300 leading-relaxed">
        <code>{code}</code>
      </pre>

      {explanation && (
        <div className="border-t border-zinc-900 bg-zinc-900/30 px-4 py-3 text-xs text-zinc-400">
          <strong className="text-zinc-200">Implementation Note: </strong>
          {explanation}
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
