import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addProductCart(state, action: PayloadAction) {
            state.cart.push(action.payload);
        }
    }
});

export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;