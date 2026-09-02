"use client";

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

const certificates = [
  {
    src: "/assets/certificateOne.png",
    alt: "ACS Certified Technologist",
    name: "ACS Certified Technologist",
  },
  {
    src: "/assets/certificateTwo.png",
    alt: "AWS Certified Solutions Architect",
    name: "AWS Certified Solutions Architect",
  },
  {
    src: "/assets/certificateThree.png",
    alt: "Cisco CCNA",
    name: "Cisco CCNA",
  },
  {
    src: "/assets/certificateFour.png",
    alt: "Palo Alto Networks Certified",
    name: "Palo Alto Networks Certified",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative flex w-full justify-center py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[16px] px-6 xl:px-0">

        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
          PROFESSIONAL CERTIFICATES
        </p>

        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.src} delay={i * 80}>
              <div
                className="group relative flex h-[204px] w-full max-w-[204px] shrink-0 flex-col items-center justify-center gap-[16px] overflow-hidden rounded-[43.2px] border-[0.8px] border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,1)] px-[24px] py-[22px] transition-all hover:border-[rgba(56,189,248,0.4)] hover:shadow-[0_0_24px_rgba(56,189,248,0.08)]"
              >
                <div className="absolute top-[18px] right-[20px] h-[6px] w-[6px] rounded-full bg-[#38bdf8] opacity-70"></div>

                <div className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[16px] bg-white">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-[6px]"
                    sizes="80px"
                  />
                </div>

                <p className="text-center font-[family-name:var(--font-manrope)] text-[13px] font-semibold leading-[140%] text-[rgba(220,220,220,1)]">
                  {cert.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
