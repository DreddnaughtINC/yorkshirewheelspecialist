'use client';

import React, { useMemo, useState } from 'react';
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

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'email' | 'phone';
};

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const isValid = useMemo(() => {
    const hasBasics =
      formData.name.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.phone.trim().length >= 7;
    return hasBasics;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) {
      setStatus('error');
      return;
    }
    setLoading(true);
    try {
      // TODO: POST to /api/contact (create later). For now we just simulate success.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'email',
      });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

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
                      <p className="text-sm text-green-700">Mon–Sat: 8am–6pm</p>
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
                        <p>Mon–Fri: 8:00–18:00</p>
                        <p>Saturday: 8:00–16:00</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-700 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Emergency Repairs</h4>
                      <p className="text-sm text-yellow-700">
                        Need urgent help? Call <strong>07455298619</strong> for same-day mobile service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h2>

                {/* Status banners */}
                {status === 'success' && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                    Thanks! Your request has been sent. We’ll be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                    Please check your details and try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-invalid={status === 'error' && !/\S+@\S+\.\S+/.test(formData.email)}
                      />
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
                        value={formData.phone}
                        onChange={handleChange}
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
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                      >
                        <option value="">Select a service</option>
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
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="text-green-600 focus:ring-green-600"
                        />
                        <span className="text-gray-700">Email</span>
                      </label>
                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-600"
                      placeholder="Please describe your wheel damage or requirements..."
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className={`flex-1 inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold transition-colors text-white ${
                        loading ? 'cursor-wait' : 'cursor-pointer'
                      } bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed`}
                      disabled={loading}
                      aria-busy={loading}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {loading ? 'Sending…' : 'Send Free Quote Request'}
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 px-8 py-4 font-semibold text-green-700 hover:bg-green-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Live Chat
                    </button>
                  </div>

                  {/* Privacy */}
                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our privacy policy. We’ll only use your
                    information to provide quotes and communicate about our services.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Service Areas</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-green-600 mb-1">Sheffield</h4>
                <p className="text-sm text-gray-700">City Centre, Hillsborough, Meadowhall, Chapeltown</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-1">Rotherham</h4>
                <p className="text-sm text-gray-700">Town Centre, Rawmarsh, Wickersley, Wath</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-1">Doncaster</h4>
                <p className="text-sm text-gray-700">Town Centre, Bentley, Rossington, Armthorpe</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-1">Barnsley</h4>
                <p className="text-sm text-gray-700">Town Centre, Penistone, Hoyland, Royston</p>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-700">
              Plus surrounding areas within 30 miles of Sheffield. Call to check if we cover your location.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
