"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  { partner: "PORTAL", title: "საწვავზე ფასდაკლება", text: "−17 თეთრი ყოველ ლიტრზე Premium წევრებისთვის.", image: "/partner-banners/portal.png", background: "from-[#172d72] to-[#1769ff]" },
  { partner: "EUROINS", title: "დაზღვევის უკეთესი პირობები", text: "მიიღე შენს მანქანაზე მორგებული სპეციალური შეთავაზება.", image: "/partner-banners/euroins.png", background: "from-[#17346f] to-[#4c79de]" },
  { partner: "EVPOWER", title: "დაზოგე დამუხტვაზე", text: "Premium წევრებისთვის სპეციალური ფასები ელექტრო დამტენებზე.", image: "/partner-banners/evpower.png", background: "from-[#07523d] to-[#18a66a]" },
  { partner: "MARTE PARTNERS", title: "სერვისი პარტნიორებთან", text: "ისარგებლე უკეთესი ფასებით სერვისებსა და სამრეცხაოებში.", background: "from-[#4d206d] to-[#a25bd6]" },
];

export default function PremiumPartnersPreview() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="px-5 md:px-8 pb-8">
      <div className="max-w-[1280px] mx-auto rounded-[28px] overflow-hidden bg-[#101828] text-white shadow-xl shadow-slate-900/10">
        <div className="grid lg:grid-cols-[.7fr_1.3fr] min-h-[220px]">
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div><div className="text-[10px] tracking-[.2em] font-black text-[#7aa8ff] mb-3">PREMIUM PARTNERS</div><h2 className="text-2xl md:text-3xl font-black leading-tight">ერთი Premium.<br />მეტი სარგებელი.</h2><p className="text-white/50 text-xs leading-relaxed mt-3 max-w-xs">ნახე, სად მუშაობს შენი Premium წევრობა.</p><Link href="/partners" className="inline-flex items-center gap-2 mt-4 rounded-xl bg-[#1769ff] px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-blue-950/30 hover:bg-[#3c83ff] transition-colors">ყველა პარტნიორი <FaArrowRight className="text-[9px]" /></Link></div>
            <div className="flex items-center gap-2 mt-6"><button onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="w-8 h-8 rounded-full border border-white/15 hover:bg-white/10">←</button><button onClick={() => setActive((active + 1) % slides.length)} className="w-8 h-8 rounded-full border border-white/15 hover:bg-white/10">→</button><div className="flex gap-1.5 ml-2">{slides.map((item, index) => <button key={item.partner} aria-label={`${item.partner} სლაიდი`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? "w-7 bg-[#6f9fff]" : "w-1.5 bg-white/25"}`} />)}</div></div>
          </div>
          <div className={`relative min-h-[280px] md:min-h-[320px] overflow-hidden bg-gradient-to-br ${slide.background} p-6 md:p-10 flex items-end`}><div className="absolute inset-0">{slide.image && <Image src={slide.image} alt={`${slide.partner} Premium ბანერი`} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" priority={active === 0} />}</div><div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/95 via-[#07101f]/35 to-transparent" /><div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/60 via-transparent to-transparent" /><div className="relative z-10 max-w-lg"><div className="inline-flex rounded-lg border border-white/30 bg-black/25 px-3 py-1.5 text-sm md:text-base tracking-[.22em] font-black text-white shadow-lg backdrop-blur-sm mb-4">{slide.partner}</div><h3 className="text-2xl md:text-4xl font-black mb-2 drop-shadow-lg">{slide.title}</h3><p className="text-sm md:text-base text-white/85 leading-relaxed max-w-md drop-shadow-md">{slide.text}</p><a href="https://apps.apple.com/ge/app/marte/id6753679575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 rounded-xl bg-white text-[#101828] px-4 py-3 text-xs font-black shadow-lg">მიიღე აპში <FaArrowRight className="text-[10px]" /></a></div></div>
        </div>
      </div>
    </section>
  );
}
