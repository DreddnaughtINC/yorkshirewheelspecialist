"use client";
import React, { useState, useEffect } from 'react';
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
  Zap
} from 'lucide-react';

const DetailedServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'powder-coating',
      icon: <Palette className="w-8 h-8" />,
      title: "Powder Coating",
      subtitle: "Factory-Grade Finish",
      description: "Our powder coating service provides a durable, long-lasting finish that's superior to traditional paint. Using electrostatic application and oven-curing at 200°C, we achieve a flawless, chip-resistant coating.",
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_16_15 PM.png",
      priceFrom: 85,
      duration: "3-5 days",
      warranty: "2 years",
      features: [
        "Complete strip and chemical cleaning",
        "Shot blasting for perfect adhesion",
        "Electrostatic powder application",
        "Oven curing at 200°C",
        "OEM and custom color matching",
        "Chip and corrosion resistant finish"
      ],
      process: [
        "Wheel inspection and damage assessment",
        "Complete stripping of old coating",
        "Shot blasting for surface preparation",
        "Powder application using electrostatic guns",
        "Oven curing for 20 minutes at 200°C",
        "Quality inspection and finishing"
      ],
      colors: ["OEM Silver", "Gloss Black", "Matt Black", "Anthracite", "Custom Colors"],
      popular: true
    },
    {
      id: 'diamond-cut',
      icon: <Diamond className="w-8 h-8" />,
      title: "Diamond Cut Repairs",
      subtitle: "CNC Precision Machining",
      description: "Restore the crisp, mirror-like finish of diamond cut wheels using our state-of-the-art CNC lathe. We recreate the original factory specification with precision machining.",
      image: "/images/services/car-wheel-with-new-tires-close-up.jpg",
      priceFrom: 95,
      duration: "4-6 days",
      warranty: "18 months",
      features: [
        "CNC lathe machining to OEM specification",
        "Perfect face geometry recreation",
        "High-quality clear lacquer protection",
        "Mirror-like diamond cut finish",
        "Precision balancing included",
        "Factory-standard appearance"
      ],
      process: [
        "Wheel assessment and measurement",
        "Removal of damaged lacquer and surface",
        "CNC machining to original specification",
        "Surface polishing and preparation",
        "Clear lacquer application",
        "Final inspection and balancing"
      ],
      specialNote: "Suitable for wheels with minor corrosion or lacquer damage"
    },
    {
      id: 'structural-repair',
      icon: <Hammer className="w-8 h-8" />,
      title: "Buckled & Cracked Repairs",
      subtitle: "Structural Restoration",
      description: "Professional repair of buckled rims and crack welding using specialized equipment. All repairs are pressure tested and balanced to ensure safety and performance.",
      image: "/images/services/welding-8445458_1280.jpg",
      priceFrom: 75,
      duration: "2-4 days",
      warranty: "12 months",
      features: [
        "Hydraulic straightening equipment",
        "TIG welding for crack repairs",
        "Pressure testing to 150% working pressure",
        "X-ray inspection available",
        "Professional balancing service",
        "Safety certification included"
      ],
      process: [
        "Structural damage assessment",
        "Hydraulic straightening if required",
        "Crack preparation and cleaning",
        "TIG welding with matching alloy",
        "Pressure testing and inspection",
        "Refinishing and balancing"
      ],
      safetyNote: "All structural repairs are pressure tested for safety"
    },
    {
      id: 'split-rim',
      icon: <Scissors className="w-8 h-8" />,
      title: "Split Rim Refurbishment",
      subtitle: "Multi-Piece Wheel Specialists",
      description: "Complete refurbishment of split rim wheels including disassembly, individual component restoration, new hardware, and professional reassembly with correct torque specifications.",
      image: "/images/services/2148194142.jpg",
      priceFrom: 150,
      duration: "5-7 days",
      warranty: "2 years",
      features: [
        "Complete wheel disassembly",
        "Individual component refurbishment",
        "New bolts and sealing hardware",
        "Professional reassembly service",
        "Torque specification compliance",
        "Air pressure testing"
      ],
      process: [
        "Careful wheel disassembly",
        "Component cleaning and assessment",
        "Individual piece refurbishment",
        "New hardware installation",
        "Professional reassembly",
        "Pressure testing and balancing"
      ],
      expertise: "Specialists in BBS, OZ, and custom split rims"
    },
    {
      id: 'smart-repair',
      icon: <Wand2 className="w-8 h-8" />,
      title: "SMART Repairs",
      subtitle: "Quick Cosmetic Fixes",
      description: "Small to Medium Area Repair Technology for minor scuffs, scratches, and kerb damage. Cost-effective solution that maintains wheel integrity while improving appearance.",
      image: "/images/services/man-fixing-wheel-bolts.jpg",
      priceFrom: 45,
      duration: "Same day",
      warranty: "6 months",
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
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_26_08 PM.png",
      priceFrom: 65,
      duration: "3-4 days",
      warranty: "18 months",
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
      callout: "Available 6 days a week",
      image: "/images/services/ChatGPT Image Aug 26, 2025, 09_48_26 PM.png"
    },
    {
      icon: <Route className="w-8 h-8" />,
      title: "Collection & Delivery",
      description: "Hassle-free door-to-door service with insured transportation",
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
              From minor scratches to complete refurbishments, we restore your wheels to showroom condition 
              using state-of-the-art equipment and premium materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Get Free Quote
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Book Consultation
              </button>
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
                  {/* Price Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg">
                    <div className="text-sm">From</div>
                    <div className="text-2xl">£{service.priceFrom}</div>
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
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.duration}</div>
                      <div className="text-sm text-gray-600">Turnaround</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">{service.warranty}</div>
                      <div className="text-sm text-gray-600">Warranty</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">4.9/5</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call for Quote
                    </button>
                    <button className="flex-1 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Enquiry
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Features & Process */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Features */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.specialNote && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> {service.specialNote}
                      </p>
                    </div>
                  )}
                </div>

                {/* Process */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 text-green-600 mr-3" />
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {(service.colors || service.expertise || service.ideal || service.prevention || service.safetyNote) && (
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-16">
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.colors && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Palette className="w-5 h-5 mr-2" />
                          Available Colors
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.colors.map((color, idx) => (
                            <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {(service.expertise || service.ideal || service.prevention || service.safetyNote) && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          {service.expertise ? 'Our Expertise' : 
                           service.ideal ? 'Ideal For' :
                           service.prevention ? 'Added Value' : 'Safety First'}
                        </h4>
                        <p className="text-white/90">
                          {service.expertise || service.ideal || service.prevention || service.safetyNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                      Learn More
                    </button>
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call 0114 123 4567
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Get Online Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServices;