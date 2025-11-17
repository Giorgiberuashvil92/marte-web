"use client";

import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Blue Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: "1s"}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#0066FF]/5 border border-[#0066FF]/20 rounded-full px-4 py-2 animate-fade-in-up">
              <span className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-[#0066FF] tracking-wide">
                ახალი 2025
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl lg:text-7xl font-black leading-tight animate-fade-in-up text-[#0A0A0A]"
              style={{ animationDelay: "0.1s" }}
            >
              მართე შენი{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient">მანქანა</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#0066FF]/20 -rotate-1"></span>
              </span>{" "}
              <br />
              ერთი შეხებით
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-xl text-[#333333] leading-relaxed max-w-xl font-georgian animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              ყველა სერვისი, ნაწილი და გადაუდებელი დახმარება ერთ ადგილას. 
              დაზოგე დრო და ფული ჩვენი ინტელექტუალური პლატფორმით.
            </p>

            {/* Download Buttons */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button className="group relative overflow-hidden bg-[#0A0A0A] hover:bg-[#0066FF] text-white px-8 py-4 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="relative z-10 flex items-center space-x-3">
                  <FaApple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80 font-georgian">ჩამოტვირთე</div>
                    <div className="text-sm font-bold font-georgian">App Store</div>
                  </div>
                </div>
              </button>

              <a 
                href="/downloads/marte.apk" 
                download="Marte.apk"
                onClick={handleDownloadAPK}
                className="group relative overflow-hidden bg-gradient-to-br from-[#3DDC84] to-[#30D158] hover:from-[#32C673] hover:to-[#28BA4A] text-white border-2 border-[#3DDC84] px-8 py-4 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-1 inline-flex items-center"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center space-x-3">
                  {/* Android Robot */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90 font-medium">ჩამოტვირთე APK</div>
                    <div className="text-base font-black tracking-wide">Android</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 pt-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
                <div className="text-3xl font-black text-[#0A0A0A]">10,000+</div>
                <div className="text-sm text-[#666666] font-georgian">მომხმარებელი</div>
              </div>
              <div className="w-px bg-[#E5E5E5]"></div>
              <div>
                <div className="text-3xl font-black text-[#0A0A0A]">50+</div>
                <div className="text-sm text-[#666666] font-georgian">პარტნიორი</div>
              </div>
              <div className="w-px bg-[#E5E5E5]"></div>
              <div>
                <div className="text-3xl font-black text-[#0A0A0A]">24/7</div>
                <div className="text-sm text-[#666666] font-georgian">მხარდაჭერა</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative z-10">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/30 to-transparent blur-3xl scale-90"></div>
              
              {/* Phone Image */}
              <div className="relative animate-float">
                <Image
                  src="/header_car.png"
                  alt="Cargo App"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-20 -left-10 bg-white p-4 rounded-2xl shadow-2xl animate-float border border-[#E5E5E5]" style={{animationDelay: "0.5s"}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <div className="text-xs text-[#666666] font-georgian">დაზოგე</div>
                  <div className="text-lg font-black text-[#0A0A0A]">30%</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-10 bg-white p-4 rounded-2xl shadow-2xl animate-float border border-[#E5E5E5]" style={{animationDelay: "1s"}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#0A0A0A] rounded-xl flex items-center justify-center text-white text-xl">
                  🚗
                </div>
                <div>
                  <div className="text-xs text-[#666666] font-georgian">სწრაფი</div>
                  <div className="text-lg font-black text-[#0A0A0A] font-georgian">მიწოდება</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
