import type { Expense } from "../types";

interface ExpenseListProps{
    expenses:Expense[];
}

export function ExpenseList({expenses}:ExpenseListProps){
    return (
    <>
       {expenses.map(({amount,category,description,id})=>{
       return(
            <>
            <div className="flex gap-2" key={id}><span>Amount: {amount}</span>
                <span>Category: {category}</span>
                <span>Description: {description || 'No Description Provided'}</span></div>
                
            </>
       )})}
    </>
   )
}
