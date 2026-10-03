"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/context/cart-context";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  volume: string;
  notes: string;
}

const PRODUCTS: Record<string, { title: string; subtitle: string; items: Product[] }> = {
  men: {
    title: "Men's Niche Fragrances",
    subtitle: "Bold, distinguished, and magnetic extraits crafted with masculine depth.",
    items: [
      {
        id: "alpha-chrome",
        name: "Alpha Chrome Pure Parfum",
        subtitle: "Woody Aromatic & Crisp Bergamot",
        price: 175,
        image: "/products/chrome01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Cardamom, Cedarwood, Vetiver, Silver Birch",
      },
      {
        id: "fearless-men",
        name: "Fearless Extrait",
        subtitle: "Smoky Leather & Amber Woods",
        price: 185,
        image: "/products/fearless01-1.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Leather, Incense, Dark Amber, Oud Wood",
      },
      {
        id: "saphir-men",
        name: "Saphir Royal Elixir",
        subtitle: "Oceanic Cedar & Spiced Pepper",
        price: 210,
        image: "/products/sapphire01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Sea Salt, Black Pepper, Blue Cypress, Ambergris",
      },
      {
        id: "cobalt-royale",
        name: "Cobalt Royale Extrait",
        subtitle: "Noble Vetiver & Smoked Bergamot",
        price: 225,
        image: "/products/cobalt_royale.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "French Bergamot, Elemi Resin, Vetiver Bourbon, Cedar",
      },
      {
        id: "black-phoenix",
        name: "Black Phoenix Niche Parfum",
        subtitle: "Charred Oud, Cinnamon & Tobacco",
        price: 240,
        image: "/products/black_phoenix.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Black Spices, Smoked Tobacco, Oud Wood, Dark Leather",
      },
    ],
  },
  women: {
    title: "Women's Niche Fragrances",
    subtitle: "Opulent floral bouquets, warm gourmand accords, and silk-smooth sillage.",
    items: [
      {
        id: "wild-caramel-women",
        name: "Wild Caramel Gourmand",
        subtitle: "Velvet Vanilla & Burnt Sugar",
        price: 195,
        image: "/products/wild01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Dulce de Leche, Madagascar Vanilla, Praline, Sandalwood",
      },
      {
        id: "intensa-women",
        name: "Intensa Velour Extrait",
        subtitle: "Damask Rose & Golden Honey",
        price: 190,
        image: "/products/intensa01-1.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Turkish Rose, Wild Blackberry, Patchouli, Benzoin",
      },
      {
        id: "jade-women",
        name: "Jade Imperial",
        subtitle: "White Tea, Jasmine & Cashmere",
        price: 220,
        image: "/products/jade01-1.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Green Tea Blossom, Sambac Jasmine, Cashmeran, Musk",
      },
      {
        id: "enchante-women",
        name: "Enchanté Privé",
        subtitle: "Powdery Violet & Silk Petals",
        price: 205,
        image: "/products/enchante01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Sweet Violet, Heliotrope, White Cedar, Silken Amber",
      },
      {
        id: "desert-rose-women",
        name: "Desert Rose Royal Extrait",
        subtitle: "Taif Rose, Crimson Saffron & Amber",
        price: 230,
        image: "/products/desert_rose.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Taif Rose Petals, Saffron, Amber Resin, Sandalwood",
      },
    ],
  },
  unisex: {
    title: "Unisex Haute Parfumerie",
    subtitle: "Boundary-defying fragrance compositions that adapt uniquely to every skin.",
    items: [
      {
        id: "oros-grande-unisex",
        name: "Oros Grande Extrait",
        subtitle: "Precious Saffron & Liquid Gold",
        price: 235,
        image: "/products/oros01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Saffron, Golden Amber, Dry Woods, White Oud",
      },
      {
        id: "imperial-gold-unisex",
        name: "Imperial Gold Elixir",
        subtitle: "Pure Liquid Amber & Warm Tonka",
        price: 245,
        image: "/products/imperial_gold_elixir.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Spiced Cinnamon, Liquid Amber, Benzoin, Tonka Bean",
      },
      {
        id: "fearless-unisex",
        name: "Fearless Eau de Parfum",
        subtitle: "Modern Chypre & Smoked Vanilla",
        price: 185,
        image: "/products/fearless03.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Bergamot, Birch Tar, Guaiacwood, Oakmoss",
      },
      {
        id: "saphir-unisex",
        name: "Saphir Niche Extrait",
        subtitle: "Midnight Iris & Mineral Musk",
        price: 210,
        image: "/products/sapphire02.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Florentine Iris, Violet Leaf, Elemi, Cashmere Musk",
      },
      {
        id: "mysterious-unisex",
        name: "Mysterious Niche Parfum",
        subtitle: "Enigmatic Frankincense & Black Plum",
        price: 220,
        image: "/products/mysterious.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Black Plum, Omani Incense, Labdanum, Smoked Birch",
      },
    ],
  },
  "new-arrivals": {
    title: "New Arrivals & Limited Editions",
    subtitle: "The latest rare botanical extraits and limited small-batch creations.",
    items: [
      {
        id: "oros-grande-new",
        name: "Oros Grande Extrait",
        subtitle: "2026 Vintage Limited Reserve",
        price: 235,
        image: "/products/oros01.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Saffron, Golden Amber, Dry Woods, White Oud",
      },
      {
        id: "jade-new",
        name: "Jade Imperial Edition",
        subtitle: "Spring Harvest Green Tea & Jasmine",
        price: 220,
        image: "/products/jade02.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Green Tea Blossom, Sambac Jasmine, Cashmeran, Musk",
      },
      {
        id: "intensa-new",
        name: "Intensa Velour Extrait",
        subtitle: "Special Edition Intense Concentration",
        price: 190,
        image: "/products/intensa03.webp",
        volume: "100ml / 3.4 fl. oz.",
        notes: "Turkish Rose, Wild Blackberry, Patchouli, Benzoin",
      },
      {
        id: "set-fearless-gift",
        name: "Fearless Discovery Gift Set",
        subtitle: "Extrait Bottle + Travel Atomizer + Body Mist",
        price: 260,
        image: "/products/set_fearless.webp",
        volume: "Full Luxury Set",
        notes: "Signature Fearless Notes in 3 Bespoke Formulations",
      },
      {
        id: "set-jade-gift",
        name: "Jade Imperial Discovery Set",
        subtitle: "Pure Parfum + Scented Travel Case",
        price: 275,
        image: "/products/set_jade.webp",
        volume: "Full Luxury Set",
        notes: "Jade Imperial Signature Green Tea & Cashmere",
      },
    ],
  },
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addItem } = useCart();

  const category = PRODUCTS[slug] || {
    title: `${slug.replace("-", " ").toUpperCase()} Fragrances`,
    subtitle: "Discover our luxury fragrances and rare artisanal perfumes.",
    items: PRODUCTS["unisex"].items,
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Header */}
      <div className="border-b border-neutral-100 pb-8 mb-10 text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#5a0d29] mb-2">
          Calra Collections
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-3">
          {category.title}
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {category.subtitle}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {category.items.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between rounded-xl border border-neutral-100 bg-neutral-50/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-neutral-200"
          >
            {/* Product Image */}
            <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-lg bg-white p-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-neutral-700 shadow-xs border border-neutral-100">
                {product.volume}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#5a0d29] mb-1">
                  Extrait De Parfum
                </p>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#5a0d29] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">{product.subtitle}</p>

                <div className="mt-3 py-2 border-t border-b border-neutral-100/80">
                  <p className="text-[11px] text-neutral-400">Key Notes:</p>
                  <p className="text-xs text-neutral-600 font-medium line-clamp-1">
                    {product.notes}
                  </p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-6 flex items-center justify-between pt-2">
                <div>
                  <span className="text-xs text-neutral-400 block">Price</span>
                  <span className="text-xl font-bold text-neutral-900">
                    ${product.price.toFixed(2)}
                  </span>
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
                  className="inline-flex items-center gap-2 bg-[#5a0d29] text-white px-4 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#43081e] active:scale-95 transition-all shadow-xs"
                >
                  <ShoppingBag className="size-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
