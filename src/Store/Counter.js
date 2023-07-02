import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {cart:[]},
    reducers: {
        addToCart: (state, action) => {
            const indexItem = state.cart.findIndex((index)=>index.id === action.payload.id)
            if(indexItem >= 0)
            {
                  state.cart[indexItem].quantity += 1;
                    
            }
            else{
                const newItem = { ...action.payload, quantity: 1 }; // Add quantity property to the item
                state.cart.push(newItem);
            }
        },



        delCounter: (state, action) => {
            const newItem = action.payload;
            return state.cart.filter(item => item.id !== newItem);
        },

        ItemDecrease:(state, action) => {
            const indexItem_dec = state.cart.findIndex((index) => index.id === action.payload.id)
            if(state.cart[indexItem_dec].quantity > 1)
            {
              const deletItems=  state.cart[indexItem_dec].quantity -= 1
              console.log([...state.cart, deletItems])
            }
            else if (state[indexItem_dec].quantity === 1) {
                state.cart.splice(indexItem_dec, 1);
              }

        }
        
    },

});
export const { addToCart, delCounter,ItemDecrease } = counterSlice.actions;

export default counterSlice.reducer;