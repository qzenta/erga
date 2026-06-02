"use client";

import { useState, useEffect } from "react";
import BondCalculator from "@/components/BondCalculator";
import AffordabilityCalculator from "@/components/AffordabilityCalculator";
import RentalYieldCalculator from "@/components/RentalYieldCalculator";
import TransferCostCalculator from "@/components/TransferCostCalculator";

const TABS = [
  {
    id: "bond",
    hash: "",
    label: "Bond Calculator",
    description: "Monthly repayment & amortisation",
  },
  {
    id: "affordability",
    hash: "affordability",
    label: "Affordability",
    description: "How much can you borrow?",
  },
  {
    id: "yield",
    hash: "yield",
    label: "Rental Yield",
    description: "Gross & net investment return",
  },
  {
    id: "transfer",
    hash: "transfer",
    label: "Transfer Costs",
    description: "Duty, conveyancing & deeds fees",
  },
];

function hashToTab(hash: string): string {
  const h = hash.replace("#", "");
  const match = TABS.find((t) => t.hash === h);
  return match ? match.id : "bond";
}

export default function CalculatorHub() {
  const [active, setActive] = useState("bond");

  /* Sync to URL hash on mount and on popstate */
  useEffect(() => {
    const sync = () => setActive(hashToTab(window.location.hash));
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  function select(tab: typeof TABS[number]) {
    setActive(tab.id);
    const url = tab.hash ? `#${tab.hash}` : window.location.pathname;
    window.history.pushState(null, "", url);
  }

  return (
    <section className="bg-white">
      {/* Tab bar */}
      <div className="border-b border-[#E5E7EB] bg-white sticky top-[60px] z-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-0 overflow-x-auto">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => select(tab)}
                  className={[
                    "flex flex-col items-start px-5 py-4 shrink-0 border-b-2 transition-colors text-left",
                    isActive
                      ? "border-[#9A7B2F] text-[#9A7B2F]"
                      : "border-transparent text-[#1B2A4A]/60 hover:text-[#1B2A4A]",
                  ].join(" ")}
                >
                  <span className="text-[13px] font-medium">{tab.label}</span>
                  <span className="text-[11px] opacity-70 mt-0.5 hidden sm:block">{tab.description}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Calculator panels */}
      {active === "bond" && <BondCalculator />}
      {active === "affordability" && <AffordabilityCalculator />}
      {active === "yield" && <RentalYieldCalculator />}
      {active === "transfer" && <TransferCostCalculator />}
    </section>
  );
}
