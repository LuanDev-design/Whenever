// File: src/app/products/[id]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

// Fake product data
const products = [
  {
    id: 1,
    name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T-SHIRT / GREY",
    price: "720.000đ",
    image: "/images/p1.jpg",
    description: "Chiếc áo tay dài cơ bản với chất liệu cotton thoáng mát, form unisex dễ mặc.",
  },
  {
    id: 2,
    name: "WHENEVER CLUB T-SHIRT / NAVY",
    price: "450.000đ",
    image: "/images/p2.jpg",
    description: "Áo thun xanh navy với logo nổi bật, chất vải dày dặn phù hợp đi chơi.",
  },
  {
    id: 3,
    name: "WHENEVER BASIC SWEATPANTS / PREMIUM GREY VER 2",
    price: "700.000đ",
    image: "/images/p3.jpg",
    description: "Quần nỉ xám cao cấp, thiết kế tối giản, mặc ở nhà hay đi cafe đều hợp.",
  },
];

// ✅ Next.js yêu cầu params là Promise
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === Number(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg shadow"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-pink-500 text-xl">{product.price}</p>
        <p className="text-neutral-600 dark:text-neutral-300">{product.description}</p>
        <button className="mt-6 w-fit bg-black text-white px-6 py-2 rounded hover:bg-neutral-800 transition">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

// ✅ generateStaticParams bắt buộc để SSG hoạt động với [id]
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
