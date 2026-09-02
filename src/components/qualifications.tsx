"use client";

import Image from "next/image";

const qualifications = [
  {
    src: "/assets/qualificationsOne.png",
    alt: "Diploma of Management",
    title: "Diploma of Management",
    borderColor: "border-t-[rgba(38,178,152,1)]",
  },
  {
    src: "/assets/qualificationsTwo.png",
    alt: "Master of Information Technology",
    title: "Master of Information Technology",
    borderColor: "border-t-[#60a5fa]",
  },
  {
    src: "/assets/qualificationsThree.png",
    alt: "Grad. Dip. Internet Computing",
    title: "Grad. Dip. Internet Computing",
    borderColor: "border-t-[#eab308]",
  },
  {
    src: "/assets/qualificationsFour.png",
    alt: "Diploma of Management",
    title: "Diploma of Management",
    borderColor: "border-t-[#ef4444]",
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="relative flex w-full justify-center py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[16px] px-6 xl:px-0">

        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
          PROFESSIONAL QUALIFICATIONS
        </p>

        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {qualifications.map((item) => (
            <div
              key={item.src}
              className={`group relative flex h-[280px] w-full max-w-[260px] flex-col items-center justify-between overflow-hidden rounded-[40px] border border-zinc-800/60 border-t-2 ${item.borderColor} bg-[linear-gradient(180.29deg,rgba(231,111,81,0.12)_0.17%,rgba(110,110,110,0.24)_49.92%,rgba(221,221,221,0.06)_99.74%)] p-[8px] pb-[24px] shadow-[0px_6px_7.7px_0px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]`}
            >
              <div className="relative h-[156px] w-full overflow-hidden rounded-[32px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 260px"
                />
              </div>

              <div className="flex w-full items-center justify-center px-[8px]">
                <h3 className="text-center font-[family-name:var(--font-manrope)] text-[15px] font-semibold leading-[135%] text-[rgba(235,235,235,1)]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
