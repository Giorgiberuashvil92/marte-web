import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-[#0066FF] tracking-widest uppercase">
                ჩვენს შესახებ
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-[#0A0A0A] mb-6 leading-tight">
              ვქმნით მომავალს{" "}
              <span className="text-gradient">დღეს</span>
            </h1>
            
            <p className="text-xl text-[#666666] leading-relaxed font-georgian">
              Marte არის თანამედროვე პლატფორმა, რომელიც აერთიანებს ყველა 
              სერვისს თქვენი მანქანისთვის ერთ ადგილას.
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-5xl mx-auto bg-[#F5F5F5] rounded-3xl p-12 shadow-2xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4 font-georgian">
                  ჩვენი მისია
                </h2>
                <p className="text-lg text-[#666666] leading-relaxed font-georgian">
                  ჩვენი მიზანია გავხადოთ მანქანის მფლობელობა მარტივი, კომფორტული 
                  და ეკონომიური. ვქმნით ტექნოლოგიურ გადაწყვეტილებებს, რომლებიც 
                  დაზოგავს თქვენს დროსა და ფულს.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent"></div>

              <div>
                <h2 className="text-3xl font-black text-[#0A0A0A] mb-4 font-georgian">
                  რატომ Marte?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "ინოვაცია",
                      desc: "უახლესი ტექნოლოგიები და გადაწყვეტები",
                    },
                    {
                      title: "საიმედოობა",
                      desc: "24/7 მხარდაჭერა და სერვისი",
                    },
                    {
                      title: "ეკონომია",
                      desc: "დაზოგე დრო და ფული",
                    },
                    {
                      title: "მარტივობა",
                      desc: "ყველაფერი ერთ აპლიკაციაში",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-georgian">
                        {item.title}
                      </h3>
                      <p className="text-[#666666] font-georgian">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
