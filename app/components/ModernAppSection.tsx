"use client";

import React from "react";
import Image from "next/image";
import { FaApple, FaPlay } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ModernAppSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <div className=" bg-[#F6F8FE] py-20">
      <div className="container mx-auto  flex flex-row justify-between w-full px-6">
        <div className="flex flex-row justify-around w-full items-center">
          {/* Left Section - Phone Mockups */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Image
              src="/phone.png"
              alt="modern app"
              width={657}
              height={577}
              className="object-cover"
            />
          </div>

          {/* Right Section - Text and Buttons */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Modern App
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <FaApple className="w-6 h-6" />
                <span>Download app</span>
              </button>

              <button className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <FaPlay className="w-4 h-4" />
                <span>Download app</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernAppSection;
