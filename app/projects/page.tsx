"use client";

import { useEffect, useState } from "react";

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
      OUAI OUAI OUAI
    </div>
  );
}
