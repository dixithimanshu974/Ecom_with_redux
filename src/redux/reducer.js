import { createReducer, current } from "@reduxjs/toolkit";

export const productData = createReducer(
  {
    products: [],
    productCopy: [],
  },
  {
    getProductsData: (state, action) => {
      if (state.products.length === 0) {
        state.products.push(action.payload);
        state.productCopy.push(action.payload);
      }
    },

    filterProducts: (state, action) => {
      let filteredData;
      let productCopy = state.products.flat(1);
      if (action.payload === "atoz") {
        filteredData = productCopy.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        state.products = [];
        state.products.push(filteredData);
      }
      if (action.payload === "ztoa") {
        filteredData = productCopy.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        state.products = [];
        state.products.push(filteredData);
      }
      if (action.payload === "hightolow") {
        filteredData = productCopy.sort((a, b) => {
          return b.price - a.price;
        });
        state.products = [];
        state.products.push(filteredData);
      }
      if (action.payload === "lowtohigh") {
        filteredData = productCopy.sort((a, b) => {
          return a.price - b.price;
        });
        state.products = [];
        state.products.push(filteredData);
      }
    },

    Search: (state, action) => {
      let searchData;
      let productCopy = state.productCopy.flat(1);

      searchData = productCopy.filter((data) => {
        return data.name.toLowerCase().includes(action.payload);
      });
      state.products = [];
      state.products.push(searchData);
     
    },
  }
);

export const cartData = createReducer(
  {
    cartProducts: [],
  },
  {
    getCartData: (state, action) => {
      state.cartProducts.push(action.payload);
      console.log(current(state));
    },

    removeCartData: (state, action) => {
      let index = action.payload;
      state.cartProducts.splice(index, 1);
    },
  }
);
