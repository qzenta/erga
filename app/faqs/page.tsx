import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "FAQs | Erga Properties" },
  description:
    "Frequently asked questions about Erga Properties — managing agent services, tenant applications, lease requirements, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers about managing agent services, tenant applications, lease requirements, and more."
        image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern interior property space"
        breadcrumbs={[{ label: "FAQs" }]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <FAQAccordion />

          <div className="mt-14 text-center">
            <p className="text-navy/70 mb-4">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-navy text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
