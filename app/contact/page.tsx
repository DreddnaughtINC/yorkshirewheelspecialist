// app/contact/page.tsx
'use client';

import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

const Page = () => {
  // Use your Formspree form ID here
  const [state, handleSubmit] = useForm('xdkprvyg');

  // Success screen (inline banner at the top of the form is also shown below)
  const SuccessBanner = (
    <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
      Thanks! Your request has been sent. We’ll be in touch shortly.
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/pexels-introspectivedsgn-30474840.jpg"
            alt="Alloy wheel workshop background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/60 to-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-600/20 px-4 py-1.5 text-sm font-semibold text-green-300 ring-1 ring-green-500/30">
              <ShieldCheck className="h-4 w-4" /> Free, no-obligation quotes
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
              Get Your Free Quote Today
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              Restore your wheels to showroom condition. We cover all of Yorkshire with
              workshop and mobile services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative -mt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-green-600 p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">07455298619</p>
                      <p className="text-sm text-green-700">Mon–Fri: 8am–5pm</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-green-600 p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">joe@yorkshirewheelspecialist.co.uk</p>
                      <p className="text-sm text-green-700">Usually reply within 2 hours</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-green-600 p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Workshop</h3>
                      <p className="text-gray-700">
                        123 Industrial Estate
                        <br />
                        Sheffield S1 2AB
                      </p>
                      <p className="text-sm text-green-700">Mobile service available</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="shrink-0 rounded-lg bg-green-600 p-3">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p>Mon–Fri: 8:00–17:00</p>
                        <p>Saturday: Closed</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h2>

                {/* Status banner (success) */}
                {state.succeeded && SuccessBanner}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Set a subject for the email in Formspree */}
                  <input type="hidden" name="_subject" value="New Website Quote Enquiry — Yorkshire Wheel Specialist" />

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        placeholder="07455298619"
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="wheel-repair">Wheel Repair</option>
                        <option value="refurbishment">Full Refurbishment</option>
                        <option value="mobile-service">Mobile Service</option>
                        <option value="wheel-purchase">Wheel Purchase</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Contact Method
                    </legend>
                    <div className="flex gap-6">
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          defaultChecked
                          className="text-green-600 focus:ring-green-600"
                        />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          className="text-green-600 focus:ring-green-600"
                        />
                        <span className="text-gray-700">Phone</span>
                      </label>
                    </div>
                  </fieldset>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                      placeholder="Please describe your wheel damage or requirements..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Optional honeypot for spam */}
                  <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="flex-1 inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold transition-colors text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {state.submitting ? 'Sending…' : 'Send Free Quote Request'}
                    </button>
                  </div>

                  {/* Global errors (if any) */}
                  <ValidationError errors={state.errors} className="text-sm text-red-600" />

                  {/* Privacy */}
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our privacy policy. We’ll only use your
                    information to provide quotes and communicate about our services.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Page;
