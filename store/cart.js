import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        message: ''
    },
    reducers: {
        addProductCart(state, action: PayloadAction) {
            state.cart.push(action.payload);
            state.message = "Produto adicionado no carrinho com sucesso!"
        }
    }
});

export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;