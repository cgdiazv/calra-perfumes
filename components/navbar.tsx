"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, ChevronRight } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "MEN", href: "/category/men" },
  { label: "WOMEN", href: "/category/women" },
  { label: "UNISEX", href: "/category/unisex" },
  { label: "NEW COLLECTION", href: "/category/new-arrivals" },
];

export function Navbar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalCount, openCart } = useCart();

  // Close sidebar when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-[#5a0d29] hover:bg-neutral-100 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Open mobile menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sliding Sidebar (Left to Right) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sliding Sidebar Panel from Left */}
          <div className="fixed inset-y-0 left-0 flex max-w-full pr-12">
            <div className="w-screen max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between transform transition-transform ease-out duration-300 animate-in slide-in-from-left">
              {/* Top & Scrollable Links */}
              <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-[#faf7f8]">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center"
                    aria-label="Calra Perfumes Home"
                  >
                    <Image
                      src="/logo.png"
                      alt="CALRA NICHE FRAGRANCES"
                      width={130}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full p-2 text-neutral-400 hover:text-neutral-700 hover:bg-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Primary Collection Links */}
                <div className="px-6 py-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#5a0d29]/80 block mb-3">
                    Collections
                  </span>
                  <nav className="flex flex-col space-y-1">
                    {NAV_LINKS.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-3 px-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors",
                            isActive
                              ? "bg-[#5a0d29]/10 text-[#5a0d29]"
                              : "text-neutral-800 hover:bg-neutral-50 hover:text-[#5a0d29]"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "size-4 transition-transform",
                              isActive ? "text-[#5a0d29]" : "text-neutral-300"
                            )}
                          />
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Secondary Quick Links */}
                <div className="px-6 py-4 border-t border-neutral-100">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-neutral-400 block mb-2.5">
                    Customer Care
                  </span>
                  <div className="flex flex-col space-y-2 text-xs font-semibold text-neutral-600">
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 hover:text-[#5a0d29] transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 hover:text-[#5a0d29] transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 hover:text-[#5a0d29] transition-colors"
                    >
                      Frequently Asked Questions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="p-6 border-t border-neutral-100 bg-[#faf7f8] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCart();
                  }}
                  className="w-full flex items-center justify-between bg-[#5a0d29] text-white px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="size-4" />
                    <span>Shopping Bag</span>
                  </div>
                  <span className="bg-white/20 rounded-full px-2 py-0.5 text-[11px]">
                    {totalCount} {totalCount === 1 ? "item" : "items"}
                  </span>
                </button>

                <div className="flex items-center justify-center gap-3 text-xs font-semibold text-[#5a0d29] pt-1">
                  <Link
                    href="/login?mode=signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline py-1"
                  >
                    Login
                  </Link>
                  <span className="text-neutral-300">|</span>
                  <Link
                    href="/login?mode=signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:underline py-1"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
