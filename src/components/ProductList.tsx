"use client";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T-SHIRT / GREY",
    price: "720.000đ",
    image: "/images/p1.jpg",
  },
  {
    id: 2,
    name: "WHENEVER CLUB T-SHIRT / NAVY",
    price: "450.000đ",
    image: "/images/p2.jpg",
  },
  {
    id: 3,
    name: "WHENEVER BASIC SWEATPANTS / PREMIUM GREY VER 2",
    price: "700.000đ",
    image: "/images/p3.jpg",
  },
  {
    id: 4,
    name: "WHENEVER BASIC SWEATPANTS / PREMIUM GREY VER 2",
    price: "480.000đ",
    image: "/images/p4.jpg",
  },
  {
    id: 5,
    name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T-SHIRT / BLACK",
    price: "720.000đ",
    image: "/images/p5.jpg",
  },
  {
    id: 6,
    name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T-SHIRT / WHITE",
    price: "720.000đ",
    image: "/images/p6.jpg",
  },
  {
    id: 7,
    name: "WHENEVER BASIC SWEATER / BLACK",
    price: "780.000đ",
    image: "/images/p7.jpg",
  },
  {
    id: 8,
    name: "WHENEVER BASIC SWEATER / PREMIUM GREY",
    price: "780.000đ",
    image: "/images/p8.jpg",
  },
  
];

export default function ProductList() {
    return (
      <section className="py-10 ">
        <h2 className="text-[28px] font-bold text-right pr-6 mb-8 leading-snug">
          WELCOME TO <br /> WHENEVER ATELIER
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center", padding: "32px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
      </section>
    );
  }