import ScrollReveal from "@/components/scroll-reveal";

const expertiseData = [
  {
    title: "Cloud & identity",
    description: "Design and manage secure, scalable cloud environments.",
    tags: ["AWS", "Azure", "Microsoft 365", "MFA", "Entra ID", "Intune"],
  },
  {
    title: "Network & security",
    description: "Architect resilient, zero-trust network infrastructure.",
    tags: ["Cisco", "Fortinet SASE", "Aruba", "Meraki", "Palo Alto"],
  },
  {
    title: "Cybersecurity",
    description: "Build layered defence and real-time threat visibility.",
    tags: ["Defender", "CrowdStrike", "Essential 8", "Sentinel", "DLP"],
  },
  {
    title: "Data, AI & automation",
    description: "Turn operational data into decision-ready insight.",
    tags: ["Copilot", "Snowflake", "Power BI", "CargoWise"],
  },
  {
    title: "Virtualization & DR",
    description: "Engineer resilient infrastructure with proven recovery.",
    tags: ["VMware", "Hyper-V", "Citrix", "Azure Backup", "Druva"],
  },
  {
    title: "Leadership",
    description: "Lead distributed teams and multi-million dollar budgets.",
    tags: ["Team leadership", "Vendor Operations", "Budget ownership"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative flex w-full justify-center py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[16px] px-6 xl:px-0">
        <p className="h-[25px] w-full max-w-[1280px] font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
          EXPERTISE
        </p>

        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div
                className="group relative flex h-full w-full flex-col gap-[16px] rounded-[12px] border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,1)] px-[24px] py-[22px] transition-all duration-300 hover:border-[#38bdf8]/60 hover:shadow-[0_0_24px_rgba(56,189,248,0.08)]"
              >
                <div className="pointer-events-none absolute top-4 right-4 flex scale-75 items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"></span>
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--font-manrope)] text-[20px] font-semibold leading-tight tracking-normal text-[rgba(241,241,241,1)]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14px] font-normal leading-[160%] tracking-normal text-[rgba(181,181,181,1)]">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-[8px]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[rgba(42,51,64,1)] bg-[rgba(26,32,42,1)] px-[10px] py-[4px] text-[11px] font-normal leading-[160%] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
