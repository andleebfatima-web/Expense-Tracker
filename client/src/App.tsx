import { useState } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import type { Expense } from "./types";
import { getLastItem } from "./utils/addExpense";
function App() {
  // const [expenses, setExpenses] = useState<Expense[]>(expensesArr);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function addExpense(expense: Expense): void {
    const newExpense = [...expenses, expense];
    setExpenses(newExpense);
    console.log("new expense", newExpense);
  }
  console.log(getLastItem(expenses));

  return (
    <>
      <ExpenseForm appendExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
