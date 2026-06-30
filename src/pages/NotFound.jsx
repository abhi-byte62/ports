import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090B] text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-zinc-400">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="
          mt-8
          rounded-xl
          bg-blue-600
          px-6
          py-3
          transition
          hover:bg-blue-500
        "
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
