"use client";

import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ComingSoonSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleDownloadAPK = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Force download on all devices
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/downloads/marte.apk';
    link.download = 'Marte.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              onClick={handleDownloadAPK}
              className="group relative overflow-hidden bg-gradient-to-br from-[#3DDC84] to-[#30D158] hover:from-[#32C673] hover:to-[#28BA4A] text-white px-8 py-4 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-1 inline-flex items-center border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <div className="relative z-10 flex items-center space-x-3">
                {/* Android Robot */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90 font-medium font-georgian">ჩამოტვირთე APK</div>
                  <div className="text-base font-black tracking-wide">Android</div>
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
