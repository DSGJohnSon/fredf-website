"use client";

import { createContext, useContext } from "react";

interface TransitionContextType {
  startTransition: (href: string) => void;
}

export const TransitionContext = createContext<TransitionContextType | null>(
  null,
);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error(
      "useTransition must be used within a PageTransitionProvider",
    );
  }
  return context;
}
