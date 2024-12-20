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

interface ImagesHeroProps {
  src: string;
  alt: string;
}

export default function HeroHeader({ isMounting }: { isMounting: boolean }) {
  const [isFredHovered, setIsFredHovered] = useState<boolean>(false);
  const [imagesHero, setImagesHero] = useState<ImagesHeroProps[]>([]);
  const [imageRandomizing, setImageRandomizing] = useState<boolean>(false);

  //Fonction qui récupère trois images de placeholders dans data de façon aléatoires et sans répétitions.
  const getRandomImages = () => {
    let randomImages: ImagesHeroProps[] = [];
    let dataCopy = [...data];

    for (let i = 0; i < 3; i++) {
      let randomIndex = Math.floor(Math.random() * dataCopy.length);
      randomImages.push(dataCopy[randomIndex]);
      dataCopy.splice(randomIndex, 1);
    }

    setImagesHero(randomImages);
  };

  useEffect(() => {
    //Initialiser trois images de placeholders
    getRandomImages();

    setTimeout(() => {
      setIsFredHovered(true);
    }, 1000);
  }, [isMounting]);

  const handleRandomizeImages = () => {
    setIsFredHovered(false);
    setImageRandomizing(true);

    setTimeout(() => {
      getRandomImages();
    }, 1000);

    setTimeout(() => {
      setIsFredHovered(true);
    }, 1000);

    setTimeout(() => {
      setImageRandomizing(false);
    }, 1100);
  };

  return (
    <div className="relative z-20 flex h-[100svh] w-full items-center overflow-hidden bg-slate-50/50 dark:bg-slate-900 px-4 lg:px-32">
      <div
        className={`absolute bottom-0 left-1/2 block h-[15%] w-[4px] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-rose-500 to-white dark:to-slate-950 transition-all duration-1000 md:h-[20%] ${isMounting ? "translate-y-[100%] opacity-0" : "translate-none opacity-100"}`}></div>
      <div className="flex w-full flex-col items-center">
        <h1
          className={`text-center text-6xl font-bold transition-all delay-[400ms] duration-1000 lg:text-8xl ${
            isMounting ? "translate-y-2 opacity-0" : "opacity-100"
          }`}>
          Hi I&apos;m
          <span className="big-hovered-object fred-hover text-rose-500 cursor-default">
            {" "}
            Fred
          </span>
          ,
        </h1>
        <p
          className={`text-balance py-2 text-center transition-all delay-[500ms] duration-1000 lg:py-0 lg:text-lg ${
            isMounting ? "translate-y-2 opacity-0" : "opacity-100"
          }`}>
          Creator of visual experiences for your businesses
        </p>
        {/* Socials Buttons */}
        <div
          className={`mt-4 flex items-center gap-4 transition-all delay-[600ms] duration-1000 ${
            isMounting ? "translate-y-2 opacity-0" : "opacity-100"
          }`}>
          <Link
            href={"https://github.com/DSGJohnSon"}
            title="Découvrir mon activité sur Github"
            target="_blank"
            className="hovered-object text-slate-600 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50">
            <FaGithub size={24} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/fredflorkowski/"}
            title="Connectons-nous sur LinkedIn"
            target="_blank"
            className="hovered-object text-slate-600 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50">
            <FaLinkedin size={24} />
          </Link>
          <Link
            href={"https://x.com/JohnSon_DSG"}
            title="Ma petite vie de dev freelance"
            target="_blank"
            className="hovered-object text-slate-600 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50">
            <FaXTwitter size={24} />
          </Link>
          <Link
            href={"https://www.instagram.com/fred.fdsg/"}
            title="Mes petites photos de vacances"
            target="_blank"
            className="hovered-object text-slate-600 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50">
            <FaInstagram size={24} />
          </Link>
        </div>
        {/* Bottom Links */}
        <div
          className={`absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-8 transition-all delay-[500ms] duration-1000 lg:left-12 lg:translate-x-0 ${
            isMounting ? "translate-y-2 opacity-0" : "opacity-100"
          }`}>
          <div className="hovered-object group flex items-center gap-2 rounded-md px-4 py-2 transition duration-500 hover:bg-slate-50 dark:hover:bg-slate-800">
            <div className="flex items-center">About</div>
            <FaArrowRight
              size={12}
              className="hovered-object -rotate-45 transition duration-500 group-hover:rotate-0"
            />
          </div>
          <div className="hovered-object group flex items-center gap-2 rounded-md px-4 py-2 transition duration-500 hover:bg-slate-50 dark:hover:bg-slate-800">
            <span className="">Projects</span>
            <FaArrowRight
              size={12}
              className="hovered-object -rotate-45 transition duration-500 group-hover:rotate-0"
            />
          </div>
        </div>
        {/* Bottom Text */}
        <div
          className={`absolute bottom-24 right-1/2 translate-x-1/2 text-nowrap text-xs transition-all delay-[500ms] duration-1000 lg:bottom-12 lg:right-12 lg:translate-x-0 lg:text-base ${
            isMounting ? "translate-y-2 opacity-0" : "opacity-100"
          }`}>
          <div className="flex flex-col items-center lg:items-end gap-2">
            <Button
              variant={"outline"}
              size={"sm"}
              disabled={imageRandomizing}
              onClick={handleRandomizeImages}>
              <LuRefreshCw
                className={cn(
                  "mr-2 size-3",
                  imageRandomizing ? "animate-spin" : ""
                )}
              />
              Discover my vibe
            </Button>
            <span className="py-2 hidden md:block">
              Front-end Developper & Creative designer
            </span>
          </div>
        </div>
        {/* Image Hover on Fred */}
        <div>
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-[1%] transition-all duration-&lsqb;3000ms&rsqb; ease-in-out md:w-[10%] ${
              isFredHovered
                ? "left-[85%] top-[72%] w-1/4 rotate-12 scale-100 opacity-[100%] md:left-[70%] md:top-[30%]"
                : ""
            } `}>
            <Image
              src={imagesHero[0]?.src}
              width={1920}
              height={1080}
              alt={imagesHero[0]?.alt}
              className="fred-hover"
            />
          </div>
          <Image
            src={imagesHero[1]?.src}
            width={1920}
            height={1080}
            alt={imagesHero[1]?.alt}
            className={`pointer-events-none absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2 scale-0 opacity-[1%] transition-all duration-&lsqb;3000ms&rsqb; ease-in-out md:w-[22%] ${
              isFredHovered
                ? "left-[85%] top-[22%] rotate-[5deg] scale-100 opacity-[100%] md:left-[17%] md:top-[50%]"
                : ""
            } `}
          />
          <Image
            src={imagesHero[2]?.src}
            width={1920}
            height={1080}
            alt={imagesHero[2]?.alt}
            className={`pointer-events-none absolute left-1/2 top-1/2 w-[25%] -translate-x-1/2 -translate-y-1/2 scale-0 opacity-[1%] transition-all duration-&lsqb;3000ms&rsqb; ease-in-out md:w-[17%] ${
              isFredHovered
                ? "left-[8%] top-[28%] rotate-[-6deg] scale-100 opacity-[100%] md:left-[80%] md:top-[60%]"
                : ""
            } `}
          />
        </div>
      </div>
    </div>
  );
}
