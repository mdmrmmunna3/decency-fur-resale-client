import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ShowMyProduct = ({ showProduct }) => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {
                user?.email === showProduct.sellerEmail &&
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
    );
};

export default ShowMyProduct;