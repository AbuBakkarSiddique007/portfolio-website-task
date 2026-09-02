"use client";

import Link from "next/link";
import { Briefcase, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden py-8 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,50,90,0.25),rgba(0,0,0,0))]"></div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_85%_70%_at_50%_40%,#000_50%,transparent_100%)]">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        ></div>

        <div className="absolute inset-0 mx-auto max-w-[1440px]">
          <div className="absolute top-[48px] left-[96px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/30 bg-[#38bdf8]/10 shadow-[0_0_16px_rgba(56,189,248,0.2)]"></div>
          <div className="absolute top-[144px] left-[240px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/20 bg-[#38bdf8]/5"></div>
          <div className="absolute top-[96px] right-[144px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/35 bg-[#38bdf8]/12 shadow-[0_0_20px_rgba(56,189,248,0.25)] animate-pulse"></div>
          <div className="absolute top-[288px] right-[240px] h-[48px] w-[48px] rounded-[4px] border border-[#ccff00]/30 bg-[#ccff00]/10 shadow-[0_0_16px_rgba(204,255,0,0.18)]"></div>
          <div className="absolute bottom-[96px] left-[192px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/25 bg-[#38bdf8]/8 shadow-[0_0_12px_rgba(56,189,248,0.15)]"></div>
          <div className="absolute bottom-[144px] right-[96px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/20 bg-[#38bdf8]/5"></div>
          <div className="absolute top-[240px] left-[48px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/25 bg-[#38bdf8]/8 shadow-[0_0_12px_rgba(56,189,248,0.15)] animate-pulse"></div>
          <div className="absolute bottom-[48px] left-[480px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/20 bg-[#38bdf8]/5"></div>
          <div className="absolute top-[48px] right-[432px] h-[48px] w-[48px] rounded-[4px] border border-[#38bdf8]/25 bg-[#38bdf8]/8 shadow-[0_0_12px_rgba(56,189,248,0.15)]"></div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-12 px-6 lg:min-h-[534px] lg:flex-row lg:gap-0 xl:px-0">

          <div className="flex w-full flex-col justify-start gap-[28px] lg:w-[575px]">
            <div className="flex w-full flex-col justify-between gap-4">
              <div className="flex w-full items-center gap-[8px]">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00] shadow-[0_0_8px_#ccff00]"></span>
                </span>
                <span className="font-mono text-xs leading-[14px] tracking-wider text-zinc-300">
                  IT Manager &bull; Cloud &bull; Cybersecurity
                </span>
              </div>

              <div className="flex w-full flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-[72px] lg:leading-[84px]">
                  Mazidul
                </h1>
                <h1 className="text-4xl font-bold tracking-tight text-[#2db7ff] sm:text-6xl lg:text-[72px] lg:leading-[84px]">
                  Hakim
                </h1>
              </div>

              <p className="w-full font-[family-name:var(--font-manrope)] text-[15px] font-normal leading-[180%] tracking-normal text-[#ababab] sm:text-[16px]">
                Senior IT leader with 17+ years turning technology functions around &mdash; network modernisation, cloud migration and cybersecurity uplift across complex, multi-site organisations.
              </p>

              <div className="flex w-full flex-wrap items-center gap-[12px] sm:gap-[16px]">
                <div className="inline-flex h-[42px] items-center justify-center gap-[10px] rounded-[50px] border border-zinc-800 bg-[#131822]/80 px-[20px] py-[10px] text-xs font-medium text-zinc-300">
                  IT Leadership
                </div>
                <div className="inline-flex h-[39px] max-w-full items-center justify-center gap-[10px] rounded-[50px] border-[0.5px] border-[#ccff00]/40 bg-[#1c2612]/70 px-[20px] py-[10px] font-mono text-xs font-medium text-[#ccff00]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccff00] shadow-[0_0_6px_#ccff00]"></span>
                  <span className="truncate">open to SOC / Cybersecurity</span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-[14px] sm:flex-row sm:gap-[19px]">
              <Link
                href="#experience"
                className="inline-flex h-[52px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[rgba(24,31,41,1)] px-[24px] text-sm font-medium text-white transition-all hover:bg-[rgba(30,39,52,1)] active:scale-95 sm:h-[56px] sm:w-[194px]"
              >
                <Briefcase className="h-4 w-4 text-white" />
                <span className="text-white">Career Info</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-[52px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[rgba(56,189,248,1)] px-[24px] text-sm font-semibold text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all hover:bg-[rgba(70,198,255,1)] active:scale-95 sm:h-[56px] sm:w-[213px]"
              >
                <Mail className="h-4 w-4 text-black" />
                <span className="text-black">Contact Now</span>
              </Link>
            </div>
          </div>

          <div className="relative flex h-[320px] w-full items-center justify-center sm:h-[420px] lg:h-[534px] lg:w-[592px]">
          <svg
            className="h-full w-full"
            viewBox="0 0 592 534"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow-sg" x="245" y="22" width="80" height="80" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-circle" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 16 282 Q 130 140 285 62"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1.2"
            />
            <path
              d="M 285 62 Q 380 120 435 232"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1.2"
            />
            <path
              d="M 285 62 L 152 350"
              stroke="rgba(255, 255, 255, 0.18)"
              strokeWidth="1.2"
            />
            <path
              d="M 16 282 Q 80 380 186 418"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1.2"
            />

            <g>
              <circle cx="285" cy="62" r="14" fill="rgba(204,255,0,0.2)" filter="url(#glow-sg)" />
              <circle cx="285" cy="62" r="8" fill="#dfff00" />
              <text x="305" y="52" fill="#f6f6f6" fontSize="13" fontFamily="monospace" fontWeight="500">Singapore HQ</text>
            </g>

            <g>
              <circle cx="435" cy="232" r="8" fill="#38bdf8" />
              <text x="455" y="222" fill="#f6f6f6" fontSize="13" fontFamily="monospace" fontWeight="500">India</text>
              <text x="455" y="240" fill="#858585" fontSize="10" fontFamily="monospace" letterSpacing="0.08em">OFFSHORE TEAM</text>
            </g>

            <g>
              <circle cx="16" cy="282" r="8" fill="#ffffff" />
              <text x="36.03" y="285" fill="#f6f6f6" fontSize="13" fontFamily="monospace" fontWeight="500">Australia</text>
              <text x="36.03" y="306" fill="#858585" fontSize="10" fontFamily="monospace" letterSpacing="0.08em">8 BRANCHES</text>
            </g>

            <g>
              <circle cx="152" cy="350" r="8" fill="#38bdf8" />
              <text x="172" y="340" fill="#f6f6f6" fontSize="13" fontFamily="monospace" fontWeight="500">Philippines</text>
              <text x="172" y="358" fill="#858585" fontSize="10" fontFamily="monospace" letterSpacing="0.08em">OFFSHORE TEAM</text>
            </g>

            <g>
              <circle cx="186" cy="418" r="8" fill="#ffffff" />
              <text x="206" y="408" fill="#f6f6f6" fontSize="13" fontFamily="monospace" fontWeight="500">Auckland</text>
              <text x="206" y="426" fill="#858585" fontSize="10" fontFamily="monospace" letterSpacing="0.08em">NEW ZEALAND</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
