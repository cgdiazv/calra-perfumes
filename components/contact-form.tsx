"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    }
  };

  return (
    <div className="bg-white border border-neutral-200/80 p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
          Send Us a Message
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-neutral-500">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 rounded-md bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-emerald-900">Message Sent Successfully!</p>
            <p className="mt-0.5 text-emerald-700">
              Thank you for reaching out. We have received your inquiry and our fragrance specialists will respond shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-md bg-rose-50 border border-rose-200 p-4 text-rose-800 flex items-start gap-3">
          <AlertCircle className="size-5 text-[#5a0d29] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <p className="font-semibold text-rose-900">Unable to Send Message</p>
            <p className="mt-0.5 text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Full Name <span className="text-[#5a0d29]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={status === "loading"}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-none bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors disabled:opacity-50"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Email Address <span className="text-[#5a0d29]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={status === "loading"}
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-none bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors disabled:opacity-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Phone Number <span className="text-neutral-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              disabled={status === "loading"}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-none bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors disabled:opacity-50"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              disabled={status === "loading"}
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-none bg-white text-neutral-900 focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors disabled:opacity-50"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Fragrance Consultation">Fragrance Consultation</option>
              <option value="Order Status">Order Status & Shipping</option>
              <option value="Wholesale & Partnerships">Wholesale & Partnerships</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
          >
            Message <span className="text-[#5a0d29]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={status === "loading"}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we assist you with our fragrances today?"
            className="w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-none bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5a0d29] focus:ring-1 focus:ring-[#5a0d29] transition-colors resize-y disabled:opacity-50"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto min-w-[200px] bg-[#5a0d29] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="size-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
