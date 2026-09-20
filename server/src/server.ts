import type { Express, Request, Response, NextFunction } from "express";
import express from "express";

import { expensesArr } from "./constant.js";
import { calculateTotal, getTotalsByCategory } from "./utilityfunc.js";
import type {
  CreateExpenseDto,
  ExpenseSummaryDto,
  UpdateExpenseDto,
} from "./dtos.js";
import type { Expense } from "./types.js";

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Health Check Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running smoothly!",
    timestamp: new Date().toISOString(),
  });
});

app.post(
  "/expenses",
  (req: Request<{}, {}, CreateExpenseDto>, res: Response) => {
    const { description = "", category, amount } = req.body;
    const newExpense: Expense = {
      id: crypto.randomUUID(),
      userId: "temp-id",
      category,
      description,
      amount,
      date: new Date(),
    };
    expensesArr.push(newExpense);
    return res.status(201).json(newExpense);
  },
);

app.patch(
  "/expenses/:id",
  (req: Request<{ id: string }, {}, UpdateExpenseDto>, res: Response) => {
    const { id } = req.params;
    const { amount } = req.body;
    const expense = expensesArr.find((e) => e.id === id);
    const updatedExpense = { ...expense, amount };
    return res.status(302).json(updatedExpense);
  },
);

app.get("/expenses/summary", (req: Request, res: Response) => {
  const expensesSummary: ExpenseSummaryDto[] = expensesArr;
});

app.get("expenses/totals-by-category", (req: Request, res: Response) => {
  const totalExpensesByCategory = getTotalsByCategory(expensesArr);
  return res.json(totalExpensesByCategory);
});

app.get("/expenses/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  res.status(200).json("userExpense");
});

app.get("expenses/total", (req: Request, res: Response) => {
  const total: number = calculateTotal(expensesArr);
  return total;
});

// Example API Endpoint
app.get("/api/v1/status", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// 404 Handler (Unmatched Routes)
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
