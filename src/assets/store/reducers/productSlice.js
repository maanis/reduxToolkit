import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            console.log(action.payload)
        }
    }
})

export default productSlice.reducer

