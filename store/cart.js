import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        message: 'Seu carrinho está vazio!',
        totalValue: 0
    },
    reducers: {
        addProductCart(state, action: PayloadAction) {
            state.cart.push(action.payload);
            state.message = "Produto adicionado no carrinho com sucesso!";
            state.totalValue += parseFloat(action.payload.price.substr(3) * action.payload.amount);
        },
        removeProductCart(state, action: PayloadAction) {
            console.log('Chegou');
        },
    }
});

export const { addProductCart, removeProductCart } = cartSlice.actions;
export default cartSlice.reducer;