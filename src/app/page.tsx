import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import CaseFiles from "@/components/casefiles";
import Experience from "@/components/experience";
import Certificates from "@/components/certificates";
import Qualifications from "@/components/qualifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <CaseFiles />
      <Experience />
      <Certificates />
      <Qualifications />
      <Contact />
      <Footer />
    </main>
  );
}
