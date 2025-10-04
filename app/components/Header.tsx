import React from "react";
import Image from "next/image";
import { menuItems } from "../data/menuItems";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={96}
        height={54}
        className="w-[96px] h-[54px] object-cover"
      />
      <div className="flex gap-7">
        {menuItems.map((item) => (
          <Link
            className="text-[#808080] hover:text-[#000000]"
            href={item.href}
            key={item.name}
          >
            {item.name}
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
