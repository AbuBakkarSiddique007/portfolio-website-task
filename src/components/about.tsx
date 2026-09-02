"use client";

import ScrollReveal from "@/components/scroll-reveal";

export default function About() {
  return (
    <section id="about" className="relative flex w-full justify-center py-16 lg:py-24">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[16px] px-6 xl:px-0">
        <ScrollReveal>
          <p className="w-full max-w-[1280px] font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
            ABOUT
          </p>
        </ScrollReveal>

        <div className="flex w-full flex-col justify-between gap-[32px] lg:flex-row lg:items-end">
          <ScrollReveal delay={100} className="w-full lg:w-[529px]">
            <div className="flex w-full flex-col justify-between gap-6">
            <h2 className="flex items-center text-4xl font-bold tracking-normal text-[#f1f1f1] font-[family-name:var(--font-manrope)] sm:text-5xl lg:text-[72px] lg:leading-[100%]">
              Mazidul Hakim
            </h2>

            <div className="flex flex-col justify-between gap-5 font-sans text-[15px] font-normal leading-[180%] tracking-normal text-[#ababab] text-justify sm:text-[16px]">
              <p>
                <strong className="font-semibold text-white">
                  Senior IT leader with 17+ years&apos; experience
                </strong>{" "}
                <span>
                  owning IT strategy, operations and cybersecurity for multi-branch, multi-entity organizations &mdash; currently leading the group technology function for an international shipping and logistics business.
                </span>
              </p>

              <p>
                <span>
                  I build and run distributed onshore/offshore teams, own technology budgets, and partner directly with senior leadership to turn business growth priorities into a clear, funded technology roadmap.
                </span>
              </p>

              <p>
                <span>
                  My track record is taking full ownership of a technology function and transforming it: replacing legacy network infrastructure with a modern SASE architecture, delivering a full cloud migration, and embedding ITIL-aligned governance &mdash; while staying close enough to the technical detail to be the escalation point when it counts.
                </span>
              </p>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="relative flex w-full items-center justify-center lg:h-[468px] lg:w-[658px]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.28)_0%,rgba(14,50,90,0.18)_45%,transparent_70%)] blur-2xl"></div>

            <div className="relative grid h-full w-full grid-cols-1 gap-[24px] sm:grid-cols-2">
              <div className="flex h-[222px] flex-col items-center justify-center gap-3 rounded-[20px] border border-zinc-800/80 bg-[#0e131b]/90 p-6 backdrop-blur-md transition-all hover:border-zinc-700">
                <div className="flex h-[67px] items-center justify-center font-['Tusker_Grotesk',sans-serif] text-[56px] font-[500] leading-[120%] tracking-[0%] text-white">
                  <span>17</span>
                  <span className="text-[#38bdf8]">+</span>
                </div>
                <span className="w-full max-w-[232px] text-center font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-[180%] tracking-normal text-[rgba(241,241,241,1)]">
                  YEARS IN IT LEADERSHIP
                </span>
              </div>

              <div className="flex h-[222px] flex-col items-center justify-center gap-3 rounded-[20px] border border-zinc-800/80 bg-[#0e131b]/90 p-6 backdrop-blur-md transition-all hover:border-zinc-700">
                <div className="flex h-[67px] items-center justify-center font-['Tusker_Grotesk',sans-serif] text-[56px] font-[500] leading-[120%] tracking-[0%] text-white">
                  <span className="text-[#38bdf8]">$</span>
                  <span>2.4 M</span>
                  <span className="text-[#38bdf8]">+</span>
                </div>
                <span className="w-full max-w-[232px] text-center font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-[180%] tracking-normal text-[rgba(241,241,241,1)]">
                  ANNUAL IT BUDGET OWNED
                </span>
              </div>

              <div className="flex h-[222px] flex-col items-center justify-center gap-3 rounded-[20px] border border-zinc-800/80 bg-[#0e131b]/90 p-6 backdrop-blur-md transition-all hover:border-zinc-700">
                <div className="flex h-[67px] items-center justify-center font-['Tusker_Grotesk',sans-serif] text-[56px] font-[500] leading-[120%] tracking-[0%] text-white">
                  <span>8</span>
                </div>
                <span className="w-full max-w-[232px] text-center font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-[180%] tracking-normal text-[rgba(241,241,241,1)]">
                  BRANCHES SUPPORTED
                </span>
              </div>

              <div className="flex h-[222px] flex-col items-center justify-center gap-3 rounded-[20px] border border-zinc-800/80 bg-[#0e131b]/90 p-6 backdrop-blur-md transition-all hover:border-zinc-700">
                <div className="flex h-[67px] items-center justify-center font-['Tusker_Grotesk',sans-serif] text-[56px] font-[500] leading-[120%] tracking-[0%] text-white">
                  <span>99.9</span>
                  <span className="ml-1 text-[#38bdf8]">%</span>
                </div>
                <span className="w-full max-w-[232px] text-center font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-[180%] tracking-normal text-[rgba(241,241,241,1)]">
                  NETWORK UPTIME
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} className="w-full max-w-[1280px]">
          <div className="flex w-full items-center rounded-[4px] border-l border-l-[#38bdf8] bg-[#0e131b]/70 px-[24px] py-[14px] backdrop-blur-md lg:h-[86px]">
            <p className="w-full max-w-[1232px] font-mono text-xs leading-relaxed text-zinc-300 sm:text-[13px]">
              I judge every technology decision by the business outcome it drives &mdash;{" "}
              <span className="text-[#38bdf8]">not the shine of the tool</span>. Uptime and security are the baseline; the job is turning IT into something the business can actually grow on.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
