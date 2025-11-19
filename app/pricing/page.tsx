"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaCreditCard, FaShieldAlt, FaClock, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

const paymentOptions = [
  {
    id: "fine",
    title: "ჯარიმის გადახდა",
    icon: FaCreditCard,
    description: "გადაიხადე ტრანსპორტის ჯარიმები მოსახერხებელი განვადებით",
    features: [
      "0% საპროცენტო განვადება",
      "3-12 თვე განვადება",
      "მყისიერი დამტკიცება",
      "ონლაინ გადახდა",
      "SMS შეხსენებები",
    ],
    color: "from-[#0066FF] to-[#0052CC]",
  },
  {
    id: "service",
    title: "სერვისის გადახდა",
    icon: FaShieldAlt,
    description: "გადაიხადე მანქანის სერვისები და შეკეთება განვადებით",
    features: [
      "0-5% საპროცენტო განვადება",
      "6-24 თვე განვადება",
      "დიდი თანხების განვადება",
      "პარტნიორ სერვისებზე ფასდაკლება",
      "პრიორიტეტული მხარდაჭერა",
    ],
    color: "from-[#3DDC84] to-[#30D158]",
  },
  {
    id: "parts",
    title: "ნაწილების გადახდა",
    icon: FaMobileAlt,
    description: "იყიდე ავტონაწილები და აქსესუარები განვადებით",
    features: [
      "0% საპროცენტო განვადება",
      "3-6 თვე განვადება",
      "ყველა პარტნიორ მაღაზიაში",
      "სწრაფი მიწოდება",
      "გარანტია",
    ],
    color: "from-[#FF6B35] to-[#F7931E]",
  },
];

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("3");

  const calculateMonthly = () => {
    if (!amount || !selectedOption) return 0;
    const total = parseFloat(amount);
    const monthsNum = parseInt(months);
    if (isNaN(total) || isNaN(monthsNum) || monthsNum === 0) return 0;
    return (total / monthsNum).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                გადახდა
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              გადაიხადე{" "}
              <span className="text-gradient">განვადებით</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              გადაიხადე ჯარიმები, სერვისები და ნაწილები მოსახერხებელი განვადებით. 
              0% საპროცენტო განვადება ყველა სერვისზე.
            </p>
          </div>
        </div>

        {/* Payment Options */}
        <div className="container mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paymentOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 cursor-pointer ${
                    selectedOption === option.id
                      ? "border-[#0066FF] ring-4 ring-[#0066FF]/10"
                      : "border-[#E5E5E5] hover:border-[#0066FF]/50"
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-2 font-georgian">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#666666] font-georgian mb-6">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#0066FF] rounded-full flex items-center justify-center mt-0.5">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-[#333333] font-georgian">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Selected Indicator */}
                  {selectedOption === option.id && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#0066FF] rounded-full flex items-center justify-center">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Calculator Section */}
        {selectedOption && (
          <div className="container mx-auto px-6 mb-16">
            <div className="max-w-2xl mx-auto bg-[#F5F5F5] rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 text-center font-georgian">
                განვადების კალკულატორი
              </h2>

              <div className="space-y-6">
                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-bold text-[#0A0A0A] mb-2 font-georgian">
                    თანხა (₾)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="მაგ: 500"
                    className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 text-lg font-bold font-georgian"
                  />
                </div>

                {/* Months Select */}
                <div>
                  <label className="block text-sm font-bold text-[#0A0A0A] mb-2 font-georgian">
                    განვადების ვადა
                  </label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 text-lg font-bold font-georgian"
                  >
                    <option value="3">3 თვე</option>
                    <option value="6">6 თვე</option>
                    <option value="9">9 თვე</option>
                    <option value="12">12 თვე</option>
                    {selectedOption === "service" && (
                      <>
                        <option value="18">18 თვე</option>
                        <option value="24">24 თვე</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Result */}
                {amount && parseFloat(amount) > 0 && (
                  <div className="bg-white rounded-2xl p-6 border-2 border-[#0066FF]">
                    <div className="text-center space-y-2">
                      <div className="text-sm text-[#666666] font-georgian">ყოველთვიური გადასახადი</div>
                      <div className="text-4xl font-black text-[#0066FF] font-georgian">
                        {calculateMonthly()} ₾
                      </div>
                      <div className="text-xs text-[#666666] font-georgian">
                        სულ: {amount} ₾ / {months} თვე
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="w-full py-4 px-6 bg-[#0A0A0A] hover:bg-[#0066FF] disabled:bg-[#E5E5E5] disabled:text-[#999999] text-white rounded-2xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian"
                >
                  განვადების დაწყება
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#0A0A0A] text-center mb-12 font-georgian">
              რატომ განვადება Marte-ში?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FaClock,
                  title: "სწრაფი დამტკიცება",
                  desc: "განვადების მოთხოვნა დამტკიცდება რამდენიმე წუთში",
                },
                {
                  icon: FaShieldAlt,
                  title: "უსაფრთხო გადახდა",
                  desc: "ბანკის დონის დაცვა და უსაფრთხო გადახდის სისტემა",
                },
                {
                  icon: FaCreditCard,
                  title: "0% საპროცენტო",
                  desc: "ყველა სერვისზე 0% საპროცენტო განვადება",
                },
                {
                  icon: FaMobileAlt,
                  title: "მარტივი მართვა",
                  desc: "მართე განვადება აპლიკაციიდან, ნებისმიერ დროს",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E5E5E5]"
                  >
                    <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-georgian">
                      {benefit.title}
                    </h3>
                    <p className="text-[#666666] font-georgian">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
