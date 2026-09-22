import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-zinc-100">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center shadow-xl">
        <span className="inline-flex rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
          HTTP 404
        </span>

        <h1 className="mt-4 font-['Space_Grotesk'] text-5xl font-bold tracking-tight text-zinc-100">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          The route you navigated to does not exist or has been relocated within the architecture.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;