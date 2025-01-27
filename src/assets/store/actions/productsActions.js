import axios from "axios";
import { getProducts } from "../reducers/productSlice";

export const fetchProducts = () => async (dispatch) => {
    const resp = await axios.get('https://fakestoreapi.com/products')
    dispatch(getProducts(resp.data))
}