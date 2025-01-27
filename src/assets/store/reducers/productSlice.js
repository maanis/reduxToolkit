import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {}
})

export default productSlice.reducer

