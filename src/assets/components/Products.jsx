import React, { useEffect } from 'react'
import { fetchProducts } from '../store/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import { handleDelProduct } from '../store/reducers/productSlice';

const Products = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.Products.products)
    console.log(data)
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    return (
        <div className='bg-zinc-600 max-w-5xl mx-auto p-4'>
            <h2 className='text-3xl mb-4 underline underline-offset-8 font-semibold'>Products List :</h2>
            {data.map((product, index) => (
                <div key={index} className='flex gap-4'>
                    <h3>{product.title}</h3>
                    <p onClick={() => dispatch(handleDelProduct(index))} className='text-red-600 cursor-pointer'>x</p>
                </div>
            ))}
        </div>
    )
}

export default Products