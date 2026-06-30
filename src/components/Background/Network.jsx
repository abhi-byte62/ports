import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: 120, y: 120 },
  { id: 2, x: 300, y: 180 },
  { id: 3, x: 520, y: 100 },
  { id: 4, x: 750, y: 220 },
  { id: 5, x: 250, y: 420 },
  { id: 6, x: 600, y: 430 },
];

const lines = [
  [1, 2],
  [2, 3],
  [3, 4],
  [2, 5],
  [5, 6],
  [6, 4],
];

const Network = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 -z-10"
      viewBox="0 0 900 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connections */}
      {lines.map(([start, end], index) => {
        const from = nodes.find((n) => n.id === start);
        const to = nodes.find((n) => n.id === end);

        return (
          <line
            key={index}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#3b82f6"
            strokeWidth="1"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <circle key={node.id} cx={node.x} cy={node.y} r="5" fill="#60a5fa" />
      ))}

      {/* Animated Packet */}
      <motion.circle
        r="4"
        fill="#ffffff"
        animate={{
          cx: [120, 300, 520, 750],
          cy: [120, 180, 100, 220],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
};

export default Network;
