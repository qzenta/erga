import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

/* ─── Document definitions ─────────────────────────────────────────────── */

type Section = {
  heading: string;
  items: string[] | { label: string; detail?: string }[];
};

type Document = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: Section[];
  footer?: string;
};

const DOCS: Document[] = [
  {
    slug: "tenant-checklist",
    title: "Tenant Move-In Checklist",
    subtitle: "Complete this checklist before and on your moving day",
    intro:
      "This checklist is designed to ensure a smooth, well-documented move-in experience for all new Erga Properties tenants. Please complete each step and retain a signed copy for your records.",
    sections: [
      {
        heading: "Before Moving In",
        items: [
          { label: "Signed lease agreement received and retained", detail: "Keep a physical and digital copy" },
          { label: "Deposit paid and receipt obtained", detail: "Receipt must reference lease and property address" },
          { label: "First month's rent paid", detail: "Pro-rata if moving in mid-month" },
          { label: "Certified copy of SA ID / passport submitted to Erga", detail: "" },
          { label: "Proof of income / employment letter on file with Erga", detail: "" },
          { label: "Utility account transfer / application submitted", detail: "Electricity, water — confirm with Erga which apply" },
          { label: "Home contents insurance arranged (recommended)", detail: "Erga's building insurance does not cover tenant contents" },
          { label: "Contact details updated with Erga office", detail: "Cell number, email, emergency contact" },
        ],
      },
      {
        heading: "On Moving Day",
        items: [
          { label: "Joint ingoing inspection completed with Erga representative", detail: "Both parties sign the inspection report" },
          { label: "Inspection report signed and copy retained", detail: "Documents pre-existing defects and condition of all fixtures" },
          { label: "Meter readings recorded and photographed", detail: "Electricity, water — date-stamp the photos" },
          { label: "All keys, remotes and access cards received", detail: "Count and sign acknowledgement form" },
          { label: "Parking bay / garage allocation confirmed in writing", detail: "" },
          { label: "Property rules and regulations document received and signed", detail: "" },
          { label: "Emergency contact numbers saved", detail: "Erga office: info@erga.co.za | Maintenance reporting channel confirmed" },
        ],
      },
      {
        heading: "Within Your First Week",
        items: [
          { label: "Report any maintenance issues not noted in the inspection", detail: "Use the Erga maintenance reporting channel within 7 days" },
          { label: "Test all appliances and fixtures (stove, geysers, taps, lights)", detail: "" },
          { label: "Confirm refuse collection day with Erga or building management", detail: "" },
          { label: "Update your postal address with banks, SARS, and other institutions", detail: "" },
          { label: "Confirm debit order or payment method for monthly rent", detail: "Rent due by 1st of each month — late payment attracts interest" },
          { label: "Read and familiarise yourself with the Tenant Code of Conduct", detail: "" },
        ],
      },
    ],
    footer:
      "Signed by tenant: __________________________ Date: ______________\nSigned by Erga representative: __________________________ Date: ______________",
  },

  {
    slug: "tenant-code-of-conduct",
    title: "Tenant Code of Conduct",
    subtitle: "Standards and responsibilities for all Erga Properties tenants",
    intro:
      "This Code of Conduct forms part of your lease agreement. It sets out the standards of behaviour and responsibilities expected of all tenants occupying Erga Properties managed units. Non-compliance may result in formal action in terms of the Rental Housing Act No. 50 of 1999.",
    sections: [
      {
        heading: "1. Rental Payments",
        items: [
          "Rent is due on or before the 1st of each calendar month.",
          "Payments must be made via EFT to the Erga Properties account — cash payments are not accepted.",
          "Proof of payment must be sent to info@erga.co.za immediately after payment.",
          "Late payment attracts interest at the rate specified in your lease.",
          "Repeated late payment is a breach of the lease agreement.",
        ],
      },
      {
        heading: "2. Care of the Property",
        items: [
          "The tenant is responsible for keeping the property in good, clean condition.",
          "Fair wear and tear is accepted; damage beyond fair wear and tear will be charged against the deposit.",
          "No nails, screws or hooks may be inserted into walls without written consent from Erga.",
          "No alterations, additions or renovations may be made without prior written approval.",
          "Gardens and outdoor areas (where applicable) must be maintained to a reasonable standard.",
        ],
      },
      {
        heading: "3. Neighbours and Noise",
        items: [
          "Tenants must not disturb neighbours with excessive noise at any time.",
          "Quiet hours are enforced: 22:00 to 07:00 on weekdays, 23:00 to 08:00 on weekends.",
          "Music, televisions and gatherings must be kept at a reasonable volume.",
          "Repeated noise complaints will constitute a lease breach.",
        ],
      },
      {
        heading: "4. Pets",
        items: [
          "No pets are permitted without prior written consent from Erga Properties.",
          "Where pets are permitted, the tenant accepts full responsibility for any damage caused.",
          "An additional pet deposit may be required.",
          "Pets must not cause a nuisance to other occupants or neighbours.",
        ],
      },
      {
        heading: "5. Subletting and Visitors",
        items: [
          "The property may not be sublet, in whole or in part, without written consent from Erga.",
          "The tenant may not list the property on Airbnb or any short-stay platform.",
          "Visitors may stay for a maximum of 14 consecutive days without written approval.",
          "Long-term guests must be added to the lease agreement.",
        ],
      },
      {
        heading: "6. Maintenance and Reporting",
        items: [
          "Tenants must report maintenance issues promptly via the designated Erga channel.",
          "Emergency maintenance (burst pipes, electrical faults) must be reported immediately.",
          "Tenants must allow authorised Erga contractors access to the property upon reasonable notice (24 hours except in emergencies).",
          "Tenants are responsible for: replacing light bulbs, unblocking drains (minor), and keeping the property pest-free in day-to-day living.",
        ],
      },
      {
        heading: "7. Vacating the Property",
        items: [
          "Written notice must be given as per the lease agreement (minimum one calendar month).",
          "The property must be returned in the condition it was received, subject to fair wear and tear.",
          "An outgoing inspection will be conducted jointly with an Erga representative.",
          "All keys, remotes and access devices must be returned on the last day of the lease.",
          "The deposit will be reconciled within 14 days of vacation in terms of the Rental Housing Act.",
        ],
      },
    ],
    footer:
      "Tenant acknowledgement: I have read and understood this Code of Conduct.\n\nSigned: __________________________ Date: ______________\nFull name: __________________________",
  },

  {
    slug: "property-rules",
    title: "Property Rules & Regulations",
    subtitle: "General rules governing the use of all Erga Properties managed units",
    intro:
      "These rules apply to all occupants — tenants, owners, and their guests — in Erga Properties managed buildings and complexes. They exist to maintain a safe, orderly, and well-maintained environment for all residents.",
    sections: [
      {
        heading: "Parking",
        items: [
          "Each unit is allocated one parking bay as specified in the lease.",
          "Visitor parking bays are reserved for visitors only and may not be used by tenants.",
          "No vehicle repairs or major maintenance may be carried out in parking areas.",
          "Inoperable or abandoned vehicles will be towed at the owner's expense.",
          "No caravans, boats, or trailers may be parked without prior written permission.",
        ],
      },
      {
        heading: "Common Areas",
        items: [
          "Common areas (hallways, gardens, laundry rooms) must be kept clear at all times.",
          "No personal items (furniture, bicycles, boxes) may be stored in common areas.",
          "Common area facilities are shared — leave them clean and in good condition after use.",
          "Children playing in common areas must be supervised by an adult.",
        ],
      },
      {
        heading: "Security",
        items: [
          "Perimeter gates and entrance doors must not be left open or propped.",
          "Do not grant access to unfamiliar individuals via intercom systems.",
          "Report any suspicious activity to Erga Properties and, where necessary, to SAPS.",
          "Lost access cards or keys must be reported immediately — replacement costs are for the tenant's account.",
        ],
      },
      {
        heading: "Waste and Recycling",
        items: [
          "All refuse must be placed in the designated refuse area on the morning of collection day.",
          "Refuse bags must be tied before placement.",
          "No refuse may be left in common areas, corridors, or outside unit doors.",
          "Bulky items (furniture, appliances) must be arranged for separate collection — contact Erga.",
        ],
      },
      {
        heading: "Fire Safety",
        items: [
          "No open fires or braais (unless a designated braai area exists at the property).",
          "Fire exits must not be obstructed at any time.",
          "Smoke alarms must not be tampered with or removed.",
          "Report any fire safety concerns to Erga Properties immediately.",
        ],
      },
      {
        heading: "Alterations and Fixtures",
        items: [
          "No structural or cosmetic alterations may be made to any unit without written consent.",
          "No satellite dishes, security bars, or external fittings may be installed without approval.",
          "Approved alterations become part of the property unless specifically agreed otherwise in writing.",
        ],
      },
    ],
    footer:
      "These rules are binding on all tenants and occupants.\n\nAcknowledged by: __________________________ Date: ______________",
  },

  {
    slug: "managing-agent-guide",
    title: "Managing Agent: What to Expect",
    subtitle: "A plain-language guide for property owners working with Erga Properties",
    intro:
      "Appointing a professional managing agent is one of the most important decisions a property owner can make. This guide explains exactly how Erga Properties operates as your managing agent — our scope, responsibilities, reporting process, and what you can expect from day one.",
    sections: [
      {
        heading: "What a Managing Agent Does",
        items: [
          { label: "Tenant sourcing and vetting", detail: "Credit checks, employment verification, rental history — Erga handles the full vetting process so you don't have to." },
          { label: "Lease administration", detail: "Erga drafts, signs, and manages all lease agreements in compliance with the Rental Housing Act." },
          { label: "Rental collection", detail: "Monthly invoicing, EFT collection, and arrears management. You receive your net rental on or before a fixed payment date each month." },
          { label: "Maintenance coordination", detail: "Tenant maintenance requests are received, assessed, and coordinated with approved contractors. You are notified and approve major repairs." },
          { label: "Financial reporting", detail: "You receive a monthly income and expenditure statement, showing rent received, deductions, and your net payment." },
          { label: "Tenant relations", detail: "Erga is the primary contact for all tenant queries, complaints, and communication. You can step back entirely if you choose." },
        ],
      },
      {
        heading: "The Fee Structure",
        items: [
          { label: "Management fee", detail: "10% of the gross monthly rental collected. This fee is deducted before your net rental is paid to you." },
          { label: "Tenant placement fee", detail: "One month's gross rental (once-off, charged when a new tenant is successfully placed)." },
          { label: "Maintenance markup", detail: "Erga does not mark up contractor invoices. You pay the contractor rate. Erga's coordination is included in the management fee." },
          { label: "No hidden fees", detail: "All fees are set out in your managing agent mandate. Erga will not deduct any amount not agreed to in writing." },
        ],
      },
      {
        heading: "Your Monthly Report",
        items: [
          "Issued by the 7th of each month for the preceding month.",
          "Shows: opening balance, rent invoiced, rent collected, arrears, maintenance costs, management fee, net payment to owner.",
          "Sent to your email on file. Electronic copies retained for 5 years.",
          "Annual summary provided for tax and audit purposes.",
        ],
      },
      {
        heading: "Maintenance: Your Approvals",
        items: [
          "Routine maintenance (under R500): Erga resolves immediately and reports to you.",
          "Mid-range maintenance (R500–R3,000): Erga obtains a quote and sends to you for approval before proceeding.",
          "Major maintenance (over R3,000): Two quotes obtained. Your written approval required before any work proceeds.",
          "Emergency maintenance: Erga acts to prevent further damage regardless of cost, and notifies you immediately.",
        ],
      },
      {
        heading: "The Mandate and Your Rights",
        items: [
          "A formal managing agent mandate is signed before Erga commences management.",
          "The mandate sets out the duration, fees, and both parties' obligations.",
          "You retain ownership and final decision-making authority on all matters.",
          "Either party may terminate the mandate with one month's written notice (or as per agreed terms).",
          "On termination, Erga will provide a full handover of all documentation, keys, and financial records within 7 business days.",
        ],
      },
    ],
    footer:
      "For questions about this guide or to discuss a managing agent mandate, contact us at info@erga.co.za or visit www.erga.co.za/contact.",
  },

  {
    slug: "rental-application-checklist",
    title: "Rental Application Checklist",
    subtitle: "Documents required when applying to rent an Erga Properties managed unit",
    intro:
      "To process your rental application as quickly as possible, please ensure all of the following documents are submitted in full. Incomplete applications cannot be processed. All documents are treated with strict confidentiality in accordance with POPIA.",
    sections: [
      {
        heading: "Identity Documents",
        items: [
          { label: "Certified copy of South African ID (green bar-coded or smart card)", detail: "Certified within the last 3 months by a Commissioner of Oaths" },
          { label: "If not SA citizen: Certified copy of valid passport + work / residence permit", detail: "Permit must be valid for the intended duration of the lease" },
        ],
      },
      {
        heading: "Proof of Income",
        items: [
          { label: "3 most recent payslips", detail: "Must show employer name, employee name, salary and deductions" },
          { label: "Most recent 3 months' bank statements", detail: "Stamped or official PDF from your bank — salary credits must be visible" },
          { label: "If self-employed: 6 months' bank statements + most recent annual financial statements or management accounts", detail: "" },
          { label: "Letter of employment on company letterhead", detail: "Confirming position, start date, and gross monthly salary; signed by HR or line manager" },
        ],
      },
      {
        heading: "Rental History",
        items: [
          { label: "Previous landlord reference letter (if applicable)", detail: "Contact details of your previous landlord will be verified" },
          { label: "Most recent lease agreement (if available)", detail: "Helps confirm rental payment history and previous address" },
        ],
      },
      {
        heading: "Credit and Consent",
        items: [
          { label: "Signed credit check consent form", detail: "Provided by Erga — authorises a credit bureau check via TransUnion or Experian" },
          { label: "Signed POPIA consent form", detail: "Provided by Erga — authorises processing of personal information for the purpose of this application" },
        ],
      },
      {
        heading: "Other (where applicable)",
        items: [
          { label: "Company registration documents", detail: "If leasing in the name of a business entity" },
          { label: "Guarantor documents", detail: "If a guarantor is required: ID, proof of income, and signed suretyship form" },
          { label: "Pet documentation", detail: "If a pet is to be kept on the premises: type, breed, and vaccinations" },
        ],
      },
    ],
    footer:
      "Submit your application to: info@erga.co.za | Subject line: RENTAL APPLICATION — [PROPERTY ADDRESS]\n\nProcessing time: 2–3 business days from receipt of complete application.",
  },

  {
    slug: "lease-renewal-guide",
    title: "Lease Renewal Guide",
    subtitle: "Understanding your rights and obligations at lease renewal under South African law",
    intro:
      "When your fixed-term lease approaches its end, both you and your landlord have specific rights and obligations under the Rental Housing Act No. 50 of 1999 and the Consumer Protection Act No. 68 of 2008. This guide explains what to expect and how to handle the renewal process.",
    sections: [
      {
        heading: "Notice Periods",
        items: [
          { label: "Landlord's notice to increase rent / not renew", detail: "Minimum 20 business days written notice before lease end date." },
          { label: "Tenant's notice to vacate (not renewing)", detail: "Minimum 20 business days written notice before lease end date — or as specified in your lease, whichever is longer." },
          { label: "Automatic periodic lease", detail: "If neither party gives notice, a fixed-term lease automatically converts to a month-to-month lease on the same terms." },
          { label: "Month-to-month termination", detail: "Either party may terminate a periodic lease with one calendar month's written notice." },
        ],
      },
      {
        heading: "Rental Escalation",
        items: [
          { label: "CPI-linked escalation", detail: "Rental escalations are typically linked to the Consumer Price Index (CPI). Erga will inform you of the proposed increase in writing." },
          { label: "Reasonableness test", detail: "Under the Rental Housing Act, a rental increase must be reasonable and not exploitative." },
          { label: "If you dispute the increase", detail: "You may refer the dispute to the Rental Housing Tribunal (RHT) in your province — this is free and does not require an attorney." },
          { label: "Fixed escalation clause", detail: "If your lease specifies a fixed escalation percentage, that rate applies and cannot be changed without your written consent." },
        ],
      },
      {
        heading: "Your Renewal Options",
        items: [
          "Accept the new terms and sign a renewed lease agreement.",
          "Negotiate the rental or other lease terms with Erga (on behalf of the owner).",
          "Give notice to vacate and find alternative accommodation.",
          "Convert to month-to-month and remain while you search for alternatives.",
        ],
      },
      {
        heading: "Deposit at Renewal",
        items: [
          "Your deposit is not forfeited and does not reset at renewal — it remains invested in an interest-bearing account in your name.",
          "Interest earned on your deposit belongs to you and will be paid out at the end of the tenancy.",
          "An additional deposit top-up may be requested if the rental has increased significantly — this must be agreed to in writing.",
        ],
      },
      {
        heading: "Renewal Process with Erga",
        items: [
          "Erga will contact you at least 60 days before your lease end date to discuss renewal.",
          "A written renewal proposal (new terms, rental, duration) will be emailed to you.",
          "You have 10 business days to accept, counter, or give notice to vacate.",
          "Once agreed, a new lease is signed electronically or in person.",
          "If no response is received, the lease converts to month-to-month automatically.",
        ],
      },
      {
        heading: "Useful Contacts",
        items: [
          { label: "Erga Properties", detail: "info@erga.co.za | www.erga.co.za" },
          { label: "Gauteng Rental Housing Tribunal", detail: "011 355 4000 | rht.gpg.gov.za" },
          { label: "National Consumer Commission", detail: "0860 266 786 | thencc.org.za" },
          { label: "Legal Aid South Africa", detail: "0800 110 110 (toll-free) | legalaid.org.za" },
        ],
      },
    ],
    footer:
      "This guide is provided for information purposes only and does not constitute legal advice. For specific legal queries, consult a qualified attorney or contact Legal Aid South Africa.",
  },
];

