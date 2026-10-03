"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, Search, HelpCircle, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  category: "Shipping & Orders" | "Fragrances & Quality" | "Returns & Exchanges" | "Boutique & Services";
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Shipping & Orders
  {
    id: "free-shipping",
    category: "Shipping & Orders",
    question: "How does complimentary shipping work?",
    answer:
      "We offer complimentary standard shipping on all orders over $100 within the United States. For orders below $100, standard delivery is calculated at checkout based on your delivery address.",
  },
  {
    id: "delivery-time",
    category: "Shipping & Orders",
    question: "What are your order processing and delivery times?",
    answer:
      "All orders are processed and prepared at our boutique facility within 1–2 business days. Once dispatched, standard shipping takes approximately 3–5 business days to arrive depending on your location.",
  },
  {
    id: "tracking-order",
    category: "Shipping & Orders",
    question: "How can I track the status of my order?",
    answer:
      "As soon as your fragrance has shipped, you will receive an email confirmation containing your carrier tracking number. You can use this link to view live parcel milestone updates.",
  },
  {
    id: "international-shipping",
    category: "Shipping & Orders",
    question: "Do you ship internationally?",
    answer:
      "At this time, our online boutique ships directly throughout the United States. For international orders or bespoke freight inquiries, please reach out to our concierge team at info@calraperfumes.com.",
  },

  // Fragrances & Quality
  {
    id: "authenticity",
    category: "Fragrances & Quality",
    question: "Are all Calra Perfumes authentic niche creations?",
    answer:
      "Yes, 100%. Calra Perfumes is a proud independent fragrance house. Every bottle is crafted with artisanal precision using the purest natural absolutes and highest quality aroma-compounds sourced globally.",
  },
  {
    id: "extrait-concentration",
    category: "Fragrances & Quality",
    question: "What is the concentration of your fragrances?",
    answer:
      "Our portfolio features high-concentration formulations, predominantly Extraits de Parfum with 20% to 30% pure aromatic oil concentration. This provides exceptional longevity, projection, and depth that evolves throughout the day.",
  },
  {
    id: "perfume-storage",
    category: "Fragrances & Quality",
    question: "How should I store my perfume bottles?",
    answer:
      "To preserve the delicate notes and longevity of your fragrance, store bottles in a cool, dry place away from direct sunlight and extreme temperature changes (avoid humid bathrooms). Keeping your perfume inside its original presentation box is recommended.",
  },
  {
    id: "fragrance-pyramid",
    category: "Fragrances & Quality",
    question: "How do top, heart, and base notes work together?",
    answer:
      "Top notes create the first impression (lasting 15–30 minutes), followed by heart notes which define the character of the fragrance (lasting 2–4 hours). The base notes linger the longest—often remaining on skin and textiles for 8 to 12+ hours.",
  },

  // Returns & Exchanges
  {
    id: "return-policy",
    category: "Returns & Exchanges",
    question: "What is your return and exchange policy?",
    answer:
      "Due to hygiene and the personal nature of fine fragrances, we accept returns on items that are unopened, unused, and in their original sealed cellophane packaging within 14 days of delivery. Opened bottles cannot be returned.",
  },
  {
    id: "damaged-package",
    category: "Returns & Exchanges",
    question: "What should I do if my order arrives damaged?",
    answer:
      "If your bottle or package arrives compromised, please contact our support team within 48 hours of delivery at info@calraperfumes.com with a photo of the packaging. We will immediately arrange an expedited replacement.",
  },

  // Boutique & Services
  {
    id: "boutique-visit",
    category: "Boutique & Services",
    question: "Can I experience and test your perfumes in person?",
    answer:
      "Yes! We invite you to visit our retail location at 5740 Buford Hwy NE, Doraville, GA 30340. Our fragrance specialists are on hand to provide personalized scent discovery consultations.",
  },
  {
    id: "consultation",
    category: "Boutique & Services",
    question: "How can I get advice on choosing the right scent for me?",
    answer:
      "You can contact our fragrance concierge through our Contact page or speak directly with an advisor at +1 (770) 674-5948. We will assist you based on your favorite olfactory notes, seasonal preferences, or special occasions.",
  },
];

const CATEGORIES = [
  "All",
  "Shipping & Orders",
  "Fragrances & Quality",
  "Returns & Exchanges",
  "Boutique & Services",
] as const;

export function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<string[]>(["free-shipping", "authenticity"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filters */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
          <input
            id="faq-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic or question (e.g. shipping, extrait, returns)..."
            className="w-full pl-11 pr-4 py-3.5 text-sm bg-neutral-50/80 border border-neutral-200 focus:bg-white focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors rounded-none placeholder:text-neutral-400 text-neutral-900"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer",
                  isSelected
                    ? "bg-[#5a0d29] text-white shadow-xs"
                    : "bg-neutral-100/90 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="max-w-3xl mx-auto divide-y divide-neutral-200/80 border-y border-neutral-200/80">
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center text-neutral-500 space-y-3">
            <HelpCircle className="size-10 text-neutral-300 mx-auto" />
            <p className="text-base font-medium text-neutral-700">No questions found</p>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try another term or reach out to our team directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-2 text-xs font-bold uppercase tracking-wider text-[#5a0d29] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="text-base sm:text-[17px] font-semibold text-neutral-900 group-hover:text-[#5a0d29] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "size-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200",
                      isOpen
                        ? "bg-[#5a0d29] text-white border-[#5a0d29]"
                        : "border-neutral-200 text-neutral-500 group-hover:border-[#5a0d29] group-hover:text-[#5a0d29]"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-10 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="max-w-3xl mx-auto mt-16 p-8 bg-neutral-50 border border-neutral-200/80 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
          Still have questions?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
          Can&apos;t find the answer you&apos;re looking for? Our boutique fragrance advisors are here to help.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="bg-[#5a0d29] text-white px-7 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] transition-colors flex items-center gap-2"
          >
            <Mail className="size-3.5" />
            <span>Contact Concierge</span>
          </Link>
          <a
            href="tel:+17706745948"
            className="border border-neutral-300 bg-white text-neutral-800 px-7 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#5a0d29] hover:text-[#5a0d29] transition-colors flex items-center gap-2"
          >
            <Phone className="size-3.5" />
            <span>+1 (770) 674-5948</span>
          </a>
        </div>
      </div>
    </div>
  );
}
