import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        isAuthenticated: false,
        name: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authentication: (state) => {
            state.user = {isAuthenticated:true, name: "Vaishnav"}
        },
        logout: (state) => {
            state.user = {isAuthenticated:false, name: ""}
        }
    }
})

export const {authentication, logout} = authSlice.actions

export default authSlice.reducer