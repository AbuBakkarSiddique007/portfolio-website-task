import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Marquee />
      <About />
    </main>
  );
}
