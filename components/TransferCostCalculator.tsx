"use client";

import { useState, useMemo } from "react";

function formatRand(v: number) {
  return `R ${Math.round(v).toLocaleString("en-ZA")}`;
}

function parseNum(s: string) {
  return Number(s.replace(/[^\d.]/g, "")) || 0;
}

/* SARS Transfer Duty table — 2024/25 */
function transferDuty(price: number): number {
  if (price <= 1_100_000) return 0;
  if (price <= 1_512_500) return (price - 1_100_000) * 0.03;
  if (price <= 2_117_500) return 12_375 + (price - 1_512_500) * 0.06;
  if (price <= 2_722_500) return 48_675 + (price - 2_117_500) * 0.08;
  if (price <= 12_100_000) return 97_075 + (price - 2_722_500) * 0.11;
  return 1_128_600 + (price - 12_100_000) * 0.13;
}

/* Simplified Law Society conveyancing tariff approximation */
function conveyancingFee(price: number): number {
  let fee = 0;
  if (price <= 100_000) fee = 5_460;
  else if (price <= 200_000) fee = 6_510;
  else if (price <= 300_000) fee = 7_560;
  else if (price <= 600_000) fee = 9_240;
  else if (price <= 800_000) fee = 11_000;
  else if (price <= 1_000_000) fee = 12_600;
  else if (price <= 2_000_000) fee = 12_600 + (price - 1_000_000) * 0.004;
  else if (price <= 5_000_000) fee = 16_600 + (price - 2_000_000) * 0.0025;
  else fee = 24_100 + (price - 5_000_000) * 0.0015;
  return fee * 1.15; /* + VAT */
}

/* Deeds office levy */
function deedsLevy(price: number): number {
  if (price <= 100_000) return 478;
  if (price <= 200_000) return 639;
  if (price <= 300_000) return 749;
  if (price <= 600_000) return 870;
  if (price <= 800_000) return 970;
  if (price <= 1_000_000) return 1_100;
  if (price <= 2_000_000) return 1_360;
  if (price <= 4_000_000) return 1_620;
  return 2_050;
}

function ResultCard({ label, value, highlight, sub }: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
}) {
  return (
    <div className={`p-6 border ${highlight ? "bg-navy border-navy text-white" : "bg-white border-gold/30"}`}>
      <p className={`text-xs tracking-widest uppercase mb-2 ${highlight ? "text-gold" : "text-navy/60"}`}>{label}</p>
      <p className={`font-serif text-2xl ${highlight ? "text-white" : "text-navy"}`}>{value}</p>
      {sub && <p className={`text-xs mt-1 ${highlight ? "text-white/50" : "text-navy/40"}`}>{sub}</p>}
    </div>
  );
}

export default function TransferCostCalculator() {
  const [priceStr, setPriceStr] = useState("1 500 000");
  const [hasBond, setHasBond] = useState(true);
  const [bondStr, setBondStr] = useState("1 200 000");

  function handleRand(setter: (s: string) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/[^\d]/g, "");
      const num = Number(digits) || 0;
      setter(num === 0 ? "0" : num.toLocaleString("en-ZA"));
    };
  }

  const result = useMemo(() => {
    const price = parseNum(priceStr);
    const bond = parseNum(bondStr);
    if (price <= 0) return null;

    const duty = transferDuty(price);
    const conveyancing = conveyancingFee(price);
    const deeds = deedsLevy(price);
    const bondRegFee = hasBond && bond > 0 ? conveyancingFee(bond) * 0.9 + deedsLevy(bond) : 0;

    const total = duty + conveyancing + deeds + bondRegFee;

    return { duty, conveyancing, deeds, bondRegFee, total };
  }, [priceStr, bondStr, hasBond]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-navy/60 text-sm mb-10 max-w-2xl">
          Calculates Transfer Duty (SARS 2024/25 rates), estimated conveyancing attorney fees, deeds office levy, and optional bond registration costs.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <div>
            <label className="block text-xs tracking-widest uppercase text-navy mb-2">Purchase Price</label>
            <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
              <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-r border-navy/20 select-none">R</span>
              <input
                type="text"
                inputMode="numeric"
                value={priceStr}
                onChange={handleRand(setPriceStr)}
                className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasBond}
                onChange={(e) => setHasBond(e.target.checked)}
                className="w-4 h-4 accent-[#9A7B2F]"
              />
              <span className="text-xs tracking-widest uppercase text-navy">Include Bond Registration</span>
            </label>
          </div>

          {hasBond && (
            <div>
              <label className="block text-xs tracking-widest uppercase text-navy mb-2">Bond Amount</label>
              <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
                <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-r border-navy/20 select-none">R</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={bondStr}
                  onChange={handleRand(setBondStr)}
                  className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
                />
              </div>
            </div>
          )}
        </div>

        {result ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <ResultCard label="Total Estimated Cost" value={formatRand(result.total)} highlight sub="all fees combined" />
              <ResultCard label="Transfer Duty (SARS)" value={result.duty === 0 ? "R 0 — Exempt" : formatRand(result.duty)} />
              <ResultCard label="Conveyancing Fees" value={formatRand(result.conveyancing)} sub="incl. VAT" />
              <ResultCard label="Deeds Office Levy" value={formatRand(result.deeds)} />
            </div>
            {hasBond && result.bondRegFee > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <ResultCard label="Bond Registration Costs" value={formatRand(result.bondRegFee)} sub="attorney fee + deeds levy" />
              </div>
            )}

            {/* Breakdown bar */}
            <div className="mt-8 border border-gold/20 p-6">
              <p className="text-xs tracking-widest uppercase text-navy/60 mb-4">Cost Breakdown</p>
              {[
                { label: "Transfer Duty", value: result.duty, color: "#1B2A4A" },
                { label: "Conveyancing", value: result.conveyancing, color: "#9A7B2F" },
                { label: "Deeds Levy", value: result.deeds, color: "#c2a14d" },
                ...(hasBond && result.bondRegFee > 0 ? [{ label: "Bond Reg.", value: result.bondRegFee, color: "#6b7280" }] : []),
              ].map((item) => (
                <div key={item.label} className="mb-3">
                  <div className="flex justify-between text-xs text-navy mb-1">
                    <span>{item.label}</span>
                    <span>{formatRand(item.value)}</span>
                  </div>
                  <div className="h-2 bg-navy/5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${result.total > 0 ? (item.value / result.total) * 100 : 0}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 text-navy/40 text-sm">
            Enter a purchase price to calculate transfer costs.
          </div>
        )}

        <p className="text-xs text-navy/50 leading-relaxed border-l-2 border-gold/40 pl-4 italic mt-8">
          Transfer Duty based on SARS 2024/25 rates. Conveyancing fees are estimates based on Law Society tariff guidelines. Actual attorney fees may vary. First-time home buyers purchasing for under R1,100,000 pay no Transfer Duty.
        </p>
      </div>
    </section>
  );
}
