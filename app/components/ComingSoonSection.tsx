"use client";

import React from "react";
import { FaApple, FaPlay } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ComingSoonSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="h-[428px] flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('/comig_soon.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h2
          className={`text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to Simplify Your Life?
        </h2>

        {/* Description */}
        <p
          className={`text-lg lg:text-xl text-white mb-8 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          Easily manage car washes, track fines, book essential services, and
          shop for parts all in one simple, reliable app designed to make car
          ownership effortless.
        </p>

        {/* Download Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <button className="group cursor-pointer flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 min-w-[180px] active:scale-95">
            <FaApple className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-gray-700 transition-colors duration-300">
              Download for iOS
            </span>
          </button>

          <button className="group flex cursor-pointer items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 min-w-[180px] active:scale-95">
            <FaPlay className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:text-gray-700 transition-colors duration-300">
              Download for Android
            </span>
          </button>
        </div>

        {/* Compatibility Text */}
        <p
          className={`text-white text-sm opacity-80 transition-all duration-1000 ${
            isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
        >
          Available on iOS 14+ and Android 8+
        </p>
      </div>
    </div>
  );
};

export default ComingSoonSection;
