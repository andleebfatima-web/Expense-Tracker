import React, { useState } from "react"
import type { Category,} from "../types";
import { addExpense } from "../utils/addExpense";


export function ExpenseForm(){
    const [amount,setAmount]=useState<number>(0);
    const [category,setCategory]=useState<Category>('others');
    const [description,setDescription]=useState<string>('');
    // const [expense,setExpense]=useState<Partial<Expense>>({});
const categories:Category[]= ['food' , 'utilities' , 'transport' , 'entertainment' , 'others']
    return (
    <>
       <form className="flex gap-2 ">
          <div>
            <label htmlFor="amount">Amount:</label>
            <input type="number" name="amount" id="amount" value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAmount(Number(e.target.value))} />
          </div>
          <div>
            <label htmlFor="category">Choose a Category:</label>
             <select name="category" id="category" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as Category)}>
             {categories.map((category:Category)=>{ 
                return(
                 <>
                   <option value={category}>{category}</option>
               </>)
                
             })}
              
 
             </select>
           </div>
          
           <div>
            <label htmlFor="description">Description:</label>
            <input id="description" name="description" placeholder="Enter description..."  value={description} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setDescription(e.target.value)}/>
           </div>
           
                
            
           <button type="button" onSubmit={(e:React.SubmitEvent<HTMLFormElement>)=>{e.preventDefault(); addExpense()}}>Submit</button>
       </form>
       
    </>
   )
}