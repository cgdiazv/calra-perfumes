"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Award, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { BrandStoryCarousel } from "@/components/brand-story-carousel";
import { ROYAL_COLLECTION, PRODUCTS } from "@/lib/products";

const CATEGORIES = [
  {
    title: "MEN",
    desc: "Distinguished extraits & bold woody accords",
    href: "/category/men",
    image: "/products/cobalt_royale.webp",
  },
  {
    title: "WOMEN",
    desc: "Sensual floral bouquets & warm velvet sillage",
    href: "/category/women",
    image: "/products/desert_rose.webp",
  },
  {
    title: "UNISEX",
    desc: "Enigmatic compositions tailored for individual identity",
    href: "/category/unisex",
    image: "/products/imperial_gold_elixir.webp",
  },
  {
    title: "NEW ARRIVALS",
    desc: "The New Collection extraits & limited sets",
    href: "/category/new-arrivals",
    image: "/products/black_phoenix.webp",
  },
];

// Curated classic bestsellers ($250 each)
const CLASSIC_FEATURED = PRODUCTS.filter(
  (p) => ["alpha-chrome", "fearless-extrait", "alpha-oros-grande", "wild-caramel"].includes(p.id)
);

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
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent pointer-events-none" />
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
              Elevate your experience with Calra Perfumes Niche Fragrances, where scent meets sophistication. Explore our collection of meticulously crafted fragrances, each bottle embodying luxury, elegance, and timeless allure.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <Link
                href="/category/new-arrivals"
                className="bg-[#5a0d29] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] transition-all shadow-md flex items-center gap-2 group"
              >
                <span>Explore New Collection</span>
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
                  100% Authentic Extrait
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

      {/* THE ROYAL COLLECTION SPOTLIGHT SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#faf7f0]/70 via-white to-neutral-50/50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#8c6d36] mb-1">
                The New Collection
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mt-1">
                The Royal Collection
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-2xl">
                Distinguished by an iconic sculpted bottle with polished gold shoulders and presented in tailored reptile & mosaic coffrets. Pure concentrated Extrait de Parfum.
              </p>
            </div>

            <Link
              href="/category/new-arrivals"
              className="inline-flex items-center gap-2 bg-[#5a0d29] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#43081e] transition-all self-start md:self-auto shrink-0 shadow-xs"
            >
              <span>View The New Collection</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ROYAL_COLLECTION.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#ded3be] p-5 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-[#b89758] hover:-translate-y-1 ring-1 ring-[#b89758]/20"
              >
                <div>
                  <div className="relative aspect-square w-full mb-4 bg-gradient-to-b from-[#faf6ee] to-neutral-50/50 rounded-xl p-4 overflow-hidden">
                    <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-gradient-to-r from-[#b39355] to-[#997938] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      New Collection
                    </span>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="220px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#5a0d29] transition-colors mt-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">{product.subtitle}</p>
                  <p className="text-[11px] text-neutral-400 mt-2 line-clamp-2">{product.notes}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-base font-bold text-neutral-900">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: product.id,
                        name: product.name,
                        subtitle: product.subtitle,
                        price: product.price,
                        image: product.image,
                        volume: product.volume,
                      })
                    }
                    className="inline-flex items-center gap-1.5 bg-[#5a0d29] text-white px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#43081e] active:scale-95 transition-all shadow-xs"
                  >
                    <ShoppingBag className="size-3" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
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
                  With Calra Perfumes Niche Fragrances you will indulge in the allure of our carefully crafted fragrances, where sophistication meets innovation. We pride ourselves on the quality of our ingredients, the precision of our craftsmanship, and the timeless elegance of our bottles.
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

      {/* Signature & Classic Fragrances Section ($250) */}
      <section className="py-16 bg-[#faf7f8] border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#5a0d29]">
                Classic & Signature Editions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mt-1">
                Artisanal Masterpieces
              </h2>
            </div>
            <Link
              href="/category/unisex"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5a0d29] hover:underline"
            >
              <span>View All Classic Fragrances</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLASSIC_FEATURED.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-xl bg-white border border-neutral-100 p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-neutral-200"
              >
                <div className="relative aspect-square w-full mb-4 bg-neutral-50 rounded-lg p-4 overflow-hidden">
                  <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5a0d29] shadow-xs">
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
                      {product.collectionName}
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
                          subtitle: product.subtitle,
                          price: product.price,
                          image: product.image,
                          volume: product.volume,
                        })
                      }
                      className="inline-flex items-center gap-1.5 bg-[#5a0d29] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#43081e] active:scale-95 transition-all shadow-xs"
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
