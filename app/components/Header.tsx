"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { pagesData } from "../data/pagesData";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066FF] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image
                src="/logo.png"
                alt="Marte"
                width={80}
                height={45}
                className="relative z-10 w-20 h-11 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-2xl font-black text-[#0A0A0A] tracking-tight">
              Marte
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {pagesData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative text-sm font-semibold tracking-wide transition-all duration-300 font-georgian ${
                  pathname === item.href
                    ? "text-[#0066FF]"
                    : "text-[#333333] hover:text-[#0066FF]"
                }`}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#3385FF] rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="group relative overflow-hidden bg-[#0A0A0A] hover:bg-[#0066FF] text-white px-6 py-3 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center space-x-2">
              <FaApple className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide font-georgian">
                ჩამოტვირთე
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
