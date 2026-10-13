"use client";

import React, { use, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { CATEGORY_DETAILS, PRODUCTS, Product, ROYAL_COLLECTION } from "@/lib/products";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addItem } = useCart();
  const [activeFilter, setActiveFilter] = useState<"all" | "royal" | "classic" | "sets">("all");

  const category = CATEGORY_DETAILS[slug] || {
    title: `${slug.replace(/-/g, " ").toUpperCase()} Fragrances`,
    subtitle: "Explore our collection of meticulously crafted niche fragrances.",
    badge: "Haute Parfumerie",
    featuredImage: "/products/black_phoenix.webp",
    products: PRODUCTS,
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return category.products;
    if (activeFilter === "royal") return category.products.filter((p) => p.isRoyal);
    if (activeFilter === "classic") return category.products.filter((p) => !p.isRoyal && p.collection !== "sets");
    if (activeFilter === "sets") return category.products.filter((p) => p.collection === "sets");
    return category.products;
  }, [category.products, activeFilter]);

  const hasRoyal = category.products.some((p) => p.isRoyal);
  const hasClassic = category.products.some((p) => !p.isRoyal && p.collection !== "sets");
  const hasSets = category.products.some((p) => p.collection === "sets");

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5a0d29] via-[#43081e] to-[#2b0413] text-white p-8 sm:p-12 mb-10 shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-200 backdrop-blur-xs mb-3">
            {category.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            {category.title}
          </h1>
          <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-normal max-w-xl">
            {category.subtitle}
          </p>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-100">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
              activeFilter === "all"
                ? "bg-[#5a0d29] text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            All Items ({category.products.length})
          </button>

          {hasRoyal && (
            <button
              type="button"
              onClick={() => setActiveFilter("royal")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                activeFilter === "royal"
                  ? "bg-[#9e7d3b] text-white shadow-xs"
                  : "bg-[#faf6ee] text-[#7d5f29] border border-[#e2d6bf] hover:bg-[#f3ebd9]"
              }`}
            >
              The Royal Collection
            </button>
          )}

          {hasClassic && (
            <button
              type="button"
              onClick={() => setActiveFilter("classic")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                activeFilter === "classic"
                  ? "bg-[#5a0d29] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              Classic Collection
            </button>
          )}

          {hasSets && (
            <button
              type="button"
              onClick={() => setActiveFilter("sets")}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full ${
                activeFilter === "sets"
                  ? "bg-[#5a0d29] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              Discovery Sets
            </button>
          )}
        </div>

        <p className="text-xs text-neutral-400 font-medium">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "fragrance" : "fragrances"}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:shadow-xl ${
              product.isRoyal
                ? "border-[#ded3be] bg-gradient-to-b from-[#faf6ee]/60 via-white to-white hover:border-[#b89758] ring-1 ring-[#b89758]/20"
                : "border-neutral-200/80 bg-neutral-50/40 hover:border-neutral-300"
            } p-6`}
          >
            {/* Top Badges */}
            <div className="flex items-center justify-between mb-4 z-10">
              {product.isRoyal ? (
                <span className="rounded-full bg-gradient-to-r from-[#b39355] to-[#997938] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs">
                  New Collection
                </span>
              ) : (
                <span className="rounded-full bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-700">
                  {product.tag}
                </span>
              )}

              <span className="text-[11px] font-semibold text-neutral-500 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-neutral-200/60">
                {product.volume}
              </span>
            </div>

            {/* Product Image with Hover transition if secondary exists */}
            <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-xl bg-white p-4 shadow-2xs group-hover:bg-neutral-50/50 transition-colors">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-contain transition-all duration-500 group-hover:scale-105 ${
                  product.secondaryImage ? "group-hover:opacity-0" : ""
                }`}
              />

              {product.secondaryImage && (
                <Image
                  src={product.secondaryImage}
                  alt={`${product.name} bottle detail`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 p-4"
                />
              )}
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      product.isRoyal ? "text-[#8c6d36]" : "text-[#5a0d29]"
                    }`}
                  >
                    {product.collectionName}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#5a0d29] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">{product.subtitle}</p>

                <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal line-clamp-2">
                  {product.description}
                </p>

                {/* Olfactory Notes Box */}
                <div className="mt-4 p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-0.5">
                    Olfactory Notes
                  </span>
                  <p className="text-xs text-neutral-700 font-medium line-clamp-2">
                    {product.notes}
                  </p>
                </div>
              </div>

              {/* Price & Add to Bag Action */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                    Price
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-neutral-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-neutral-500">USD</span>
                  </div>
                </div>

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
                  className={`inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-bold text-white transition-all shadow-sm active:scale-95 ${
                    product.isRoyal
                      ? "bg-gradient-to-r from-[#9e7d3b] to-[#5a0d29] hover:from-[#88692c] hover:to-[#43081e]"
                      : "bg-[#5a0d29] hover:bg-[#43081e]"
                  }`}
                >
                  <ShoppingBag className="size-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Collection Distinction Banner at Bottom */}
      <div className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200/80 p-8 sm:p-10 text-center max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
          Discover The Calra Perfumes Standards
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto mb-6">
          Every fragrance is brewed as a concentrated Extrait de Parfum to ensure unmatched sillage and longevity. Explore the newly arrived Royal Collection editions, or indulge in our classic and discovery sets.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/category/new-arrivals"
            className="bg-[#5a0d29] text-white px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-[#43081e] transition-colors"
          >
            Shop New Arrivals
          </Link>
          <Link
            href="/category/unisex"
            className="border border-neutral-300 text-neutral-800 px-6 py-3 text-xs uppercase font-bold tracking-widest hover:border-[#5a0d29] hover:text-[#5a0d29] transition-colors"
          >
            Explore All Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
