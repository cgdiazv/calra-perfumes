"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles, Award, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { BrandStoryCarousel } from "@/components/brand-story-carousel";

const FEATURED_PRODUCTS = [
  {
    id: "fearless-featured",
    name: "Fearless Extrait de Parfum",
    category: "Unisex / Signature",
    price: 185,
    image: "/products/fearless01-1.webp",
    volume: "100ml / 3.4 fl. oz.",
    tag: "Bestseller",
  },
  {
    id: "saphir-featured",
    name: "Saphir Royal Elixir",
    category: "Men / Woody Aquatic",
    price: 210,
    image: "/products/sapphire01.webp",
    volume: "100ml / 3.4 fl. oz.",
    tag: "Artisanal",
  },
  {
    id: "wild-caramel-featured",
    name: "Wild Caramel Gourmand",
    category: "Women / Sweet Amber",
    price: 195,
    image: "/products/wild01.webp",
    volume: "100ml / 3.4 fl. oz.",
    tag: "New",
  },
  {
    id: "oros-grande-featured",
    name: "Oros Grande Pure Extrait",
    category: "Unisex / Golden Saffron",
    price: 235,
    image: "/products/oros01.webp",
    volume: "100ml / 3.4 fl. oz.",
    tag: "Limited Edition",
  },
];

const CATEGORIES = [
  {
    title: "MEN",
    desc: "Distinguished extraits & bold woody accords",
    href: "/category/men",
    image: "/products/chrome01.webp",
  },
  {
    title: "WOMEN",
    desc: "Sensual floral bouquets & warm velvet sillage",
    href: "/category/women",
    image: "/products/wild01.webp",
  },
  {
    title: "UNISEX",
    desc: "Enigmatic compositions tailored for individual identity",
    href: "/category/unisex",
    image: "/products/oros01.webp",
  },
  {
    title: "NEW ARRIVALS",
    desc: "Latest small-batch creations & seasonal harvests",
    href: "/category/new-arrivals",
    image: "/products/jade01-1.webp",
  },
];

export default function Home() {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[560px] lg:min-h-[620px] flex items-center border-b border-neutral-100">
        {/* Header Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/header01.webp"
            alt="Calra Perfumes Luxury Fragrances"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay to let header01.webp be clearly visible while maintaining text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/15 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl space-y-6 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#5a0d29]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#5a0d29] backdrop-blur-xs">
              Scented Elegance
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
              Indulge in <br />
              <span className="text-[#5a0d29]">Luxury</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Elevate your experience with Calra Perfumes Niche Fragances, where scent meets sophistication. Explore our collection of meticulously crafted fragrances, each bottle embodying luxury, elegance, and timeless allure.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Link
                href="/category/new-arrivals"
                className="bg-[#5a0d29] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore New Arrivals</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/category/unisex"
                className="border border-neutral-300 bg-white/90 backdrop-blur-xs text-neutral-800 px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-[#5a0d29] hover:text-[#5a0d29] transition-colors"
              >
                View All Collections
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 pt-8 border-t border-neutral-200/80 max-w-2xl mx-auto sm:mx-0">
              <div className="flex items-center gap-2 shrink-0">
                <ShieldCheck className="size-4 text-[#5a0d29] shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
                  100% Authentic
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Truck className="size-4 text-[#5a0d29] shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
                  Free US Shipping $100+
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Award className="size-4 text-[#5a0d29] shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-neutral-700 whitespace-nowrap">
                  Master Perfumers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Passion Meets Perfume Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Image Carousel */}
            <div className="lg:col-span-6 flex justify-center">
              <BrandStoryCarousel />
            </div>

            {/* Right Column: Copy & Call-to-Action */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#5a0d29] block">
                CAPTIVATE YOUR SENSES
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Where Passion <br className="hidden sm:inline" />
                Meets Perfume
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                <p>
                  We believe in the power of fragrance to elevate the everyday and transform the ordinary into the extraordinary. Our collection is a harmonious blend of nature&apos;s finest elements, expertly combined to create olfactory masterpieces.
                </p>

                <p>
                  With Calra Perfumes Niche Fragrances you will indulge in the allure of our carefully crafted fragrances, where sophistication meets innovation. We pride ourselves on the quality of our ingredients, the precision of our craftsmanship, and the timeless elegance of our bottles. Explore the scents that speak to your soul, and let us be the curator of your fragrant narrative.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/category/new-arrivals"
                  className="inline-block bg-[#5a0d29] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] active:scale-95 transition-all shadow-sm"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars / Features Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
            {/* 1: Exquisite Craftsmanship */}
            <div className="flex flex-col items-center group">
              <div className="relative size-14 sm:size-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/icon-01.png"
                  alt="Exquisite Craftsmanship"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-[#5a0d29]">
                Exquisite Craftsmanship
              </h3>
            </div>

            {/* 2: Luxurious Experience */}
            <div className="flex flex-col items-center group">
              <div className="relative size-14 sm:size-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/icon-02.png"
                  alt="Luxurious Experience"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-[#5a0d29]">
                Luxurious Experience
              </h3>
            </div>

            {/* 3: Timeless Elegance */}
            <div className="flex flex-col items-center group">
              <div className="relative size-14 sm:size-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/icon-03.png"
                  alt="Timeless Elegance"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-[#5a0d29]">
                Timeless Elegance
              </h3>
            </div>

            {/* 4: Captivating Scents */}
            <div className="flex flex-col items-center group">
              <div className="relative size-14 sm:size-16 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/icon-04.png"
                  alt="Captivating Scents"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-[#5a0d29]">
                Captivating Scents
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Category Explorer Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#5a0d29]">
            The Collections
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
            Curated By Olfactory Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-6 transition-all duration-300 hover:border-[#5a0d29] hover:bg-white hover:shadow-lg"
            >
              <div className="relative aspect-square w-full mb-6 bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="240px"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-base font-bold tracking-wider text-neutral-900 group-hover:text-[#5a0d29] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                  {cat.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5a0d29]">
                  <span>Discover</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Fragrances Section */}
      <section className="py-16 bg-[#faf7f8] border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#5a0d29]">
                Featured Selections
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
                Artisanal Masterpieces
              </h2>
            </div>
            <Link
              href="/category/new-arrivals"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5a0d29] hover:underline"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-xl bg-white border border-neutral-100 p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-neutral-200"
              >
                <div className="relative aspect-square w-full mb-4 bg-neutral-50 rounded-lg p-4 overflow-hidden">
                  <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5a0d29] shadow-xs">
                    {product.tag}
                  </span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="220px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {product.category}
                    </p>
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#5a0d29] transition-colors mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">{product.volume}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-2 border-t border-neutral-100">
                    <span className="text-base font-bold text-neutral-900">
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          volume: product.volume,
                        })
                      }
                      className="inline-flex items-center gap-1.5 bg-[#5a0d29] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#43081e] active:scale-95 transition-all"
                    >
                      <ShoppingBag className="size-3" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
