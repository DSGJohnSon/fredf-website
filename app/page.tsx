"use client";

import { useEffect, useState } from "react";
import HeroHeader from "../components/sections/HeroHeader";

export default function Home() {
  const [isMounting, setIsMounting] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsMounting(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`${
        isMounting ? "pointer-events-none h-screen overflow-y-hidden" : ""
      }`}>
      <HeroHeader isMounting={isMounting} />
      <div className="h-screen bg-rose-50"></div>
    </div>
  );
}
