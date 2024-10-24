import { configureStore } from "@reduxjs/toolkit";
import  BudgetSlice  from "../Feature/BudgetSlice";



export const store = configureStore({
    reducer:{
        BudgetKey: BudgetSlice,
    }
})