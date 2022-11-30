import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ShowMyProduct from './ShowMyProduct/ShowMyProduct';


const AllSeller = () => {

    const { user } = useContext(AuthContext);
    const [showProducts, setShowProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setShowProducts(data)
            })
    }, [user?.email])

    return (
        <section>
            <h2 className='text-center text-2xl lg:text-3xl navbar-title my-8'>My Products</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    showProducts.map(showProduct => <ShowMyProduct key={showProduct._id} showProduct={showProduct}></ShowMyProduct>
                    )
                }
            </div>
        </section>
    );
};

export default AllSeller;