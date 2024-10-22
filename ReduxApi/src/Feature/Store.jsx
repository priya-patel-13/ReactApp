import { configureStore } from "@reduxjs/toolkit";
import Api from "./ApiSlice";


export const store = configureStore({
    reducer: {
        apiKey: Api,
    }
})