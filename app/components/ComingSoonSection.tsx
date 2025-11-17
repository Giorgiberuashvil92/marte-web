"use client";

import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ComingSoonSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/comig_soon.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0066FF]/20 to-[#0A0A0A]/95"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-white tracking-wide">
              მზად ხარ?
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-5xl lg:text-7xl font-black text-white leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
          >
            გაამარტივე შენი{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ცხოვრება</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#0066FF] -rotate-1"></span>
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-georgian transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
          >
            ჩამოტვირთე MARTE დღესვე და დაიწყე დროის დაზოგვა. 
            ყველა სერვისი ერთ ადგილას, მუდმივ ხელმისაწვდომობაში.
          </p>

          {/* Download Buttons */}
          <div
            className={`flex flex-wrap gap-5 justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
          >
            <button className="group relative overflow-hidden bg-white hover:bg-[#F5F5F5] text-[#0A0A0A] px-8 py-4 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-white/50 hover:scale-105 hover:-translate-y-1">
              <div className="relative z-10 flex items-center space-x-3">
                <FaApple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-60 font-georgian">ჩამოტვირთე</div>
                  <div className="text-sm font-bold font-georgian">App Store</div>
                </div>
              </div>
            </button>

            <a
              href="/downloads/marte.apk"
              download="Marte.apk"
              className="group relative overflow-hidden bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 inline-flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <div className="relative z-10 flex items-center space-x-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80 font-georgian">ჩამოტვირთე APK</div>
                  <div className="text-sm font-bold font-georgian">Android</div>
                </div>
              </div>
            </a>
          </div>

          {/* Info Text */}
          <p
            className={`text-sm text-white/60 font-georgian transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
          >
            ხელმისაწვდომია iOS 14+ და Android 8+ ვერსიებზე
          </p>

          {/* Decorative Line */}
          <div
            className={`w-24 h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
