import { createSlice } from "@reduxjs/toolkit";
import { refreshUser, register } from "./operations";
import { logIn } from "./operations";
import { logOut } from "./operations";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isLoading: false,
        error: false,
        isRefreshing: false,
    },
    extraReducers: bilder =>
        bilder
            .addCase(register.pending, state => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, state => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(logIn.pending, state => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, state => {
                state.isLoading = false;
                state.error = true;
            })
            .addCase(logOut.fulfilled, state => {
                state.user = {
                    name: null, 
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => { 
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
});

export default authSlice.reducer; 