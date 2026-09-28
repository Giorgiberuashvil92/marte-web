"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBolt,
  FaCar,
  FaChevronDown,
  FaChevronRight,
  FaClock,
  FaGasPump,
  FaHome,
  FaMapMarkerAlt,
  FaPlus,
  FaShieldAlt,
  FaShoppingBag,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    details: "2021 • თბილისი",
    plate: "AA-123-BB",
    type: "ბენზინი",
    progress: 72,
    accent: "from-[#0d1b38] to-[#2165c8]",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    details: "2023 • თბილისი",
    plate: "EV-777-EE",
    type: "ელექტრო",
    progress: 88,
    accent: "from-[#101014] to-[#464652]",
  },
];

const reminders = [
  { icon: FaShieldAlt, color: "bg-[#e8f0ff] text-[#1769ff]", title: "დაზღვევა იწურება", meta: "Toyota Camry • 12 დღეში", action: "განახლება" },
  { icon: FaTools, color: "bg-[#fff2df] text-[#e78a18]", title: "გეგმიური სერვისი", meta: "Toyota Camry • 1,200 კმ-ში", action: "დაჯავშნა" },
  { icon: FaBolt, color: "bg-[#e6faf0] text-[#15a05b]", title: "დამუხტვის ისტორია", meta: "Tesla Model 3 • გუშინ", action: "ნახვა" },
];

const offers = [
  { partner: "EUROINS", title: "ავტოდაზღვევა შენს მანქანაზე", description: "მიიღე პერსონალური შეთავაზება 2 წუთში.", color: "from-[#0c2e71] to-[#1769ff]", action: "შეთავაზების ნახვა" },
  { partner: "MARTE EV", title: "დამუხტე 15%-ით ნაკლებად", description: "სპეციალური ტარიფი ელექტრო მანქანებისთვის.", color: "from-[#073d2d] to-[#13a56a]", action: "დამტენების ნახვა" },
];

