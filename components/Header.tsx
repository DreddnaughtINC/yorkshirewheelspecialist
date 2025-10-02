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
              <span>0114 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@yorkshirewheelspecialist.com</span>
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
              <a href="/shop" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Shop</a>
              <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Gallery</a>
              <a href="/business" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Business</a>
              <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Get Quote
              </button>
              <button className="border-2 border-yellow-400 text-yellow-600 px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-white transition-colors">
                Book Mobile
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
                <a href="/services" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
                <a href="/shop" className="text-gray-700 hover:text-green-600 font-medium">Shop</a>
                <a href="/gallery" className="text-gray-700 hover:text-green-600 font-medium">Gallery</a>
                <a href="/business" className="text-gray-700 hover:text-green-600 font-medium">Business</a>
                <a href="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium">Get Quote</button>
                  <button className="border-2 border-yellow-400 text-yellow-600 px-6 py-2 rounded-lg font-medium">Book Mobile</button>
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