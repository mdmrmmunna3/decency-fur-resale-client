import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AddProduct from './AddProduct';
import CategoryProductItems from './CategoryProductItems';

const CategoryProducts = () => {
    const { brand } = useParams();
    const [products, setProducts] = useState([])
    const { userRoleInfo } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://decency-fur-resale-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                const ramaining = data.filter(product => product.brand === brand);
                console.log(ramaining)
                setProducts(ramaining);
            })
    }, [brand])


    return (
        <div className='my-12'>
            {/* <h1>{products.length}</h1> */}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                {
                    products.map(product => <CategoryProductItems key={product._id} product={product} ></CategoryProductItems>)
                }

            </div>

            {
                userRoleInfo?.role === "Seller" &&
                <AddProduct></AddProduct>

            }

        </div>
    );
};

export default CategoryProducts;