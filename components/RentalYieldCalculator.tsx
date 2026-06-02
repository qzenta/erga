"use client";

import { useState, useMemo } from "react";

function formatRand(v: number) {
  return `R ${Math.round(v).toLocaleString("en-ZA")}`;
}

function parseNum(s: string) {
  return Number(s.replace(/[^\d.]/g, "")) || 0;
}

function Field({
  label,
  prefix,
  suffix,
  value,
  onChange,
  type = "text",
  step,
  min,
  max,
  hint,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  step?: number;
  min?: number;
  max?: number;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-navy mb-1">{label}</label>
      {hint && <p className="text-navy/40 text-xs mb-2">{hint}</p>}
      <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
        {prefix && (
          <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-r border-navy/20 select-none">
            {prefix}
          </span>
        )}
        <input
          type={type}
          inputMode={type === "text" ? "numeric" : undefined}
          value={value}
          onChange={onChange}
          step={step}
          min={min}
          max={max}
          className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
        />
        {suffix && (
          <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-l border-navy/20 select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultCard({ label, value, sub, highlight, good, bad }: {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
  good?: boolean;
  bad?: boolean;
}) {
  const bg = highlight ? "bg-navy border-navy" : good ? "bg-emerald-50 border-emerald-200" : bad ? "bg-red-50 border-red-200" : "bg-white border-gold/30";
  const labelColor = highlight ? "text-gold" : good ? "text-emerald-600" : bad ? "text-red-500" : "text-navy/60";
  const valueColor = highlight ? "text-white" : good ? "text-emerald-700" : bad ? "text-red-600" : "text-navy";
  return (
    <div className={`p-6 border ${bg}`}>
      <p className={`text-xs tracking-widest uppercase mb-2 ${labelColor}`}>{label}</p>
      <p className={`font-serif text-2xl ${valueColor}`}>{value}</p>
      {sub && <p className="text-xs mt-1 opacity-60">{sub}</p>}
    </div>
  );
}

export default function RentalYieldCalculator() {
  const [rentStr, setRentStr] = useState("8 500");
  const [priceStr, setPriceStr] = useState("1 200 000");
  const [ratesStr, setRatesStr] = useState("1 200");
  const [levyStr, setLevyStr] = useState("800");
  const [mgmtStr, setMgmtStr] = useState("850");
  const [vacancyRate, setVacancyRate] = useState(8);

  function handleRand(setter: (s: string) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/[^\d]/g, "");
      const num = Number(digits) || 0;
      setter(num === 0 ? "0" : num.toLocaleString("en-ZA"));
    };
  }

  const result = useMemo(() => {
    const rent = parseNum(rentStr);
    const price = parseNum(priceStr);
    const rates = parseNum(ratesStr);
    const levy = parseNum(levyStr);
    const mgmt = parseNum(mgmtStr);
    if (rent <= 0 || price <= 0) return null;

    const effectiveRent = rent * (1 - vacancyRate / 100);
    const annualGrossRent = rent * 12;
    const annualEffectiveRent = effectiveRent * 12;
    const annualExpenses = (rates + levy + mgmt) * 12;
    const annualNetRent = annualEffectiveRent - annualExpenses;

    const grossYield = (annualGrossRent / price) * 100;
    const netYield = (annualNetRent / price) * 100;
    const monthlyCashFlow = effectiveRent - rates - levy - mgmt;

    return { grossYield, netYield, monthlyCashFlow, annualNetRent };
  }, [rentStr, priceStr, ratesStr, levyStr, mgmtStr, vacancyRate]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-navy/60 text-sm mb-10 max-w-2xl">
          A gross yield above 8% is generally considered strong in South Africa. Net yield accounts for vacancy, rates, levies, and management fees.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <Field label="Monthly Rental Income" prefix="R" value={rentStr} onChange={handleRand(setRentStr)} />
          <Field label="Property Purchase Price" prefix="R" value={priceStr} onChange={handleRand(setPriceStr)} />
          <Field label="Monthly Rates & Taxes" prefix="R" value={ratesStr} onChange={handleRand(setRatesStr)} />
          <Field label="Monthly Levy / Body Corporate" prefix="R" value={levyStr} onChange={handleRand(setLevyStr)} />
          <Field
            label="Management Fee / Month"
            prefix="R"
            hint="Erga charges 10% of rent"
            value={mgmtStr}
            onChange={handleRand(setMgmtStr)}
          />
          <Field
            label="Vacancy Allowance"
            suffix="%"
            type="number"
            value={String(vacancyRate)}
            onChange={(e) => setVacancyRate(Number(e.target.value))}
            hint="Industry average: 8%"
            step={1}
            min={0}
            max={50}
          />
        </div>

        {result ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ResultCard
              label="Gross Yield"
              value={`${result.grossYield.toFixed(2)}%`}
              highlight
            />
            <ResultCard
              label="Net Yield"
              value={`${result.netYield.toFixed(2)}%`}
              good={result.netYield >= 6}
              bad={result.netYield < 4}
            />
            <ResultCard
              label="Monthly Cash Flow"
              value={formatRand(result.monthlyCashFlow)}
              good={result.monthlyCashFlow > 0}
              bad={result.monthlyCashFlow < 0}
              sub="before bond repayment"
            />
            <ResultCard
              label="Annual Net Income"
              value={formatRand(result.annualNetRent)}
            />
          </div>
        ) : (
          <div className="text-center py-12 text-navy/40 text-sm">
            Enter rental income and purchase price to calculate yield.
          </div>
        )}

        <p className="text-xs text-navy/50 leading-relaxed border-l-2 border-gold/40 pl-4 italic mt-8">
          Net yield excludes bond repayments, maintenance reserves, and insurance. Erga's 10% management fee is pre-filled as a guide. Results are indicative only.
        </p>
      </div>
    </section>
  );
}
