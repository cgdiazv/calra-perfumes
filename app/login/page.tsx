"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Gift,
} from "lucide-react";

function LoginFormContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "signin";

  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmittedMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      if (mode === "signin") {
        setSubmittedMessage(
          `Welcome back to Calra Fragrances! Signed in as ${email || "VIP Member"}.`
        );
      } else {
        setSubmittedMessage(
          `Account successfully created for ${name || "VIP Member"}! Welcome to Calra.`
        );
      }
    }, 900);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] bg-neutral-50/70 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
        {/* Left Side: Brand & Membership Perks */}
        <div className="lg:col-span-5 bg-[#5a0d29] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-rose-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-rose-900/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 pt-2">

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              {mode === "signin"
                ? "The Art of Haute Parfumerie"
                : "Begin Your Olfactory Journey"}
            </h1>
            <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed mb-8">
              Sign in to manage your fragrance orders, save your wishlist, and enjoy
              bespoke concierge benefits.
            </p>

            {/* Privilege Bullets */}
            <div className="space-y-4 pt-4 border-t border-rose-900/50">
              <div className="flex items-start gap-3">
                <Gift className="size-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Complimentary Samples</p>
                  <p className="text-rose-100/70">
                    Two niche discovery samples included with every purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="size-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Private Previews</p>
                  <p className="text-rose-100/70">
                    Priority access to limited-edition extraits and new arrivals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="size-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Guaranteed Authenticity</p>
                  <p className="text-rose-100/70">
                    Direct provenance from master perfumers and artisanal houses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-6 text-[11px] text-rose-200/60 border-t border-rose-900/40">
            Need concierge assistance? Contact{" "}
            <a
              href="mailto:info@calraperfumes.com"
              className="text-white underline hover:text-amber-200"
            >
              info@calraperfumes.com
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Sign In / Sign Up Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center border-b border-neutral-200 mb-8">
            <button
              type="button"
              onClick={() => {
                setMode("signin");
                setSubmittedMessage(null);
              }}
              className={`flex-1 pb-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-center transition-colors relative ${
                mode === "signin"
                  ? "text-[#5a0d29]"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Sign In
              {mode === "signin" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5a0d29]" />
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("signup");
                setSubmittedMessage(null);
              }}
              className={`flex-1 pb-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-center transition-colors relative ${
                mode === "signup"
                  ? "text-[#5a0d29]"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              Create Account
              {mode === "signup" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5a0d29]" />
              )}
            </button>
          </div>

          {/* Submission Success Banner */}
          {submittedMessage ? (
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
              <CheckCircle2 className="size-10 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-base font-semibold text-emerald-900">
                  Authentication Successful
                </h3>
                <p className="text-xs text-emerald-700 mt-1">{submittedMessage}</p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#5a0d29] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#43081e] transition-colors"
                >
                  <span>Return to Fragrance Boutique</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name for Sign Up */}
              {mode === "signup" && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                      <User className="size-4" />
                    </div>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Julian Vance"
                      className="w-full rounded-md border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5a0d29] focus:outline-none focus:ring-1 focus:ring-[#5a0d29]"
                    />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                    <Mail className="size-4" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-md border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5a0d29] focus:outline-none focus:ring-1 focus:ring-[#5a0d29]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                  >
                    Password
                  </label>
                  {mode === "signin" && (
                    <button
                      type="button"
                      onClick={() => alert("Password reset link will be sent to your email.")}
                      className="text-xs text-[#5a0d29] hover:underline font-medium"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                    <Lock className="size-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-md border border-neutral-300 bg-white py-2.5 pl-10 pr-10 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5a0d29] focus:outline-none focus:ring-1 focus:ring-[#5a0d29]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-neutral-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password for Sign Up */}
              {mode === "signup" && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                      <Lock className="size-4" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full rounded-md border border-neutral-300 bg-white py-2.5 pl-10 pr-10 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#5a0d29] focus:outline-none focus:ring-1 focus:ring-[#5a0d29]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-neutral-700"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Checkboxes */}
              {mode === "signin" ? (
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="size-4 rounded border-neutral-300 text-[#5a0d29] focus:ring-[#5a0d29]"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-xs text-neutral-600">
                    Remember my preferences on this device
                  </label>
                </div>
              ) : (
                <div className="flex items-start">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    required
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-neutral-300 text-[#5a0d29] focus:ring-[#5a0d29]"
                  />
                  <label htmlFor="agreeTerms" className="ml-2 block text-xs text-neutral-600 leading-tight">
                    I agree to the{" "}
                    <a href="#" className="text-[#5a0d29] underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#5a0d29] underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 bg-[#5a0d29] text-white py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-[#43081e] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="inline-block size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{mode === "signin" ? "Sign In" : "Create Account"}</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>

              {/* Social Login Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-neutral-400 font-medium tracking-wider">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => alert("Google authentication flow demo")}
                  className="flex items-center justify-center gap-2 border border-neutral-300 py-2.5 px-4 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors rounded-md"
                >
                  <svg className="size-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert("Apple ID authentication flow demo")}
                  className="flex items-center justify-center gap-2 border border-neutral-300 py-2.5 px-4 text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-colors rounded-md"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.13-1.96 1.01-3.11-1 .04-2.16.67-2.84 1.46-.59.69-1.12 1.83-.98 2.96 1.11.09 2.14-.49 2.81-1.31z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Bottom Switcher Link */}
              <div className="pt-4 text-center text-xs text-neutral-600">
                {mode === "signin" ? (
                  <p>
                    Don&apos;t have a Calra account yet?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="font-bold text-[#5a0d29] hover:underline"
                    >
                      Create account
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signin")}
                      className="font-bold text-[#5a0d29] hover:underline"
                    >
                      Sign in here
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="size-8 border-2 border-[#5a0d29]/30 border-t-[#5a0d29] rounded-full animate-spin" />
        </div>
      }
    >
      <LoginFormContent />
    </Suspense>
  );
}
