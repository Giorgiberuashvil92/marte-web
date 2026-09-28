"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaBolt, FaGasPump, FaMapMarkerAlt, FaSearch, FaShieldAlt, FaTools } from "react-icons/fa";

const partners = [
  { name: "PORTAL", category: "საწვავი", description: "Premium წევრებისთვის საწვავზე სპეციალური ფასდაკლება.", offer: "−17 თეთრი / ლიტრი", location: "საქართველო", image: "/partner-banners/portal.png", icon: FaGasPump, color: "text-[#1769ff] bg-[#eaf1ff]" },
  { name: "EUROINS", category: "დაზღვევა", description: "მიიღე მანქანაზე მორგებული ავტოდაზღვევის შეთავაზება.", offer: "სპეციალური პირობები", location: "ონლაინ", image: "/partner-banners/euroins.png", icon: FaShieldAlt, color: "text-[#426bd5] bg-[#e9efff]" },
  { name: "EVPOWER", category: "ელექტრო", description: "იპოვე დამტენები და ისარგებლე Premium ტარიფებით ელექტრო მანქანაზე.", offer: "Premium ფასები", location: "თბილისი და რეგიონები", image: "/partner-banners/evpower.png", icon: FaBolt, color: "text-[#159765] bg-[#e6f8ef]" },
  { name: "Marte Service Network", category: "სერვისი", description: "სანდო მექანიკოსები, გამჭვირვალე ფასები და ონლაინ დაჯავშნა.", offer: "პარტნიორი ფასები", location: "თბილისი", image: "/AppStore_Screen_02 (4).jpg", icon: FaTools, color: "text-[#8a52cd] bg-[#f2eaff]" },
];

const categories = ["ყველა", "საწვავი", "დაზღვევა", "ელექტრო", "სერვისი"];

export default function PartnersPage() {
  const [category, setCategory] = useState("ყველა");
  const visiblePartners = category === "ყველა" ? partners : partners.filter((partner) => partner.category === category);

  return (
    <main className="partners-page min-h-screen bg-[#f7f9fc] text-[#101828] font-poppins">
      <header className="border-b border-[#e8edf4] bg-white"><div className="max-w-[1280px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between"><Link href="/" className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl bg-[#1769ff] text-white flex items-center justify-center text-xl font-black">M</div><div><div className="text-xl font-black">Marte</div><div className="text-[10px] text-[#8590a3] -mt-1">მართე მარტივად</div></div></Link><div className="flex items-center gap-3"><Link href="/" className="hidden sm:block text-sm font-bold text-[#667085] hover:text-[#1769ff]">მთავარი</Link><a href="https://apps.apple.com/ge/app/marte/id6753679575" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#101828] text-white px-4 py-2.5 text-sm font-bold hover:bg-[#1769ff]">გადმოწერე აპი</a></div></div></header>

      <section className="px-5 md:px-8 pt-16 pb-12"><div className="max-w-[1280px] mx-auto"><div className="max-w-2xl"><div className="text-xs font-black tracking-[.18em] text-[#1769ff] mb-4">MARTE PARTNERS</div><h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-5">შენი მანქანისთვის<br /><span className="text-[#1769ff]">სანდო პარტნიორები.</span></h1><p className="text-lg text-[#667085] leading-relaxed">იპოვე საუკეთესო შეთავაზებები საწვავზე, დაზღვევაზე, EV დამუხტვასა და ავტოსერვისებზე — ერთ სივრცეში.</p></div></div></section>

      <section className="px-5 md:px-8 pb-10"><div className="max-w-[1280px] mx-auto rounded-2xl bg-white border border-[#e8edf4] p-3 flex flex-col md:flex-row gap-3"><div className="flex-1 flex items-center gap-3 px-4"><FaSearch className="text-[#98a2b3]" /><input placeholder="მოძებნე პარტნიორი ან სერვისი" className="w-full py-3 outline-none text-sm" /></div><div className="flex gap-2 overflow-x-auto">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-black transition-colors ${category === item ? "bg-[#1769ff] text-white" : "bg-[#f4f6f9] text-[#667085] hover:bg-[#eaf1ff] hover:text-[#1769ff]"}`}>{item}</button>)}</div></div></section>

      <section className="px-5 md:px-8 pb-20"><div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-5">{visiblePartners.map((partner) => <article key={partner.name} className="overflow-hidden rounded-3xl bg-white border border-[#e8edf4] hover:-translate-y-1 hover:shadow-xl transition-all"><div className="relative h-52 overflow-hidden"><Image src={partner.image} alt={`${partner.name} პარტნიორის ბანერი`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#101828]/65 to-transparent" /><div className="absolute left-5 bottom-4 text-white"><div className="text-xs tracking-[.18em] font-black">{partner.name}</div><div className="text-sm font-bold mt-1">{partner.category}</div></div></div><div className="p-6"><div className="flex items-start gap-4"><div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${partner.color}`}><partner.icon /></div><div><h2 className="text-lg font-black">{partner.offer}</h2><p className="text-sm text-[#667085] leading-relaxed mt-2">{partner.description}</p></div></div><div className="flex items-center justify-between mt-6 pt-5 border-t border-[#edf0f4]"><div className="flex items-center gap-2 text-xs text-[#8590a3]"><FaMapMarkerAlt /> {partner.location}</div><button className="flex items-center gap-2 text-xs font-black text-[#1769ff]">ნახე შეთავაზება <FaArrowRight className="text-[10px]" /></button></div></div></article>)}</div></section>

      <section className="px-5 md:px-8 pb-20"><div className="max-w-[1280px] mx-auto rounded-3xl bg-[#101828] text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"><div><div className="text-xs tracking-[.18em] text-[#7aa8ff] font-black mb-3">PARTNER WITH MARTE</div><h2 className="text-3xl font-black mb-3">გახდი Marte-ს პარტნიორი.</h2><p className="text-sm text-white/55 max-w-md leading-relaxed">მიიღე ახალი მომხმარებლები, მართე შეკვეთები და შესთავაზე შენი სერვისი ათასობით მძღოლს.</p></div><Link href="/contact" className="rounded-xl bg-white text-[#101828] px-5 py-3.5 text-sm font-black whitespace-nowrap">დაგვიკავშირდი <FaArrowRight className="inline ml-2 text-xs" /></Link></div></section>
    </main>
  );
}
