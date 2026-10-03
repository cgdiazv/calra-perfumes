import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { FAQAccordion } from "@/components/faq-accordion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Calra Perfumes",
  description:
    "Find answers to common questions about Calra Perfumes orders, shipping, fragrance longevity, returns, and boutique services.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Banner - Matching About and Contact pages */}
      <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/header01.webp"
            alt="Frequently Asked Questions Header Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1
            className={`${cormorant.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 drop-shadow-xs`}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
