import { createSlice } from "@reduxjs/toolkit";

// Global data
const initialState = {
    notes: []
};

const notesSlice = createSlice({
    name: "noteskeeper",
    initialState,
    reducers: {
        // C R U D
        // addNote, useSelector, updateNote, deleteNote
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },

        // LEARNER TASK: Update functionality

        deleteNote: (state, action) => {
            state.notes = state.notes.filter(data => data.id !== action.payload)
        }
    }
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;