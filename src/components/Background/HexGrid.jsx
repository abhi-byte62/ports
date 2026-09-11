import { motion } from "framer-motion";

const HexGrid = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 -z-10"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Hex Grid Pattern */}
      <defs>
        <grid>
          <pattern
            width="40"
            height="69"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(20, 35)"
          >
            <path
              d="M0 34.5 L20 69 L40 34.5 L20 0 Z"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
          </linearGradient>
        </grid>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Nodes with connecting bezier lines */}
      {[
        { x: 150, y: 150 },
        { x: 350, y: 100 },
        { x: 550, y: 180 },
        { x: 750, y: 120 },
        { x: 950, y: 200 },
        { x: 200, y: 350 },
        { x: 400, y: 400 },
        { x: 600, y: 380 },
        { x: 800, y: 420 },
        { x: 1000, y: 350 },
      ].map((node, index) => (
        <motion.g key={index}>
          {/* Connection points */}
          {node.x > 150 && (
            <motion.line
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              animate={{
                strokeDashoffset: 0,
                stroke: "#00f0ff",
              }}
              transition={{
                duration: 2,
                delay: index * 0.15,
                repeat: Infinity,
                repeatDelay: index * 0.3,
              }}
              x1={node.x - 100}
              y1={node.y}
              x2={node.x}
              y2={node.y}
              strokeWidth="1"
              strokeOpacity="0.3"
            />
          )}

          {/* Glow node */}
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{
              opacity: index % 2 === 0 ? 0.6 : 1,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            cx={node.x}
            cy={node.y}
            r="4"
            fill={index % 2 === 0 ? "#00f0ff" : "#a855f7"}
            filter="drop-shadow(0 0 8px rgba(0, 240, 255, 0.8))"
          />

          {/* Outer ring */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="none"
            stroke={
              index % 2 === 0 ? "#00f0ff80" : "#a855f780"
            }
            strokeWidth="1.5"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
};

export default HexGrid;