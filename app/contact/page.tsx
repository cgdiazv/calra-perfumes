import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contact Us | Calra Perfumes",
  description:
    "Get in touch with Calra Perfumes. Connect with our fragrance specialists for orders, consultations, and customer support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Banner - Matching About Page */}
      <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/headers/header01.webp"
            alt="Contact Calra Perfumes Header Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1
            className={`${cormorant.className} text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-900 drop-shadow-xs`}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Information & Boutique Highlights */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="inline-flex items-center rounded-full bg-[#5a0d29]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#5a0d29]">
                  We Are Here For You
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                  Experience Personal Olfactory Consultation
                </h2>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                  Whether you are seeking advice on selecting a signature extrait, inquiring about order delivery, or interested in wholesale partnerships, our team is at your service.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4 pt-2">
                {/* Boutique Address */}
                <div className="flex items-start gap-4 p-4 rounded-none border border-neutral-100 bg-neutral-50/70">
                  <div className="p-2.5 bg-[#5a0d29]/10 text-[#5a0d29] shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Boutique Location
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                      5740 Buford Hwy NE<br />
                      Doraville, GA 30340, USA
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=5740+Buford+Hwy+NE,+Doraville,+GA+30340"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-xs font-semibold text-[#5a0d29] hover:underline"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>

                {/* Direct Support */}
                <div className="flex items-start gap-4 p-4 rounded-none border border-neutral-100 bg-neutral-50/70">
                  <div className="p-2.5 bg-[#5a0d29]/10 text-[#5a0d29] shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Email Inquiries
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      General & Support:{" "}
                      <a
                        href="mailto:info@calraperfumes.com"
                        className="font-medium text-neutral-900 hover:text-[#5a0d29] transition-colors"
                      >
                        info@calraperfumes.com
                      </a>
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Submissions forwarded to our Atlanta customer relations desk.
                    </p>
                  </div>
                </div>

                {/* Phone Contact */}
                <div className="flex items-start gap-4 p-4 rounded-none border border-neutral-100 bg-neutral-50/70">
                  <div className="p-2.5 bg-[#5a0d29]/10 text-[#5a0d29] shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Phone Concierge
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      <a
                        href="tel:+17706745948"
                        className="font-medium text-neutral-900 hover:text-[#5a0d29] transition-colors"
                      >
                        +1 (770) 674-5948
                      </a>
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Available during boutique operating hours.
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 p-4 rounded-none border border-neutral-100 bg-neutral-50/70">
                  <div className="p-2.5 bg-[#5a0d29]/10 text-[#5a0d29] shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Boutique Hours
                    </h3>
                    <div className="mt-1 text-sm text-neutral-600 space-y-0.5">
                      <p>Monday – Saturday: 10:00 AM – 7:00 PM EST</p>
                      <p>Sunday: 12:00 PM – 6:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
