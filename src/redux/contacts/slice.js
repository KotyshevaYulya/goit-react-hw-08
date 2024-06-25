import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: buider => {
        buider
              .addCase(fetchContacts.pending, (state, action) => {
            state.error = false; 
            state.loading = true;
              })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchContacts.rejected, state => {
                state.loading = false;
                state.error = true;  
            })
            .addCase(addContact.pending,(state, action) => {
            state.error = false; 
            state.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload); 
                state.loading = false;   
            })
            .addCase(addContact.rejected, state => {
                state.loading = false;
                state.error = true;  
            })
            .addCase(deleteContact.pending,(state, action) => {
            state.error = false; 
            state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.error = false; 
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, state => {
                state.loading = false;
                state.error = true;  
            })
            .addCase(logOut.fulfilled, state => {
                state.items = [];
                state.error = false; 
                state.loading = false; 
            })
    }
});

export default slice.reducer;


