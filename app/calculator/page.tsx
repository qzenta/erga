import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import BondCalculator from "@/components/BondCalculator";

export const metadata: Metadata = {
  title: { absolute: "Bond Calculator | Erga Properties" },
  description:
    "Free South African bond calculator. Estimate your monthly home loan repayments, total interest, and amortisation schedule. Current prime rate default: 11.25%.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageBanner
        title="Bond Calculator"
        subtitle="Estimate your monthly home loan repayments and total interest — South African prime rate included."
        image="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Financial planning and property investment"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Bond Calculator" }]}
      />
      <BondCalculator />
    </>
  );
}
