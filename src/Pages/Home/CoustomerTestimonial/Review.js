import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ reviews }) => {
    console.log(reviews)
    const { review, img, name, address } = reviews;
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 dark:text-gray-100 ">
            <div className="flex flex-col mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                    <p className="relative  text-lg italic text-center dark:text-gray-100">
                        {review}
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                    <img src={img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                    <span className='flex text-yellow-500'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </span>
                    <p className="text-xl font-semibold leading-tight">{name}</p>
                    <p className="text-sm uppercase">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;