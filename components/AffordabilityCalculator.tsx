"use client";

import { useState, useMemo } from "react";

function formatRand(v: number) {
  return `R ${Math.round(v).toLocaleString("en-ZA")}`;
}

function parseNum(s: string) {
  return Number(s.replace(/[^\d.]/g, "")) || 0;
}

function fmtDisplay(v: number) {
  return v === 0 ? "" : v.toLocaleString("en-ZA");
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
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-navy mb-2">{label}</label>
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

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`p-6 border ${highlight ? "bg-navy text-white border-navy" : "bg-white border-gold/30"}`}>
      <p className={`text-xs tracking-widest uppercase mb-2 ${highlight ? "text-gold" : "text-navy/60"}`}>{label}</p>
      <p className={`font-serif text-2xl ${highlight ? "text-white" : "text-navy"}`}>{value}</p>
    </div>
  );
}

export default function AffordabilityCalculator() {
  const [incomeStr, setIncomeStr] = useState("50 000");
  const [expensesStr, setExpensesStr] = useState("15 000");
  const [rate, setRate] = useState(11.25);
  const [term, setTerm] = useState(20);

  function handleRand(setter: (s: string) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/[^\d]/g, "");
      const num = Number(digits) || 0;
      setter(num === 0 ? "0" : num.toLocaleString("en-ZA"));
    };
  }

  const result = useMemo(() => {
    const grossIncome = parseNum(incomeStr);
    const monthlyExpenses = parseNum(expensesStr);
    if (grossIncome <= 0 || rate <= 0 || term <= 0) return null;

    /* Banks typically allow ≤30% of gross income for bond repayment */
    const maxRepayment = grossIncome * 0.3 - monthlyExpenses;
    if (maxRepayment <= 0) return null;

    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    const factor = Math.pow(1 + monthlyRate, n);
    const maxLoan = (maxRepayment * (factor - 1)) / (monthlyRate * factor);
    const maxPurchasePrice = maxLoan / 0.9; /* assumes 10% deposit */

    return { maxRepayment, maxLoan, maxPurchasePrice, qualifies: maxLoan > 0 };
  }, [incomeStr, expensesStr, rate, term]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-navy/60 text-sm mb-10 max-w-2xl">
          Based on South African banking guidelines (bond repayment ≤ 30% of gross income). Results are indicative — consult a bond originator for a formal qualification.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <Field
            label="Gross Monthly Income (R)"
            prefix="R"
            value={incomeStr}
            onChange={handleRand(setIncomeStr)}
          />
          <Field
            label="Monthly Debt / Expenses (R)"
            prefix="R"
            value={expensesStr}
            onChange={handleRand(setExpensesStr)}
          />
          <Field
            label="Interest Rate (%)"
            suffix="%"
            type="number"
            value={String(rate)}
            onChange={(e) => setRate(Number(e.target.value))}
            step={0.25}
            min={0}
            max={30}
          />
          <Field
            label="Loan Term (Years)"
            suffix="yrs"
            type="number"
            value={String(term)}
            onChange={(e) => setTerm(Number(e.target.value))}
            step={1}
            min={1}
            max={30}
          />
        </div>

        {result ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ResultCard label="Max Bond Repayment / Month" value={formatRand(result.maxRepayment)} highlight />
            <ResultCard label="Maximum Loan Amount" value={formatRand(result.maxLoan)} />
            <ResultCard label="Est. Max Purchase Price" value={formatRand(result.maxPurchasePrice)} />
          </div>
        ) : (
          <div className="text-center py-12 text-navy/40 text-sm">
            Enter your income to see your affordability estimate.
          </div>
        )}

        <p className="text-xs text-navy/50 leading-relaxed border-l-2 border-gold/40 pl-4 italic mt-8">
          Estimate assumes a 10% deposit and that total monthly debt obligations do not exceed 30% of gross income. Individual bank credit assessments may differ.
        </p>
      </div>
    </section>
  );
}
