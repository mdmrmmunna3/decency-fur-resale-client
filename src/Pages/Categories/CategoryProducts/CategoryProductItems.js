import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProductItems = ({ product }) => {
    const {
        brand,
        description,
        image_url,
        location,
        productName,
        orginal_price,
        post_date,
        resale_price,
        year_of_purchase,
        year_of_use,
        condition,
        phone,
        sellerName,
        sellerImg,
        _id
    } = product;

    

    return (
        <div>
            <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={sellerImg} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <h3>{sellerName}</h3>
                        <span className="text-xs dark:text-gray-400">location:{location}</span>
                        <span className="text-xs dark:text-gray-400">phone:{phone}</span>
                    </div>
                </div>
                <div>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 sm lg:text-xl font-semibold">Brand: {brand}</h2>
                    <h2 className="mb-1 sm lg:text-xl font-semibold">Product: {productName}</h2>
                    <p className=" dark:text-gray-400"><span className='font-semibold text-xl'>Description:</span> {description.slice(0, 100)}...</p>
                    <div className='flex justify-between my-2'>
                        <p className="mb-1 sm lg:text-xl font-semibold">Orginal-Price: <span className='line-through text-red-400'>${orginal_price}</span></p>
                        <p className="mb-1 sm lg:text-xl font-semibold">Resale-Price: ${resale_price}</p>
                    </div>
                    <div className='flex justify-between my-2'>
                        <p className="mb-1 sm lg:text-xl font-semibold">year_of_purchase: <span>{year_of_purchase}</span></p>
                        <p className="mb-1 sm lg:text-xl font-semibold">year_of_use: {year_of_use}</p>
                    </div>

                    <div className='flex justify-between my-2'>
                        <p className="mb-1 sm lg:text-xl font-semibold">post_date: {post_date}</p>
                        <p className="mb-1 sm lg:text-xl font-semibold">condition: {condition}</p>
                    </div>
                </div>
                <label  className="btn btn-primary"><Link to={`/bookingProduct/${brand}/${_id}`}>Product Details</Link></label>
                
            </div>

        </div>
    );
};

export default CategoryProductItems;