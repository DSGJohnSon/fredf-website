"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LinkHeader from "../ui-self/LinkHeader";
import { ModeToggle } from "../ui-self/ModeToggle";
import { usePathname } from "next/navigation";
import { useTransition } from "../ui-self/TransitionContext";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { text: "Accueil", href: "/" },
  { text: "À propos", href: "/about" },
  { text: "Projets", href: "/projects" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { startTransition } = useTransition();

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    startTransition(href);
  };

  return (
    <>
      {/* Desktop nav */}
      <div className="fixed left-1/2 top-8 z-50 hidden -translate-x-1/2 items-center gap-4 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg p-2 px-2 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] md:flex disabled-hovered-object">
        <Image
          src={"/images/logos/logo.webp"}
          alt="Fred Florkowski Logo"
          width={32}
          height={32}
        />
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href} className="list-none">
              <LinkHeader
                text={link.text}
                href={link.href}
                active={pathname === link.href}
                title={link.text}
              />
            </li>
          ))}
          <li className="list-none self-stretch">
            <Link
              href={"mailto:fred.florkowski@outlook.fr"}
              title={"Me contacter"}
              className="bg-rose-500 hover:bg-rose-600 text-zinc-50 h-full flex items-center px-4 rounded-full transition-all duration-300 ease-in-out"
            >
              Me contacter
            </Link>
          </li>
        </nav>
      </div>

      {/* Mobile nav — pill logo + hamburger */}
      <div className="fixed left-4 right-4 top-5 z-50 flex items-center justify-between md:hidden">
        <div
          className="flex items-center gap-3 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg px-3 py-2 cursor-pointer"
          onClick={() => handleMobileNav("/")}
        >
          <Image
            src={"/images/logos/logo.webp"}
            alt="Fred Florkowski Logo"
            width={26}
            height={26}
          />
          <span className="font-profont text-sm uppercase tracking-wide">Fred Florkowski</span>
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center rounded-full border border-zinc-400 dark:border-zinc-600 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg p-3 transition"
          aria-label="Menu"
        >
          {mobileOpen ? <RxCross2 size={18} /> : <RxHamburgerMenu size={18} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.3 }}
                onClick={() => handleMobileNav(link.href)}
                className={`font-profont text-4xl uppercase transition hover:text-rose-500 ${
                  pathname === link.href ? "text-rose-500" : ""
                }`}
              >
                {link.text}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.29, duration: 0.3 }}
            >
              <Link
                href={"mailto:fred.florkowski@outlook.fr"}
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-rose-500 px-8 py-3 text-white transition hover:bg-rose-600"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mode toggle */}
      <div className="hovered-object fixed right-8 top-8 z-50 hidden md:block">
        <ModeToggle />
      </div>
    </>
  );
}
