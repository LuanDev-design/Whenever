import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-neutral-700 dark:text-neutral-300">
        {/* Logo + Slogan */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/logo.png" alt="Whenever Logo" width={36} height={36} />
            <span className="text-lg font-semibold">Whenever</span>
          </Link>
          <p className="text-neutral-500 dark:text-neutral-400">
            Chúng tôi tạo ra những sản phẩm đơn giản, tinh tế và thoải mái.
          </p>
        </div>

        {/* Menu 1 */}
        <div>
          <h4 className="font-semibold mb-2">Danh mục</h4>
          <ul className="space-y-1">
            <li><Link href="/products">Sản phẩm</Link></li>
            <li><Link href="/about">Giới thiệu</Link></li>
            <li><Link href="/contact">Liên hệ</Link></li>
          </ul>
        </div>

        {/* Menu 2 */}
        <div>
          <h4 className="font-semibold mb-2">Hỗ trợ</h4>
          <ul className="space-y-1">
            <li><Link href="/policy">Chính sách đổi trả</Link></li>
            <li><Link href="/shipping">Vận chuyển</Link></li>
            <li><Link href="/faq">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Liên hệ</h4>
          <p>Email: support@whenever.vn</p>
          <p>Zalo: 0901 234 567</p>
          <p>Instagram: @whenever.vn</p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
        © {new Date().getFullYear()} Whenever. All rights reserved.
      </div>
    </footer>
  );
}
