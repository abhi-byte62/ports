import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#08080C] px-6 text-white selection:bg-white/10 selection:text-white">
      <div className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#0C0C12] p-8 text-center">
        <span className="inline-flex rounded bg-white/[0.06] px-2.5 py-1 text-xs font-mono font-medium text-neutral-300 border border-white/[0.08]">
          404 NOT FOUND
        </span>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          The route you navigated to does not exist or has been relocated within the architecture.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-neutral-200"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;