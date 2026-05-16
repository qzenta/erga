import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: {
    absolute: "Erga Properties | Property Management Johannesburg, Gauteng",
  },
  description:
    "Erga Properties offers professional property management and managing agent services across Johannesburg and Gauteng. Own portfolio and tenant support. Contact us today.",
};

const stats = [
  { value: "10+", label: "Years in Property" },
  { value: "50+", label: "Properties Managed" },
  { value: "200+", label: "Tenants Served" },
  { value: "100%", label: "Gauteng-Wide" },
];

const services = [
  {
    title: "Own Portfolio Management",
    body: "Residential and commercial units managed directly by Erga — maintained to an exceptional standard to attract and retain quality tenants.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop",
    alt: "Residential property exterior",
    href: "/services",
  },
  {
    title: "Managing Agent Services",
    body: "Professional end-to-end management for property owners who want a hands-off, financially disciplined operator to maximise their investment.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
    alt: "Professional office environment",
    href: "/services",
  },
  {
    title: "Tenant Support",
    body: "Responsive communication, fair lease administration, and transparent handling of all maintenance requests and tenant queries.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format&fit=crop",
    alt: "Happy tenants in modern apartment",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Stats strip */}
      <section className="bg-navy py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-gold font-light">{s.value}</p>
                <p className="text-white/60 text-xs tracking-widest uppercase mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2 items-center">
          <div>
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3 mb-6 font-light">
              Who We Are
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-charcoal/80 leading-relaxed text-lg mb-6">
              Erga Concepts (Pty) Ltd is a Johannesburg-based property company offering both direct
              rental portfolio management and professional managing agent services to property owners
              across Gauteng.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Registered since 2015 and now formally active, Erga Properties combines financial
              discipline with hands-on property oversight to deliver reliable, transparent outcomes
              for owners and tenants alike.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-navy text-sm font-medium tracking-wide hover:text-gold transition-colors group"
            >
              Learn more about us
              <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop"
                alt="Property management meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 border border-gold/30 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3 font-light">Our Services</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-5" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href} className="group block">
                <div className="overflow-hidden aspect-[4/3] relative mb-6">
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors duration-300" />
                </div>
                <div className="border-l-2 border-gold pl-5">
                  <h3 className="font-serif text-xl text-navy mb-2">{svc.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{svc.body}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3.5 border-2 border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-white transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80&auto=format&fit=crop"
          alt="Aerial view of Gauteng residential area"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Ready to get started?</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6">
            Let Erga Manage Your Property
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Whether you own a single unit or a large portfolio, we bring the expertise and
            financial discipline to protect and grow your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/calculator"
              className="px-8 py-3.5 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
            >
              Bond Calculator
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
