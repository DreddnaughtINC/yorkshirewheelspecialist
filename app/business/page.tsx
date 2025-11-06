 'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Truck,
  Calculator,
  Users,
  Clock,
  Shield,
  Award,
  Phone,
  Mail,
  CheckCircle,
  FileText,
  PoundSterling,
  Handshake,
  Star,
  Wallet,
} from 'lucide-react';

type CalculatorState = {
  fleetSize: number;
  wheelsPerVehicle: number;
  damageRate: number;
  newWheelCost: number;
  repairCost: number;
};

type Industry = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  caseStudy: string;
};

const Page = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorState>({
    fleetSize: 50,
    wheelsPerVehicle: 4,
    damageRate: 20,
    newWheelCost: 300,
    repairCost: 85,
  });

  const [selectedIndustry, setSelectedIndustry] = useState<string>('fleet');

  const damagedWheels = Math.round(
    (calculatorData.fleetSize *
      calculatorData.wheelsPerVehicle *
      calculatorData.damageRate) /
      100
  );
  const newWheelsCost = damagedWheels * calculatorData.newWheelCost;
  const repairCost = damagedWheels * calculatorData.repairCost;
  const annualSavings = Math.max(newWheelsCost - repairCost, 0);

  const industries: Industry[] = [
    {
      id: 'fleet',
      name: 'Fleet Management',
      icon: <Truck className="w-8 h-8" />,
      description:
        'Delivery companies, logistics firms, and corporate fleets',
      benefits: [
        'Volume discounts up to 40%',
        'Scheduled maintenance programs',
        'Fleet tracking and reporting',
      ],
      caseStudy:
        'Saved Sheffield Logistics £15,000 annually on wheel replacements',
    },
    {
      id: 'dealership',
      name: 'Car Dealerships',
      icon: <Building2 className="w-8 h-8" />,
      description:
        'New and used car dealers, trade preparation services',
      benefits: [
        'Trade-in refurbishment',
        'Quick turnaround times',
        'Showroom-quality finishes',
      ],
      caseStudy:
        'Increased used car values by average £800 per vehicle for Premium Motors',
    },
    {
      id: 'rental',
      name: 'Rental Companies',
      icon: <Users className="w-8 h-8" />,
      description: 'Car rental, leasing companies, and hire services',
      benefits: [
        'End-of-lease restoration',
        'Damage assessment reports',
        'Insurance claim support',
      ],
      caseStudy:
        'Reduced end-of-lease charges by 60% for Enterprise Rental Solutions',
    },
    {
      id: 'insurance',
      name: 'Insurance Companies',
      icon: <Shield className="w-8 h-8" />,
      description:
        'Motor insurance providers and accident repair networks',
      benefits: [
        'Approved repairer status',
        'Direct billing available',
        'Guaranteed quality standards',
      ],
      caseStudy:
        'Processed 500+ insurance claims with 98% customer satisfaction',
    },
  ];

  const servicePackages = [
    {
      name: 'Essential Business',
      price: 'From £65',
      features: [
        'Standard repair turnaround (3-5 days)',
        'Basic collection & delivery',
        'Monthly invoicing',
        '6-month warranty',
        'Email progress updates',
      ],
      ideal: 'Small businesses with occasional needs',
    },
    {
      name: 'Professional Fleet',
      price: 'From £55',
      features: [
        'Priority turnaround (1-2 days)',
        'Dedicated account manager',
        'Flexible payment terms',
        '12-month warranty',
        'Real-time tracking portal',
        'Volume discounts available',
      ],
      ideal: 'Medium fleets (10-100 vehicles)',
      popular: true,
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom Pricing',
      features: [
        'Same-day emergency service',
        'On-site mobile workshops',
        'Bespoke service agreements',
        '24-month warranty',
        'Dedicated hotline support',
        'Comprehensive reporting suite',
      ],
      ideal: 'Large fleets (100+ vehicles)',
    },
  ];

  const testimonials = [
    {
      company: 'Yorkshire Transport Ltd',
      contact: 'Fleet Manager',
      text: 'Yorkshire Wheel Specialist has transformed our maintenance costs. Their mobile service means zero downtime for our delivery fleet.',
      savings: '£25,000 annually',
      logo: 'YT',
    },
    {
      company: 'Premier Car Sales',
      contact: 'General Manager',
      text: 'The quality of refurbishment is outstanding. Our used cars now sell faster and for higher prices thanks to their wheel restoration.',
      savings: '£800 per vehicle',
      logo: 'PC',
    },
    {
      company: 'City Taxi Services',
      contact: 'Operations Director',
      text: 'Reliable, professional service with transparent pricing. They understand the demands of commercial vehicle operations.',
      savings: '40% cost reduction',
      logo: 'CT',
    },
  ];

  const selected = industries.find((i) => i.id === selectedIndustry)!;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Building2 className="w-8 h-8 text-green-400" />
                <span className="text-green-400 font-semibold">B2B Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Business Wheel <span className="text-green-400">Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Reduce fleet maintenance costs by up to 60% with our professional wheel repair
                and refurbishment services. Trusted by Yorkshire&apos;s leading businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" aria-label="Get Business Quote - open contact form" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
                  Get Business Quote
                </Link>
                <Link href="/contact" aria-label="Schedule Consultation - open contact form" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
                  Schedule Consultation
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">12</div>
                  <div className="text-sm text-gray-300">Month Warranty Cover</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">60%</div>
                  <div className="text-sm text-gray-300">Average Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">24 hr</div>
                  <div className="text-sm text-gray-300">Response Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-600/20 to-yellow-400/20 rounded-2xl p-8">
                <div className="relative w-full h-[360px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/services/pexels-introspectivedsgn-30474840.jpg"
                    alt="Business fleet wheel service"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored wheel repair and maintenance programs for every business sector
            </p>
          </div>

          {/* Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry.icon}
                <span>{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Details (render only selected to avoid layout jumps) */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-green-600">{selected.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900">{selected.name}</h3>
                </div>

                <p className="text-lg text-gray-700 mb-8">{selected.description}</p>

                <div className="space-y-4 mb-8">
                  {selected.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h4>
                <div className="space-y-4">
                  <a href="tel:07455298619" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Industry Quote
                  </a>
                  <a href="/contact" className="w-full border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calculator className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Business Savings Calculator</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how much your business could save by choosing wheel repair over replacement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Your Fleet Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Fleet Size (vehicles)</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={calculatorData.fleetSize}
                    onChange={(e) =>
                      setCalculatorData((s) => ({
                        ...s,
                        fleetSize: Number(e.target.value || 0),
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Wheels per Vehicle</label>
                  <select
                    value={calculatorData.wheelsPerVehicle}
                    onChange={(e) =>
                      setCalculatorData((s) => ({
                        ...s,
                        wheelsPerVehicle: Number(e.target.value),
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  >
                    <option value={4}>4 (Cars/Vans)</option>
                    <option value={6}>6 (Large Vans)</option>
                    <option value={8}>8 (Trucks)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Annual Damage Rate (%)</label>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    value={calculatorData.damageRate}
                    onChange={(e) =>
                      setCalculatorData((s) => ({
                        ...s,
                        damageRate: Number(e.target.value),
                      }))
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-300 mt-1">
                    <span>5%</span>
                    <span className="font-semibold">{calculatorData.damageRate}%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">New Wheel Cost (£)</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={calculatorData.newWheelCost}
                      onChange={(e) =>
                        setCalculatorData((s) => ({
                          ...s,
                          newWheelCost: Number(e.target.value || 0),
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Repair Cost (£)</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={calculatorData.repairCost}
                      onChange={(e) =>
                        setCalculatorData((s) => ({
                          ...s,
                          repairCost: Number(e.target.value || 0),
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Your Annual Savings</h3>

              <div className="space-y-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-green-100 mb-1">Damaged Wheels per Year</div>
                  <div className="text-3xl font-bold">{damagedWheels} wheels</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-green-100 mb-1">Replacement Cost</div>
                    <div className="text-xl font-bold">£{newWheelsCost.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-sm text-green-100 mb-1">Repair Cost</div>
                    <div className="text-xl font-bold">£{repairCost.toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-yellow-400 text-black rounded-lg p-6 text-center">
                  <div className="text-sm font-semibold mb-2">TOTAL ANNUAL SAVINGS</div>
                  <div className="text-4xl font-bold">£{annualSavings.toLocaleString()}</div>
                  <div className="text-sm mt-2">
                    {newWheelsCost > 0
                      ? `${Math.round((annualSavings / newWheelsCost) * 100)}% cost reduction`
                      : '—'}
                  </div>
                </div>

                <a href="mailto:joe@yorkshirewheelspecialist.co.uk" className="w-full bg-white text-green-600 py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Get Your Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Business */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Express service available with same-day completion for urgent repairs</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600">Save up to 60% compared to wheel replacement with volume discounts</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Account Management</h3>
              <p className="text-gray-600">Dedicated account managers and flexible payment terms for businesses</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600">ISO certified processes with extended warranties for business clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reduce Your Fleet Costs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of Yorkshire businesses saving thousands on wheel maintenance.
            Get your free business consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07455298619" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Business Line: 07455298619
            </a>
            <a href="mailto:joe@yorkshirewheelspecialist.co.uk" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Request Business Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
