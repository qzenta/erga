import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import TenantRegistrationForm from "@/components/TenantRegistrationForm";

export const metadata: Metadata = {
  title: { absolute: "Property Listings | Erga Properties Gauteng" },
  description:
    "View available and current rental properties managed by Erga Properties in Kempton Park, Alberton, and greater Johannesburg. Register your interest today.",
};

const listings = [
  {
    id: "L001",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop",
    alt: "3-bedroom house Alberton",
    type: "Residential",
    status: "Available",
    title: "3-Bedroom Family Home",
    location: "Alberton, Ekurhuleni",
    rent: "R 12 500",
    beds: 3,
    baths: 2,
    sqm: 145,
    features: ["Double garage", "Garden", "Security estate"],
    desc: "Well-maintained family home in a quiet residential street. Double garage, established garden, close to major schools and shopping centres.",
  },
  {
    id: "L002",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop",
    alt: "2-bedroom apartment Kempton Park",
    type: "Sectional Title",
    status: "Available",
    title: "2-Bedroom Apartment",
    location: "Kempton Park, Ekurhuleni",
    rent: "R 8 500",
    beds: 2,
    baths: 1,
    sqm: 82,
    features: ["Covered parking", "Complex pool", "Close to OR Tambo"],
    desc: "Modern sectional title apartment in a secure complex. Covered parking, communal pool, fibre-ready, minutes from OR Tambo International.",
  },
  {
    id: "L003",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
    alt: "Townhouse Edenvale",
    type: "Townhouse",
    status: "Available",
    title: "3-Bedroom Townhouse",
    location: "Edenvale, Ekurhuleni",
    rent: "R 13 000",
    beds: 3,
    baths: 2,
    sqm: 160,
    features: ["Single garage", "Pet-friendly (on approval)", "Complex"],
    desc: "Spacious townhouse in a well-run complex. Open-plan living, patio, single garage, pet-friendly on approval. Close to N3 and Sandton.",
  },
  {
    id: "L004",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&auto=format&fit=crop",
    alt: "Office space Glenanda",
    type: "Commercial",
    status: "Available",
    title: "Open-Plan Office Suite",
    location: "Glenanda, Johannesburg South",
    rent: "R 22 000",
    beds: 0,
    baths: 2,
    sqm: 210,
    features: ["Reception area", "Fibre ready", "Parking for 8 vehicles"],
    desc: "Professional open-plan office suite in the Glencare Medical Centre precinct. Ideal for medical, financial, or professional services. Fibre-ready, 8 parking bays.",
  },
  {
    id: "L005",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    alt: "1-bedroom flat Boksburg",
    type: "Residential",
    status: "Coming Soon",
    title: "1-Bedroom Garden Flat",
    location: "Boksburg, Ekurhuleni",
    rent: "R 5 800",
    beds: 1,
    baths: 1,
    sqm: 55,
    features: ["Private garden", "Off-street parking", "Separate entrance"],
    desc: "Neat and private garden flat with a separate entrance and own small garden. Perfect for a single professional. Close to N12 interchange.",
  },
  {
    id: "L006",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop",
    alt: "Luxury apartment Kempton Park",
    type: "Sectional Title",
    status: "Coming Soon",
    title: "2-Bedroom Luxury Apartment",
    location: "Kempton Park Central, Ekurhuleni",
    rent: "R 10 500",
    beds: 2,
    baths: 2,
    sqm: 95,
    features: ["Full security", "Gym & pool", "Underground parking"],
    desc: "Premium sectional title unit in a high-security building. Full en-suite, underground parking, building gym and pool. Available Q3 2026.",
  },
];

