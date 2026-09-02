"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer className="relative flex w-full justify-center overflow-x-clip pb-12 pt-0">
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[16px] px-6 xl:px-0">

        <div className="flex w-full flex-wrap items-center justify-start gap-[16px] sm:justify-end sm:gap-[32px]">
          <Link
            href="#about"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="#expertise"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            Expertise
          </Link>
          <Link
            href="#impact"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            Case Files
          </Link>
          <Link
            href="#experience"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            Experience
          </Link>
          <Link
            href="#certificates"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            Certificates
          </Link>
          <Link
            href="#qualifications"
            className="text-[13px] font-normal text-zinc-400 transition-colors hover:text-white"
          >
            Qualifications
          </Link>
        </div>

        <div className="flex h-auto w-full flex-col items-start justify-between gap-4 border-t border-[rgba(42,51,64,0.6)] pt-[16px] sm:h-[50px] sm:flex-row sm:items-center sm:gap-0">
          <span className="font-[family-name:var(--font-manrope)] text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
            Mazidul Hakim
          </span>

          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end sm:gap-6">
            <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-normal tracking-wide text-zinc-500 sm:text-[12px]">
              &copy; 2026 &middot; All rights reserved
            </span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Scroll to top"
              className="group flex h-8 items-center gap-1.5 rounded-xl border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,0.85)] px-3 text-xs font-medium text-zinc-300 shadow-sm transition-all hover:border-[#38bdf8]/60 hover:bg-[#131822] hover:text-white hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] active:scale-95 sm:h-8.5 sm:px-3.5"
            >
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium tracking-wider">TOP</span>
              <svg
                className="h-3.5 w-3.5 text-[#38bdf8] transition-transform duration-200 group-hover:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
