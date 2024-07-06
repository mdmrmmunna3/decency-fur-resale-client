import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ reviews }) => {
    // console.log(reviews)
    const { review, img, name, address } = reviews;
    return (
        <div className="mt-5 p-6"
            style={{
                boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`
            }}
        >
            <div className='text-center rounded-md'>
                <div className='pt-16 flex justify-center items-center'>
                    <img src={img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                </div>
                <div className='py-4'>
                    <span className='flex justify-center text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </span>
                    <p className="text-xl font-semibold leading-tight">{name}</p>
                    <p className="text-sm uppercase">{address}</p>
                </div>
                <p className=" text-lg italic text-start dark:text-gray-100">
                    {review?.slice(0, 130)}...
                </p>
            </div>
        </div>
    );
};

export default Review;