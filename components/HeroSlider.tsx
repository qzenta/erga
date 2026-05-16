"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    heading: "Excellence in Property Management",
    subheading: "Serving Gauteng with integrity and professionalism",
    cta: "Our Services",
    href: "/services",
    bgStyle: { background: "#1B2A4A" },
    ctaClassName:
      "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-colors bg-[#9A7B2F] text-white border border-[#9A7B2F] hover:bg-[#7d6326] hover:border-[#7d6326]",
  },
  {
    heading: "Looking for a Managing Agent?",
    subheading: "We handle everything — so you don't have to",
    cta: "Get in Touch",
    href: "/contact",
    bgStyle: { background: "#0D1829" },
    ctaClassName:
      "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-colors bg-white text-[#1B2A4A] border border-white hover:bg-[#9A7B2F] hover:text-white hover:border-[#9A7B2F]",
  },
  {
    heading: "Quality Rental Properties in Gauteng",
    subheading:
      "Residential and commercial units managed to the highest standard",
    cta: "View Listings",
    href: "/listings",
    bgStyle: {
      background: "linear-gradient(135deg, #1B2A4A 0%, #9A7B2F 100%)",
    },
    ctaClassName:
      "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-colors bg-white text-[#1B2A4A] border border-white hover:bg-[#1B2A4A] hover:text-white hover:border-[#1B2A4A]",
  },
];

const INTERVAL_MS = 4000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <div
      className="relative overflow-hidden w-full select-none"
      style={{ height: "clamp(480px, 70vh, 760px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(current * 100) / slides.length}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-6 text-center text-white"
            style={{ width: `${100 / slides.length}%`, ...slide.bgStyle }}
          >
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal mb-5 max-w-3xl leading-tight">
              {slide.heading}
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl">
              {slide.subheading}
            </p>
            <Link href={slide.href} className={slide.ctaClassName}>
              {slide.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-colors rounded-sm"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-colors rounded-sm"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-[#9A7B2F]" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
