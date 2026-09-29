import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050914] px-6 text-[#F5F7FF]">
      <div className="w-full max-w-md rounded-2xl border border-[#1C2942] bg-[#0D1424] p-8 text-center shadow-xl">
        <span className="inline-flex rounded-full bg-[#0D1B3A] px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#6D96FF] border border-[#4D7CFF]/20">
          HTTP 404
        </span>

        <h1 className="mt-4 font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-[#F5F7FF]">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#8D99B5]">
          The route you navigated to does not exist or has been relocated within the architecture.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#4D7CFF] px-5 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF]"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;