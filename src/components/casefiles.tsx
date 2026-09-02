"use client";

const cases = [
  {
    id: "CASE-001",
    category: "Infrastructure / Resilience",
    categoryColor: "border-orange-400 text-orange-400",
    title: "Infrastructure Modernization",
    description:
      "Aging on-prem server and storage infrastructure with no real disaster recovery. Replaced legacy infrastructure with Dell modular servers and EMC storage, introduced new L3 Cisco switching, repurposed legacy hardware into a dedicated DR site, and deployed VEEAM backup.",
    outcomes: [
      { action: "eliminated single points of hardware failure", tool: "Dell / EMC" },
      { action: "established working disaster recovery", tool: "DR site" },
      { action: "modernised core network infrastructure", tool: "Cisco L3" },
      { action: "deployed reliable backup and recovery", tool: "VEEAM" },
    ],
  },
  {
    id: "CASE-002",
    category: "Security / Risk",
    categoryColor: "border-[#38bdf8] text-[#38bdf8]",
    title: "Cybersecurity Uplift",
    description:
      "Fragmented security tooling and inconsistent access control across a distributed workforce. Deployed Fortinet NGFW, client VPN, organisation-wide MFA, password management, and migrated email security to a cloud platform.",
    outcomes: [
      { action: "consolidated fragmented security tooling", tool: "Fortinet NGFW" },
      { action: "secured remote workforce access", tool: "Client VPN" },
      { action: "strengthened identity protection", tool: "Org-wide MFA" },
      { action: "improved credential security", tool: "Password Management" },
      { action: "modernised email security", tool: "Cloud Platform" },
    ],
  },
  {
    id: "CASE-003",
    category: "Collaboration",
    categoryColor: "border-[#38bdf8] text-[#38bdf8]",
    title: "Cloud & Collaboration Migration",
    description:
      "On-prem Exchange was a single point of failure with no modern collaboration tooling. Migrated to Microsoft 365 — including Exchange Online, Teams and SharePoint — rolled out Azure AD, and introduced hybrid cloud storage.",
    outcomes: [
      { action: "removed dependency on aging on-prem Exchange", tool: "Exchange Online" },
      { action: "modernised company-wide collaboration", tool: "Microsoft Teams" },
      { action: "centralised document collaboration", tool: "SharePoint" },
      { action: "strengthened cloud identity management", tool: "Azure AD" },
      { action: "introduced flexible hybrid cloud storage", tool: "Hybrid Storage" },
    ],
  },
  {
    id: "CASE-004",
    category: "Data / Continuity",
    categoryColor: "border-[#38bdf8] text-[#38bdf8]",
    title: "Cloud Backup & Disaster Recovery",
    description:
      "Backup and recovery was manual, slow, and not cloud-resilient. Implemented cloud-based backup integrated with AWS, alongside SaaS backup for Office 365 data, creating a more resilient and scalable data protection strategy.",
    outcomes: [
      { action: "automated cloud-based backup", tool: "AWS" },
      { action: "protected critical Office 365 data", tool: "SaaS Backup" },
      { action: "reduced manual backup dependency", tool: "Cloud Recovery" },
      { action: "improved recovery speed and reliability", tool: "Disaster Recovery" },
      { action: "strengthened compliance readiness", tool: "Data Protection" },
    ],
  },
  {
    id: "CASE-005",
    category: "Network / Connectivity",
    categoryColor: "border-[#38bdf8] text-[#38bdf8]",
    title: "Network & WAN Redesign",
    description:
      "Legacy managed WAN limited flexibility and reliability across branch sites. Directed the upgrade to fibre connectivity across all sites and transitioned network operations to a cloud-managed gateway for greater control, availability, and scalability.",
    outcomes: [
      { action: "upgraded connectivity across all branch sites", tool: "Fibre" },
      { action: "reduced dependency on legacy managed WAN", tool: "WAN Redesign" },
      { action: "centralised network management", tool: "Cloud Gateway" },
      { action: "improved network availability", tool: "High Availability" },
      { action: "simplified operations across branches", tool: "Central Management" },
    ],
  },
  {
    id: "CASE-006",
    category: "Infrastructure / Performance",
    categoryColor: "border-[#38bdf8] text-[#38bdf8]",
    title: "Virtualisation Overhaul",
    description:
      "Aging server hardware and a legacy virtualisation platform were constraining performance. Replaced the infrastructure with Tier 1 hardware, migrated to Hyper-V, and upgraded the server OS and mail platform to improve overall system performance and stability.",
    outcomes: [
      { action: "replaced aging server infrastructure", tool: "Tier 1 Hardware" },
      { action: "modernised virtualisation platform", tool: "Hyper-V" },
      { action: "upgraded server operating environment", tool: "Server OS" },
      { action: "upgraded enterprise mail platform", tool: "Mail Platform" },
      { action: "improved performance and stability by up to 50%", tool: "Performance" },
    ],
  },
];

export default function CaseFiles() {
  return (
    <section id="impact" className="relative flex w-full justify-center py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] px-6 xl:px-0">

        <div className="flex h-[34px] w-full max-w-[1280px] items-center gap-[8px] pb-[8px]">
          <p className="font-[family-name:var(--font-ibm-plex-mono)] text-[14px] font-semibold leading-[180%] tracking-normal text-[rgba(145,145,145,1)]">
            CASE FILES
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.id}
              className="flex w-full flex-col gap-[16px] rounded-[24px] border border-[rgba(42,51,64,1)] bg-[rgba(19,24,32,1)] px-[20px] py-[24px] transition-all hover:border-zinc-600 sm:px-[28px]"
            >
              <div className="flex items-center justify-between">
                <span className={`rounded-full border px-[12px] py-[4px] font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-medium ${item.categoryColor}`}>
                  {item.category}
                </span>
              </div>

              <div className="flex flex-col gap-[8px]">
                <h3 className="font-[family-name:var(--font-manrope)] text-[22px] font-bold leading-tight tracking-normal text-[rgba(241,241,241,1)]">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] font-normal leading-[170%] text-[rgba(160,160,160,1)]">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-[6px] rounded-[8px] border border-[rgba(42,51,64,0.6)] bg-[rgba(14,19,27,0.7)] px-[14px] py-[12px]">
                {item.outcomes.map((o) => (
                  <div key={o.action} className="flex items-baseline justify-between gap-4">
                    <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] leading-[200%] text-[#4ade80]">
                      + {o.action}
                    </span>
                    <span className="shrink-0 font-sans text-[11px] font-normal leading-[200%] text-[rgba(180,180,180,1)]">
                      {o.tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
