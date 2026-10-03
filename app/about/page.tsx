import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us | Calra Perfumes",
  description:
    "Learn about Calra Perfumes, our passion for timeless elegance, refined craftsmanship, and unforgettable olfactory experiences.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Banner */}
      <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/header01.webp"
            alt="About Calra Perfumes Header Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-900 drop-shadow-xs`}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-6 sm:space-y-7 text-[15px] sm:text-base text-neutral-600 leading-[1.8] font-normal">
            <p>
              At <strong className="font-bold text-neutral-800">Calra Perfumes</strong>, we believe that every scent tells a story.
            </p>

            <p>
              Born from a passion for timeless elegance and refined craftsmanship, Calra Perfumes is more than just a fragrance house—it’s a celebration of individuality, memory, and emotion. Each bottle captures a unique essence, crafted with care and precision using the highest quality ingredients from around the world.
            </p>

            <p>
              Our mission is simple: to create unforgettable olfactory experiences that elevate your everyday moments. Whether you’re drawn to delicate florals, warm woods, or bold orientals, Calra offers a scent that resonates with who you are and who you aspire to be.
            </p>

            <p>
              Proudly independent, we combine artisanal methods with modern sensibilities, ensuring that every fragrance not only smells exquisite but feels personal. From the design of our bottles to the final spritz, every detail reflects our commitment to beauty, luxury, and authenticity.
            </p>

            <p>
              Welcome to <strong className="font-bold text-neutral-800">Calra Perfumes</strong>—where your story begins with a scent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
