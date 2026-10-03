"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "MEN", href: "/category/men" },
  { label: "WOMEN", href: "/category/women" },
  { label: "UNISEX", href: "/category/unisex" },
  { label: "NEW ARRIVALS", href: "/category/new-arrivals" },
];

export function Navbar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-neutral-100 bg-white shadow-xs",
        className
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-95"
            aria-label="Calra Perfumes Home"
          >
            <Image
              src="/logo.png"
              alt="CALRA NICHE FRAGRANCES"
              width={158}
              height={49}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center/Left-aligned: Product Categories Navigation (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10 ml-10 mr-auto"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative py-2 text-xs lg:text-[13px] font-bold tracking-widest uppercase transition-colors",
                  isActive
                    ? "text-[#5a0d29]"
                    : "text-neutral-900 hover:text-[#5a0d29]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 w-full bg-[#5a0d29] transition-transform duration-200",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Register | Login & Shopping Cart */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Register | Login Links */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs lg:text-[13px] font-medium text-[#5a0d29]">
            <Link
              href="/login?mode=signup"
              className="transition-opacity hover:opacity-75 font-semibold"
            >
              Register
            </Link>
            <span className="text-neutral-400 select-none">|</span>
            <Link
              href="/login?mode=signin"
              className="transition-opacity hover:opacity-75 font-semibold"
            >
              Login
            </Link>
          </div>

          {/* Shopping Cart Trigger */}
          <button
            onClick={openCart}
            type="button"
            className="flex items-center gap-1.5 text-[#5a0d29] hover:opacity-80 transition-transform active:scale-95 group"
            aria-label={`Shopping Cart with ${totalCount} items`}
          >
            {/* Outline Shopping Bag Icon */}
            <div className="relative">
              <ShoppingBag className="size-6 stroke-[1.7] transition-transform group-hover:scale-105" />
            </div>
            <span className="text-sm font-semibold tracking-tight leading-none min-w-[1ch]">
              {totalCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-[#5a0d29] hover:bg-neutral-100 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-100 bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-bold tracking-wider text-neutral-800 hover:text-[#5a0d29] border-b border-neutral-50"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 flex items-center justify-between border-t border-neutral-100 text-sm font-semibold text-[#5a0d29]">
              <div className="flex items-center gap-2">
                <Link
                  href="/login?mode=signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:underline"
                >
                  Register
                </Link>
                <span className="text-neutral-300">|</span>
                <Link
                  href="/login?mode=signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:underline"
                >
                  Login
                </Link>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider bg-[#5a0d29]/10 px-3 py-1.5 rounded-full"
              >
                <ShoppingBag className="size-4" />
                <span>Bag ({totalCount})</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
