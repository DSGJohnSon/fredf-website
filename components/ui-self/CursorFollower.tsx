"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function CursorFollower() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [bigHovered, setBigHovered] = useState(false);
  const [disabledCursor, setDisabledCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);

      // Si le curseur est sur un élément avec la classe "hovered-object" (et tous ses descendants)
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".hovered-object")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }

      // Si le curseur est sur un élément avec la classe "big-hovered-object" (et tous ses descendants)
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".big-hovered-object")
      ) {
        setBigHovered(true);
      } else {
        setBigHovered(false);
      }

      // Si le curseur est sur un élément avec la classe "disabled-hovered-object" (et tous ses descendants)
      if (
        e.target instanceof HTMLElement &&
        e.target.closest(".disabled-hovered-object")
      ) {
        setDisabledCursor(true);
      } else {
        setDisabledCursor(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute z-40 hidden translate-x-[-50%] translate-y-[-50%] lg:block"
      style={{ top: cursorY, left: cursorX }}>
      <div
        className={cn(
          "block h-16 w-16 rounded-full border border-gray-900/50 transition-all",
          hovered ? "h-24 w-24" : "",
          bigHovered ? "h-48 w-48" : "",
          disabledCursor ? "w-0 h-0" : ""
        )}></div>
    </div>
  );
}
