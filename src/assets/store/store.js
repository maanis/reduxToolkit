import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/usersSlice'
import productSlice from './reducers/productSlice'

export const store = configureStore({
    reducer: {
        Users: userSlice,
        Products: productSlice
    }
})