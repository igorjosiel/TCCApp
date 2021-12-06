import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';
import listReducer from './list';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        list: listReducer
    }
});