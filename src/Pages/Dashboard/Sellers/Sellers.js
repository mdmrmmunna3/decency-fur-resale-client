import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';



const Sellers = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user?.email}`
    // console.log(url);
    const { data: showProducts = [], isLoading } = useQuery({
        queryKey: ['showProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                
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
            <h2 className='text-center text-2xl lg:text-4xl navbar-title my-8'>My Products</h2>
            {
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        showProducts.map(showProduct => <div key={showProduct?._id}>
                            {
                                user?.email === showProduct?.sellerEmail &&
                                <>
                                    <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                                        <div className="flex space-x-4">
                                            <img alt="" src={showProduct?.sellerImg} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                            <div className="flex flex-col space-y-1">
                                                <h3>{showProduct?.sellerName}</h3>
                                                <span className="text-xs dark:text-gray-400">location:{showProduct?.location}</span>
                                                <span className="text-xs dark:text-gray-400">phone:{showProduct?.phone}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={showProduct?.image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                                            <h2 className="mb-1 sm lg:text-xl font-semibold">Brand: {showProduct?.brand}</h2>
                                            <h2 className="mb-1 sm lg:text-xl font-semibold">Product: {showProduct?.productName}</h2>
                                            <p className=" dark:text-gray-400"><span className='font-semibold text-xl'>Description:</span> {showProduct?.description}...</p>
                                            <div className='flex justify-between my-2'>
                                                <p className="mb-1 sm lg:text-xl font-semibold">Orginal-Price: <span className='line-through text-red-400'>${showProduct?.orginal_price}</span></p>
                                                <p className="mb-1 sm lg:text-xl font-semibold">Resale-Price: ${showProduct?.resale_price}</p>
                                            </div>
                                            <div className='flex justify-between my-2'>
                                                <p className="mb-1 sm lg:text-xl font-semibold">year_of_purchase: <span>{showProduct?.year_of_purchase}</span></p>
                                                <p className="mb-1 sm lg:text-xl font-semibold">year_of_use: {showProduct?.year_of_use}</p>
                                            </div>

                                            <div className='flex justify-between my-2'>
                                                <p className="mb-1 sm lg:text-xl font-semibold">post_date: {showProduct?.post_date}</p>
                                                <p className="mb-1 sm lg:text-xl font-semibold">condition: {showProduct?.condition}</p>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            }
                        </div>
                        )
                    }
                </div>

            }
        </section >
    );

};

export default Sellers;