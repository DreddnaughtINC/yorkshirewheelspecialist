"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, ArrowRight } from "lucide-react";

/** -----------------------------------------------------------
 *  Data model
 * ---------------------------------------------------------- */
export type GalleryItem = {
  id: string;
  title: string;
  before: string;          // URL to BEFORE image
  after: string;           // URL to AFTER image
  altBefore?: string;
  altAfter?: string;
  tags?: string[];
};

/** -----------------------------------------------------------
 *  Temporary placeholder (works TODAY)
 *  Put your file here: /public/images/services/pexels-introspectivedsgn-30474840.jpg
 * ---------------------------------------------------------- */
export const PLACEHOLDER = "/images/services/pexels-introspectivedsgn-30474840.jpg";

/** Demo items that render immediately with the placeholder.
 *  Replace each `PLACEHOLDER` with real before/after URLs as you get them.
 */
export const DEMO_ITEMS: GalleryItem[] = [
  {
    id: "demo-1",
    title: "Curb Rash Touch-up",
    before: "/images/alloys/alloy1after.jpeg",
    after: "/images/alloys/alloy1before.jpeg",
    altBefore: "Alloy wheel before (placeholder)",
    altAfter: "Alloy wheel after (placeholder)",
    tags: ["Mobile Repair", "Same-day"],
  },
  {
    id: "demo-2",
    title: "OEM Silver Refresh",
    before: "/images/alloys/alloy2after.jpeg",
    after: "/images/alloys/alloy2before.jpeg",
    tags: ["Driveway Service"],
  },
  {
    id: "demo-3",
    title: "Gloss Black Revival",
    before: "/images/alloys/alloy3after.jpeg",
    after: "/images/alloys/alloy3before.jpeg",
    tags: ["Trade", "B2C"],
  },
];

type Props = {
  items?: GalleryItem[];       // optional – defaults to DEMO_ITEMS
  ctaHref?: string;            // link to full gallery
};

const GalleryPreview: React.FC<Props> = ({ items = DEMO_ITEMS, ctaHref = "/gallery" }) => {
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => setIndex(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % items.length), [items.length]);

  // keyboard for lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") setLightboxIndex(i => (i! - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setLightboxIndex(i => (i! + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, items.length]);

  const spotlight = items[index];

  return (
    <section aria-labelledby="gallery-preview" className="relative w-full">
      {/* Header */}
{/* Header */}
{/* Header */}
<div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
  <h2
    id="gallery-preview"
    className="text-3xl sm:text-4xl font-bold tracking-tight text-[color:var(--brand-black)] dark:text-white"
  >
    Before & After:{' '}
    <span className="text-[color:var(--brand-green)]">
      Mobile Alloy Wheel Repairs
    </span>
  </h2>
  <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-[color:var(--brand-grey)] dark:text-zinc-300">
    <span className="block sm:inline"> Drag the slider or tap to compare.</span>
  </p>
</div>


      {/* Spotlight (always shows – uses placeholder until you swap real images) */}
      {spotlight && (
        <div className="mx-auto mt-6 max-w-7xl px-6 sm:px-8">
          <motion.div
            key={spotlight.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <BeforeAfterCard
              item={spotlight}
              large
              showTitle
              onOpen={() => setLightboxIndex(index)}
            />
          </motion.div>

          {/* Simple nav arrows (no autoplay) */}
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={prev}
              className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-200 hover:bg-zinc-900"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="rounded-full border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-200 hover:bg-zinc-900"
              aria-label="Next item"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="ml-2 text-xs text-zinc-400">
              {index + 1} / {items.length}
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="mx-auto mt-10 max-w-7xl px-6 sm:px-8">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <li key={it.id}>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
                <BeforeAfterCard item={it} onOpen={() => setLightboxIndex(idx)} />
              </motion.div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">Swipe/drag to compare. Tap to quick-toggle.</div>
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            View full gallery
            <ArrowRight className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
          >
            <div className="relative mx-auto w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
                <BeforeAfterCard item={items[lightboxIndex]} large showTitle />
              </div>

              {/* Lightbox nav */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  onClick={() => setLightboxIndex(i => (i! - 1 + items.length) % items.length)}
                  className="pointer-events-auto rounded-full bg-zinc-900/70 p-2 hover:bg-zinc-800"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  onClick={() => setLightboxIndex(i => (i! + 1) % items.length)}
                  className="pointer-events-auto rounded-full bg-zinc-900/70 p-2 hover:bg-zinc-800"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;

/** -----------------------------------------------------------
 *  Before / After card
 * ---------------------------------------------------------- */
const clamp = (min: number, v: number, max: number) => Math.min(Math.max(v, min), max);

function BeforeAfterCard({
  item,
  onOpen,
  large,
  showTitle,
}: {
  item: GalleryItem;
  onOpen?: () => void;
  large?: boolean;
  showTitle?: boolean;
}) {
  const [pos, setPos] = useState(0.5);           // divider % position
  const [dragging, setDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // drag to move divider
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setPos(clamp(0, (x / rect.width) * 100, 100));
    };
    const stop = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", stop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", stop);
    };
  }, [dragging]);

  return (
    <div className="group relative">
      <div
        ref={wrapRef}
        className={`relative ${large ? "aspect-[16/10]" : "aspect-[4/3]"} w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg`}
      >
        {/* BEFORE layer */}
        <Image
          src={item.before}
          alt={item.altBefore || `${item.title} – before`}
          fill
          sizes="100vw"
          className="object-cover"
          priority={large}
        />

        {/* AFTER layer (clipped by divider position) */}
        <div
          className="absolute inset-0 will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.after}
            alt={item.altAfter || `${item.title} – after`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={large}
          />
        </div>

        {/* Divider handle (drag only) */}
        <button
          onPointerDown={() => setDragging(true)}
          aria-label="Drag left or right to compare"
          className="absolute inset-y-0 z-10 h-full w-10 -translate-x-1/2 cursor-ew-resize touch-none select-none focus:outline-none"
          style={{ left: `${pos}%` }}
        >
          <div className="pointer-events-none absolute inset-y-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-between">
            <div className="h-full w-px bg-white/70" />
            <div className="rounded-full bg-white/95 p-1 shadow ring-1 ring-black/10">
              <Maximize2 className="h-4 w-4 text-black" />
            </div>
            <div className="h-full w-px bg-white/70" />
          </div>
        </button>

        {/* Top overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
          {showTitle ? (
            <div className="rounded-full bg-black/60 px-3 py-1 text-xs text-zinc-100 backdrop-blur">{item.title}</div>
          ) : (
            <div className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-zinc-300 backdrop-blur">
              Drag the divider to compare
            </div>
          )}
          {!!item.tags?.length && (
            <div className="hidden gap-1 sm:flex">
              {item.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-zinc-200 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-white">{item.title}</h3>
          {!!item.tags?.length && (
            <div className="mt-1 flex flex-wrap gap-1">
              {item.tags.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-200 shadow hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          Quick view
        </button>
      </div>
    </div>
  );
}
