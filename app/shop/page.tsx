export const metadata = {
  title: "Shop – Coming Soon | Yorkshire Wheel Specialist",
  description:
    "Our online shop for refurbished and new alloy wheels is launching soon. Sign up to get notified when it goes live.",
};

import Link from "next/link";

export default function ShopComingSoon() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="relative w-full">
        {/* Accent gradient wash */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20" />
        </div>

        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-green-300/90 bg-green-900/20 ring-1 ring-green-400/20 px-3 py-1 rounded-full mb-6">
            Shop
            <span className="h-1 w-1 rounded-full bg-green-400 inline-block" />
            Coming Soon
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Yorkshire Wheel Shop Premium & Refurbished Wheels For Sale
            <span className="block text-green-400">Launching Soon</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We’re putting the final polish on our e‑commerce experience — with secure checkout, rich product filters, and
            real‑time stock. Sign up to be first in line when it opens.
          </p>

          {/* Sign-up placeholder (non-functional) */}
          <form className="mt-10 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3" action="#">
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled
            />
            <button
              type="button"
              className="rounded-xl px-6 py-3 font-semibold bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled
            >
              Notify Me
            </button>
          </form>

          {/* Feature teasers */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "Refurbished & New", text: "OEM & performance wheels with expert finishes." },
              { title: "Secure Payments", text: "Fast checkout with Stripe & PayPal support." },
              { title: "Smart Filters", text: "By size, PCD, offset, finish and more." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Back/CTA buttons */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center"
            >
              View Our Services
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center"
            >
              See Before & After
            </Link>
          </div>

          {/* Placeholder grid preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 select-none" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
