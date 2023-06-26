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
                const newItem = { ...action.payload, quantity: 1 }; // Add quantity property to the item
                state.push(newItem);
            }
        },



        delCounter: (state, action) => {
            const newItem = action.payload;
            return state.filter(item => item.id !== newItem);
        },

        ItemDecrease:(state, action) => {
            const indexItem_dec = state.findIndex((index) => index.id === action.payload.id)
            if(state[indexItem_dec].quantity > 1)
            {
              const deletItems=  state[indexItem_dec].quantity -= 1
              console.log([...state, deletItems])
            }
            else if (state[indexItem_dec].quantity === 1) {
                state.splice(indexItem_dec, 1);
              }

        }
        
    },

});
export const { addToCart, delCounter,ItemDecrease } = counterSlice.actions;

export default counterSlice.reducer;