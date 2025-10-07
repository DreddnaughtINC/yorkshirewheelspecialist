import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Logo size="md" />
            </div>
            <p className="text-gray-300 mb-6">
              Sheffield's premier alloy wheel repair, refurbishment, and sales specialist. 
              Serving Yorkshire with quality workmanship and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Wheel Repair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Refurbishment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Mobile Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Wheel Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Crack Welding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Diamond Cut Finish</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Industrial Estate</p>
                  <p className="text-gray-300">Sheffield S1 2AB</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">07455298619</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">joe@yorkshirewheelspecialist.co.uk</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Opening Hours</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Fri: 8:00am - 6:00pm</p>
                <p>Saturday: 8:00am - 4:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Yorkshire Wheel Specialist. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;