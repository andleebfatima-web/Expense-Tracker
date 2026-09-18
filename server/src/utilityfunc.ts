import type { Expense } from "./types.ts";
export function calculateTotal(expenses: Expense[]): number {
  let sum = 0;
  for (const expense of expenses) {
    sum += expense.amount;
  }
  return sum;
}
