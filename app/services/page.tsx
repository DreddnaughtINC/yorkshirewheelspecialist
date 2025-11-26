"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Palette, 
  Diamond, 
  Hammer, 
  Scissors, 
  Wand2, 
  Sparkles, 
  Truck, 
  Route,
  Clock,
  Shield,
  Star,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Award,
  Zap,
  Paintbrush
} from 'lucide-react';

const DetailedServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
  id: "powder-coating",
  icon: <Palette className="w-8 h-8" />,
  title: "Full Powder-Coated Refurbishments",
  subtitle: "Durable, Corrosion-Resistant Finish",
  description:
    "Powder coating alloy wheels gives a shield of protection against corrosion, whether you’re refurbishing damaged wheels or simply changing the colour to your desired look. Using a durable heat and electrostatic bonding process, the powder is attracted to the positively charged metal surface and cured to form a tough, long-lasting finish.",
  image: "/images/services/powder.jpg",
  priceFrom: "£85 per wheel",
  duration: "3–5 days",
  warranty: "12 months",
  features: [
    "Shield-like protection against corrosion",
    "Ideal for damaged wheels or colour changes",
    "Electrostatic powder application for strong adhesion",
    "Full prime & powder coat in the colour of your choice",
    "Choice of gloss, satin or matt finish",
    "Quality assurance check before refit"
  ],
  process: [
    "Wheels are removed from the vehicle and tyres, weights and valves are removed.",
    "Alloys are chemically stripped back to bare aluminium, removing old paint, dirt and grime.",
    "Corrosion and damage are repaired and treated to stabilise the surface.",
    "Alloys are shot blasted to ensure a clean, even key for coating.",
    "Wheels are primed and powder coated in the colour of your choice.",
    "The finish is cured in the oven to create a strong, durable bond.",
    "Alloys are finished in gloss, satin or matt, then quality checked.",
    "Tyres, weights and valves are refitted, and wheels are balanced (where applicable)."
  ],
  colors: [
    "OEM Silver",
    "Gloss Black",
    "Matt Black",
    "Anthracite",
    "Standard Colours",
    "Custom Colours"
  ],
  popular: true
},
   {
  id: "diamond-cut",
  icon: <Diamond className="w-8 h-8" />,
  title: "Full Diamond Cut Refurbishments",
  subtitle: "In-House CNC Diamond Cutting",
  description:
    "As luxury cars become more popular, most vehicles now leave showrooms with diamond cut finished wheels. This is where the alloy is powder coated and then put onto a CNC diamond cutting machine, which removes a fine layer from the face of the wheel, leaving the aluminium showing and creating a crisp two-tone finish.",
  image: "/images/services/car-wheel-with-new-tires-close-up.jpg",
  priceFrom: "£95 per wheel",
  duration: "4–6 days",
  warranty: "12 months",
  features: [
    "Full diamond cut refurbishment, not just cosmetic touch-ups",
    "In-house CNC diamond cutting for precise, repeatable results",
    "Two-tone finish with exposed aluminium face and coloured background",
    "Prime & powder coat in the colour of your choice before cutting",
    "Lacquer options: high gloss, satin or matt for protection and shine",
    "Quality assurance check before tyres are refitted and wheels are balanced"
  ],
  process: [
    "Remove tyres, weights and valves from the wheels.",
    "Chemically strip the alloy to remove existing paint, lacquer, dirt and grime.",
    "Carry out corrosion and damage repair on the wheel face and edges.",
    "Shot blast the alloy to ensure a clean, even surface for coating.",
    "Prime and powder coat the wheel in the colour of your choice.",
    "Diamond cut the face of the wheel in-house on our CNC machine to create the two-tone finish.",
    "Lacquer the wheel with your chosen finish: gloss, satin or matt.",
    "Perform a final quality assurance check, then refit tyres, weights and valves and balance the wheels."
  ],
  specialNote:
    "Ideal for restoring factory diamond cut wheels or transforming standard alloys with a premium two-tone finish."
},
    {
  id: "structural-repair",
  icon: <Hammer className="w-8 h-8" />,
  title: "Wheel Straightening & Alloy Welds",
  subtitle: "Structural Repair & Safety Checks",
  description:
    "Straighten buckled wheels from pothole or kerb damage to help prevent vibration, wheel wobbles and leaking air. We also weld cracked alloys to stop air pressure loss and restore the structural integrity of the wheel. All repairs are checked and balanced to keep you safe on the road.",
  image: "/images/services/welding-8445458_1280.jpg",
  priceFrom: "£75 per wheel",
  duration: "2–4 days",
  warranty: "12 months",
  features: [
    "Straightening of buckled wheels from pothole or kerb damage",
    "Alloy welds to repair cracked rims and prevent air loss",
    "Structural assessment before any repair work begins",
    "Careful reshaping to reduce vibration and wheel wobbles",
    "Air-leak and safety checks after repair",
    "Wheel balancing included after repairs are completed"
  ],
  process: [
    "Initial structural damage assessment to identify buckles and cracks.",
    "Wheels are removed from the vehicle and set up for repair.",
    "Straightening of buckled areas to restore the correct shape and reduce vibration.",
    "Preparation and cleaning around any cracks to ensure a clean weld.",
    "Alloy welding to repair cracked areas and help prevent air pressure loss.",
    "Air-leak and safety checks, followed by wheel balancing and final inspection."
  ],
  safetyNote:
    "All structural repairs are carried out with safety as the priority. If a wheel is damaged beyond safe repair, we will always advise replacement rather than attempting a repair."
},
    {
  id: "respray-colour-change",
  icon: <Paintbrush className="w-8 h-8" />,
  title: "Alloy Wheel Respray (Colour Change)",
  subtitle: "Colour Change & OEM Match",
  description:
    "Alloy colour change or custom colours to transform your wheels. Choose from our standard finishes (black, white, gold, gunmetal grey, silver or anthracite) or go bold with custom effects such as sparkle, candy, pearlescent, shimmer, iridescent, neon, metallic and transition colours, as well as chrome and shadow chrome. OEM colour matching is also available to achieve your desired look.",
  image: "/images/services/resprayed.jpg", // update path to your asset
  priceLabel: "Contact for quote",         // replaces priceFrom
  duration: "2–3 days",
  warranty: "12 months",
  features: [
    "Full cosmetic respray and colour change",
    "Standard colours: black, white, gold, gunmetal grey, silver, anthracite",
    "Custom finishes: sparkle, candy, pearlescent, shimmer, iridescent, neon, metallic, transition colours",
    "Chrome and shadow chrome style options",
    "OEM colour matching to your desired look",
    "Preparation, primer, basecoat and durable clear coat"
  ],
      process: [
        "Inspection & colour consultation",
        "Surface prep: repair minor scuffs/kerb rash",
        "Primer application & cure",
        "Colour basecoat application",
        "2K clear coat and oven cure",
        "Final polish, refit & QC check"
      ],
      popular: true
    },
    {
      id: 'smart-repair',
      icon: <Wand2 className="w-8 h-8" />,
      title: "SMART Repairs",
      subtitle: "Quick Cosmetic Fixes",
      description: "Small to Medium Area Repair Technology for minor scuffs, scratches, and kerb damage. Cost-effective solution that maintains wheel integrity while improving appearance.",
      image: "/images/services/man-fixing-wheel-bolts.jpg",
      priceFrom: "45 Per Wheel",
      duration: "Same day",
      warranty: "12 months",
      features: [
        "Localized repair area only",
        "Color matching technology",
        "Quick turnaround time",
        "Cost-effective solution",
        "Maintains wheel structure",
        "Professional finish quality"
      ],
      process: [
        "Damage area assessment",
        "Surface preparation and cleaning",
        "Filler application if required",
        "Color matching and painting",
        "Clear coat application",
        "Final polishing and inspection"
      ],
      ideal: "Perfect for minor kerb damage and small scratches"
    },
    {
      id: 'kerb-corrosion',
      icon: <Sparkles className="w-8 h-8" />,
      title: "Kerb & Corrosion Repair",
      subtitle: "Complete Restoration",
      description: "Comprehensive repair service for kerb damage and corrosion issues. We restore wheels to original condition using professional techniques and premium materials.",
      image: "/images/services/kerbed.jpg",
      priceFrom: "65 Per Wheel",
      duration: "3-4 days",
      warranty: "12 months",
      features: [
        "Kerb rash removal and reshaping",
        "Corrosion treatment and prevention",
        "Professional welding if required",
        "Surface preparation and priming",
        "Color matching and refinishing",
        "Protective coating application"
      ],
      process: [
        "Damage extent evaluation",
        "Kerb damage reshaping",
        "Corrosion removal and treatment",
        "Surface preparation",
        "Primer and paint application",
        "Final inspection and quality check"
      ],
      prevention: "Includes corrosion prevention treatment"
    }
  ];

  const convenienceServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Mobile Repair Service",
      description: "We come to you across Yorkshire with our fully equipped mobile workshop",
      features: ["On-site repairs", "Yorkshire-wide coverage", "Flexible scheduling"],
      callout: "Available 5 days a week",
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_48_26 PM.png"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Collection & Delivery",
      description: "Hassle-free door-to-door service",
      features: ["Free collection", "Secure transport", "Fitted return service"],
      callout: "Within 25 miles of Sheffield",
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_54_42 PM.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Professional Wheel
              <span className="text-green-400"> Services</span>
            </h1>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
    From minor scratches to kerb scuffs, we restore your wheels on-site from our mobile van using professional spray refinishing and colour matching.
  </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Call Now button */}
  <a
    href="tel:07455298619"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
  >
    Call Now
  </a>

  {/* Email for a Free Quote button */}
  <Link
    href="/contact"
    className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
  >
    Email for Free Quote
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-8">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeService === index
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.icon}
                <span>{service.title}</span>
                {service.popular && (
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">Popular</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-500 ${
                activeService === index ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Service Image */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-600/20 to-yellow-400/20 rounded-2xl p-8">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-auto"
                    />
                  </div>
                  {/* Quote Badge (replaces the old price badge) */}
                  <div
                    className="absolute -bottom-6 -right-6 rounded-xl px-5 py-3
                              bg-amber-400 text-black shadow-lg font-semibold
                              dark:bg-amber-500 dark:text-black/90"
                    aria-label="Contact for quote"
                  >
                    Contact for Quote
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-green-600">{service.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-lg text-green-600">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                  {/* Service Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                  {/* Pick-up & Return */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-neutral-900">
                    <Truck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900 dark:text-white">Pick-up & Return</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Available</div>
                  </div>

                  {/* Warranty (unchanged) */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-neutral-900">
                    <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900 dark:text-white">{service.warranty}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Warranty</div>
                  </div>

                  {/* Optional third stat — swap to something shop-specific */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-neutral-900">
                    <Route className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900 dark:text-white">Within 25 miles</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Sheffield area</div>
                  </div>
                </div>


                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:07455298619"
                      aria-label="Call Yorkshire Wheel Specialist on 07455298619 for a quote"
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Quote
                    </a>

                    <Link
                      href="/contact"
                      aria-label="Email enquiry - open contact form"
                      className="flex-1 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Email Enquiry
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Convenience Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Convenience Services</h2>
            <p className="text-xl text-gray-600">Making wheel repairs as convenient as possible for you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {convenienceServices.map((service, index) => (
              <div key={index} className="relative bg-gray-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
                <div className="relative p-8 text-white">
                  <div className="text-yellow-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg inline-block mb-6 font-semibold">
                    {service.callout}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="tel:07455298619"
                      aria-label="Call Yorkshire Wheel Specialist on 07455298619"
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      Call Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>

                    <Link
                      href="/contact"
                      aria-label="Book now - open contact form"
                      className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Restore Your Wheels?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free, no-obligation quote today. Our experts are ready to help you choose 
            the perfect service for your wheels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07455298619"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 07455298619
            </a>
            <Link
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Online Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServices;