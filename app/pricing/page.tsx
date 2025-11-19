"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaCreditCard, FaShieldAlt, FaClock, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";

const benefits = [
  {
    icon: FaCheck,
    title: "ყველაფერზე განვადება",
    desc: "ჯარიმები, სერვისები, ნაწილები - ყველაფერზე შეგიძლია განვადება",
  },
  {
    icon: FaMapMarkerAlt,
    title: "ნებისმიერ ადგილას",
    desc: "საქართველოს ნებისმიერ წერტილში, ონლაინ ან ოფლაინ",
  },
  {
    icon: FaClock,
    title: "სწრაფი დამტკიცება",
    desc: "რამდენიმე წუთში მიიღებ დამტკიცებას, ყოველგვარი დაბრკოლების გარეშე",
  },
  {
    icon: FaShieldAlt,
    title: "უსაფრთხო და მარტივი",
    desc: "ბანკის დონის დაცვა, მარტივი პროცესი, ყოველგვარი ფარული გადასახადების გარეშე",
  },
  {
    icon: FaCreditCard,
    title: "0% საპროცენტო",
    desc: "ყველა სერვისზე 0% საპროცენტო განვადება, ყოველგვარი დამატებითი გადასახადის გარეშე",
  },
  {
    icon: FaMobileAlt,
    title: "აპლიკაციიდან",
    desc: "მართე განვადება შენი ტელეფონიდან, ნებისმიერ დროს, ნებისმიერ ადგილას",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                განვადება
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              განვადება{" "}
              <span className="text-gradient">ყველაფერზე</span>
              <br />
              <span className="text-4xl lg:text-6xl">ნებისმიერ ადგილას</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian mb-8">
              გადაიხადე ჯარიმები, სერვისები, ნაწილები და ყველაფერი სხვა 
              მოსახერხებელი განვადებით. <strong className="text-[#0A0A0A]">უპრობლემოდ, ყოველგვარი დაბრკოლების გარეშე.</strong>
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-flex items-center space-x-3 bg-[#0A0A0A] hover:bg-[#0066FF] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 font-georgian"
            >
              <span>დაიწყე ახლავე</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-[#E5E5E5] hover:border-[#0066FF]/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-3 font-georgian">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#666666] leading-relaxed font-georgian">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple Process Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F5F5F5] to-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-black text-[#0A0A0A] text-center mb-12 font-georgian">
              როგორ მუშაობს?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "აირჩიე სერვისი",
                  desc: "ჯარიმა, სერვისი, ნაწილი - რაც გინდა",
                },
                {
                  step: "2",
                  title: "დაამტკიცე განვადება",
                  desc: "რამდენიმე წუთში მიიღებ დამტკიცებას",
                },
                {
                  step: "3",
                  title: "გადაიხადე მოსახერხებლად",
                  desc: "ყოველთვიურად, ნებისმიერი ბანკიდან",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-[#0A0A0A] mb-2 font-georgian">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] font-georgian">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Can Be Paid Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#0A0A0A] text-center mb-12 font-georgian">
              რაზე შეიძლება განვადება?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "ტრანსპორტის ჯარიმები",
                "ავტორეცხვა და დეტეილინგი",
                "ტექნიკური მომსახურება",
                "ავტონაწილები და აქსესუარები",
                "საწვავი",
                "დაზღვევა",
                "გადაუდებელი დახმარება",
                "სხვა ყველა სერვისი",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-lg border-2 border-[#E5E5E5] hover:border-[#0066FF]/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0066FF] rounded-full flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#0A0A0A] font-georgian">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 font-georgian">
              მზად ხარ დაიწყო?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-georgian">
              დაგვიკავშირდი და მიიღე განვადება ყველაფერზე, ყოველგვარი დაბრკოლების გარეშე.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-3 bg-white hover:bg-[#F5F5F5] text-[#0066FF] px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 shadow-2xl hover:shadow-white/50 hover:scale-105 font-georgian"
            >
              <span>დაგვიკავშირდი</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
