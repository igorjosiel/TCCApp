import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductCart(state, action = PayloadAction) {
            console.log("State: ", state);
            console.log("Action: ", action);
        }
    }
});

export const { addProductCart } = cartSlice.actions;
export default cartSlice.reducer;