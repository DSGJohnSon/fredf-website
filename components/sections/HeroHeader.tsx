"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import { LuRefreshCw } from "react-icons/lu";
import { data } from "@/public/data/placeholders-hero";
import { cn } from "@/lib/utils";
import { RetroGrid } from "../ui/retro-grid";
import { motion } from "framer-motion";
import { useTransition } from "../ui-self/TransitionContext";
import { LucideMessageCircleQuestion } from "lucide-react";

interface ImagesHeroProps {
  src: string;
  alt: string;
}

export default function HeroHeader() {
  const [isFredHovered, setIsFredHovered] = useState<boolean>(false);
  const [imagesHero, setImagesHero] = useState<ImagesHeroProps[]>([]);
  const [nextImagesHero, setNextImagesHero] = useState<ImagesHeroProps[]>([]);
  const [imageRandomizing, setImageRandomizing] = useState<boolean>(false);

  const { startTransition } = useTransition();

  // Fonction qui récupère trois images aléatoires
  const getRandomImagesArray = () => {
    let randomImages: ImagesHeroProps[] = [];
    let dataCopy = [...data];

    for (let i = 0; i < 3; i++) {
      if (dataCopy.length === 0) break;
      let randomIndex = Math.floor(Math.random() * dataCopy.length);
      randomImages.push(dataCopy[randomIndex]);
      dataCopy.splice(randomIndex, 1);
    }
    return randomImages;
  };

  useEffect(() => {
    // Initialiser les images courantes et préparer les suivantes
    setImagesHero(getRandomImagesArray());
    setNextImagesHero(getRandomImagesArray());

    const timer = setTimeout(() => {
      setIsFredHovered(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRandomizeImages = () => {
    setIsFredHovered(false);
    setImageRandomizing(true);

    setTimeout(() => {
      // Échanger avec les images préchargées
      setImagesHero(nextImagesHero);
      // Préparer les images d'après
      setNextImagesHero(getRandomImagesArray());
    }, 1000);

    setTimeout(() => {
      setIsFredHovered(true);
    }, 1000);

    setTimeout(() => {
      setImageRandomizing(false);
    }, 1100);
  };

  return (
    <div className="relative z-20 flex h-[100svh] w-full items-center overflow-hidden bg-zinc-50/50 px-4 dark:bg-zinc-900 lg:px-32">
      <div className="flex w-full flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center text-6xl uppercase lg:text-8xl font-profont"
        >
          Hi I&apos;m
          <span className="big-hovered-object fred-hover cursor-default text-rose-500">
            {" "}
            Fred
          </span>
          ,
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-balance py-2 text-center lg:py-0 lg:text-lg"
        >
          <span className="cursor-help text-rose-500 underline underline-offset-4 relative mr-4 group disabled-hovered-object">
            Devsigner
            <LucideMessageCircleQuestion className="absolute size-3 -right-[15px] -top-[1px]" />
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[200%] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-xl px-1 py-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-[140%]">
              <span className="text-xs text-wrap line-clamp-2 text-zinc-950 dark:text-zinc-50">Developper & UI/UX Designer</span>
            </div>
          </span>{" "}
          based in Lyon (FR), I transform ideas into real products
        </motion.div>
        {/* Socials Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 flex items-center gap-4"
        >
          <Link
            href={"https://github.com/DSGJohnSon"}
            title="Découvrir mon activité sur Github"
            target="_blank"
            className="hovered-object text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/fredflorkowski/"}
            title="Connectons-nous sur LinkedIn"
            target="_blank"
            className="hovered-object text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href={"https://x.com/JohnSon_DSG"}
            title="Ma petite vie de dev freelance"
            target="_blank"
            className="hovered-object text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
          >
            <FaXTwitter size={24} />
          </Link>
          <Link
            href={"https://www.instagram.com/fred.fdsg/"}
            title="Mes petites photos de vacances"
            target="_blank"
            className="hovered-object text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50"
          >
            <FaInstagram size={24} />
          </Link>
        </motion.div>
        {/* Bottom Links */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-8 lg:left-12 lg:translate-x-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-8"
          >
            <div
              onClick={() => startTransition("/about")}
              className="hovered-object group cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 transition duration-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <div className="flex items-center">About</div>
              <FaArrowRight
                size={12}
                className="hovered-object -rotate-45 transition duration-500 group-hover:rotate-0"
              />
            </div>
            <div
              onClick={() => startTransition("/projects")}
              className="hovered-object group cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 transition duration-500 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <span className="">Projects</span>
              <FaArrowRight
                size={12}
                className="hovered-object -rotate-45 transition duration-500 group-hover:rotate-0"
              />
            </div>
          </motion.div>
        </div>
        {/* Bottom Text */}
        <div className="absolute bottom-24 right-1/2 translate-x-1/2 text-nowrap text-xs lg:bottom-12 lg:right-12 lg:translate-x-0 lg:text-base">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-2 lg:items-end"
          >
            <Button
              variant={"outline"}
              size={"sm"}
              disabled={imageRandomizing}
              onClick={handleRandomizeImages}
            >
              <LuRefreshCw
                className={cn(
                  "mr-2 size-3",
                  imageRandomizing ? "animate-spin" : "",
                )}
              />
              Discover my vibe
            </Button>
            <span className="hidden py-2 md:block">
              Front-end Developper & Creative designer
            </span>
          </motion.div>
        </div>
        {/* Image Hover on Fred */}
        <div>
          <div
            className={`pointer-events-none absolute left-[85%] top-[72%] w-1/4 rotate-12 md:left-[70%] md:top-[30%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 delay-450 ease-in-out md:w-[10%] ${
              isFredHovered
                ? "scale-100 opacity-100 blur-none"
                : "scale-50 opacity-0 blur-lg"
            } `}
          >
            {imagesHero[0] && (
              <Image
                src={imagesHero[0].src}
                width={1920}
                height={1080}
                alt={imagesHero[0].alt}
                className="fred-hover animate-[floating_10s_ease-in-out_infinite] rounded-3xl"
                priority
              />
            )}
          </div>
          <div
            className={`pointer-events-none absolute left-[85%] top-[22%] rotate-[5deg] md:left-[17%] md:top-[50%] w-[40%] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out md:w-[22%] ${
              isFredHovered
                ? "scale-100 opacity-100 blur-none"
                : "scale-50 opacity-0 blur-lg"
            } `}
          >
            {imagesHero[1] && (
              <Image
                src={imagesHero[1].src}
                width={1920}
                height={1080}
                alt={imagesHero[1].alt}
                className="animate-[floating_8s_ease-in-out_infinite_alternate] rounded-3xl"
                priority
              />
            )}
          </div>
          <div
            className={`pointer-events-none absolute left-[8%] top-[28%] rotate-[-6deg] md:left-[80%] md:top-[60%] w-[25%] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 delay-100 ease-in-out md:w-[17%] ${
              isFredHovered
                ? "scale-100 opacity-100 blur-none"
                : "scale-50 opacity-0 blur-lg"
            } `}
          >
            {imagesHero[2] && (
              <Image
                src={imagesHero[2].src}
                width={1920}
                height={1080}
                alt={imagesHero[2].alt}
                className="animate-[floating_12s_ease-in-out_infinite] rounded-3xl"
                priority
              />
            )}
          </div>

          {/* Préchargement des prochaines images */}
          <div className="hidden">
            {nextImagesHero.map(
              (img, i) =>
                img.src && (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={1920}
                    height={1080}
                    priority
                  />
                ),
            )}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 -z-10 h-screen w-screen"
      >
        <RetroGrid angle={65} className="h-full w-full" />
      </motion.div>
    </div>
  );
}
