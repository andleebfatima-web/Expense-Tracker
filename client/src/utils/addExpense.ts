
import { expensesArr } from "../constants";
import type { Expense } from "../types";


// export function addExpense(expense:Expense):void{
export function addExpense(expense:Expense):void{

   let expenses=expensesArr;
   expenses=[...expensesArr,expense];
   console.log(expenses);
    

}

export function getLastItem<T>(arr:T[]):T|undefined{
return arr[arr.length - 1];
}
