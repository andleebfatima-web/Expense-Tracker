import type { Category, Expense } from "./types.ts";
export function calculateTotal(expenses: Expense[]): number {
  let sum = 0;
  for (const expense of expenses) {
    sum += expense.amount;
  }
  return sum;
}

export function getTotalsByCategory(
  expenses: Expense[],
): Record<Category, number> {
  const expensesByCategory=
  return expensesByCategory;
}
