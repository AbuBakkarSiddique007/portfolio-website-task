"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Expertise", href: "#expertise", id: "expertise" },
  { name: "Case Files", href: "#impact", id: "impact" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
  { name: "Qualifications", href: "#qualifications", id: "qualifications" },
];

const allSections = [
  ...navItems,
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("About");
  const [isContactActive, setIsContactActive] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingRef.current) return;

      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setIsContactActive(true);
        setActiveItem("");
        return;
      }

      const triggerPosition = 200;
      let currentSection = "";

      for (const item of allSections) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPosition && rect.bottom > triggerPosition) {
            currentSection = item.name;
            break;
          }
        }
      }

      if (currentSection === "Contact") {
        setIsContactActive(true);
        setActiveItem("");
      } else if (currentSection) {
        setIsContactActive(false);
        setActiveItem(currentSection);
      } else if (window.scrollY < 200) {
        setIsContactActive(false);
        setActiveItem("About");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; id: string }) => {
    e.preventDefault();
    setActiveItem(item.name);
    setIsContactActive(false);
    setIsMobileOpen(false);

    isClickingRef.current = true;
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);

    const element = document.getElementById(item.id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setIsContactActive(true);
    setActiveItem("");

    isClickingRef.current = true;
    setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);

    const element = document.getElementById("contact");
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex h-[66px] w-full max-w-[1440px] items-center justify-center bg-[rgba(19,24,32,0.6)] backdrop-blur-[16px]">
      <div className="flex h-[34px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 xl:px-0">
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative flex flex-col items-center text-sm transition-colors ${
                    isActive
                      ? "font-medium text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-[#00b4d8] shadow-[0_0_6px_#00b4d8]" />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={handleContactClick}
            className={`relative inline-flex h-[34px] items-center justify-center gap-2 rounded-xl px-5 text-xs font-semibold text-white transition-all duration-300 active:scale-95 ${
              isContactActive
                ? "bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.55)] ring-2 ring-[#38bdf8] ring-offset-2 ring-offset-[#0d121a]"
                : "bg-[#2db7ff] shadow-[0_0_16px_rgba(45,183,255,0.25)] hover:bg-[#3ec0ff] hover:shadow-[0_0_20px_rgba(45,183,255,0.4)]"
            }`}
          >
            {isContactActive && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
            )}
            <span>Let&apos;s Talk</span>
          </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-zinc-800/60 font-medium text-white"
                      : "text-zinc-400 hover:bg-zinc-800/40 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8] shadow-[0_0_6px_#00b4d8]" />
                  )}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={handleContactClick}
                className={`flex h-9 w-full items-center justify-center gap-2 rounded-xl text-xs font-semibold text-white transition-all ${
                  isContactActive
                    ? "bg-gradient-to-r from-[#0284c7] to-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.5)] ring-2 ring-[#38bdf8]"
                    : "bg-[#2db7ff] hover:bg-[#3ec0ff]"
                }`}
              >
                {isContactActive && (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                )}
                <span>Let&apos;s Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
