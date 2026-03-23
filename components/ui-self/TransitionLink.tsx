"use client";

import React from "react";
import { useTransition } from "./TransitionContext";

interface TransitionLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function TransitionLink({ href, className, children }: TransitionLinkProps) {
  const { startTransition } = useTransition();

  return (
    <button className={className} onClick={() => startTransition(href)}>
      {children}
    </button>
  );
}
