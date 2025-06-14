"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import '../styles/Header.css';

export default function Header() {


  return (
    <header className="w-full h-[100px] bg-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 lg:px-6 h-full text-[14px] font-semibold tracking-wide">

        {/* Left Menu */}
        <div className="flex items-center">
          <Link href="#" className="custom-link">WHENEVER MEMBERSHIP POLICY</Link>
          <Link href="/" className="custom-link">Trang chủ</Link>

          <div className="dropdown relative group">
            <div className="custom-link flex items-center gap-1 cursor-pointer">
              Sản phẩm <FiChevronDown size={14} />
            </div>
            <div className="dropdown-menu hidden group-hover:block">
              <Link href="/product1" className="dropdown-item">Sản phẩm 1</Link>
              <Link href="/product2" className="dropdown-item">Sản phẩm 2</Link>
            </div>
          </div>

        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Whenever Atelier"
              width={300}
              height={80}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right Menu */}
        <div className="right-menu flex items-center">
          <Link href="/search" className="right-link">search</Link>
          <Link href="/login" className="right-link">log in</Link>
          <Link href="/cart" className="right-link cart-link">bag
            <span className="cart-count">0</span>
          </Link>

        </div>

      </div>
    </header>
  );
}
