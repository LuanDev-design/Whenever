// src/components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4 font-medium text-sm">
        {/* Left: menu */}
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:underline">
            WHENEVER MEMBERSHIP POLICY
          </Link>
          <Link href="/" className="hover:underline hidden md:inline">
            Trang chủ
          </Link>
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:underline"
              onClick={() => setOpenMenu(!openMenu)}
            >
              Sản phẩm
              <FiChevronDown />
            </button>
            {openMenu && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md z-10">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                >
                  Tất cả sản phẩm
                </Link>
                <Link
                  href="/products?category=ao"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Áo
                </Link>
                <Link
                  href="/products?category=quan"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Quần
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Center: logo */}
        <Link href="/" className="text-xl font-semibold font-serif">
          WHENEVER<span className="italic">Atelier</span>
        </Link>

        {/* Right: search, login, bag */}
        <div className="flex items-center gap-4">
          <button className="hover:underline flex items-center gap-1">
            <FiSearch className="text-base" />
            <span className="hidden sm:inline">search</span>
          </button>
          <button className="hover:underline flex items-center gap-1">
            <FiUser className="text-base" />
            <span className="hidden sm:inline">log in</span>
          </button>
          <button className="relative hover:underline flex items-center gap-1">
            <FiShoppingBag className="text-base" />
            <span className="hidden sm:inline">bag</span>
            <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1.5">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
