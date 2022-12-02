import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ShowMyProduct from './ShowMyProduct/ShowMyProduct';


const AllSeller = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user?.email}`
    // console.log(url);
    const { data: showProducts = [], isLoading } = useQuery({
        queryKey: ['showProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

    // console.log(showProducts)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <h2 className='text-center text-2xl lg:text-3xl navbar-title my-8'>All Seller Products</h2>
            {
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        showProducts.map(showProduct => <ShowMyProduct key={showProduct._id} showProduct={showProduct}></ShowMyProduct>
                        )
                    }
                </div>

            }
        </section >
    );
};

export default AllSeller;