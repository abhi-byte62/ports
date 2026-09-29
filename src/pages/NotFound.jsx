import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#080A0C] px-6 text-[#F2F5F7]">
      <div className="w-full max-w-md rounded-2xl border border-[#222A32] bg-[#101419] p-8 text-center shadow-xl">
        <span className="inline-flex rounded-full bg-[#10261C] px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#5CE6A8] border border-[#5CE6A8]/20">
          HTTP 404
        </span>

        <h1 className="mt-4 font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-[#F2F5F7]">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[#8B96A3]">
          The route you navigated to does not exist or has been relocated within the architecture.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#5CE6A8] px-5 py-2.5 text-sm font-semibold text-[#080A0C] transition-all hover:bg-[#72F0B5]"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;