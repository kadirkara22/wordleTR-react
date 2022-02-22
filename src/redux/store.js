import { configureStore } from "@reduxjs/toolkit";
import lettersSlice from "./lettersSlice";

export const store = configureStore({
    reducer: {
        letters: lettersSlice
    }
})