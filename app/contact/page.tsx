import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                კონტაქტი
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              მოგვწერე{" "}
              <span className="text-gradient">ნებისმიერ დროს</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              ჩვენი გუნდი მზადაა დაგეხმაროს ნებისმიერ კითხვაში
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: "📧",
                title: "ელ-ფოსტა",
                value: "info@marte.ge",
                desc: "მოგვწერე ნებისმიერ დროს",
              },
              {
                icon: "📞",
                title: "ტელეფონი",
                value: "+995 557422634",
                desc: "დაგვირეკე 24/7",
              },
              {
                icon: "📍",
                title: "მისამართი",
                value: "თბილისი, საქართველო",
                desc: "ეწვიე ჩვენს ოფისს",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-georgian">
                  {item.title}
                </h3>
                <p className="text-lg text-[#0066FF] font-semibold mb-2 font-georgian">
                  {item.value}
                </p>
                <p className="text-sm text-[#666666] font-georgian">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-[#F5F5F5] rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-black text-[#0A0A0A] mb-8 font-georgian">
              გამოგვიგზავნე შეტყობინება
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="სახელი"
                  className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
                />
                <input
                  type="email"
                  placeholder="ელ-ფოსტა"
                  className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
                />
              </div>
              
              <input
                type="text"
                placeholder="თემა"
                className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#0066FF] outline-none transition-all duration-300 font-georgian"
              />
              
              <textarea
                rows={6}
                placeholder="შეტყობინება"
                className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#0066FF] outline-none transition-all duration-300 resize-none font-georgian"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-[#0A0A0A] hover:bg-[#0066FF] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 font-georgian"
              >
                გაგზავნა
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
