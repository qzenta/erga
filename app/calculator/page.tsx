import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CalculatorHub from "@/components/CalculatorHub";

export const metadata: Metadata = {
  title: { absolute: "Property Calculators | Erga Properties" },
  description:
    "Free South African property calculators — bond repayments, affordability, rental yield estimator, and transfer cost calculator. Current prime rate: 11.25%.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageBanner
        title="Property Calculators"
        subtitle="Bond repayments, affordability, rental yield, and transfer costs — all in one place."
        image="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Financial planning and property investment"
        breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: "Calculators" }]}
      />
      <CalculatorHub />
    </>
  );
}
