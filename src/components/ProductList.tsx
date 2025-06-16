"use client";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "WHENEVER NY KNIT POLO SHIRT / GREY", price: "790.000₫", image: "/images/p1.jpg" },
  { id: 2, name: "WHENEVER NY KNIT POLO SHIRT / BROWN", price: "790.000₫", image: "/images/p2.jpg" },
  { id: 3, name: "WHENEVER NY KNIT POLO SHIRT / NAVY", price: "790.000₫", image: "/images/p3.jpg" },
  { id: 4, name: "WHENEVER NY KNIT POLO SHIRT / BLACK", price: "790.000₫", image: "/images/p4.jpg" },
  { id: 5, name: "WHENEVER NY KNIT POLO SHIRT / WHITE", price: "790.000₫", image: "/images/p5.jpg" },
  { id: 6, name: "WHENEVER SS25 EMBROIDERED LOGO T‑SHIRT / GREY", price: "500.000₫", image: "/images/p6.jpg" },
  { id: 7, name: "WHENEVER SS25 EMBROIDERED LOGO LONG SLEEVES T‑SHIRT / GREY", price: "750.000₫", image: "/images/p7.jpg" },
  { id: 8, name: "WHENEVER SS25 BLANK T‑SHIRT / WHITE", price: "420.000₫", image: "/images/p8.jpg" },
  { id: 9, name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T‑SHIRT / WHITE", price: "720.000₫", image: "/images/p9.jpg" },
  { id: 10, name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T‑SHIRT / BLACK", price: "720.000₫", image: "/images/p10.jpg" },
  { id: 11, name: "WHENEVER BIG LOGO SWEATPANTS / PREMIUM GREY", price: "780.000₫", image: "/images/p11.jpg" },
  { id: 12, name: "WHENEVER BASIC SWEATSHORTS SS25 / PREMIUM GREY", price: "600.000₫", image: "/images/p12.jpg" },
  { id: 13, name: "WHENEVER BASIC SWEATER / PREMIUM GREY", price: "780.000₫", image: "/images/p13.jpg" },
  { id: 14, name: "WHENEVER BASIC SWEATER / BLACK", price: "780.000₫", image: "/images/p14.jpg" },
  { id: 15, name: "WHENEVER SS25 EMBROIDERED LOGO T‑SHIRT / BLACK", price: "500.000₫", image: "/images/p15.jpg" },
  { id: 16, name: "WHENEVER SS25 EMBROIDERED LOGO T‑SHIRT / WHITE", price: "500.000₫", image: "/images/p16.jpg" },
  { id: 17, name: "WHENEVER SS25 EMBROIDERED LOGO T‑SHIRT / NAVY", price: "500.000₫", image: "/images/p17.jpg" },
  { id: 18, name: "WHENEVER SS25 EMBROIDERED LOGO LONG SLEEVES T‑SHIRT / WHITE", price: "750.000₫", image: "/images/p18.jpg" },
  { id: 19, name: "WHENEVER SS25 EMBROIDERED LOGO LONG SLEEVES T‑SHIRT / BLACK", price: "750.000₫", image: "/images/p19.jpg" },
  { id: 20, name: "WHENEVER SS25 EMBROIDERED LOGO LONG SLEEVES T‑SHIRT / NAVY", price: "750.000₫", image: "/images/p20.jpg" },
  { id: 21, name: "WHENEVER BASIC SWEATPANTS / PREMIUM GREY VER 2", price: "700.000₫", image: "/images/p21.jpg" },
  { id: 22, name: "WHENEVER LOGO‑EMBROIDERED COTTON LONG SLEEVES T‑SHIRT / WHITE", price: "750.000₫", image: "/images/p22.jpg" },
  { id: 23, name: "WHENEVER LOGO‑EMBROIDERED COTTON LONG SLEEVES T‑SHIRT / GREY", price: "750.000₫", image: "/images/p23.jpg" },
  { id: 24, name: "WHENEVER LOGO‑EMBROIDERED COTTON LONG SLEEVES T‑SHIRT / BLACK", price: "750.000₫", image: "/images/p24.jpg" },
  { id: 25, name: "WHENEVER BASIC LOGO SS25 LONG SLEEVES T‑SHIRT / GREY", price: "720.000₫", image: "/images/p25.jpg" },
  { id: 26, name: "WHENEVER BASIC SWEATPANTS / BLACK VER 2", price: "700.000₫", image: "/images/p26.jpg" },
  { id: 27, name: "WHENEVER BIG LOGO SWEATPANTS / BLACK", price: "780.000₫", image: "/images/p27.jpg" },
  { id: 28, name: "WHENEVER CLUB T‑SHIRT / NAVY", price: "450.000₫", image: "/images/p28.jpg" },
  { id: 29, name: "WHENEVER SS25 EMBROIDERED LOGO T‑SHIRT / BROWN", price: "500.000₫", image: "/images/p29.jpg" },
  { id: 30, name: "WHENEVER NY BASIC T‑SHIRT / BLACK", price: "480.000₫", image: "/images/p30.jpg" }
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