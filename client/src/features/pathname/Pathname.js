import { createSlice } from "@reduxjs/toolkit";

export const pathname = createSlice({
    name: 'pathname',
    initialState: {
        value: '/',
    },
    reducers: {
        pagePathname: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { pagePathname } = pathname.actions

export default pathname.reducer

