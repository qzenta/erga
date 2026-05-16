import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import TenantRegistrationForm from "@/components/TenantRegistrationForm";

export const metadata: Metadata = {
  title: { absolute: "Property Listings | Erga Properties Gauteng" },
  description:
    "View available and current rental properties managed by Erga Properties in Kempton Park and greater Johannesburg. Register your interest today.",
};

export default function ListingsPage() {
  return (
    <>
      <PageBanner
        title="Property Listings"
        subtitle="Residential and commercial units across Kempton Park, Alberton, and greater Johannesburg."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Residential property complex"
        breadcrumbs={[{ label: "Listings" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          {/* Filter bar — style only */}
          <div className="mb-10 p-5 border border-gold/30 bg-white">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="filterArea" className="block text-xs tracking-widest uppercase text-navy/60 mb-1.5">
                  Area
                </label>
                <select id="filterArea" disabled defaultValue="" className="w-full border border-navy/15 px-4 py-2.5 bg-white text-navy/50 cursor-not-allowed text-sm">
                  <option value="">All Areas</option>
                  <option value="Kempton Park">Kempton Park</option>
                  <option value="Alberton">Alberton</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="filterType" className="block text-xs tracking-widest uppercase text-navy/60 mb-1.5">
                  Type
                </label>
                <select id="filterType" disabled defaultValue="" className="w-full border border-navy/15 px-4 py-2.5 bg-white text-navy/50 cursor-not-allowed text-sm">
                  <option value="">All Types</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="filterStatus" className="block text-xs tracking-widest uppercase text-navy/60 mb-1.5">
                  Status
                </label>
                <select id="filterStatus" disabled defaultValue="" className="w-full border border-navy/15 px-4 py-2.5 bg-white text-navy/50 cursor-not-allowed text-sm">
                  <option value="">All</option>
                  <option value="Available">Available</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
              </div>
            </div>
            <p className="mt-4 text-xs text-navy/50 italic text-center">
              More listings coming soon — register your interest below.
            </p>
          </div>

          {/* Listing card */}
          <article className="border border-gold/40 bg-white p-8 md:p-10 max-w-2xl mx-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-1">
                  Kempton Park, Gauteng
                </p>
                <h2 className="text-2xl text-navy">Residential Unit</h2>
              </div>
              <span className="inline-block border border-gold/60 text-gold text-xs tracking-widest uppercase px-3 py-1 whitespace-nowrap">
                Currently Occupied
              </span>
            </div>
            <p className="text-navy/80 leading-relaxed mb-6">
              Available units in this area are listed as they become vacant.
              Register your interest below and we&apos;ll be in touch when a unit
              becomes available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-navy text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Register Interest
            </Link>
          </article>

          {/* Tenant registration form */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-navy mb-2">
              Register as a Prospective Tenant
            </h2>
            <span className="block w-12 h-[2px] bg-gold mb-8" />
            <p className="text-navy/75 mb-8 leading-relaxed">
              Fill in your details and we&apos;ll contact you when a suitable
              property becomes available in your preferred area.
            </p>
            <TenantRegistrationForm />
          </div>

          {/* Owner call-out */}
          <aside className="mt-20 bg-navy text-white p-10 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-4">
              Are you a property owner?
            </h2>
            <p className="text-white/85 leading-relaxed mb-6 max-w-xl mx-auto">
              Appoint Erga as your managing agent. Contact us to discuss your
              portfolio and how we can deliver hands-off, professionally managed
              outcomes for your properties.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-navy px-6 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
