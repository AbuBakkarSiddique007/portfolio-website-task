"use client";

import { useState } from "react";
import type { SweetAlertOptions } from "sweetalert2";
import ScrollReveal from "@/components/scroll-reveal";

const baseModalOptions = {
  background: "#131820",
  color: "#f1f1f1",
  confirmButtonColor: "#38bdf8",
  scrollbarPadding: false,
  customClass: {
    popup: "!w-[90vw] !max-w-[420px] !p-5 sm:!p-7 border border-[rgba(42,51,64,1)] !rounded-[20px] shadow-2xl !bg-[#131820]",
    title: "!text-lg sm:!text-2xl font-[family-name:var(--font-manrope)] font-bold text-white !pt-2",
    htmlContainer: "!text-xs sm:!text-sm text-zinc-400 font-sans !m-0 !mt-2",
    confirmButton: "!w-full sm:!w-auto !rounded-[12px] font-bold !px-6 !py-2.5 !text-sm !mt-2",
    icon: "!scale-75 sm:!scale-100 !my-1",
    actions: "!w-full !m-0 !mt-3 flex justify-center",
  },
} satisfies SweetAlertOptions;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const Swal = (await import("sweetalert2")).default;

    if (!email.trim() || !message.trim()) {
      Swal.fire({
        ...baseModalOptions,
        icon: "warning",
        title: "Missing Information",
        text: "Please enter both your email and message before sending.",
      });
      return;
    }

    Swal.fire({
      ...baseModalOptions,
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I will get back to you shortly.",
      iconColor: "#4ade80",
    });

    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative flex w-full justify-center overflow-x-clip pb-12 pt-16 lg:pb-16 lg:pt-24">
      <div className="pointer-events-none absolute -right-28 -bottom-36 h-[850px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16)_0%,rgba(14,50,90,0.1)_45%,transparent_75%)] blur-[120px]"></div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[32px] px-6 xl:px-0">

        <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
          CONTACT
        </p>

        <div className="flex w-full flex-col justify-between gap-[48px] lg:flex-row lg:gap-[141px]">

          <ScrollReveal delay={0}>
          <div className="flex w-full flex-col gap-[32px] lg:w-[631px]">
            <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[1.15]">
              LET&apos;S SECURE WHAT<br />YOU BUILD
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[8px]">
                <label className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium tracking-wide text-zinc-400">
                  Email
                </label>
                <div className="relative flex items-center rounded-[12px] border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,0.85)] px-[16px] transition-all focus-within:border-[#38bdf8]">
                  <svg
                    className="h-5 w-5 shrink-0 text-zinc-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-[52px] w-full bg-transparent pl-3 text-[14px] text-white placeholder-zinc-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-medium tracking-wide text-zinc-400">
                  Message
                </label>
                <div className="relative flex rounded-[12px] border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,0.85)] p-[16px] transition-all focus-within:border-[#38bdf8]">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-zinc-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.85 5.977 5.977 0 011.523-2.71C4.305 16.037 3 14.135 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full resize-none bg-transparent pl-3 text-[14px] text-white placeholder-zinc-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex h-[52px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-[14px] bg-gradient-to-r from-[#2db7ff] via-[#38bdf8] to-[#67e8f9] px-8 font-[family-name:var(--font-manrope)] text-[15px] font-bold tracking-wide text-[#080c14] shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(56,189,248,0.55)] active:scale-[0.98] sm:w-auto"
                >
                  <div className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"></div>
                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                  <span className="relative z-10 font-bold">SEND MESSAGE</span>
                </button>
              </div>
            </form>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
          <div className="flex flex-1 items-center justify-center lg:h-[562px]">
            <div className="flex w-full max-w-[383px] flex-col gap-[24px]">
              <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-bold tracking-wider text-[#ccff00]">
                OR REACH ME DIRECTLY
              </span>

              <div className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-semibold tracking-wider text-[#38bdf8]">
                  EMAIL
                </span>
                <a
                  href="mailto:mazidulhakim@gmail.com"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[16px] text-zinc-200 transition-colors hover:text-white"
                >
                  mazidulhakim@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-semibold tracking-wider text-[#38bdf8]">
                  LINKEDIN
                </span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-ibm-plex-mono)] text-[16px] font-medium text-[#4ade80] transition-colors hover:underline"
                >
                  CONNECT
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
