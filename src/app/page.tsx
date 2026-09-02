import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import LazySection from "@/components/lazy-section";

const CaseFiles = dynamic(
  () => import("@/components/casefiles"),
  { loading: () => <section className="py-16" aria-hidden="true" /> }
);

const Experience = dynamic(
  () => import("@/components/experience"),
  { loading: () => <section className="py-16" aria-hidden="true" /> }
);

const Certificates = dynamic(
  () => import("@/components/certificates"),
  { loading: () => <section className="py-16" aria-hidden="true" /> }
);

const Qualifications = dynamic(
  () => import("@/components/qualifications"),
  { loading: () => <section className="py-16" aria-hidden="true" /> }
);

const Contact = dynamic(
  () => import("@/components/contact"),
  { loading: () => <section className="py-16" aria-hidden="true" /> }
);

const Footer = dynamic(
  () => import("@/components/footer"),
  { loading: () => null }
);

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Marquee />
      <About />
      <Expertise />
      <LazySection>
        <CaseFiles />
        <Experience />
      </LazySection>
      <LazySection>
        <Certificates />
        <Qualifications />
      </LazySection>
      <LazySection>
        <Contact />
        <Footer />
      </LazySection>
    </main>
  );
}
