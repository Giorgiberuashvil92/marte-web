"use client";

import React from "react";
import { featureCards } from "../data/featureCards";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChooseCargo = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Cargo?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  cardsVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${
                    card.iconColor
                  } rounded-2xl flex items-center justify-center mb-6 ${
                    cardsVisible ? "animate-pulse-slow" : ""
                  }`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCargo;
