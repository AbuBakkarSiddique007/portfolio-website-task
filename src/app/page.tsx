import Hero from "@/components/hero";
import Marquee from "@/components/marquee";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Marquee />
    </main>
  );
}
