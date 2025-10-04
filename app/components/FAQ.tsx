"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { faqData } from "../data/faqData";
import { useFAQStore } from "../store/faqStore";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQ = () => {
  const { toggleItem, isOpen } = useFAQStore();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  return (
    <div className="bg-[#F6F8FE] py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                faqVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: faqVisible ? `${index * 0.2}s` : "0s",
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-700">
                  {item.question}
                </span>
                <FaChevronRight
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    isOpen(item.id) ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
