"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkprvyg"); // <-- Your Formspree form ID

  if (state.succeeded) {
    return (
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you!</h2>
        <p className="text-lg text-gray-700">Your message has been sent — we'll get back to you shortly.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to restore your wheels to perfect condition? Contact us for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
              <ContactMethod icon={<Phone />} title="Phone" value="07455298619" note="Mon-Fri: 8am-5pm" />
              <ContactMethod icon={<Mail />} title="Email" value="joe@yorkshirewheelspecialist.co.uk" note="Usually reply within 2 hours" />
              <ContactMethod icon={<MapPin />} title="Location" value="Sheffield, South Yorkshire" note="Mobile service available" />
              <ContactMethod icon={<Clock />} title="Opening Hours" value="Mon–Fri 8:00–17:00" />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Full Name *" name="name" type="text" required />
                  <InputField label="Email Address *" name="email" type="email" required />
                </div>

                {/* Phone + Service */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Phone Number *" name="phone" type="tel" required />
                  <SelectField label="Service Required" name="service" options={[
                      "Wheel Repair", "Full Refurbishment", "Mobile Service", "Wheel Purchase", "Other"
                  ]} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message / Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 resize-none"
                    placeholder="Please describe your wheel damage or requirements..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="flex-1 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Free Quote Request
                  </button>
                  
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-6">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* UI Helpers */
const ContactMethod = ({ icon, title, value, note }: any) => (
  <div className="flex items-start space-x-4">
    <div className="bg-green-600 p-3 rounded-lg text-white">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{value}</p>
      {note && <p className="text-sm text-green-600">{note}</p>}
    </div>
  </div>
);

const InputField = ({ label, name, type, required }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
    />
  </div>
);

const SelectField = ({ label, name, options }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <select name={name} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600">
      <option value="">Select a service</option>
      {options.map((opt: string) => <option key={opt} value={opt.toLowerCase()}>{opt}</option>)}
    </select>
  </div>
);
