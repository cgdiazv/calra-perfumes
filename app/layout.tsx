import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar";
import { Navbar } from "@/components/navbar";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/context/cart-context";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calra Perfumes | Luxury Niche Fragrances",
  description: "Discover exclusive luxury perfumes, extraits, and artisanal fragrances at Calra Perfumes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-neutral-900 bg-white">
        <CartProvider>
          <TopBar />
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
