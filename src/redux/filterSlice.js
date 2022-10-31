import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter(state, { payload }) {
            console.log(state)
            console.log(payload)
            return state = payload;
        },
    },
});

export const getFilter = state => state.filter;

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;