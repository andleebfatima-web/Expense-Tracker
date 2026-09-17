import type { Expense } from "./types.js";
export function calculateTotal(expenses: Expense[]): number {
 let sum:number=0;
     for(let i=0;i<expenses.length;i++){
        console.log(expenses[i]);
        sum+=expenses[i].amount;
     }
 console.log(expenses)
 return sum;
}