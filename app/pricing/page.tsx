"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaCreditCard, FaShieldAlt, FaClock, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const serviceTypes = [
  "ტრანსპორტის ჯარიმა",
  "ავტორეცხვა",
  "ტექნიკური მომსახურება",
  "ავტონაწილები",
  "საწვავი",
  "დაზღვევა",
  "გადაუდებელი დახმარება",
  "სხვა",
];

export default function Pricing() {
  const [formData, setFormData] = useState({
    serviceType: "",
    amount: "",
    months: "3",
    name: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // აქ შეიძლება API call ან form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const calculateMonthly = () => {
    if (!formData.amount) return 0;
    const total = parseFloat(formData.amount);
    const monthsNum = parseInt(formData.months);
    if (isNaN(total) || isNaN(monthsNum) || monthsNum === 0) return 0;
    return (total / monthsNum).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                განვადება
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              განვადება{" "}
              <span className="text-gradient">ყველაფერზე</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              შეავსე ფორმა და მიიღე განვადება რამდენიმე წუთში. 
              <strong className="text-[#0A0A0A]"> უპრობლემოდ, ყოველგვარი დაბრკოლების გარეშე.</strong>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#E5E5E5]">
              <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 text-center font-georgian">
                განვადების მოთხოვნა
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#3DDC84] rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-4 font-georgian">
                    მოთხოვნა გაიგზავნა!
                  </h3>
                  <p className="text-[#666666] font-georgian mb-6">
                    ჩვენი გუნდი დაგიკავშირდება რამდენიმე წუთში.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#0066FF] font-bold font-georgian hover:underline"
                  >
                    ახალი მოთხოვნა
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                      რას ავსებ? <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 text-lg font-georgian"
                    >
                      <option value="">აირჩიე სერვისი</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                      რამდენ თანხაზე? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        required
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        placeholder="მაგ: 500"
                        min="0"
                        step="0.01"
                        className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 text-lg font-bold font-georgian"
                      />
                      <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#666666] font-bold">
                        ₾
                      </span>
                    </div>
                  </div>

                  {/* Months */}
                  <div>
                    <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                      რამდენ თვეზე გინდა განვადება? <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.months}
                      onChange={(e) => setFormData({ ...formData, months: e.target.value })}
                      className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 text-lg font-georgian"
                    >
                      <option value="3">3 თვე</option>
                      <option value="6">6 თვე</option>
                      <option value="9">9 თვე</option>
                      <option value="12">12 თვე</option>
                      <option value="18">18 თვე</option>
                      <option value="24">24 თვე</option>
                    </select>
                  </div>

                  {/* Monthly Payment Preview */}
                  {formData.amount && parseFloat(formData.amount) > 0 && (
                    <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-2xl p-6 text-white">
                      <div className="text-center">
                        <div className="text-sm opacity-90 mb-2 font-georgian">ყოველთვიური გადასახადი</div>
                        <div className="text-4xl font-black mb-2 font-georgian">
                          {calculateMonthly()} ₾
                        </div>
                        <div className="text-sm opacity-80 font-georgian">
                          სულ: {formData.amount} ₾ / {formData.months} თვე
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E5]">
                    <div>
                      <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                        სახელი <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="თქვენი სახელი"
                        className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                        ტელეფონი <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+995 555 123 456"
                        className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#0A0A0A] mb-3 font-georgian">
                        ელ-ფოსტა
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 bg-[#F5F5F5] rounded-2xl border-2 border-[#E5E5E5] focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-5 px-6 bg-[#0A0A0A] hover:bg-[#0066FF] text-white rounded-2xl font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 font-georgian"
                  >
                    გაგზავნა
                  </button>

                  <p className="text-xs text-center text-[#666666] font-georgian">
                    გაგზავნით თქვენ ეთანხმებით ჩვენს პირობებს და კონფიდენციალურობის პოლიტიკას
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#0A0A0A] text-center mb-12 font-georgian">
              რატომ Marte?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FaCheck,
                  title: "0% საპროცენტო",
                  desc: "ყველა სერვისზე 0% საპროცენტო განვადება",
                },
                {
                  icon: FaClock,
                  title: "სწრაფი დამტკიცება",
                  desc: "რამდენიმე წუთში მიიღებ დამტკიცებას",
                },
                {
                  icon: FaShieldAlt,
                  title: "უსაფრთხო",
                  desc: "ბანკის დონის დაცვა და უსაფრთხო გადახდა",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E5E5E5] text-center"
                  >
                    <div className="w-12 h-12 bg-[#0066FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-georgian">
                      {benefit.title}
                    </h3>
                    <p className="text-[#666666] font-georgian text-sm">{benefit.desc}</p>
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

