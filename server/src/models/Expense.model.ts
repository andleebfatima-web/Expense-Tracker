import { Document } from "mongoose";
import type { Category } from "../types/Expense.js";
interface ExpenseDocument extends Document {
  amount: number;
  category: Category;
  description?: string;
  date: Date;
  userId: string;
}
