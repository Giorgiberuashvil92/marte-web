import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative bg-[#F6F8FE] overflow-hidden">
      {/* Abstract lines overlay */}

      <div className="container mx-auto px-6 py-28">
        <div className="gap-12 items-center flex flex-row justify-between ">
          {/* Left Section - Text and Buttons */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-[96px] font-black leading-[100px] text-[#1F2E47] uppercase items-start flex flex-col">
                <span
                  className="block animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  ALL IN ONE
                </span>
                <span
                  className="block text-center animate-slide-in-right"
                  style={{ animationDelay: "0.4s" }}
                >
                  APP
                </span>
              </h1>

              <p
                className="text-xl text-[#8B98AF] font-medium leading-[28px] max-w-lg uppercase animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                ALL YOUR CAR ESSENTIALS IN ONE APP: SERVICES, PARTS,
                EMERGENCIES, AND SAVINGS.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <FaApple width={24} height={24} />
                <span className="font-semibold text-[20px] leading-[24px] font-georgian  text-white">
                  Download app
                </span>
              </button>

              <button className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                <FaGooglePlay />
                <span className="font-semibold text-[20px] leading-[24px] font-georgian text-[#1F2E47]">
                  Download app
                </span>
              </button>
            </div>
          </div>

          {/* Right Section - Car Image */}
        </div>
      </div>
      <div
        className="absolute top-10 -right-50 w-1/2 h-full animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="relative w-full h-full animate-float">
          <Image
            src="/header_car.png"
            alt="Silver convertible sports car"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
