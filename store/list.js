import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "list",
    initialState: {
        list: [],
        message: 'Sua lista está vazia!'
    },
    reducers: {
        addProductList(state, action: PayloadAction) {
            state.list.push(action.payload);
            state.message = "Produto adicionado na lista com sucesso!";
        },
        // removeProductCart(state, action: PayloadAction) {
        //     const { amount, price } = action.payload.product;
        //     const { index } = action.payload;

        //     state.cart.splice(index, 1);
        //     state.message = "Produto removido do carrinho com sucesso!";
        //     state.totalValue -= parseFloat(price.substr(3) * amount);
        // },
        clearList(state, action: PayloadAction) {
            state.list = [],
            state.message = "Sua lista está vazia!"
        }
    }
});

export const { addProductList, clearList } = cartSlice.actions;
export default cartSlice.reducer;