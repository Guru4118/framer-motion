import React from "react";
import { motion } from "framer-motion";

const AnimatedLineGraph = () => {
  const points = [
    [0, 80],
    [50, 100],
    [100, 60],
    [150, 70],
    [200, 50],
    [250, 30],
    [300, 10],
  ];

  const pathData = points.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
  const gradientId = "lineGradient";

  return (
    <div className="w-full max-w-5xl h-full rounded-xl bg-[#0d0d0d] border border-white/10 drop-shadow-2xl drop-shadow-red-500  p-4 ">

    <div className=" flex justify-center items-center font-extrabold text-2xl">
        <div>Sales Over A Decade </div></div>
      <svg viewBox="0 0 320 120" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d61111" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d61111" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Gradient Fill Under the Line */}
        <motion.path
          d={`${pathData} L320,120 L0,120 Z`}
          fill={`url(#${gradientId})`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, ease: "easeInOut",repeat:Infinity }}
        />

        {/* Main Line Path */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#d61111"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, ease: "easeInOut",repeat:Infinity }}
        />

        {/* Dots */}
        {points.map(([x, y], index) => (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="4"
            fill="#0d0d0d"
            stroke="#fd3636"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 100 }}
          />
        ))}
      </svg>
      
    </div>
  );
};

export default AnimatedLineGraph;
