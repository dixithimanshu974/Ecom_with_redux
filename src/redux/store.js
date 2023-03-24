import { configureStore } from "@reduxjs/toolkit";
import {  cartData, productData } from "./reducer";


const store = configureStore({
    reducer:{
        products: productData,
        cart: cartData,
    }
});

export default store;