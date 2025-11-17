"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ModernAppSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0066FF]/10 blur-3xl rounded-full scale-75"></div>
              
              <Image
                src="/phone.png"
                alt="თანამედროვე აპლიკაცია"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-8 w-24 h-24 border-4 border-[#0066FF]/30 rounded-2xl rotate-12"></div>
              <div className="absolute bottom-1/4 -right-8 w-32 h-32 border-4 border-[#0A0A0A]/10 rounded-full"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-1000 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                ინოვაცია
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-black text-[#0A0A0A] leading-tight">
              თანამედროვე{" "}
              <span className="text-gradient">ტექნოლოგია</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-[#333333] leading-relaxed font-georgian">
              ჩვენი აპლიკაცია შექმნილია უახლესი ტექნოლოგიებით, რათა 
              უზრუნველყოს სწრაფი, მარტივი და უსაფრთხო გამოცდილება. 
              მართე შენი მანქანის ყველა ასპექტი ერთი პლატფორმიდან.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              {[
                { icon: "⚡", title: "სწრაფი", desc: "მყისიერი დამუშავება" },
                { icon: "🔒", title: "უსაფრთხო", desc: "ბანკის დონის დაცვა" },
                { icon: "🎯", title: "ზუსტი", desc: "ინტელექტუალური ალგორითმები" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-[#F5F5F5] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] font-georgian">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#666666] font-georgian">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAppSection;
