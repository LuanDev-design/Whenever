'use client'

import Image from 'next/image'
import { fontHeading } from '../fonts' // 👉 import font

export default function Bannersub() {
  return (
    <section className="w-full h-[1000px] sm:h-[300px] mt-[29px] flex">
      {/* Text vertical */}
      <div
        className={`w-[5%] min-w-[60px] bg-white flex items-center justify-center ${fontHeading.className}`}
      >
        <h3 className="rotate-[-90deg] text-black text-[20px] font-bold tracking-wider leading-none font-[--font-basic-rounded]">
          WHENEVERATELIER
        </h3>
      </div>

      {/* Image side */}
      <div className="w-[95%] relative">
        <Image
          src="/images/banner-sub2.jpg"
          alt="Banner phụ"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
