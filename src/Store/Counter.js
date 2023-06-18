import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState:{counter: 0, showCounter: true},
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    },
})
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;