"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    heading: "Excellence in\nProperty Management",
    subheading: "Professional oversight for residential and commercial portfolios across Gauteng",
    cta: { label: "Our Services", href: "/services" },
    cta2: { label: "Contact Us", href: "/contact" },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
    alt: "Modern residential property exterior",
  },
  {
    heading: "Looking for a\nManaging Agent?",
    subheading: "We handle everything — tenant vetting, maintenance, rent collection — so you don't have to",
    cta: { label: "Get Started", href: "/contact" },
    cta2: { label: "Our Services", href: "/services" },
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop",
    alt: "Modern office building exterior",
  },
  {
    heading: "Quality Rental\nProperties in Gauteng",
    subheading: "Residential and commercial units managed to the highest standard — ready for quality tenants",
    cta: { label: "View Listings", href: "/listings" },
    cta2: { label: "Register as Tenant", href: "/listings#register" },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop",
    alt: "Luxury property living space interior",
  },
];

const INTERVAL_MS = 5500;
const TABS = ["Rent", "Buy", "Managing Agent"] as const;
type Tab = (typeof TABS)[number];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Rent");
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(activeTab === "Managing Agent" ? "/contact" : "/listings");
  }

  return (
    <div
      className="relative overflow-hidden w-full select-none"
      style={{ height: "580px", minHeight: "400px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/50 to-navy/80" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white pb-32 md:pb-36">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
            <span className="block w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Erga Properties · Gauteng</span>
            <span className="block w-10 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight whitespace-pre-line animate-fade-in-up animate-delay-100">
            {slides[current].heading}
          </h1>

          {/* Subheading */}
          <p className="text-white/75 text-sm md:text-lg max-w-2xl mx-auto mb-7 leading-relaxed animate-fade-in-up animate-delay-200">
            {slides[current].subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href={slides[current].cta.href}
              className="px-8 py-3.5 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-light transition-colors min-w-[160px]"
            >
              {slides[current].cta.label}
            </Link>
            <Link
              href={slides[current].cta2.href}
              className="px-8 py-3.5 border border-white/60 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors min-w-[160px]"
            >
              {slides[current].cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Just Property-style search bar — anchored above bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={[
                    "flex-1 py-3.5 text-xs tracking-widest uppercase font-medium transition-colors",
                    activeTab === tab
                      ? "text-navy border-b-2 border-gold bg-white"
                      : "text-charcoal/50 hover:text-navy",
                  ].join(" ")}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search row */}
            <form onSubmit={handleSearch} className="flex items-stretch gap-0">
              <div className="flex items-center flex-1 px-5 gap-3">
                <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={
                    activeTab === "Managing Agent"
                      ? "Area or suburb (e.g. Kempton Park, Alberton…)"
                      : "Search by area, suburb or address…"
                  }
                  className="flex-1 py-4 text-sm text-navy placeholder:text-charcoal/40 outline-none bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-white px-7 text-xs tracking-widest uppercase font-medium transition-colors shrink-0 flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
          </div>

          {/* Quick links below search */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 px-1">
            {["Kempton Park", "Alberton", "Johannesburg South", "Residential", "Commercial"].map((tag) => (
              <Link
                key={tag}
                href="/listings"
                className="text-white/60 text-xs hover:text-gold transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot / dash indicators */}
      <div className="absolute bottom-[calc(9rem+16px)] md:bottom-[calc(10rem+16px)] left-1/2 -translate-x-1/2 z-20 flex gap-2.5 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={[
              "transition-all duration-300 rounded-none",
              i === current ? "w-8 h-1.5 bg-gold" : "w-2 h-1.5 bg-white/40 hover:bg-white/70",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
