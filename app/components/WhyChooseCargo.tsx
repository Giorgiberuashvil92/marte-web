"use client";

import React from "react";
import { featureCards } from "../data/featureCards";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChooseCargo = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 bg-[#F5F5F5] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-lg">
            <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
              რატომ ჩვენ
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-[#0A0A0A] mb-6">
            ყველაფერი რაც{" "}
            <span className="text-gradient">გჭირდება</span>
          </h2>

          <p className="text-lg text-[#666666] max-w-3xl mx-auto font-georgian">
            ერთ აპლიკაციაში მიიღე წვდომა ყველა სერვისზე, 
            რომელიც შენს მანქანას სჭირდება
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#0066FF]/20 ${
                  cardsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/0 to-[#0066FF]/0 group-hover:from-[#0066FF]/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 ${card.iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-black text-[#0A0A0A] mb-4 font-georgian">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[#666666] leading-relaxed font-georgian">
                  {card.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0066FF] group-hover:w-full transition-all duration-500 rounded-b-3xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCargo;
