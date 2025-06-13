import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Image
        src="/images/banner.jpg" // bạn thay tên ảnh đúng theo file của bạn
        alt="Whenever Banner"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">
          NEW ARRIVALS
        </h1>
      </div>
    </section>
  );
}
