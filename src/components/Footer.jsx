import React from 'react';
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 ">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
      {/* Brand */}
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-2xl font-bold text-blue-600">Travella</h2>
        <p className="mt-2 text-sm">Discover beautiful places and unique stays around the world.</p>
        <div className="flex gap-3 mt-4">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400" />
        </div>
      </div>

      {/* Explore */}
      <div>
        <h4 className="font-semibold mb-3">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#destinations" className="hover:underline">Destinations</a></li>
          <li><a href="#experiences" className="hover:underline">Experiences</a></li>
          <li><a href="#popular" className="hover:underline">Popular Places</a></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#faq" className="hover:underline">Help Center</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          <li><a href="#guide" className="hover:underline">Booking Guide</a></li>
          <li><a href="#safety" className="hover:underline">Safety Info</a></li>
        </ul>
      </div>

      {/* Hosting */}
      <div>
        <h4 className="font-semibold mb-3">Hosting</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#become-a-host" className="hover:underline">Become a Host</a></li>
          <li><a href="#resources" className="hover:underline">Host Resources</a></li>
          <li><a href="#community" className="hover:underline">Community Forum</a></li>
          <li><a href="#responsible" className="hover:underline">Responsible Hosting</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-semibold mb-3">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#cookies" className="hover:underline">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-300 mt-6 py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Travella. All rights reserved. | Ghana
    </div>
  </footer>
  )
}

export default Footer;