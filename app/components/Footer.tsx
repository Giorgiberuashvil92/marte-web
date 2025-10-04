import React from "react";
import { FaApple, FaPlay } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#316AED] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={72}
                  height={54}
                  objectFit="fill"
                />
              </div>
              <h3 className="text-2xl font-bold">Cargo</h3>
            </div>
            <p className="text-white text-sm leading-relaxed max-w-md">
              Simplifying your everyday life with reliable services and smart
              solutions at your fingertips.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white">+1231231</li>
              <li className="text-white">@1231231</li>
              <li className="text-white">მირიან მეფის 1</li>
            </ul>
          </div>

          {/* Download Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">Download</h4>
            <div className="space-y-3">
              {/* App Store Button */}
              <Image
                src="/appstore.png"
                alt="app store"
                width={135}
                height={40}
                className="rounded cursor-pointer hover:scale-105 transition-all duration-300"
              />
              <Image
                src="/googleplay.png"
                alt="google play"
                width={135}
                height={40}
                className="rounded cursor-pointer hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white opacity-45 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-sm">
            © 2025 EverydayApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
