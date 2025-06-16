'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-[60px]">
      {/* Đăng ký */}
      <div className="bg-[#AA2621] text-white py-16 relative overflow-hidden">
        {/* Ovals */}
        <div className="absolute inset-0 flex justify-end items-center gap-8 pr-20 opacity-30">
          <div className="w-[120px] h-[220px] bg-black rounded-full"></div>
          <div className="w-[120px] h-[220px] bg-black rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start sm:items-center">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-black uppercase">
            JOIN THE WHENEVER ATELIER CLUB
          </h2>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="email"
              className="flex-1 px-4 py-2 text-black rounded-l border-none outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r text-sm font-semibold uppercase">
              subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Footer link */}
      <div className="bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Cột 1 */}
          <div>
            <h4 className="font-semibold mb-2">THÔNG TIN</h4>
            <ul className="space-y-1">
              <li><Link href="/search">Tìm kiếm</Link></li>
              <li><Link href="/about">Giới thiệu</Link></li>
              <li><Link href="/return-policy">Chính sách đổi trả</Link></li>
              <li><Link href="/contact">Liên hệ</Link></li>
              <li><Link href="/privacy">Chính sách bảo mật</Link></li>
              <li><Link href="/terms">Điều khoản dịch vụ</Link></li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div>
            <h4 className="font-semibold mb-2">THÔNG TIN</h4>
            <ul className="space-y-1">
              <li><Link href="/membership">WHENEVER MEMBERSHIP POLICY</Link></li>
              <li><Link href="/">Trang chủ</Link></li>
              <li><Link href="/products">Sản phẩm</Link></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h4 className="font-semibold mb-2">THÔNG TIN</h4>
            <ul className="space-y-1">
              <li><Link href="/shipping">Vận chuyển</Link></li>
              <li><Link href="/faq">Câu hỏi thường gặp</Link></li>
              <li><Link href="/contact">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Cột 4: Ảnh app store */}
          <div className="flex flex-col items-start justify-start gap-3">
            <Image src="/images/appstore.png" alt="App Store" width={140} height={40} />
            <Image src="/images/playstore.png" alt="Google Play" width={140} height={40} />
          </div>
        </div>


        <div className="border-t py-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Whenever. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
