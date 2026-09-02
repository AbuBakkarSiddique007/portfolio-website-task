"use client";


const items = [
  "PENETRATION TESTING",
  "APPLICATION & API SECURITY",
  "BUG BOUNTY",
  "THREAT INTELLIGENCE",
  "WEB DEVELOPMENT",
  "INCIDENT RESPONSE",
  "PENETRATION TESTING",
  "SECURE SDLC",
];

function StarIcon() {
  return (
    <svg
      className="h-3 w-3 shrink-0 text-[#ccff00]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function Marquee() {
  return (
    <div className="group relative flex h-[56px] w-full max-w-[1456px] items-center justify-center overflow-hidden bg-[rgba(255,237,226,0.1)] py-[16px]">
      <div className="relative flex h-[24px] w-full max-w-[1440px] items-center overflow-hidden">
        <div className="animate-marquee flex items-center gap-[32px] whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((text, index) => (
            <div key={index} className="flex items-center gap-[32px]">
              <span className="font-sans text-[12px] font-bold leading-[180%] tracking-normal text-white">
                {text}
              </span>
              <StarIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
