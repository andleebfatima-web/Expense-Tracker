import type { Category } from "./types.js";

export interface CreateExpenseDto {
  amount: number;
  category: Category;
  description?: string;
}
