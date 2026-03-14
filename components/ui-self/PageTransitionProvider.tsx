"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionContext } from "./TransitionContext";

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [targetHref, setTargetHref] = useState<string | null>(null);

  useEffect(() => {
    if (isTransitioning && targetHref === pathname) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setTargetHref(null);
        setTimeout(() => setProgress(0), 1000);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning, targetHref]);

  const startTransition = (href: string) => {
    if (href === pathname || isTransitioning) {
      if (href === pathname && href.includes("#")) {
        router.push(href);
      }
      return;
    }

    setIsTransitioning(true);
    setTargetHref(href);
    setProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5;
      if (currentProgress > 99) {
        currentProgress = 99;
        clearInterval(interval);
      }
      setProgress(Math.round(currentProgress));
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      router.push(href);
    }, 600); // Delay to match the entrance animation
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col justify-end bg-zinc-950 dark:bg-zinc-50 pointer-events-none"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-full flex justify-end px-8 pb-8 md:px-16 md:pb-16">
              <span className="text-6xl md:text-9xl font-black text-rose-500 dark:text-rose-600">
                {progress}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
