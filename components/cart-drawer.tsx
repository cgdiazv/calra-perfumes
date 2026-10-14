"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const FREE_SHIPPING_THRESHOLD = 250;

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    totalCount,
    totalPrice,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const freeShippingProgress = Math.min(
    100,
    (totalPrice / FREE_SHIPPING_THRESHOLD) * 100
  );
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div
          ref={drawerRef}
          className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform ease-out duration-300 animate-in slide-in-from-right"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="size-5 text-[#5a0d29]" aria-hidden="true" />
              <h2
                id="cart-drawer-title"
                className="text-base font-semibold tracking-wide uppercase text-neutral-900"
              >
                Shopping Bag
              </h2>
              <span className="inline-flex items-center justify-center rounded-full bg-[#5a0d29]/10 px-2 py-0.5 text-xs font-semibold text-[#5a0d29]">
                {totalCount}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="rounded-full p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Free Shipping Notification Bar */}
          <div className="bg-[#faf5f7] px-6 py-3 border-b border-[#f3e2e8]">
            <p className="text-xs text-neutral-700 font-medium text-center">
              {amountToFreeShipping > 0 ? (
                <>
                  Add{" "}
                  <span className="font-bold text-[#5a0d29]">
                    ${amountToFreeShipping.toFixed(2)}
                  </span>{" "}
                  more for <span className="font-semibold">Free Express Shipping</span>
                </>
              ) : (
                <span className="font-semibold text-[#5a0d29]">
                  🎉 You qualify for Free Express Shipping!
                </span>
              )}
            </p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full bg-[#5a0d29] transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="flex size-16 items-center justify-center rounded-full bg-[#faf5f7] text-[#5a0d29] mb-4">
                  <ShoppingBag className="size-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Explore our luxury fragrance collections to find your signature scent.
                </p>

                <div className="w-full max-w-xs">
                  <button
                    onClick={closeCart}
                    className="w-full bg-[#5a0d29] text-white py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#43081e] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-neutral-100">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex gap-4 items-start">
                    {/* Item Image */}
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between self-stretch">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-semibold text-neutral-900 leading-tight">
                            {item.name}
                          </h4>
                          <span className="text-sm font-bold text-neutral-900 ml-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        {item.volume && (
                          <p className="text-xs text-neutral-500 mt-0.5">{item.volume}</p>
                        )}
                        <p className="text-xs text-neutral-400 mt-0.5">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      {/* Quantity Controller & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-neutral-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-400 hover:text-rose-700 transition-colors p-1"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 px-6 py-4 bg-neutral-50">
              <div className="space-y-1.5 text-xs text-neutral-600 mb-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900 text-sm">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Shipping</span>
                  <span>
                    {totalPrice >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="text-emerald-700 font-medium">Free</span>
                    ) : (
                      "$15.00"
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-3 mb-4">
                <div className="flex justify-between text-sm font-bold text-neutral-900">
                  <span>Estimated Total</span>
                  <span>
                    $
                    {(
                      totalPrice +
                      (totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 15)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Proceeding to checkout with Calra Fragrances...");
                }}
                className="w-full bg-[#5a0d29] text-white py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#43081e] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="size-3.5 text-[#5a0d29]" />
                <span>100% Authentic Luxury Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
