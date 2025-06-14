'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg', // thêm bao nhiêu ảnh tùy ý
]

export default function Banner() {
  return (
    <section className="relative w-full h-[1200px] sm:h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[1200px] sm:h-[600px]">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
