"use client";

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
          {expertiseData.map((item) => (
            <div
              key={item.title}
              className="flex h-auto w-full flex-col gap-[16px] rounded-[12px] border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,1)] px-[24px] py-[22px] transition-all hover:border-zinc-600"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
