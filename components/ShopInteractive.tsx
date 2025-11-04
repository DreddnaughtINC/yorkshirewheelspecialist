"use client";

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Phone, Mail, MessageSquare, Truck, ClipboardCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { product as productData, Product } from '../lib/shop';

type EnquiryForm = {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  message: string;
  contactPref: 'email' | 'phone' | 'whatsapp';
};

function encode(s: string) {
  return encodeURIComponent(s);
}

function buildMailto(subject: string, body: string, to?: string) {
  const address = to ?? '';
  return `mailto:${address}?subject=${encode(subject)}&body=${encode(body)}`;
}

function buildWhatsApp(text: string, phoneIntl?: string) {
  return phoneIntl
    ? `https://wa.me/${phoneIntl.replace(/[^\d]/g, '')}?text=${encode(text)}`
    : `https://wa.me/?text=${encode(text)}`;
}

const ShopInteractive: React.FC<{ product?: Product }> = ({ product = productData }) => {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState<EnquiryForm>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: '',
    contactPref: 'email',
  });

  const subject = `Enquiry: ${product.title}`;
  const compiledMessage = useMemo(() => {
    const base = [
      `Hi Yorkshire Wheel Specialist,`,
      ``,
      `I'm interested in: ${product.title}`,
      `Details: ${product.subtitle}`,
      `eBay listing: ${product.ebayUrl}`,
      ``,
      `My details:`,
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Postcode: ${form.postcode || '-'}`,
      `Preferred contact: ${form.contactPref}`,
      form.message ? `Message: ${form.message}` : '',
      ``,
      `Please let me know availability, price and delivery/collection options.`,
      `Thanks!`,
    ]
      .filter(Boolean)
      .join('\n');
    return base;
  }, [form, product]);

  const mailHref = buildMailto(subject, compiledMessage /* , 'sales@yws.co.uk' */);
  const waHref = buildWhatsApp(`${subject}\n\n${compiledMessage}` /* , '+44XXXXXXXXXX' */);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailHref;
  };

  const next = () => setActive((p) => (p + 1) % product.images.length);
  const prev = () => setActive((p) => (p - 1 + product.images.length) % product.images.length);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Gallery */}
      <div className="relative">
        <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/40">
          <Image
            key={product.images[active]}
            src={product.images[active]}
            alt={`${product.title} – image ${active + 1}`}
            fill
            className="object-contain transition-all duration-300"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <button onClick={prev} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {product.images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-lg overflow-hidden ring-1 ${i === active ? 'ring-yellow-400' : 'ring-white/10'} bg-black/30`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt={`thumb ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </button>
          ))}
        </div>
      </div>

      {/* Product summary + enquiry */}
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{product.title}</h1>
          <p className="mt-1 text-lg text-neutral-300">{product.subtitle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/30 px-3 py-1 text-xs">
              <CheckCircle2 className="h-4 w-4" /> In stock — Contact for price
            </span>
            <Link href={product.ebayUrl ?? '#'} target="_blank" className="text-xs rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 hover:bg-white/10">
              View on eBay (optional)
            </Link>
          </div>
        </header>

        {/* Key points */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-neutral-200">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-yellow-400" /> {h}
            </li>
          ))}
        </ul>

        {/* Specs */}
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <h2 className="font-semibold mb-3">Specifications</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {Object.entries(product.specs).map(([k, v]) => (
              <div key={k} className="grid grid-cols-[10ch,1fr] sm:grid-cols-[14ch,1fr] gap-3">
                <dt className="text-neutral-400">{k}</dt>
                <dd className="text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Fitment / logistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <h3 className="font-semibold">Suitable for</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-200 list-disc list-inside">
              {product.suitableFor.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <h3 className="font-semibold">Logistics</h3>
            <ul className="mt-2 space-y-1 text-sm text-neutral-200">
              {product.logistics.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <Truck className="h-4 w-4 opacity-70" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enquiry form — no API, opens Mail app or WhatsApp */}
        <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-white/10 p-5">
          <h2 className="text-xl font-semibold">Request to Buy</h2>
          <p className="text-sm text-neutral-300 mt-1">No fees, no checkout — send us your details and we’ll confirm availability, price and delivery.</p>

          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" aria-label="Name" className="rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 col-span-1 sm:col-span-1" />
            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" aria-label="Email" className="rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" aria-label="Phone" className="rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input value={form.postcode} onChange={(e) => setForm({ ...form, postcode: e.target.value })} placeholder="Postcode (for delivery quote)" aria-label="Postcode" className="rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <select value={form.contactPref} onChange={(e) => setForm({ ...form, contactPref: e.target.value as EnquiryForm['contactPref'] })} aria-label="Preferred contact method" className="rounded-xl bg-white/95 text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="email">Prefer email</option>
              <option value="phone">Prefer phone</option>
              <option value="whatsapp">Prefer WhatsApp</option>
            </select>
            <div className="sm:col-span-2">
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Anything else we should know? (trade-in, fitting, etc.)" aria-label="Message" rows={4} className="w-full rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
              <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300" title="Open your email app with the enquiry prefilled">
                <Mail className="h-5 w-5" /> Send via Email
              </button>
              <a href={waHref} target="_blank" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold bg-emerald-500/90 hover:bg-emerald-500" rel="noopener noreferrer" title="Open WhatsApp with the enquiry prefilled">
                <MessageSquare className="h-5 w-5" /> Send via WhatsApp
              </a>
              <a href="tel:" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold bg-white/10 hover:bg-white/20 ring-1 ring-white/10" title="Call us">
                <Phone className="h-5 w-5" /> Call us
              </a>
            </div>

            <details className="sm:col-span-2 mt-2 text-sm text-neutral-400">
              <summary className="cursor-pointer">See the message that will be sent</summary>
              <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-black/40 p-3 ring-1 ring-white/10 text-neutral-300 text-xs">{compiledMessage}</pre>
              <div className="mt-2">
                <button type="button" onClick={async () => { await navigator.clipboard.writeText(`${subject}\n\n${compiledMessage}`); alert('Enquiry text copied to clipboard.'); }} className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 px-3 py-1 text-xs">
                  <ClipboardCheck className="h-4 w-4" /> Copy text
                </button>
              </div>
            </details>
          </form>

          <p className="mt-3 text-xs text-neutral-400">Prefer to purchase through a marketplace?{' '}<Link href={product.ebayUrl ?? '#'} target="_blank" className="underline decoration-dotted underline-offset-4">Buy via eBay</Link>.</p>
        </div>
      </div>
    </section>
  );
};

export default ShopInteractive;
