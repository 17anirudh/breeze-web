import { PinterestLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col center gap-6">
      <h1 className="text-[45px] sm:text-6xl tracking-tight font-serif italic uppercase">
        breeze
      </h1>
      <figure className="h-80 sm:h-94 aspect-square relative">
        <Image
          src="/hero.webp"
          fill
          priority
          fetchPriority="high"
          loading="eager"
          alt="Warmth illustration"
          className="object-cover overflow-hidden object-center rounded-4xl hover:scale-105 duration-300 transition-all ease-in-out"
          sizes="380px"
        />
      </figure>
      <a
        href="https://pin.it/1BVmCptqK"
        rel="noopener"
        target="_blank"
        className="flex flex-wrap gap-2 center text-lg"
      >
        Artwork from <PinterestLogoIcon color="red" />
      </a>
      <h3 className="text-[30px] sm:text-3xl tracking-tight max-w-lg font-serif">
        It is totally okay to build simple software, see every step and then
        decide
      </h3>
      <Link
        href="/docs"
        replace={false}
      >
        Get Started
      </Link>
    </main>
  );
}
