import type { QuoteLineItem } from "./types.js";

/** Money is rounded to 2 decimals at each step a person would round on paper. */
const r2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export interface QuoteTotals {
  lines: number[];
  subtotal: number;
  discount: number;
  taxable: number;
  tax: number;
  total: number;
}

/**
 * Totals for a quote: line totals, then the discount (a percentage of the
 * subtotal, or a fixed amount never larger than it), then tax on what is left.
 */
export function quoteTotals(
  items: QuoteLineItem[],
  discountType: "percent" | "amount",
  discountValue: number,
  taxRate: number
): QuoteTotals {
  const lines = items.map((i) => r2((Number(i.qty) || 0) * (Number(i.unitPrice) || 0)));
  const subtotal = r2(lines.reduce((a, b) => a + b, 0));
  const dv = Math.max(0, Number(discountValue) || 0);
  const discount = r2(Math.min(subtotal, discountType === "percent" ? (subtotal * Math.min(dv, 100)) / 100 : dv));
  const taxable = r2(subtotal - discount);
  const tax = r2((taxable * Math.max(0, Number(taxRate) || 0)) / 100);
  return { lines, subtotal, discount, taxable, tax, total: r2(taxable + tax) };
}
