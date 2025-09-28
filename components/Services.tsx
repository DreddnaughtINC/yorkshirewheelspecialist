import React from "react";
import {
  Wrench,
  Sparkles,
  Truck,
  ShoppingBag,
  Clock,
  Shield,
  Palette,
  Diamond,
  Hammer,
  Scissors,
  Wand2,
  Factory,
  Route,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

/**
 * Services page – Updated per brief
 * - Accurate service set (powder coating, diamond cut, etc.)
 * - Trust strip before selection
 * - Card CTAs, token colours, accessibility
 * - Convenience services with CTAs
 * - Process section retained
 * - JSON-LD for SEO
 */

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image?: string; // background image
}

// 2) Replace your ServiceCard with this background version
const ServiceCard = ({ service }: { service: Service }) => (
  <article
    id={service.title.toLowerCase().replace(/\s|\/+/, "-")}
    className="relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary"
  >
    {/* Background */}
    <div
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url('${service.image || "/images/services/placeholder.jpg"}')` }}
      aria-hidden
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative p-6 flex flex-col h-full text-white">
      <div className="mb-4 text-[var(--brand-yellow)]">{service.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-sm/6 text-white/90 mb-4">{service.description}</p>
      <ul className="text-sm text-white/80 mb-6 space-y-1">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-[var(--brand-yellow)] rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center gap-3">
        <a href="/services" className="btn btn-primary">Get a Quote</a>
        <a
          href={`/gallery`}
          className="text-sm font-medium hover:opacity-90 underline underline-offset-4"
        >
          View examples →
        </a>
      </div>
    </div>
  </article>
);

const ConvenienceCard = ({ service }: { service: Service }) => (
  <article
    className="relative rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary"
  >
    {/* Background */}
    <div
      className="absolute inset-0 bg-center bg-cover"
      style={{ backgroundImage: `url('${service.image || "/images/services/placeholder.jpg"}')` }}
      aria-hidden
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative p-6 flex flex-col h-full text-white">
      <div className="mb-4 text-[var(--brand-yellow)]">{service.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-sm/6 text-white/90 mb-4">{service.description}</p>
      <ul className="text-sm text-white/80 mb-6 space-y-1">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-[var(--brand-yellow)] rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center gap-3">
        <a href="#quote" className="btn btn-primary">Book Collection</a>
        <a href="tel:+44" className="btn btn-secondary">Call</a>
      </div>
    </div>
  </article>
);


const Services = () => {
  // Accurate core services
  const services: Service[] = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Powder Coating",
      description:
        "Factory-grade, oven-cured finish in OEM or custom colours for long-lasting protection.",
      features: ["Full strip & prep", "Oven-cured", "OEM & custom colours"],
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_16_15 PM.png",
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Diamond Cut Repairs",
      description:
        "CNC machining restores the crisp, reflective diamond-cut face with protective lacquer.",
      features: ["CNC lathe", "OEM match", "Clear lacquer"],
      image: "/images/services/car-wheel-with-new-tires-close-up.jpg",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Buckled / Cracked Alloys",
      description:
        "Straightening and crack welding with balance & safety checks before return.",
      features: ["Straightening", "Crack welding", "Balance & safety check"],
      image: "/images/services/welding-8445458_1280.jpg",
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Split Rims",
      description:
        "Specialist split-rim refurbishment incl. disassembly, new hardware and reseal.",
      features: ["Disassemble", "New bolts", "Reseal & torque"],
      image: "/images/services/2148194142.jpg",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "SMART Repairs",
      description:
        "Localised refinishing for scuffs and scrapes—fast, tidy and cost-effective.",
      features: ["Spot repair", "Colour match", "Same-day options"],
      image: "/images/services/man-fixing-wheel-bolts.jpg",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Kerbed / Corroded Alloys",
      description:
        "Kerb rash removal and corrosion treatment for a clean, even finish.",
      features: ["Kerb rash removal", "Corrosion treatment", "Refinish to suit"],
      image: "images/services/ChatGPT Image Aug 26, 2025, 09_26_08 PM.png",
    },
  ];

  const convenience: Service[] = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Mobile Service",
    description: "We come to you across Yorkshire—home or workplace—minimising downtime.",
    features: ["On-site repair", "Yorkshire-wide", "Flexible scheduling"],
    image: "/images/services/ChatGPT Image Aug 26, 2025, 09_48_26 PM.png",
  },
  {
    icon: <Route className="w-7 h-7" />,
    title: "Wheel Collection & Return",
    description: "Door-to-door collection, refurb in our facility, and return fitted to your vehicle.",
    features: ["Insured transport", "Workshop quality", "Hassle-free"],
    image: "/images/services/ChatGPT Image Aug 26, 2025, 09_54_42 PM.png",
  },
];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-foreground">
            Professional Wheel Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From cosmetic restoration to structural safety fixes—engineered for durability and a factory-fresh finish.
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

         {/* Process Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg p-8 mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20"></div>
          </div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-12 text-white">Our Proven Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">1</div>
              <h4 className="font-semibold mb-2 text-white">Assessment</h4>
              <p className="text-gray-300 text-sm">Detailed inspection and damage evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">2</div>
              <h4 className="font-semibold mb-2 text-white">Preparation</h4>
              <p className="text-gray-300 text-sm">Professional cleaning and surface preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">3</div>
              <h4 className="font-semibold mb-2 text-white">Repair</h4>
              <p className="text-gray-300 text-sm">Expert repair using premium materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">4</div>
              <h4 className="font-semibold mb-2 text-white">Finish</h4>
              <p className="text-gray-300 text-sm">Professional coating and quality check</p>
            </div>
          </div>
          </div>
        </div>

        {/* Convenience Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {convenience.map((s) => (
            <ConvenienceCard key={s.title} service={s} />
          ))}
        </div>
      </div>

      {/* JSON-LD for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Alloy Wheel Refurbishment & Repairs",
            provider: { "@type": "LocalBusiness", name: "Yorkshire Wheel Specialist" },
            areaServed: "Yorkshire",
            serviceType: [
              "Powder coating",
              "Diamond cut repairs",
              "Buckled/cracked alloy repairs",
              "Split rim refurbishment",
              "SMART repairs",
              "Kerbed/corroded alloy repairs",
              "Mobile service",
              "Wheel collection and return",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Alloy Wheel Services",
              itemListElement: services.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, description: s.description },
              })),
            },
          }),
        }}
      />
    </section>
  );
};

export default Services;
