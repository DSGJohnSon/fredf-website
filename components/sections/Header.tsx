"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkHeader from "../ui-self/LinkHeader";

export default function Header() {
  const [isMounting, setIsMounting] = useState<boolean>(true);
  const [isScaling, setIsScaling] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounting(false);
    }, 1000);
    setTimeout(() => {
      setIsScaling(true);
    }, 2000);
  }, []);

  return (
    <div className="fixed left-1/2 top-8 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-gray-400 bg-white/50 backdrop-blur-lg p-2 px-4 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] md:p-2 md:px-6 md:pl-2 disabled-hovered-object">
      <div className="hidden md:block">
        <Image
          src={"/images/logos/logo.png"}
          alt="Fred Florkowski Logo"
          width={32}
          height={32}
        />
      </div>
      <div>
        <nav className="flex items-center">
          <li className="list-none">
            <LinkHeader text="About" href="/" title="Accueil" />
          </li>
          <li className="list-none">
            <LinkHeader text="Projects" href="/blog" title="Blog" />
          </li>
          <li className="list-none">
            <LinkHeader text="Contact" href="/contact" title="Contact" />
          </li>
        </nav>
      </div>
    </div>
  );
}
