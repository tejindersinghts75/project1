import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState:[],
    reducers:{
        addToCart : (state,action)=>{
            const newItem = action.payload;
            state.push(newItem)
        }
    },
})
export const {addToCart} = counterSlice.actions;

export default counterSlice.reducer;