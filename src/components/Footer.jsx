import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] px-4 py-10">
      <div className="max-w-7xl mx-auto bg-[#f7f6f3] rounded-[36px] px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="SkyForge Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-semibold text-gray-900 leading-tight">
                  SkyForge System
                </p>
                <p className="font-semibold text-gray-900 leading-tight">
                  Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              TECHNOLOGY, TAILORED TO YOU
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Product Development</li>
              <li>AI & Data Solutions</li>
              <li>Business Optimization & Support</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">
              Products
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Product Data Management</li>
              <li>Solutions for Manufacturing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Home</li>
              <li>About us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gray-500" />
                <span>info@buildwithskyforge.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-gray-500" />
                <span>+91 9625-880081</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gray-500" />
                <span>
                  7349, D-7 Vasant Kunj<br />
                  New Delhi, Delhi – 110070
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500">
          © 2025 SkyForge System Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
