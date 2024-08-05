import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


export const useBudget =()=>{
    const context = useContext(BudgetContext)
    if (!context) {
        throw new Error("useBudget must be usef within a BudgetProvider");
        
    }
    return context
}