// slice = global data + logics
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: "Narasimhan",
        email: "narasimhan@mail.com"
    },
    reducers: {} // logics
});

export default userSlice.reducer;