export default function ListingsPage() {
  return (
    <>
      <PageBanner
        title="Property Listings"
        subtitle="Residential and commercial units across Kempton Park, Alberton, Edenvale, and greater Johannesburg."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Residential property complex"
        breadcrumbs={[{ label: "Listings" }]}
      />

      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-6xl px-6 py-16">

          {/* Filter bar */}
          <div className="bg-white border border-[#E5E7EB] p-5 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { id: "filterArea", label: "Area", options: ["All Areas", "Kempton Park", "Alberton", "Edenvale", "Boksburg", "Johannesburg South"] },
                { id: "filterType", label: "Type", options: ["All Types", "Residential", "Sectional Title", "Townhouse", "Commercial"] },
                { id: "filterStatus", label: "Status", options: ["All", "Available", "Coming Soon"] },
              ].map((f) => (
                <div key={f.id} className="flex-1">
                  <label htmlFor={f.id} className="block text-[11px] tracking-widest uppercase text-[#1B2A4A]/50 mb-1.5">{f.label}</label>
                  <select id={f.id} disabled defaultValue="" className="w-full border border-[#E5E7EB] px-4 py-2.5 bg-white text-[#1B2A4A]/50 cursor-not-allowed text-sm">
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[#1B2A4A]/40 text-center">Live filtering coming soon — register your interest below for email alerts when new units become available.</p>
          </div>

          {/* Listings grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((p) => (
              <div key={p.id} className="bg-white border border-[#E5E7EB] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                {/* Photo */}
                <div className="relative overflow-hidden shrink-0" style={{ height: 200 }}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className={`absolute top-3 left-3 text-white text-[11px] font-medium px-2.5 py-1 ${p.status === "Available" ? "bg-[#1B2A4A]" : "bg-[#9A7B2F]"}`}>
                    {p.status}
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 text-[#1B2A4A] text-[11px] font-medium px-2.5 py-1">
                    {p.type}
                  </span>
                </div>

                {/* Content */}
                <div className="px-5 py-4 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-[#1B2A4A] text-[16px] leading-snug">{p.title}</h3>
                    <div className="text-right shrink-0">
                      <p className="font-serif text-[#9A7B2F] text-[18px] leading-none">{p.rent}</p>
                      <p className="text-[11px] text-[#1B2A4A]/40 mt-0.5">per month</p>
                    </div>
                  </div>

                  <p className="text-[#1B2A4A]/50 text-[12px] mb-3 flex items-center gap-1.5">
                    <PinIcon />
                    {p.location}
                  </p>

                  <p className="text-[#1B2A4A]/60 text-[13px] leading-relaxed mb-4 flex-1">{p.desc}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.features.map((f) => (
                      <span key={f} className="bg-[#F8F8F6] text-[#1B2A4A]/60 text-[11px] px-2 py-1 border border-[#E5E7EB]">{f}</span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 pt-3 border-t border-[#E5E7EB] text-[12px] text-[#1B2A4A]/55">
                    {p.beds > 0 && <span className="flex items-center gap-1.5"><BedIcon /> {p.beds} bed{p.beds > 1 ? "s" : ""}</span>}
                    <span className="flex items-center gap-1.5"><BathIcon /> {p.baths} bath{p.baths > 1 ? "s" : ""}</span>
                    <span className="flex items-center gap-1.5"><SqmIcon /> {p.sqm} m²</span>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 block text-center py-2.5 bg-[#1B2A4A] text-white text-[12px] font-medium tracking-wide hover:bg-[#9A7B2F] transition-colors"
                  >
                    {p.status === "Available" ? "Enquire Now" : "Register Interest"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tenant registration */}
      <section id="register" className="bg-white border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-[#9A7B2F] text-[12px] tracking-[0.2em] uppercase font-medium mb-2">Register your interest</p>
          <h2 className="text-[30px] text-[#1B2A4A] font-bold mb-3">Register as a prospective tenant</h2>
          <p className="text-[#1B2A4A]/60 mb-8 leading-relaxed">
            Not seeing the right unit? Register below and we'll contact you as soon as a suitable property becomes available in your preferred area.
          </p>
          <TenantRegistrationForm />
        </div>
      </section>

      {/* Owner CTA */}
      <section className="bg-[#1B2A4A]">
        <div className="mx-auto max-w-4xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[26px] text-white font-bold mb-2">Are you a property owner?</h2>
            <p className="text-white/65 leading-relaxed max-w-xl">
              Appoint Erga as your managing agent. We handle tenant placement, rent collection, and maintenance so you don't have to.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-3.5 bg-[#9A7B2F] text-white text-[13px] font-medium tracking-wide hover:bg-[#c2a14d] transition-colors whitespace-nowrap"
          >
            Get a proposal
          </Link>
        </div>
      </section>
    </>
  );
}

function PinIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function BedIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4v16M2 8h20v12M2 12h20" /></svg>;
}
function BathIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6 L9 2 A1 1 0 0 1 10 2 L10 6" /><path d="M2 12 h20 v3 a6 6 0 0 1-6 6 H8 a6 6 0 0 1-6-6 v-3z" /><path d="M2 12 V7 a2 2 0 0 1 2-2 h2" /></svg>;
}
function SqmIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" /><path d="M3 9h18M9 3v18" /></svg>;
}
