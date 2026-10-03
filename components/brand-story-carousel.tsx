"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CAROUSEL_IMAGES = [
  {
    src: "/images/laperfume_wild_03.webp",
    alt: "Calra Perfumes - La Perfume Wild Caramel",
    title: "La Perfume",
    subtitle: "Wild Caramel",
  },
  {
    src: "/images/laperfume_enchante_01.webp",
    alt: "Calra Perfumes - La Perfume Enchante'e",
    title: "La Perfume",
    subtitle: "Enchante'e",
  },
  {
    src: "/images/laperfume_intensa_02.webp",
    alt: "Calra Perfumes - La Perfume Intensa",
    title: "La Perfume",
    subtitle: "Intensa",
  },
];

export function BrandStoryCarousel({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className={cn(
        "relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full max-w-lg overflow-hidden rounded-2xl shadow-xl border border-neutral-100 group select-none",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Brand story image carousel"
    >
      {/* Slides with Crossfade Transition */}
      {CAROUSEL_IMAGES.map((image, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
            aria-hidden={!isActive}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover object-center transition-transform duration-1000",
                isActive ? "scale-100" : "scale-105"
              )}
            />

            {/* Subtle Gradient Shadow at bottom for captions & indicators */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Slide Title & Second Title */}
            <div className="absolute bottom-5 left-5 z-20 text-white pointer-events-none">
              <span className="text-[11px] uppercase font-bold tracking-widest text-rose-200 block">
                {image.title}
              </span>
              <p className="text-base sm:text-lg font-bold tracking-wide leading-tight">
                {image.subtitle}
              </p>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrow Buttons */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 size-9 rounded-full bg-white/80 hover:bg-white text-neutral-800 backdrop-blur-xs flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="size-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 size-9 rounded-full bg-white/80 hover:bg-white text-neutral-800 backdrop-blur-xs flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5">
        {CAROUSEL_IMAGES.map((_, dotIndex) => {
          const isActive = dotIndex === currentIndex;
          return (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                isActive
                  ? "w-6 bg-white shadow-xs"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BrandStoryCarousel;
