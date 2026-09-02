import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Expertise from "@/components/expertise";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Marquee />
      <About />
      <Expertise />
    </main>
  );
}