export default function PortalPage() {
  const [activeCar, setActiveCar] = useState(cars[0]);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#101828] font-georgian">
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0b1220] text-white px-6 py-7 transition-transform duration-300 lg:translate-x-0 ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-[#1769ff] flex items-center justify-center text-xl font-black">M</div>
          <div><div className="text-xl font-black tracking-tight">Marte</div><div className="text-[11px] text-white/45">შენი მანქანის პორტალი</div></div>
        </div>
        <nav className="space-y-2 text-sm">
          <div className="px-4 py-3 rounded-xl bg-[#1769ff] flex items-center gap-3 font-bold"><FaHome /> მთავარი</div>
          {[[FaCar, "ჩემი მანქანები"], [FaClock, "დაჯავშნები"], [FaShoppingBag, "შეკვეთები"], [FaShieldAlt, "დაზღვევა"], [FaBolt, "ელექტრო მანქანები"]].map(([Icon, label]) => (
            <button key={label as string} className="w-full px-4 py-3 rounded-xl flex items-center gap-3 text-white/60 hover:bg-white/10 hover:text-white transition-colors text-left"><Icon /> {label as string}</button>
          ))}
        </nav>
        <div className="absolute bottom-7 left-6 right-6 rounded-2xl bg-white/5 border border-white/10 p-4">
          <div className="flex items-center gap-3 mb-3"><FaBell className="text-[#67a0ff]" /><span className="text-xs font-bold">მხარდაჭერა 24/7</span></div>
          <p className="text-[11px] leading-relaxed text-white/45 mb-3">გჭირდება დახმარება გზაზე?</p>
          <button className="w-full rounded-lg bg-white text-[#0b1220] py-2 text-xs font-bold">დარეკე დახმარებაზე</button>
        </div>
      </aside>

      <div className="lg:ml-72">
        <header className="h-20 border-b border-[#e8edf4] bg-white/90 backdrop-blur sticky top-0 z-30 px-5 md:px-10 flex items-center justify-between">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-xl"><span className="sr-only">მენიუ</span>☰</button>
          <div className="hidden md:block"><p className="text-xs text-[#8590a3]">სამშაბათი, 29 სექტემბერი 2026</p><h1 className="text-lg font-black mt-1">მოგესალმები, გიორგი 👋</h1></div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative w-10 h-10 rounded-full bg-[#f2f5f9] flex items-center justify-center text-[#56657b]"><FaBell /><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#1769ff] border-2 border-white" /></button>
            <div className="flex items-center gap-2 border-l border-[#e8edf4] pl-4"><FaUserCircle className="text-3xl text-[#c7d1df]" /><div className="hidden sm:block"><div className="text-sm font-bold">გიორგი ბერიძე</div><div className="text-[11px] text-[#8590a3]">პირადი ანგარიში</div></div><FaChevronDown className="text-xs text-[#8590a3]" /></div>
          </div>
        </header>

        <div className="max-w-[1440px] mx-auto p-5 md:p-10">
          <section className="grid xl:grid-cols-[1.35fr_.65fr] gap-5 mb-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#1769ff] to-[#0c3ca3] p-7 md:p-9 text-white relative overflow-hidden min-h-[250px]">
              <div className="absolute -right-16 -bottom-24 w-72 h-72 rounded-full border-[35px] border-white/10" /><div className="absolute right-16 top-8 w-20 h-20 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10 max-w-xl"><p className="text-sm text-white/70 mb-3">დღის მთავარი</p><h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">შენი მანქანები<br />შენთვის ზრუნავენ.</h2><p className="text-sm text-white/75 max-w-md leading-relaxed mb-6">ყველა მნიშვნელოვანი შეხსენება, შეთავაზება და სერვისი ერთ მარტივ სივრცეში.</p><button className="bg-white text-[#1769ff] rounded-xl px-5 py-3 text-sm font-black inline-flex items-center gap-2">სერვისის დაჯავშნა <FaArrowRight className="text-xs" /></button></div>
            </div>
            <div className="rounded-3xl bg-[#101828] p-7 text-white relative overflow-hidden"><div className="relative z-10"><div className="flex items-center gap-2 text-[#7aa8ff] text-sm font-bold mb-6"><FaBolt /> EV ზონა</div><h3 className="text-2xl font-black mb-2">შენი Tesla მზად არის</h3><p className="text-sm text-white/55 leading-relaxed mb-7">იპოვე ახლომდებარე დამტენი და აკონტროლე დამუხტვის ისტორია.</p><button className="text-sm font-bold text-white flex items-center gap-2">დამტენების ნახვა <FaChevronRight className="text-xs" /></button></div><div className="absolute -right-10 -bottom-12 w-44 h-44 rounded-full border-[26px] border-[#1769ff]/25" /></div>
          </section>

          <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"><div><h2 className="text-xl font-black">ჩემი მანქანები</h2><p className="text-sm text-[#8590a3] mt-1">მართე ყველა მანქანა ერთი ანგარიშიდან</p></div><button className="self-start md:self-auto text-sm font-bold text-[#1769ff] flex items-center gap-2"><FaPlus /> მანქანის დამატება</button></section>
          <section className="grid md:grid-cols-2 gap-5 mb-8">{cars.map((car) => <button key={car.id} onClick={() => setActiveCar(car)} className={`text-left rounded-3xl p-6 bg-gradient-to-br ${car.accent} text-white relative overflow-hidden min-h-[190px] transition-all ${activeCar.id === car.id ? "ring-4 ring-[#1769ff]/20 scale-[1.01]" : "opacity-85 hover:opacity-100"}`}><div className="absolute right-[-20px] top-8 text-[130px] opacity-10">🚘</div><div className="relative z-10"><div className="flex justify-between items-start"><div><div className="text-lg font-black">{car.name}</div><div className="text-xs text-white/60 mt-1">{car.details}</div></div><span className="text-[10px] px-2 py-1 rounded-full bg-white/15">{car.type}</span></div><div className="mt-9 flex items-end justify-between"><div><div className="text-xs text-white/55 mb-1">სახელმწიფო ნომერი</div><div className="text-sm font-bold tracking-wider">{car.plate}</div></div><div className="text-right"><div className="text-xs text-white/55 mb-1">მდგომარეობა</div><div className="text-sm font-bold">{car.progress}% კარგია</div></div></div></div></button>)}</section>

          <section className="grid xl:grid-cols-[1.15fr_.85fr] gap-5 mb-8">
            <div className="rounded-3xl bg-white border border-[#e8edf4] p-6 md:p-7"><div className="flex items-center justify-between mb-6"><div><h2 className="text-xl font-black">შეხსენებები</h2><p className="text-sm text-[#8590a3] mt-1">{activeCar.name}-ის მნიშვნელოვანი მოვლენები</p></div><button className="text-sm text-[#1769ff] font-bold">ყველას ნახვა</button></div><div className="space-y-3">{reminders.map((item) => <div key={item.title} className="flex items-center gap-3 p-3 rounded-2xl bg-[#f8fafc] hover:bg-[#f1f5fa] transition-colors"><div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}><item.icon /></div><div className="flex-1 min-w-0"><div className="text-sm font-bold">{item.title}</div><div className="text-xs text-[#8590a3] mt-1">{item.meta}</div></div><button className="text-xs font-bold text-[#1769ff] whitespace-nowrap">{item.action}</button></div>)}</div></div>
            <div className="rounded-3xl bg-white border border-[#e8edf4] p-6 md:p-7"><div className="flex items-center justify-between mb-5"><div><h2 className="text-xl font-black">სწრაფი მოქმედებები</h2><p className="text-sm text-[#8590a3] mt-1">ყველაზე საჭირო სერვისები</p></div></div><div className="grid grid-cols-2 gap-3">{[[FaTools, "სერვისის დაჯავშნა", "bg-[#eaf1ff] text-[#1769ff]"], [FaMapMarkerAlt, "სერვისები რუკაზე", "bg-[#fff1e6] text-[#ea8018]"], [FaShoppingBag, "ნაწილების მოძებნა", "bg-[#f3eafd] text-[#9155d6]"], [FaGasPump, "საწვავის ფასები", "bg-[#e7f8ef] text-[#14a05b]"]].map(([Icon, label, color]) => <button key={label as string} className="rounded-2xl border border-[#edf0f4] p-4 text-left hover:border-[#1769ff]/30 hover:shadow-sm transition-all"><div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}><Icon /></div><div className="text-xs font-bold leading-relaxed">{label as string}</div></button>)}</div></div>
          </section>

          <section><div className="flex items-center justify-between mb-4"><div><h2 className="text-xl font-black">შეთავაზებები შენთვის</h2><p className="text-sm text-[#8590a3] mt-1">შერჩეული შენი მანქანებისა და მდებარეობის მიხედვით</p></div><button className="text-sm text-[#1769ff] font-bold">ყველა შეთავაზება</button></div><div className="grid md:grid-cols-2 gap-5">{offers.map((offer) => <div key={offer.partner} className={`rounded-3xl bg-gradient-to-br ${offer.color} p-6 md:p-7 text-white relative overflow-hidden`}><div className="absolute -right-10 -top-10 w-36 h-36 rounded-full border-[18px] border-white/10" /><div className="relative z-10"><div className="text-xs tracking-[.2em] font-black text-white/60 mb-5">{offer.partner}</div><h3 className="text-xl font-black mb-2">{offer.title}</h3><p className="text-sm text-white/70 mb-6">{offer.description}</p><button className="bg-white/15 hover:bg-white/25 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors">{offer.action}</button></div></div>)}</div></section>
        </div>
      </div>
    </main>
  );
}
