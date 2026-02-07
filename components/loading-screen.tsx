"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 5 seconds loading duration
    const duration = 1000;
    const intervalTime = 30; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration + 800);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "circIn" },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full" />
          </div>

          {/* Rotating and Zooming Star */}
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative mb-16"
          >
            {/* Multi-layered glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-orange-400/10 blur-[20px] rounded-full scale-150" />

            <svg
              width="140"
              height="140"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 drop-shadow-[0_0_15px_rgba(232,128,1,0.5)]"
            >
              {/* Complex Geometric Star */}
              <path
                d="M50 0L54.5 45.5L100 50L54.5 54.5L50 100L45.5 54.5L0 50L45.5 45.5L50 0Z"
                fill="url(#star-grad)"
              />
              <path
                d="M50 15L52.5 47.5L85 50L52.5 52.5L50 85L47.5 52.5L15 50L47.5 47.5L50 15Z"
                fill="white"
                fillOpacity="0.3"
              />
              <defs>
                <linearGradient
                  id="star-grad"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E88001" />
                  <stop offset="0.5" stopColor="#FFB800" />
                  <stop offset="1" stopColor="#E88001" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Text Content */}
          <div className="text-center z-10">
            <motion.h1
              initial={{ letterSpacing: "0.5em", opacity: 0, y: 20 }}
              animate={{ letterSpacing: "0.1em", opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-orbitron font-black text-white mb-2 tracking-widest"
            >
              NOVALIS{" "}
              <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/40 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-12"
            >
              System Initialization Experience
            </motion.p>
          </div>

          {/* Progress Container */}
          <div className="relative w-72 md:w-96 flex flex-col items-center">
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
              <motion.div
                className="h-full bg-linear-to-r from-transparent via-orange-500 to-yellow-400 shadow-[0_0_20px_rgba(232,128,1,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="w-full flex justify-between mt-4">
              <motion.span
                className="text-[10px] font-mono text-white/30 tracking-tighter"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                PROCESSED_DATA_SEQUENCE
              </motion.span>
              <span className="text-[10px] font-mono text-orange-500/80 tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-12 left-12">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="w-1 h-1 bg-orange-500 rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
