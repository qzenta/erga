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
      <PageBanner title="Bond Calculator" />
      <BondCalculator />
    </>
  );
}
