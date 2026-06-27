import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    // 3 parameter rule
    // - name
    // - Global data initialization
    // - reducers(logics)
    name: "auth",
    initialState: {
        username: null
    },
    // major pin point area
    reducers: {
        // register user logic
        registerUser: (state, action) => {
            state.username = action.payload;
            // payload - inbuild keyword, it takes the data from the
            // component and add it in the global username value  
        }
    }
});

export const { registerUser } = authSlice.actions;
export default authSlice.reducer;