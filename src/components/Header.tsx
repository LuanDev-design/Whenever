"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full h-[130px] bg-white  sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 lg:px-6 h-full text-[14px] font-semibold text-black tracking-wide">
        
        {/* Left Menu */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="font-extrabold whitespace-nowrap hover:underline uppercase"
          >
            Whenever Membership Policy
          </Link>
          <Link href="/" className="hover:underline">
            Trang chủ
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:underline"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Sản phẩm <FiChevronDown size={14} />
            </button>
            {openMenu && (
              <div className="absolute bg-white border mt-2 p-2 shadow-md z-10 min-w-[140px]">
                <Link href="/product1" className="block px-4 py-2 hover:bg-gray-100">Sản phẩm 1</Link>
                <Link href="/product2" className="block px-4 py-2 hover:bg-gray-100">Sản phẩm 2</Link>
              </div>
            )}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Whenever Atelier"
              width={350}
              height={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-5">
          <Link href="/search" className="flex items-center gap-1 hover:underline lowercase">
            <FiSearch size={16} />
            <span>search</span>
          </Link>
          <Link href="/login" className="flex items-center gap-1 hover:underline lowercase">
            <FiUser size={16} />
            <span>log in</span>
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1 hover:underline lowercase">
            <FiShoppingBag size={16} />
            <span>bag</span>
            <span className="absolute -top-2 -right-3 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center leading-none">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
