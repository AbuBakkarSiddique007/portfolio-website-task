"use client";

import { useState } from "react";

const experiences = [
  {
    period: "2024–Now",
    duration: "2 years",
    cardGradient: "bg-[linear-gradient(135deg,rgba(14,42,60,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#38bdf8",
    badgeColor: "bg-[#0e2a3a] text-[#38bdf8] border-[#1a4a6a]",
    title: "IT Systems Manager",
    dateRange: "Jan 2024 — Present",
    company: "PIL Australia // Melbourne",
    details: [
      "Leading the group technology function across multi-branch, multi-entity operations.",
      "Owning IT strategy, budget, and delivery for an international shipping and logistics business.",
      "Managing distributed onshore/offshore teams and vendor relationships.",
      "Driving cloud migration, SASE architecture rollout, and ITIL-aligned governance.",
    ],
  },
  {
    period: "2019–2024",
    duration: "5 years",
    cardGradient: "bg-[linear-gradient(135deg,rgba(40,50,10,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#a3e635",
    badgeColor: "bg-[#1a2e0a] text-[#a3e635] border-[#3a5a1a]",
    title: "Senior Systems Analyst",
    dateRange: "May 2019 — Jan 2024",
    company: "PIL Australia // Melbourne",
    details: [
      "Architected and delivered enterprise infrastructure upgrades across branch sites.",
      "Led network redesign, server virtualisation, and cloud onboarding initiatives.",
      "Managed security uplift projects including Fortinet NGFW and MFA deployment.",
      "Partnered with senior leadership to align technology investments with business priorities.",
    ],
  },
  {
    period: "2018–2019",
    duration: "1 year",
    cardGradient: "bg-[linear-gradient(135deg,rgba(60,28,10,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#fb923c",
    badgeColor: "bg-[#2e1a0a] text-[#fb923c] border-[#5a3a1a]",
    title: "ICT Coordinator",
    dateRange: "Jul 2018 — May 2019",
    company: "Shire of Ashburton // WA",
    details: [
      "Coordinated ICT operations and support across council facilities.",
      "Managed vendor relationships and infrastructure maintenance.",
      "Supported delivery of local government digital service improvements.",
    ],
  },
  {
    period: "2014–2018",
    duration: "4 years",
    cardGradient: "bg-[linear-gradient(135deg,rgba(10,50,44,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#2dd4bf",
    badgeColor: "bg-[#0a2e2a] text-[#2dd4bf] border-[#1a5a52]",
    title: "IT Systems Administrator",
    dateRange: "Oct 2014 — Jul 2018",
    company: "Shire of Ashburton // WA",
    details: [
      "Administered servers, networking, and end-user systems across regional sites.",
      "Delivered hardware refresh, backup strategy, and disaster recovery improvements.",
      "Provided escalation support and managed IT operations day-to-day.",
    ],
  },
  {
    period: "2012–2014",
    duration: "2 years",
    cardGradient: "bg-[linear-gradient(135deg,rgba(50,46,10,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#facc15",
    badgeColor: "bg-[#2e2a0a] text-[#facc15] border-[#5a521a]",
    title: "IT Support Officer",
    dateRange: "Oct 2012 — Sep 2014",
    company: "Shire of Murray // WA",
    details: [
      "Provided helpdesk and on-site IT support to council staff.",
      "Managed desktop environments, peripherals, and local network issues.",
      "Assisted with IT procurement and asset management.",
    ],
  },
  {
    period: "2011–2012",
    duration: "2 years",
    cardGradient: "bg-[linear-gradient(135deg,rgba(60,16,16,0.9)_0%,rgba(19,24,32,1)_60%)]",
    accentColor: "#f87171",
    badgeColor: "bg-[#2e0a0a] text-[#f87171] border-[#5a1a1a]",
    title: "Computer Engineer",
    dateRange: "Jan 2011 — Oct 2012",
    company: "Leading Edge Computers // WA",
    details: [
      "Diagnosed and repaired hardware and software faults for business and consumer clients.",
      "Built custom PC systems and configured networking equipment.",
      "Delivered technical support and customer-facing consultations.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative flex w-full justify-center py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[40px] px-6 lg:px-0">

        <div className="flex flex-col gap-[4px]">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] text-[rgba(145,145,145,1)]">
            EXPERIENCE
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-[48px] font-semibold leading-[100%] tracking-normal text-white">
            Career <span className="text-[#38bdf8]">Timeline</span>
          </h2>
        </div>

        <div className="relative flex w-full max-w-[1011px] flex-col gap-0 self-end lg:self-auto">
          <div className="absolute left-[210px] top-[0px] bottom-[29px] w-[2px] rounded-full bg-[rgba(42,51,64,1)]"></div>

          {experiences.map((exp, i) => (
            <div key={exp.title} className="flex items-start pb-[24px]">

              <div className="flex w-[210px] shrink-0 flex-col items-end gap-[8px] pr-[16px] pt-[20px]">
                <span className="font-[family-name:var(--font-manrope)] text-[15px] font-semibold text-[rgba(190,190,190,1)]">
                  {exp.period}
                </span>
                <span className={`rounded-full border px-[10px] py-[2px] font-[family-name:var(--font-ibm-plex-mono)] text-[10px] font-medium ${exp.badgeColor}`}>
                  {exp.duration}
                </span>
              </div>

              <div className="relative flex shrink-0 flex-col justify-center pt-[24px]">
                <div className="h-[2px] w-[32px]" style={{ backgroundColor: exp.accentColor + "88" }}></div>
              </div>

              <div className="flex-1 pt-[10px]">
                <div
                  className={`w-full cursor-pointer overflow-hidden rounded-[12px] border transition-all duration-200 ${exp.cardGradient}`}
                  style={{ borderColor: `${exp.accentColor}33` }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div
                    className="h-[4px] w-full"
                    style={{ background: `linear-gradient(90deg, ${exp.accentColor}88 0%, transparent 100%)` }}
                  ></div>

                  <div className="flex items-center justify-between px-[20px] py-[18px]">
                    <div className="flex flex-col gap-[3px]">
                      <h3 className="font-[family-name:var(--font-manrope)] text-[16px] font-semibold text-[rgba(241,241,241,1)]">
                        {exp.title}
                      </h3>
                      <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] text-[rgba(130,130,130,1)]">
                        <span style={{ color: exp.accentColor + "cc" }}>{exp.dateRange}</span>
                        {" · "}
                        {exp.company}
                      </p>
                    </div>
                    <svg
                      className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {openIndex === i && (
                    <div className="border-t border-[rgba(42,51,64,0.8)] px-[20px] py-[16px]">
                      <ul className="flex flex-col gap-[8px]">
                        {exp.details.map((d) => (
                          <li key={d} className="flex items-start gap-[10px] font-sans text-[13px] leading-[170%] text-[rgba(155,155,155,1)]">
                            <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: exp.accentColor }}></span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
