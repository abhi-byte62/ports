import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0B1020] px-6 text-[#E6EAF2] pixel-grid-bg">
      <div className="w-full max-w-md pixel-frame p-8 text-center space-y-4">
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#34415D] text-[9px] font-pixel text-[#FF6B6B]">
          <span>[ERROR: 404_NOT_FOUND]</span>
          <span>SYSTEM_HALT</span>
        </div>

        <div className="text-4xl font-pixel text-[#FF6B6B] my-2">
          404
        </div>

        <h1 className="text-xl font-bold tracking-tight text-white font-sans">
          Route Not Found in Architecture
        </h1>

        <p className="text-xs leading-relaxed text-[#A5B0C5] font-mono">
          The requested memory address or route is undefined in the PLAYBOLD OS filesystem.
        </p>

        <div className="pt-4 border-t border-[#34415D]">
          <Link
            to="/"
            className="pixel-btn pixel-btn-primary w-full"
          >
            <HiArrowLeft size={13} />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;