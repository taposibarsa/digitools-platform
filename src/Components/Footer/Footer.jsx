import React from "react";
import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#081326] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and
              businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                <FaYoutube size={16} />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                <FaFacebookF size={16} />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:scale-110 transition">
                <FaXTwitter size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;