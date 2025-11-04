// app/shop/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react';

type Product = {
  id: number;
  name: string;
  brand: string;
  category: 'premium' | 'new' | 'refurbished' | 'other';
  price?: number | null;
  originalPrice?: number | null;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  images: string[];
  specs: {
    wheelSize: string;
    offset: string;
    pcd: string;
    centerBore: string;
    tyres: string;
    finish: string;
    quantity: string;
  };
  description: string;
  features: string[];
  compatibility: string[];
  condition: string[];
  delivery: string;
  deliveryOptions: string[];
  returns: string;
};

const phone = '07455298619';
const email = 'joe@yorkshirewheelspecialist.co.uk';

const product: Product = {
  id: 1,
  name: 'Mercedes G-Wagon W463 AMG Style 20" Alloy Wheels',
  brand: 'Mercedes-Benz',
  category: 'premium',
  price: 1650,
  originalPrice: null,
  rating: 5.0,
  reviews: 12,
  inStock: true,
  stockCount: 1,
  images: [
    '/images/shop/gwagen/1.JPG',
    '/images/shop/gwagen/2.JPG',
    '/images/shop/gwagen/3.JPG',
    '/images/shop/gwagen/4.JPG',
    '/images/shop/gwagen/5.JPG',
  ],
  specs: {
    wheelSize: '20 x 9.5J',
    offset: 'ET48',
    pcd: '5x130',
    centerBore: '84.1mm',
    tyres: 'Michelin Latitude Sport - 275/50 R20',
    finish: 'Satin Black with Machined Edge Detail',
    quantity: 'Set of 4',
  },
  description:
    'Set of 4 Mercedes G-Wagon W463 AMG Style 20" Alloy Wheels with Michelin Latitude Sport SUV tyres. These premium wheels feature satin black finish with machined edge detail, giving your G-Wagon the authentic AMG G63 look without the dealer cost. Tyres are correct load-rated for G-Class with good usable tread across the set.',
  features: [
    'No cracks, welds or structural damage',
    'Wheels run true',
    '7mm tread on all tyres',
    'Satin black finish with machined edge detail',
    'Direct bolt-on upgrade',
    'Michelin Latitude Sport premium tyres',
    'Correct load-rating for G-Class',
    'Authentic AMG G63 styling',
  ],
  compatibility: [
    'Mercedes G-Wagon W463 (all years up to W463a)',
    'Mercedes G350',
    'Mercedes G400',
    'Mercedes G500',
    'Mercedes G55 AMG',
    'Mercedes G63 AMG',
  ],
  condition: [
    'No cracks, welds or structural damage',
    'Wheels run true with no buckles',
    'Tyres have good usable tread across the set',
    'Professionally finished in satin black with machined edges',
  ],
  delivery: '3-5 working days (£95 pallet delivery)',
  deliveryOptions: [
    'Collection available - Free',
    'Assistance with loading provided',
    'Pallet delivery - £95 (3-5 working days)',
  ],
  returns: '14 days',
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--safe-bottom', 'env(safe-area-inset-bottom, 0px)');
    return () => {
      document.documentElement.style.removeProperty('--safe-bottom');
    };
  }, []);

  const enc = (s: string) => encodeURIComponent(s);
  const subject = `Enquiry: ${product.name}`;
  const body = [
    'Hi Yorkshire Wheel Specialist,',
    '',
    `I’m interested in: ${product.name}`,
    'Please confirm availability, best price and delivery/collection options.',
    '',
    'Thanks!',
  ].join('\n');

  const telHref = `tel:${phone}`;
  const mailHref = `mailto:${email}?subject=${enc(subject)}&body=${enc(body)}`;
  const waHref = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${enc(`${subject}\n\n${body}`)}`;

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="text-gray-500 hover:text-green-600">Shop</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 break-words">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          {/* Product Images (single, mobile-safe gallery) */}
<div className="space-y-3 min-w-0">
  {/* Badge sits outside the image so it can’t overlap the thumbnails */}
  <div className="inline-flex">
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${
        product.category === 'premium'
          ? 'bg-yellow-500 text-black'
          : product.category === 'new'
          ? 'bg-green-600 text-white'
          : product.category === 'refurbished'
          ? 'bg-yellow-500 text-black'
          : 'bg-blue-600 text-white'
      }`}
    >
      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
    </span>
  </div>

  {/* Main image — fully clipped, cannot bleed horizontally */}
  <div className="relative w-full aspect-[4/3] rounded-2xl bg-white shadow-lg overflow-hidden">
    <Image
      src={product.images[selectedImage]}
      alt={product.name}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
      priority
    />

    {/* Prev / Next controls are layered above the image only */}
    {product.images.length > 1 && (
      <>
        <button
          onClick={() =>
            setSelectedImage((prev) =>
              prev > 0 ? prev - 1 : product.images.length - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full hover:bg-white shadow"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() =>
            setSelectedImage((prev) =>
              prev < product.images.length - 1 ? prev + 1 : 0
            )
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full hover:bg-white shadow"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </>
    )}
  </div>

  {/* Thumbnails — exactly one strip, scrollable inside container */}
  {product.images.length > 1 && (
    <div
      className="flex gap-2 overflow-x-auto max-w-full px-1 py-1"
      role="tablist"
      aria-label="More photos"
    >
      {product.images.map((image, index) => (
        <button
          key={image}
          onClick={() => setSelectedImage(index)}
          className={`relative min-w-[72px] w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
            selectedImage === index
              ? 'border-green-600'
              : 'border-gray-200 hover:border-gray-300'
          }`}
          aria-label={`Show image ${index + 1}`}
        >
          <Image
            src={image}
            alt={`${product.name} ${index + 1}`}
            fill
            className="object-cover"
            sizes="80px"
          />
        </button>
      ))}
    </div>
  )}

          {/* Product Info */}
          <div className="space-y-5 sm:space-y-6 min-w-0">
            <div>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-green-700 text-sm sm:text-base font-medium">{product.brand}</span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {product.name}
              </h1>

              <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {typeof product.price === 'number' ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-extrabold text-green-700">
                      £{product.price}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-emerald-600/10 text-emerald-700 px-2.5 py-1 text-[11px] sm:text-xs font-semibold ring-1 ring-emerald-600/20">
                      or Best Offer
                    </span>
                  </>
                ) : (
                  <span className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Price on request <span className="text-gray-500">— or Best Offer</span>
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <Check className="w-5 h-5 text-green-700" />
                  <span className="text-green-700 text-sm sm:text-base font-medium">
                    In Stock ({product.stockCount} set available)
                  </span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed break-words">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Features</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {product.features.map((feature: string) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-700" />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden sm:block space-y-3">
              <a
                href={telHref}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 font-semibold bg-gray-900 text-white hover:bg-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              >
                <Phone className="w-5 h-5" />
                Call {formatPhone(phone)}
              </a>
              <a
                href={mailHref}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              >
                <Mail className="w-5 h-5" />
                Email {email}
              </a>

              {/* Returns link + dropdown (unchanged) */}
              <p className="mt-1 text-sm text-gray-500">
                By contacting us you agree to our{' '}
                <a
                  href="#returns"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('returns-drop');
                    if (el && 'open' in el) (el as HTMLDetailsElement).open = true;
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="underline decoration-dotted"
                >
                  returns policy
                </a>.
              </p>

              <details id="returns-drop" className="mt-4 rounded-xl bg-white/70 p-4 ring-1 ring-gray-200 open:shadow-inner">
                <summary className="cursor-pointer select-none text-sm font-semibold flex items-center justify-between text-gray-900">
                  Returns & Cancellations
                  <span className="ml-3 inline-block text-xs text-gray-500">(tap to expand)</span>
                </summary>
                <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  <p>
                    <strong>Change-of-mind (distance sales only):</strong> For consumer purchases arranged by
                    phone/email or online with delivery, you may cancel within <strong>14 days</strong> of delivery.
                    Items must be returned in the condition supplied. Return shipping (pallet) is at the buyer’s cost
                    unless agreed otherwise. We’ll refund within 14 days of receiving the goods back and may deduct for
                    any use beyond inspection.
                  </p>
                  <p>
                    <strong>On-premises purchases/collections:</strong> No change-of-mind returns, but your statutory
                    rights for faulty goods still apply.
                  </p>
                  <p>
                    <strong>Faulty or not-as-described:</strong> Contact us within <strong>30 days</strong> of
                    delivery/collection. We’ll arrange a repair, replacement or refund as required by law.
                  </p>
                  <p>
                    <strong>Exclusions:</strong> Custom refinishing/personalised work is non-returnable unless faulty.
                  </p>
                  <p>
                    <strong>How to return:</strong> Email <a href={`mailto:${email}`} className="underline decoration-dotted">{email}</a> with your order details and photos; we can book pallet collection at cost.
                  </p>
                </div>
              </details>
            </div>

            {/* Delivery */}
            <div className="pt-5 sm:pt-6 border-t">
              <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Delivery Options</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {product.deliveryOptions.map((option: string) => (
                  <li key={option} className="flex items-center gap-2 text-sm sm:text-base">
                    <Check className="w-4 h-4 text-green-700" />
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-5 sm:pt-6 border-t">
              <div className="text-center">
                <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-green-700 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-medium text-sm">Delivery</div>
                <div className="text-xs text-gray-600">{product.delivery}</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-7 h-7 sm:w-8 sm:h-8 text-green-700 mx-auto mb-1.5 sm:mb-2" />
                <div className="font-medium text-sm">Returns</div>
                <div className="text-xs text-gray-600">{product.returns}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Panels */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Specifications</h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4 py-2 border-b border-gray-100">
                      <span className="font-medium capitalize text-sm sm:text-base">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Vehicle Compatibility</h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {product.compatibility.map((vehicle: string) => (
                    <div key={vehicle} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-green-700" />
                      <span className="text-gray-700 text-sm sm:text-base">{vehicle}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs sm:text-sm text-green-800">
                    <strong>Direct Bolt-On:</strong> These wheels are a perfect direct fit for all W463 G-Wagon models.
                    Gives you the authentic AMG G63 look without the dealer premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 border-t">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Condition</h3>
              <ul className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {product.condition.map((item: string) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/" className="text-green-700 hover:text-green-800 underline underline-offset-4">
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div
        className="sm:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70"
        style={{ paddingBottom: 'var(--safe-bottom)' as React.CSSProperties['paddingBottom'] }}
        role="group"
        aria-label="Quick actions"
      >
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-3 font-semibold bg-gray-900 text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatPhone(p: string) {
  return p.replace(/^(\d{5})(\d{6})$/, '$1 $2');
}
