"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ---- Helpers ----------------------------------------------------------------

function formatRand(value: number): string {
  return `R\u00A0${Math.round(value).toLocaleString("en-ZA")}`;
}

function parseAmount(raw: string): number {
  return Number(raw.replace(/[^\d]/g, "")) || 0;
}

function formatAmountDisplay(value: number): string {
  return value === 0 ? "" : value.toLocaleString("en-ZA");
}

function formatYAxis(value: number): string {
  if (value >= 1_000_000) return `R${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `R${(value / 1_000).toFixed(0)}k`;
  return `R${value}`;
}

type CalcResult = {
  loanAmount: number;
  monthlyInstalment: number;
  totalRepayment: number;
  totalInterest: number;
  chartData: Array<{
    year: string;
    "Remaining Balance": number;
    "Cumulative Interest": number;
  }>;
};

function calculate(
  purchaseAmount: number,
  interestRate: number,
  deposit: number,
  loanTermYears: number
): CalcResult | null {
  const loanAmount = purchaseAmount - deposit;
  if (loanAmount <= 0 || interestRate <= 0 || loanTermYears <= 0) return null;

  const monthlyRate = interestRate / 100 / 12;
  const n = Math.round(loanTermYears * 12);
  const factor = Math.pow(1 + monthlyRate, n);
  const monthlyInstalment = (loanAmount * (monthlyRate * factor)) / (factor - 1);
  const totalRepayment = monthlyInstalment * n;
  const totalInterest = totalRepayment - loanAmount;

  // Build yearly amortization data
  const chartData: CalcResult["chartData"] = [];
  let balance = loanAmount;
  let cumulativeInterest = 0;

  for (let year = 1; year <= loanTermYears; year++) {
    for (let m = 0; m < 12 && balance > 0.01; m++) {
      const interest = balance * monthlyRate;
      const principal = monthlyInstalment - interest;
      cumulativeInterest += interest;
      balance = Math.max(0, balance - principal);
    }
    chartData.push({
      year: `Yr ${year}`,
      "Remaining Balance": Math.round(balance),
      "Cumulative Interest": Math.round(cumulativeInterest),
    });
    if (balance < 0.01) break;
  }

  return { loanAmount, monthlyInstalment, totalRepayment, totalInterest, chartData };
}

// ---- Sub-components ---------------------------------------------------------

function InputField({
  label,
  prefix,
  value,
  onChange,
}: {
  label: string;
  prefix: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-navy mb-2">
        {label}
      </label>
      <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
        <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-r border-navy/20 select-none">
          {prefix}
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={onChange}
          className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
        />
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-6 border ${highlight ? "bg-navy text-white border-navy" : "bg-white border-gold/30"}`}
    >
      <p
        className={`text-xs tracking-widest uppercase mb-2 ${highlight ? "text-gold" : "text-navy/60"}`}
      >
        {label}
      </p>
      <p
        className={`font-serif text-2xl ${highlight ? "text-white" : "text-navy"}`}
      >
        {value}
      </p>
    </div>
  );
}

// Custom tooltip for recharts
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gold/30 p-3 shadow-lg text-sm">
      <p className="font-medium text-navy mb-2">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: {formatRand(p.value)}
        </p>
      ))}
    </div>
  );
}

// ---- Main component ---------------------------------------------------------

export default function BondCalculator() {
  // Raw display strings for Rand inputs
  const [purchaseStr, setPurchaseStr] = useState("1 000 000");
  const [depositStr, setDepositStr] = useState("0");
  const [additionalStr, setAdditionalStr] = useState("0");

  // Numeric state for non-Rand inputs
  const [interestRate, setInterestRate] = useState(11.25);
  const [loanTerm, setLoanTerm] = useState(20);

  function handleAmountChange(
    setter: (s: string) => void
  ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e) => {
      const digits = e.target.value.replace(/[^\d]/g, "");
      const num = Number(digits) || 0;
      setter(num === 0 ? "0" : num.toLocaleString("en-ZA"));
    };
  }

  const result = useMemo(
    () =>
      calculate(
        parseAmount(purchaseStr),
        interestRate,
        parseAmount(depositStr),
        loanTerm
      ),
    [purchaseStr, interestRate, depositStr, loanTerm]
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        {/* Input grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <InputField
            label="Purchase Amount (R)"
            prefix="R"
            value={purchaseStr}
            onChange={handleAmountChange(setPurchaseStr)}
          />
          <InputField
            label="Deposit Amount (R)"
            prefix="R"
            value={depositStr}
            onChange={handleAmountChange(setDepositStr)}
          />
          <InputField
            label="Additional Monthly Payment (R)"
            prefix="R"
            value={additionalStr}
            onChange={handleAmountChange(setAdditionalStr)}
          />
          <div>
            <label className="block text-xs tracking-widest uppercase text-navy mb-2">
              Interest Rate (%)
            </label>
            <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
              <input
                type="number"
                min={0}
                max={30}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
              />
              <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-l border-navy/20 select-none">
                %
              </span>
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-widest uppercase text-navy mb-2">
              Loan Term (Years)
            </label>
            <div className="flex border border-navy/20 focus-within:border-gold transition-colors">
              <input
                type="number"
                min={1}
                max={30}
                step={1}
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="flex-1 px-3 py-3 bg-white text-navy focus:outline-none text-sm"
              />
              <span className="inline-flex items-center px-3 bg-navy/5 text-navy/60 text-sm border-l border-navy/20 select-none">
                yrs
              </span>
            </div>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => {
                // Results update reactively; button is visual confirmation
              }}
              className="w-full py-3 px-6 text-sm tracking-widest uppercase text-white transition-colors"
              style={{ background: "#9A7B2F" }}
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Results */}
        {result ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              <ResultCard
                label="Monthly Instalment"
                value={formatRand(result.monthlyInstalment)}
                highlight
              />
              <ResultCard
                label="Loan Amount"
                value={formatRand(result.loanAmount)}
              />
              <ResultCard
                label="Total Repayment"
                value={formatRand(result.totalRepayment)}
              />
              <ResultCard
                label="Total Interest Paid"
                value={formatRand(result.totalInterest)}
              />
            </div>

            {/* Chart */}
            <div className="border border-gold/20 p-6 mb-8">
              <h2 className="text-navy text-xl mb-6">
                Amortisation Over {loanTerm} Years
              </h2>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart
                  data={result.chartData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                  <defs>
                    <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1B2A4A" stopOpacity={0.7} />
                      <stop offset="95%" stopColor="#1B2A4A" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="interestGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9A7B2F" stopOpacity={0.7} />
                      <stop offset="95%" stopColor="#9A7B2F" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: "#1B2A4A", fontSize: 11 }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={formatYAxis}
                    tick={{ fill: "#1B2A4A", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={72}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: "12px", color: "#1B2A4A" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Remaining Balance"
                    stroke="#1B2A4A"
                    strokeWidth={2}
                    fill="url(#balanceGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Cumulative Interest"
                    stroke="#9A7B2F"
                    strokeWidth={2}
                    fill="url(#interestGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-navy/50 leading-relaxed border-l-2 border-gold/40 pl-4 italic">
              This calculator provides estimates for indicative purposes only.
              Results are not a guarantee of finance. Interest rates are subject
              to change. Please consult a registered bond originator for a formal
              assessment.
            </p>
          </>
        ) : (
          <div className="text-center py-12 text-navy/40 text-sm">
            Enter a valid purchase amount to see results.
          </div>
        )}
      </div>
    </section>
  );
}
