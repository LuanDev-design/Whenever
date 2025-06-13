import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[1200px] sm:h-[600px] overflow-hidden ">
      <Image
        src="/images/banner.jpg"
        alt="Whenever Banner"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
