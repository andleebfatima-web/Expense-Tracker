import { useState } from "react"
import { ExpenseForm } from "./components/ExpenseForm"
import { ExpenseList } from "./components/ExpenseList"
import { expensesArr } from "./constants"
import type{ Expense } from "./types"
function App() {

const [expenses,setExpenses]=useState<Expense[]>(expensesArr);

  return (
    <>
      <ExpenseForm appendExpense={setExpenses}/>
      <ExpenseList expenses={expenses}/>
  
    </>
  )
}

export default App
