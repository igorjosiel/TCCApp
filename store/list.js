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
        removeProductList(state, action: PayloadAction) {
            const { index } = action.payload;

            state.list.splice(index, 1);
            state.message = "Produto removido da lista com sucesso!";
        },
        clearList(state, action: PayloadAction) {
            state.list = [],
            state.message = "Sua lista está vazia!"
        }
    }
});

export const { addProductList, clearList, removeProductList } = cartSlice.actions;
export default cartSlice.reducer;