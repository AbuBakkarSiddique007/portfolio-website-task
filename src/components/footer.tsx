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

        <div className="flex h-auto w-full flex-col items-start justify-between gap-3 border-t border-[rgba(42,51,64,0.6)] pt-[16px] sm:h-[50px] sm:flex-row sm:items-center sm:gap-0">
          <span className="font-[family-name:var(--font-manrope)] text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
            Mazidul Hakim
          </span>

          <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-normal tracking-wide text-zinc-500 sm:text-[12px]">
            &copy; 2026 &middot; All rights reserved
          </span>
        </div>

      </div>
    </footer>
  );
}
