import React from 'react';
import { Star, Shield, Truck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-yellow-400/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sheffield's Premier
              <span className="text-green-400"> Alloy Wheel</span>
              <span className="text-yellow-400"> Specialists</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Professional wheel repairs, refurbishments, and sales. Mobile service available 
              across Yorkshire. Transform damaged wheels back to showroom condition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* Call Now button */}
            <a
              href="tel:07455298619"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
            >
              Call Now
            </a>

            {/* Email for Free Quote button */}
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
            >
              Get Free Quote
            </a>
          </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Guaranteed<br />Quality</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Mobile<br />Service</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Same Day<br />Repairs</p>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Trusted<br />Nationally</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-600/20 to-yellow-400/20 rounded-2xl p-8">
              <img
                src="\images\services\logo.jpeg" // ✅ served from /public
                alt="Professional alloy wheel repair"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black px-6 py-4 rounded-xl font-bold shadow-lg">
<div className="text-2xl">Trusted</div>
<div className="text-sm">By Drivers Across Yorkshire</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;