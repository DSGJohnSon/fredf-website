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
import { IoLogoCodepen } from "react-icons/io";

export default function HeroHeader({ isMounting }: { isMounting: boolean }) {
  const [isFredHovered, setIsFredHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Si le curseur est sur un élément avec la classe "hovered-object" (et tous ses descendants)
      if (e.target instanceof HTMLElement && e.target.closest(".fred-hover")) {
        setIsFredHovered(true);
      }
    };
    const startScrolling = () => {
      setIsFredHovered(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", startScrolling);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", startScrolling);
    };
  }, []);

  const handleMouseLeaveFred = () => {
    setIsFredHovered(false);
  };

  //TEMPORAIRE
  useEffect(() => {
    setIsFredHovered(true);
  }, [isMounting]);

  return (
    <div className="h-screen w-full relative flex items-center px-4 lg:px-32">
      <div
        className={`
            ${isMounting ? "top-1/2" : "top-0 p-4"}
            absolute transition-all duration-1000 left-1/2 -translate-x-1/2`}>
        <IoLogoCodepen
          size={48}
          className={`
            ${isMounting ? "animate-[spin_1200ms_ease-in-out_infinite]" : ""}
            `}
        />
      </div>

      <div className="flex flex-col w-full items-center">
        <h1
          className={`text-6xl lg:text-8xl text-center font-bold transition-all duration-1000 delay-[400ms] ${
            isMounting ? "opacity-0 translate-y-2" : "opacity-100"
          }`}>
          Hi I&apos;m
          <span className="text-rose-500 big-hovered-object fred-hover">
            {" "}
            Fred
          </span>
          ,
        </h1>
        <p
          className={`text-balance text-center lg:text-lg py-2 lg:py-0 transition-all duration-1000 delay-[500ms] ${
            isMounting ? "opacity-0 translate-y-2" : "opacity-100"
          }`}>
          Creator of visual experiences for your businesses
        </p>
        {/* Socials Buttons */}
        <div
          className={`flex gap-4 items-center mt-4 transition-all duration-1000 delay-[600ms] ${
            isMounting ? "opacity-0 translate-y-2" : "opacity-100"
          }`}>
          <Link
            href={""}
            title=""
            target="_blank"
            className="hover:text-gray-900 text-gray-600 transition hovered-object">
            <FaGithub size={24} />
          </Link>
          <Link
            href={""}
            title=""
            target="_blank"
            className="hover:text-gray-900 text-gray-600 transition hovered-object">
            <FaLinkedin size={24} />
          </Link>
          <Link
            href={""}
            title=""
            target="_blank"
            className="hover:text-gray-900 text-gray-600 transition hovered-object">
            <FaXTwitter size={24} />
          </Link>
          <Link
            href={""}
            title=""
            target="_blank"
            className="hover:text-gray-900 text-gray-600 transition hovered-object">
            <FaInstagram size={24} />
          </Link>
        </div>
        {/* Bottom Links */}
        <div
          className={`absolute bottom-12 left-1/2 lg:left-12 -translate-x-1/2 lg:translate-x-0 flex items-center gap-8 transition-all duration-1000 delay-[500ms] ${
            isMounting ? "opacity-0 translate-y-2" : "opacity-100"
          }`}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-md group transition duration-500 hover:bg-gray-50 hovered-object">
            <div className="flex items-center">About</div>
            <FaArrowRight
              size={12}
              className="-rotate-45 transition duration-500 group-hover:rotate-0 hovered-object"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-md group transition duration-500 hover:bg-gray-50 hovered-object">
            <span className="">Projects</span>
            <FaArrowRight
              size={12}
              className="-rotate-45 transition duration-500 group-hover:rotate-0 hovered-object"
            />
          </div>
        </div>
        {/* Bottom Text */}
        <div
          className={`absolute text-nowrap text-xs lg:text-base bottom-24 lg:bottom-12 right-1/2 lg:right-12 translate-x-1/2 lg:translate-x-0 transition-all duration-1000 delay-[500ms] ${
            isMounting ? "opacity-0 translate-y-2" : "opacity-100"
          }`}>
          <div>
            <span className="py-2">
              Front-end Developper & Creative designer
            </span>
          </div>
        </div>
        {/* Image Hover on Fred */}
        <div>
          <div
            className={`
              absolute
              md:w-[10%]
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              opacity-0
              scale-0
              pointer-events-none
              transition-all
              duration-[700ms]
              ease-in-out
              ${
                isFredHovered
                  ? "top-[75%] md:top-[30%] left-[85%] md:left-[70%] opacity-100 rotate-12 w-1/4 scale-100"
                  : ""
              }
            `}>
            <Image
              src={"/images/placeholder/architect-placeholder.png"}
              width={1920}
              height={1080}
              alt="Image Pexels"
              className="fred-hover"
            />
          </div>
          <Image
            src={"/images/placeholder/me-placeholder.png"}
            width={1920}
            height={1080}
            alt="Image Pexels"
            className={`
              absolute
              w-[40%]
              md:w-[22%]
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              opacity-0
              scale-0
              pointer-events-none
              transition-all
              duration-[900ms]
              ease-in-out
              ${
                isFredHovered
                  ? "top-[22%] md:top-[50%] left-[85%] md:left-[17%] opacity-100 rotate-[5deg] scale-100"
                  : ""
              }
            `}
          />
          <Image
            src={"/images/placeholder/mercantour-placeholder.png"}
            width={1920}
            height={1080}
            alt="Image Pexels"
            className={`
              absolute
              w-[25%]
              md:w-[17%]
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              opacity-0
              scale-0
              pointer-events-none
              transition-all
              duration-[800ms]
              ease-in-out
              ${
                isFredHovered
                  ? "top-[35%] md:top-[60%] left-[8%] md:left-[80%] opacity-100 rotate-[-6deg] scale-100"
                  : ""
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}
