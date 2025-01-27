import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload
        },
        handleDelProduct: (state, action) => {
            state.products.splice(action.payload, 1)
        }
    }
})

export default productSlice.reducer

export const { getProducts, handleDelProduct } = productSlice.actions

