"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="px-4 py-2 bg-[#1B2A4A] text-white text-[12px] font-medium hover:bg-[#9A7B2F] transition-colors print:hidden"
    >
      Print / Save PDF
    </button>
  );
}
