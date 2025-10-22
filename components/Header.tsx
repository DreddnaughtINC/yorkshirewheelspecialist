"use client";
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>07455298619</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>joe@yorkshirewheelspecialist.co.uk</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Sheffield & Yorkshire Mobile Service</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size="sm" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="/services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
              <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Gallery</a>
              <a href="/business" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Business</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
              <a href="/shop" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Shop</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+447455298619"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:joe@yorkshirewheelspecialist.co.uk?subject=Alloy%20Wheel%20Quote"
                className="border-2 border-yellow-400 text-yellow-600 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-white transition-colors"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="/services" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
                <a href="/shop" className="text-gray-700 hover:text-green-600 font-medium">Shop</a>
                <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
                <a href="/business" className="text-gray-700 hover:text-green-600 font-medium">Business</a>
                <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>

                {/* Mobile CTA buttons */}
                <div className="flex flex-col space-y-2 pt-4">
                  {/* Call Now button */}
                  <a
                    href="tel:07455298619"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Call Now
                  </a>

                  {/* Email for Free Quote button */}
                  <a
                    href="mailto:joe@yorkshirewheelspecialist.co.uk?subject=Free%20Alloy%20Wheel%20Quote&body=Hi%20Joe,%0D%0A%0D%0AI'd%20like%20a%20free%20quote%20for%20my%20alloy%20wheels.%20Please%20contact%20me%20back.%0D%0A%0D%0AThanks,"
                    className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black px-6 py-2 rounded-lg font-medium text-center transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;