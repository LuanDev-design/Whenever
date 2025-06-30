'use client';

import Link from "next/link";
import Image from "next/image";
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="mt-[60px]">

      {/* PHẦN ĐĂNG KÝ */}
      <div className="bg-[#AA2621] h-[400px] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center justify-center gap-[100px]">

          {/* Bên trái: Tiêu đề + form */}
          <div className="w-[400px] flex flex-col items-start justify-center text-left">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-black uppercase">
              THAM GIA CÂU LẠC BỘ WHENEVER ATELIER
            </h2>
            <form className="flex w-[399px] h-[42px] max-w-full">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 pl-[16px] py-2 text-black border border-black rounded-l outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r text-sm font-semibold uppercase"
              >
                Đăng ký →
              </button>
            </form>
          </div>

          {/* Bên phải: SVG hình ellipse */}
          <div className="w-[429px] h-[300px] ">
            <svg viewBox="0 0 552 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g fill="#222" fillRule="evenodd">
                <ellipse cx="84.5" cy="200" rx="84.5" ry="200" />
                <ellipse cx="467.5" cy="200" rx="84.5" ry="200" />
              </g>
            </svg>
          </div>
        </div>
      </div>


      {/* PHẦN LIÊN KẾT FOOTER */}
      <div className="bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            {/* Cột 1 */}
            <div className="text-left">
              <ul><h4 className="font-semibold mb-2">THÔNG TIN</h4></ul>
              <ul className="space-y-1 pl-0 list-none">
                <li><Link href="/search" className="text-[#222222] hover:text-black transition-colors">Tìm kiếm</Link></li>
                <li><Link href="/about" className="text-[#222222] hover:text-black transition-colors">Giới thiệu</Link></li>
                <li><Link href="/return-policy" className="text-[#222222] hover:text-black transition-colors">Chính sách đổi trả</Link></li>
                <li><Link href="/contact" className="text-[#222222] hover:text-black transition-colors">Liên hệ</Link></li>
                <li><Link href="/privacy" className="text-[#222222] hover:text-black transition-colors">Chính sách bảo mật</Link></li>
                <li><Link href="/terms" className="text-[#222222] hover:text-black transition-colors">Điều khoản dịch vụ</Link></li>
                <li><Link href="/invoice" className="text-[#222222] hover:text-black transition-colors">Customer Request Invoice</Link></li>
              </ul>
            </div>

            {/* Cột 2 */}
            <div className="text-left">
              <ul><h4 className="font-semibold mb-2">THÔNG TIN</h4></ul>
              <ul className="space-y-1 pl-0 list-none">
                <li><Link href="/membership" className="text-[#222222] hover:text-black transition-colors">WHENEVER MEMBERSHIP POLICY</Link></li>
                <li><Link href="/" className="text-[#222222] hover:text-black transition-colors">Trang chủ</Link></li>
                <li><Link href="/products" className="text-[#222222] hover:text-black transition-colors">Sản phẩm</Link></li>
              </ul>
            </div>

            {/* Cột 3 */}
            <div className="text-left">
              <ul><h4 className="font-semibold mb-2">THÔNG TIN</h4></ul>
            </div>

            {/* Cột 4: App Store */}
            <div className="m-[9px]">
              <Image src="/images/appstore.png" alt="App Store" width={97} height={29} />
              <Image src="/images/playstore.png" alt="Google Play" width={97} height={29} />
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t py-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Whenever. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