/* ─── Metadata ──────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = DOCS.find((d) => d.slug === slug);
  if (!doc) return { title: "Document Not Found" };
  return {
    title: { absolute: `${doc.title} | Erga Properties` },
    description: doc.subtitle,
  };
}

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default async function DownloadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCS.find((d) => d.slug === slug);
  if (!doc) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Print controls — hidden when printing */}
      <div className="print:hidden sticky top-[60px] z-30 bg-[#F8F8F6] border-b border-[#E5E7EB] px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/tools" className="text-[#9A7B2F] text-[13px] hover:underline flex items-center gap-1.5">
          ← Back to Tools
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[#1B2A4A]/50 text-[12px] hidden sm:block">Save as PDF: File → Print → Save as PDF</span>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-[#1B2A4A] text-white text-[12px] font-medium hover:bg-[#9A7B2F] transition-colors print:hidden"
            suppressHydrationWarning
          >
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Document */}
      <div className="mx-auto max-w-3xl px-8 py-12 print:py-6 print:px-0 print:max-w-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 pb-6 border-b-2 border-[#9A7B2F] print:mb-6">
          <div>
            {/* Erga wordmark */}
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 60 20" width="60" height="20" aria-label="Erga Properties">
                <rect x="1" y="7" width="5" height="9" stroke="#9A7B2F" strokeWidth="1" fill="none" />
                <rect x="7" y="3" width="6" height="13" stroke="#9A7B2F" strokeWidth="1" fill="none" />
                <text x="15" y="14" fontFamily="Georgia,serif" fontWeight="700" fontSize="12" fill="#1B2A4A" letterSpacing="0.04em">ERGA</text>
                <text x="15.5" y="19" fontFamily="Arial,sans-serif" fontSize="4.5" fill="#1B2A4A" letterSpacing="0.15em">PROPERTIES</text>
              </svg>
            </div>
            <h1 className="font-serif text-[26px] text-[#1B2A4A] mb-1 leading-tight">{doc.title}</h1>
            <p className="text-[#9A7B2F] text-[13px] font-medium">{doc.subtitle}</p>
          </div>
          <div className="text-right text-[11px] text-[#1B2A4A]/40 hidden sm:block shrink-0 ml-8">
            <p>www.erga.co.za</p>
            <p>info@erga.co.za</p>
            <p className="mt-1">Alberton, Gauteng</p>
          </div>
        </div>

        {/* Intro */}
        <p className="text-[#1B2A4A]/70 leading-relaxed mb-8 text-[14px] border-l-2 border-[#9A7B2F]/30 pl-4 italic">
          {doc.intro}
        </p>

        {/* Sections */}
        {doc.sections.map((section, si) => (
          <div key={si} className="mb-8 print:mb-6 break-inside-avoid">
            <h2 className="font-sans font-semibold text-[15px] text-[#1B2A4A] mb-4 pb-2 border-b border-[#E5E7EB] tracking-[-0.01em]">
              {section.heading}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, ii) => {
                const isObj = typeof item === "object";
                return (
                  <li key={ii} className="flex items-start gap-3">
                    <span className="mt-1.5 w-3 h-3 rounded-full border-2 border-[#9A7B2F] shrink-0" />
                    <div>
                      <span className="text-[#1B2A4A] text-[14px] font-medium">
                        {isObj ? (item as { label: string }).label : item as string}
                      </span>
                      {isObj && (item as { detail?: string }).detail && (
                        <p className="text-[#1B2A4A]/55 text-[12px] mt-0.5 leading-relaxed">
                          {(item as { detail: string }).detail}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Footer */}
        {doc.footer && (
          <div className="mt-10 pt-8 border-t border-[#E5E7EB] text-[12px] text-[#1B2A4A]/55 whitespace-pre-line leading-relaxed">
            {doc.footer}
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-[#E5E7EB] text-[11px] text-[#1B2A4A]/35 print:block">
          <p>© 2026 Erga Concepts (Pty) Ltd — Trading as Erga Properties | www.erga.co.za | Alberton, Gauteng</p>
          <p className="mt-1">This document is provided for information purposes. It does not constitute legal advice.</p>
        </div>
      </div>
    </div>
  );
}
