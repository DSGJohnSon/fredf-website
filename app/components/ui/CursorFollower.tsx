"use client";

import React, { useEffect, useState } from "react";

export default function CursorFollower() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [bigHovered, setBigHovered] = useState(false);

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
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute z-40 hidden translate-x-[-50%] translate-y-[-50%] lg:block"
      style={{ top: cursorY, left: cursorX }}
    >
      <div
        className={`block h-16 w-16 rounded-full border border-gray-900/50 transition-all ${
          hovered ? "h-24 w-24" : ""
        } ${bigHovered ? "h-48 w-48" : ""}`}
      ></div>
    </div>
  );
}
