"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    heading: "Property Management.\nDone right.",
    subheading: "Professional oversight for residential and commercial portfolios across Gauteng.",
    cta: { label: "Our services", href: "/services" },
    cta2: { label: "Contact us", href: "/contact" },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80&auto=format&fit=crop",
    alt: "Modern residential property exterior",
  },
  {
    heading: "Your Property,\nOur Responsibility.",
    subheading: "We handle tenant vetting, rent collection, and maintenance — so you don't have to.",
    cta: { label: "Get started", href: "/contact" },
    cta2: { label: "Our services", href: "/services" },
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format&fit=crop",
    alt: "Professional modern building exterior",
  },
  {
    heading: "Quality Rentals\nAcross Gauteng.",
    subheading: "Well-maintained residential and commercial units managed to the highest standard.",
    cta: { label: "View listings", href: "/listings" },
    cta2: { label: "Register interest", href: "/listings#register" },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop",
    alt: "Luxury property interior",
  },
];

const INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
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
    router.push("/listings");
  }

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ height: "clamp(260px, 34vw, 360px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides — full-width images */}
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
        </div>
      ))}

      {/* Gradient overlay — cream/white on left, transparent on right (text legibility) */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, #F8F8F6 0%, #F8F8F6 28%, rgba(248,248,246,0.88) 42%, rgba(248,248,246,0.55) 56%, transparent 72%)",
        }}
      />

      {/* Text content — sits on the cream left side */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="px-6 md:px-12 lg:px-16 max-w-[600px]">
          <h1
            className="text-[#1B2A4A] font-bold leading-tight whitespace-pre-line mb-3"
            style={{ fontSize: "clamp(26px, 3.2vw, 46px)" }}
          >
            {slides[current].heading}
          </h1>
          <p
            className="text-[#1B2A4A]/60 mb-5 leading-relaxed"
            style={{ fontSize: "clamp(13px, 1.4vw, 17px)" }}
          >
            {slides[current].subheading}
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-stretch bg-white shadow-md mb-4"
            style={{ maxWidth: 420 }}
          >
            <div className="flex items-center flex-1 px-4 gap-2">
              <svg className="text-[#9A7B2F] shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by area or suburb…"
                className="flex-1 py-3 text-[13px] text-[#1B2A4A] placeholder:text-[#1B2A4A]/40 outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-[#9A7B2F] hover:bg-[#c2a14d] text-white px-5 text-[12px] font-semibold tracking-wide transition-colors shrink-0"
            >
              Search
            </button>
          </form>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href={slides[current].cta.href}
              className="px-5 py-2.5 bg-[#1B2A4A] text-white text-[12px] font-semibold tracking-wide hover:bg-[#9A7B2F] transition-colors"
            >
              {slides[current].cta.label}
            </Link>
            <Link
              href={slides[current].cta2.href}
              className="px-5 py-2.5 border border-[#1B2A4A]/30 text-[#1B2A4A] text-[12px] font-semibold tracking-wide hover:border-[#9A7B2F] hover:text-[#9A7B2F] transition-colors"
            >
              {slides[current].cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal slide controls — far right edge */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white text-[#1B2A4A] transition-colors shadow-sm"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white text-[#1B2A4A] transition-colors shadow-sm"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 right-6 z-30 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-[#9A7B2F]" : "w-1.5 h-1.5 bg-[#1B2A4A]/30 hover:bg-[#1B2A4A]/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
