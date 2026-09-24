import dns from "node:dns";

// Added to fix MongoDB Atlas SRV resolution failures in some network environments.
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import type { Express, Request, Response, NextFunction } from "express";
import express from "express";
import { connectDB } from "./config/db.ts";
import { ExpenseModel, type ExpenseDocument } from "./models/Expense.model.ts";
import { expensesArr } from "./constant.ts";
import { calculateTotal, getTotalsByCategory } from "./utils/utilityfunc.ts";

import type {
  CreateExpenseDto,
  ExpenseSummaryDto,
  UpdateExpenseDto,
} from "./DTOs/index.ts";
import type { IExpense } from "./types/index.ts";

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Health Check Route
// app.get("/health", (req: Request, res: Response) => {
//   res.status(200).json({
//     message: "Server is running smoothly!",
//     timestamp: new Date().toISOString(),
//   });
// });

app.post(
  "/expenses",
  async (req: Request<{}, {}, CreateExpenseDto>, res: Response) => {
    try {
      if (!req.body.amount || !req.body.category || !req.body.date) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const newExpense: IExpense = await ExpenseModel.create({
        ...req.body,
        userId: "temp-user",
      });
      // expensesArr.push(newExpense);
      // console.log("expensesArr", expensesArr);
      return res.status(201).json(newExpense);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },
);

app.patch(
  "/expenses/:id",
  async (req: Request<{ id: string }, {}, UpdateExpenseDto>, res: Response) => {
    const { id } = req.params;
    // const { amount } = req.body;
    // const expense = expensesArr.find((e) => e.id === id);
    // const updatedExpense = { ...expense, amount };
    const updatedExpense = await ExpenseModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedExpense);
  },
);

app.get("/expenses/summary", async (req: Request, res: Response) => {
  const expensesSummary: ExpenseSummaryDto[] = expensesArr;
  return res.status(200).json(expensesSummary);
});

app.get("/expenses/totals-by-category", async (req: Request, res: Response) => {
  const totalExpensesByCategory = getTotalsByCategory(expensesArr);
  return res.status(200).json(totalExpensesByCategory);
});

app.get(
  "/expenses/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    // const userExpense = expensesArr.find((e) => e.id === id);
    const userExpense = await ExpenseModel.findById(id);
    res.status(200).json(userExpense);
  },
);

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

console.log("Attempting to connect to MongoDB...");
await connectDB();
// Start the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
