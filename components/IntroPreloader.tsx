"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep intro screen visible for 1.8 seconds, then slide up
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden select-none pointer-events-auto"
        >
          {/* TOP & BOTTOM FRAME ACCENT LINES */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-8 left-8 right-8 h-[1px] bg-slate-200 origin-left hidden md:block"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 right-8 h-[1px] bg-slate-200 origin-right hidden md:block"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-8 bottom-8 left-8 w-[1px] bg-slate-200 origin-top hidden md:block"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-8 bottom-8 right-8 w-[1px] bg-slate-200 origin-bottom hidden md:block"
          />

          {/* AMBIENT SOFT LIGHT GLOW */}
          <div className="absolute w-[450px] h-[450px] bg-purple-200/40 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" />
          <div className="absolute w-[450px] h-[450px] bg-indigo-200/40 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse delay-500" />

          {/* CENTER TEXT CONTAINER */}
          <div className="relative z-10 text-center px-6 flex flex-col items-center justify-center">
            {/* SUBTITLE PRE-HEADER */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs md:text-sm tracking-[0.4em] uppercase text-purple-600 font-semibold mb-3"
            >
              Portfolio
            </motion.p>

            {/* MAIN NAME: DIYA POULKAR */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] md:tracking-[0.35em] text-slate-900 uppercase font-sans"
            >
              DIYA POULKAR
            </motion.h1>

            {/* TAGLINE BELOW NAME */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xs md:text-sm tracking-[0.3em] uppercase text-slate-500 font-medium"
            >
              Computer Science Engineer • Developer
            </motion.p>

            {/* LOADING ACCENT LINE */}
            <div className="mt-8 w-36 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
