import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0c] text-white px-6">
      <div className="w-full max-w-lg rounded-xl border border-[#2e2e3a] bg-[#121216]/80 p-8 font-terminal">
        <div className="mb-6 flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff2a2a]/70" />
          <span className="h-3 w-3 rounded-full bg-[#facc15]/70" />
          <span className="h-3 w-3 rounded-full bg-[#00ff9d]/70" />
        </div>

        <div className="text-[#ff2a2a] text-sm font-bold">SEGFAULT: 404</div>

        <h1 className="mt-3 text-6xl font-bold text-white">404</h1>

        <p className="mt-4 text-[#8f8f9a]">
          The page you requested doesn't exist on this server.
        </p>

        <pre className="mt-6 rounded bg-[#0a0a0c] p-4 text-xs text-[#c4c4cc]">
          <span className="text-[#00ff9d]">$</span> ls ./pages/
          <br />
          <span className="text-[#8f8f9a]">
            home ... packet-sniffer ... specter-proxy
          </span>
          <br />
          <span className="text-[#00ff9d]">$</span> cd
          <span className="text-[#ff2a2a]"> ./not-found </span>
          <span className="text-[#8f8f9a]"># no such dir</span>
          <br />
          <span className="text-[#ff2a2a]">bash: cd: no such file or directory</span>
        </pre>

        <Link
          to="/"
          className="
            mt-8 inline-flex items-center gap-2
            rounded border border-[#00f0ff]
            text-[#00f0ff] px-5 py-2.5 text-sm
            glow-border transition-all duration-300
            hover:bg-[#00f0ff]/10 hover:text-white
          "
        >
          <span className="cursor-blink">▸</span>
          cd ~/home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;