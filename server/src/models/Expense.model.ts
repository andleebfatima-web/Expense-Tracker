import { Document } from "mongoose";
import type { Category } from "../types.js";
interface ExpenseDocument extends Document {
  amount: number;
  category: Category;
  description?: string;
  date: Date;
  userId: string;
}
