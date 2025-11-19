import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaTimes } from "react-icons/fa";

const pricingPlans = [
  {
    id: "basic",
    name: "ბაზისური",
    price: "0",
    period: "თვე",
    description: "იდეალურია პირადი გამოყენებისთვის",
    features: [
      "ავტორეცხვის დაჯავშნა",
      "ჯარიმების შემოწმება",
      "ძირითადი შეტყობინებები",
      "1 მანქანის მართვა",
      "ძირითადი მხარდაჭერა",
    ],
    notIncluded: [
      "პრემიუმ ფასდაკლებები",
      "პრიორიტეტული მხარდაჭერა",
      "ულიმიტო მანქანები",
    ],
    popular: false,
    ctaText: "დაიწყე უფასოდ",
    ctaColor: "bg-white hover:bg-[#F5F5F5] text-[#0A0A0A] border-2 border-[#0A0A0A]",
  },
  {
    id: "pro",
    name: "პროფესიონალი",
    price: "29",
    period: "თვე",
    description: "ყველაზე პოპულარული არჩევანი",
    features: [
      "ყველაფერი ბაზისურ პაკეტში",
      "ულიმიტო მანქანები",
      "პრემიუმ ფასდაკლებები",
      "პრიორიტეტული მხარდაჭერა 24/7",
      "ავტონაწილების ექსკლუზიური ფასები",
      "საწვავის ფასდაკლება 10%",
      "გადაუდებელი დახმარება",
      "ანალიტიკა და ანგარიშები",
    ],
    notIncluded: [],
    popular: true,
    ctaText: "აირჩიე პროფესიონალი",
    ctaColor: "bg-[#0A0A0A] hover:bg-[#0066FF] text-white",
  },
  {
    id: "enterprise",
    name: "ბიზნესი",
    price: "99",
    period: "თვე",
    description: "კომპანიებისთვის და ფლოტებისთვის",
    features: [
      "ყველაფერი პროფესიონალ პაკეტში",
      "ულიმიტო მანქანები",
      "დედიკატირებული მენეჯერი",
      "API წვდომა",
      "კუსტომიზაცია",
      "საწვავის ფასდაკლება 15%",
      "პრიორიტეტული ტექდახმარება",
      "ვებინარები და ტრენინგები",
      "ბრენდინგი და ლოგო",
    ],
    notIncluded: [],
    popular: false,
    ctaText: "დაგვიკავშირდი",
    ctaColor: "bg-white hover:bg-[#F5F5F5] text-[#0A0A0A] border-2 border-[#0A0A0A]",
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
                ფასები
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              აირჩიე შენი{" "}
              <span className="text-gradient">პაკეტი</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              მარტივი, გამჭვირვალე ფასები. არანაირი ფარული გადასახადები.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                  plan.popular
                    ? "border-[#0066FF] ring-4 ring-[#0066FF]/10"
                    : "border-[#E5E5E5] hover:border-[#0066FF]/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white px-4 py-1 rounded-full text-xs font-bold">
                      ყველაზე პოპულარული
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-2 font-georgian">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[#666666] font-georgian mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-baseline space-x-2">
                    {plan.price === "0" ? (
                      <span className="text-5xl font-black text-[#0A0A0A]">უფასო</span>
                    ) : (
                      <>
                        <span className="text-5xl font-black text-[#0A0A0A]">{plan.price}₾</span>
                        <span className="text-lg text-[#666666] font-georgian">/{plan.period}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#0066FF] rounded-full flex items-center justify-center mt-0.5">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-[#333333] font-georgian">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((notFeature, index) => (
                      <div key={`not-${index}`} className="flex items-start space-x-3 opacity-50">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#E5E5E5] rounded-full flex items-center justify-center mt-0.5">
                          <FaTimes className="w-3 h-3 text-[#666666]" />
                        </div>
                        <span className="text-sm text-[#666666] font-georgian line-through">
                          {notFeature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 ${plan.ctaColor} font-georgian`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-6 mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#0A0A0A] text-center mb-12 font-georgian">
              ხშირად დასმული კითხვები
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "შემიძლია უფასო პაკეტიდან გადავიდე პრემიუმზე?",
                  a: "დიახ! ნებისმიერ დროს შეგიძლია განაახლო შენი პაკეტი. გადასვლა მყისიერია და არ დაკარგავ არსებულ მონაცემებს.",
                },
                {
                  q: "რა ხდება თუ გადავაჭარბებ ლიმიტს?",
                  a: "ჩვენ გაგაფრთხილებთ როცა მიუახლოვდები ლიმიტს. შეგიძლია განაახლო პაკეტი ან გამოიყენო დამატებითი სერვისები.",
                },
                {
                  q: "შემიძლია გავაუქმო ხელშეკრულება ნებისმიერ დროს?",
                  a: "დიახ! შეგიძლია გააუქმო ხელშეკრულება ნებისმიერ დროს, ყოველგვარი ჯარიმის გარეშე. შენი მონაცემები შენთან დარჩება.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#E5E5E5]"
                >
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 font-georgian">
                    {faq.q}
                  </h3>
                  <p className="text-[#666666] font-georgian">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

