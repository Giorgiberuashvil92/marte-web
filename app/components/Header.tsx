"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { pagesData } from "../data/pagesData";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-around items-center py-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={96}
        height={54}
        className="w-[96px] h-[54px] object-cover"
      />
      <div className="flex gap-7 ml-24">
        {pagesData.map((item) => (
          <Link
            className={`hover:text-[#000000] transition-colors duration-200 ${
              pathname === item.href
                ? "text-[#000000] font-semibold"
                : "text-[#808080]"
            }`}
            href={item.href}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center bg-[#316AED] hover:bg-[#2655C4] transition-all duration-300 text-white px-3 py-4 rounded-full cursor-pointer">
        <FaApple width={17} height={17} />
        <span className="font-semibold text-[18px] leading-[24px] font-georgian">
          Download App
        </span>
      </div>
    </div>
  );
};

export default Header;
