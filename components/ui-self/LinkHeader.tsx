"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useTransition } from "./TransitionContext";

export default function LinkHeader({
  text,
  href,
  title,
  active,
}: {
  text: string;
  href: string;
  title: string;
  active: boolean;
}) {
  const { startTransition } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <Button
      variant={"ghost"}
      className={
        active
          ? "border border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800"
          : ""
      }
      asChild
    >
      <Link href={href} title={title} onClick={handleClick}>
        {text}
      </Link>
    </Button>
  );
}
