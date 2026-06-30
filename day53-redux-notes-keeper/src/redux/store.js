import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";

const store = configureStore({
    reducer: {
        noteskeeper: notesReducer
    }
});

export default store;