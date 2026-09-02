"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Impact", href: "#impact" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("About");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-[66px] w-full max-w-[1440px] items-center justify-center bg-[rgba(19,24,32,0.6)] backdrop-blur-[16px]">
      <div className="flex h-[34px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-0">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b4d8] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00b4d8] shadow-[0_0_8px_#00b4d8]"></span>
          </span>
          <span className="font-mono text-sm tracking-normal text-zinc-100">
            hakim.live
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 lg:gap-8">

            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  
                  className={`relative flex flex-col items-center text-sm transition-colors ${isActive
                    ? "font-medium text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-[#00b4d8] shadow-[0_0_6px_#00b4d8]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            className="inline-flex h-[34px] items-center justify-center rounded-xl bg-[#2db7ff] px-5 text-xs font-semibold text-white shadow-[0_0_16px_rgba(45,183,255,0.25)] transition-all hover:bg-[#3ec0ff] hover:shadow-[0_0_20px_rgba(45,183,255,0.4)] active:scale-95"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="absolute top-[66px] left-0 w-full border-b border-zinc-800/80 bg-[rgba(19,24,32,0.95)] px-6 py-4 backdrop-blur-[16px] md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMobileOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${isActive
                    ? "bg-zinc-800/60 font-medium text-white"
                    : "text-zinc-400 hover:bg-zinc-800/40 hover:text-white"
                    }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8] shadow-[0_0_6px_#00b4d8]" />
                  )}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="flex h-9 w-full items-center justify-center rounded-xl bg-[#2db7ff] text-xs font-semibold text-white transition-colors hover:bg-[#3ec0ff]"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
