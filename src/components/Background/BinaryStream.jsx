import { motion } from "framer-motion";

const hexCodes = [
  "010101", "101010", "0F2A9E", "00F0FF", "A855F7",
  "FF2A2A", "00FF9D", "112233", "445566", "778899",
  "000110", "001100", "001111", "01010110", "10101100"
];

const BinaryStream = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {hexCodes.map((hex, index) => (
        <motion.p
          key={index}
          initial={{
            y: -100,
            opacity: Math.random() * 0.1,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: Math.random() * 0.1,
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          className={`absolute font-terminal text-sm tracking-wider family-terminal transform -translate-x-1/2 ${
            index % 3 === 0 ? "text-[#00f0ff]" : // cyan
            index % 3 === 1 ? "text-[#a855f7]" :    // mauve
            "text-[#ff2a2a]"                       // error red
          }`}
          style={{
            left: `${20 + Math.random() * 80}%`,
            fontSize: `${12 + Math.random() * 8}px`,
          }}
        >
          {hex}
        </motion.p>
      ))}
    </div>
  );
};

export default BinaryStream;