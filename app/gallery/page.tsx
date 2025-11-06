"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ---- Types ----
interface GalleryItem {
  id: number;
  category: "repair" | "refurbishment" | "mobile";
  title: string;        // kept in the type/data, but not displayed
  description: string;  // kept in the type/data, but not displayed
  beforeImage: string;
  afterImage: string;
}

// ---- Temporary placeholder data ----
const PLACEHOLDER = "/images/services/pexels-introspectivedsgn-30474840.jpg";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: "mobile",
    title: "Audi",
    description: "Severe kerb damage completely restored to original finish",
    beforeImage: "/images/alloys/alloy1before.jpeg",
    afterImage: "/images/alloys/alloy1after.jpeg",
  },
  {
    id: 2,
    category: "mobile",
    title: "Skoda",
    description: "Complete wheel refurbishment with diamond cut finish",
    beforeImage: "/images/alloys/alloy2before.jpeg",
    afterImage: "/images/alloys/alloy2after.jpeg",
  },
  {
    id: 3,
    category: "mobile",
    title: "Audi Crack Welding",
    description: "Professional crack welding and refinishing service",
    beforeImage: "/images/alloys/alloy3before.jpeg",
    afterImage: "/images/alloys/alloy3after.jpeg",
  },
];

const FILTERS = [
  { key: "all", label: "All Work" },
  { key: "repair", label: "Repairs" },
  { key: "refurbishment", label: "Refurbishments" },
  { key: "mobile", label: "Mobile Service" },
] as const;

type FilterKey = typeof FILTERS[number]["key"];

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredItems = useMemo(
    () => (filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  const selectedItem = useMemo(
    () => (selectedId ? GALLERY_ITEMS.find((i) => i.id === selectedId) ?? null : null),
    [selectedId]
  );

  const goNext = () => {
    if (selectedId == null || filteredItems.length === 0) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedId);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedId(filteredItems[nextIndex].id);
  };

  const goPrev = () => {
    if (selectedId == null || filteredItems.length === 0) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedId);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedId(filteredItems[prevIndex].id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Before & After <span className="text-green-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the incredible transformations we achieve. From damaged wheels to showroom condition.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-lg py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === f.key ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-600">
            Showing {filteredItems.length} of {GALLERY_ITEMS.length} repairs
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedId(item.id)}
              >
                {/* Before / After */}
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative">
                      <div className="absolute inset-0">
                        <Image
                          src={item.beforeImage}
                          alt="Wheel before repair/refurbishment"
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority={item.id <= 3}
                        />
                      </div>
                      <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0">
                        <Image
                          src={item.afterImage}
                          alt="Wheel after repair/refurbishment"
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-6 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      View Details
                    </span>
                  </div>

                  {/* Category Badge (kept) */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        item.category === "repair"
                          ? "bg-blue-100 text-blue-600"
                          : item.category === "refurbishment"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Card content — removed title/description */}
                {/* <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedId && selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery item details"
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              {/* Removed modal title */}
              <div className="flex items-center space-x-2">
                <button onClick={goPrev} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Previous item">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={goNext} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Next item">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button onClick={() => setSelectedId(null)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Before</h4>
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={selectedItem.beforeImage}
                      alt="Before"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">After</h4>
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={selectedItem.afterImage}
                      alt="After"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Removed modal description */}
              {/* <p className="text-gray-700 mb-6">{selectedItem.description}</p> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 text-center"
                >
                  Get Similar Service
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 hover:text-white text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Wheels?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free quote today and see the difference professional craftsmanship makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
