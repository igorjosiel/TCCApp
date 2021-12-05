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
            const { amount, price } = action.payload.product;
            const { index } = action.payload;

            state.cart.splice(index, 1);
            state.message = "Produto removido do carrinho com sucesso!";
            state.totalValue -= parseFloat(price.substr(3) * amount);
        },
        clearCart(state, action: PayloadAction) {
            state.cart = [],
            state.message = "Seu carrinho está vazio!",
            state.totalValue = 0
        }
    }
});

export const { addProductCart, removeProductCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;