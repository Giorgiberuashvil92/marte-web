"use client";

import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { faqData } from "../data/faqData";
import { useFAQStore } from "../store/faqStore";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQ = () => {
  const { toggleItem, isOpen } = useFAQStore();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
              კითხვები
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-[#0A0A0A]">
            ხშირად დასმული{" "}
            <span className="text-gradient">კითხვები</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white border-2 border-[#E5E5E5] hover:border-[#0066FF] rounded-2xl transition-all duration-500 overflow-hidden ${
                faqVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${isOpen(item.id) ? "shadow-2xl border-[#0066FF]" : "shadow-lg"}`}
              style={{
                transitionDelay: faqVisible ? `${index * 0.15}s` : "0s",
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-300"
              >
                <span className="text-lg font-bold text-[#0A0A0A] font-georgian pr-4">
                  {item.question}
                </span>
                
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isOpen(item.id)
                      ? "bg-[#0066FF] text-white rotate-180"
                      : "bg-[#F5F5F5] text-[#0A0A0A] group-hover:bg-[#0066FF] group-hover:text-white"
                  }`}
                >
                  {isOpen(item.id) ? (
                    <FaMinus className="w-4 h-4" />
                  ) : (
                    <FaPlus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-[#E5E5E5]">
                    <p className="text-[#666666] leading-relaxed font-georgian">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
