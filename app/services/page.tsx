import Header from "../components/Header";
import Footer from "../components/Footer";
import { featureCards } from "../data/featureCards";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                სერვისები
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              ყველა სერვისი{" "}
              <span className="text-gradient">ერთ ადგილას</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              აღმოაჩინე ჩვენი სრული სპექტრის სერვისები, რომლებიც 
              შექმნილია შენი კომფორტისთვის.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="group bg-[#F5F5F5] hover:bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0066FF]/20"
                >
                  <div
                    className={`w-16 h-16 ${card.iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-4 font-georgian">
                    {card.title}
                  </h3>

                  <p className="text-[#666666] leading-relaxed font-georgian">
                    {card.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                    <button className="text-[#0066FF] font-bold text-sm hover:gap-3 flex items-center gap-2 transition-all duration-300 font-georgian">
                      გაიგე მეტი
                      <span>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
