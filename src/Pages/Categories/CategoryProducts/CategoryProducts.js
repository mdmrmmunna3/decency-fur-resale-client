import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from './AddProduct';
import CategoryProductItems from './CategoryProductItems';

const CategoryProducts = () => {
    const {brand} = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const ramaining = data.filter(product => product.brand === brand);
            console.log(ramaining)
            setProducts(ramaining);
        })
    },[ brand])
    return (
        <div className='my-12'>
            {/* <h1>{products.length}</h1> */}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {
                    products.map(product => <CategoryProductItems key={product._id} product={product}></CategoryProductItems>)
                }
            </div>
            <AddProduct></AddProduct>
        </div>
    );
};

export default CategoryProducts;