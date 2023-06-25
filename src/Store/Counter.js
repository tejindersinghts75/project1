import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const indexItem = state.findIndex((index)=>index.id === action.payload.id)
            if(indexItem >= 0)
            {
                 state[indexItem].quantity += 1;
               
            }
            else{
            const indexItem = action.payload;
            state.push(indexItem)
            }
        },



        delCounter: (state, action) => {
            const newItem = action.payload;
            return state.filter(item => item.id !== newItem);
        },
    },

});
export const { addToCart, delCounter } = counterSlice.actions;

export default counterSlice.reducer;