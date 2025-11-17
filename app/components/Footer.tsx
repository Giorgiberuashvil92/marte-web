import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0066FF] blur-xl opacity-30"></div>
                <Image
                  src="/logo.png"
                  alt="Marte" 
                  width={60}
                  height={34}
                  className="relative z-10 w-15 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-black">Marte</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-georgian mb-6">
              შენი მანქანის მართვის საუკეთესო პლატფორმა. 
              ყველაფერი რაც გჭირდება ერთ ადგილას.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-georgian">კომპანია</h4>
            <ul className="space-y-3">
              {[
                { title: "ჩვენ შესახებ", href: "/about" },
                { title: "სერვისები", href: "/services" },
                { title: "კონტაქტი", href: "/contact" },
                { title: "კარიერა", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#0066FF] transition-colors duration-300 text-sm font-georgian"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-georgian">მხარდაჭერა</h4>
            <ul className="space-y-3">
              {[
                { title: "დახმარება", href: "#" },
                { title: "FAQ", href: "#faq" },
                { title: "პირობები", href: "#" },
                { title: "კონფიდენციალურობა", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#0066FF] transition-colors duration-300 text-sm font-georgian"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-georgian">კონტაქტი</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-[#0066FF]">📧</span>
                <span className="text-white/60 text-sm font-georgian">info@cargo.ge</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#0066FF]">📞</span>
                <span className="text-white/60 text-sm font-georgian">+995 555 123 456</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#0066FF]">📍</span>
                <span className="text-white/60 text-sm font-georgian">
                  თბილისი, საქართველო
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm font-georgian">
              © 2025 Marte. ყველა უფლება დაცულია.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-white/40 hover:text-[#0066FF] text-sm transition-colors duration-300 font-georgian"
              >
                პირობები
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-[#0066FF] text-sm transition-colors duration-300 font-georgian"
              >
                კონფიდენციალურობა
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-[#0066FF] text-sm transition-colors duration-300 font-georgian"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
