"use client";

import { useEffect, useState } from "react";
import HeroHeader from "./components/sections/HeroHeader";

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
        isMounting ? "overflow-y-hidden h-screen pointer-events-none" : ""
      }`}>
      <HeroHeader isMounting={isMounting} />
    </div>
  );
}
