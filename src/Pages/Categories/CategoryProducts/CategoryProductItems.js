import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';

const CategoryProductItems = ({ product }) => {

    const [isSellerVerified, setIsSellerVerified] = useState(false);

    const { data: users = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers');
            const data = await res.json();
            return data;
        }
    });

    useEffect(() => {
        if (users.length > 0) {
            const seller = users.find(user => user.email === product?.sellerEmail);
            if (seller && seller?.verified) {
                setIsSellerVerified(true);
            }
        }
    }, [users, product.sellerEmail]);


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
            {/* <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
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
                <label className="btn btn-primary"><Link to={`/bookingProduct/${brand}/${_id}`}>Product Details</Link></label>

            </div> */}

            <div
                style={{
                    boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
                }}
                className="p-5 rounded-md">
                <div className="flex gap-3 lg:flex-row flex-col">

                    <div className="flex items-center space-x-2 lg:hidden">
                        <img src={sellerImg} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="flex flex-col -space-y-1">
                            <div className='flex gap-4 items-center'>
                                <h2 className="text-sm font-semibold leading-none capitalize">{sellerName}</h2>
                                {
                                    isSellerVerified && <span className='text-green-500'><MdVerified /></span>
                                }
                            </div>
                            <span className="text-sm py-2 dark:text-gray-400">location: {location}</span>
                            <span className="text-sm dark:text-gray-400">phone: {phone}</span>
                        </div>

                    </div>
                    <img src={image_url} alt="" title={productName} className="object-cover object-center  dark:bg-gray-500 h-60 md:h-80 lg:h-60 lg:w-40 w-full" />

                    <div>
                        <div className="lg:flex items-center space-x-2 hidden pb-2">
                            <img src={sellerImg} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                            <div className="flex flex-col -space-y-1">
                                <div className='flex gap-4 items-center'>
                                    <h2 className="text-sm font-semibold leading-none capitalize">{sellerName}</h2>
                                    {
                                        isSellerVerified && <span className='text-green-500'><MdVerified /></span>
                                    }
                                </div>
                                <span className="text-sm py-2 dark:text-gray-400">location: {location}</span>
                                <span className="text-sm dark:text-gray-400">phone: {phone}</span>
                            </div>

                        </div>
                        <div className="py-1">
                            <div className="">
                                <h2 ><span className=" lg:text-sm font-semibold">Brand:</span> {brand}</h2>
                                <h2><span className=" lg:text-sm font-semibold">Product:</span> {productName}</h2>
                                <p><span className='font-semibold'>Description: </span>{description.slice(0, 90)}... </p>
                            </div>
                        </div>
                        <div className='flex justify-between '>
                            <p ><span className=" sm lg:text-sm font-semibold">Orginal_Price: </span> <span className='line-through text-red-500'>${orginal_price}</span></p>
                            <p><span className=" sm lg:text-sm font-semibold">Resale_Price:</span> ${resale_price}</p>
                        </div>
                        <div className='flex justify-between '>
                            <p> <span className=" sm lg:text-sm font-semibold">Year_of_purchase:</span> {year_of_purchase}</p>
                            <p><span className=" sm lg:text-sm font-semibold">Year_of_use:</span> {year_of_use}</p>
                        </div>
                        <div className='flex justify-between '>
                            <p><span className=" sm lg:text-sm font-semibold">Post_date:</span> {post_date}</p>
                            <p><span className=" sm lg:text-sm font-semibold">Condition:</span> {condition}</p>
                        </div>
                    </div>
                </div>
                <label ><Link to={`/bookingProduct/${brand}/${_id}`} className="btn btn-primary flex mt-3 text-white">Product Details</Link></label>
            </div>

        </div>
    );
};

export default CategoryProductItems;