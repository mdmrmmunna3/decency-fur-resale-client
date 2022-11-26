import React from 'react';

import customer1 from '../../../assets/customer/customer1.jpg';
import customer2 from '../../../assets/customer/customer2.jpg';
import customer3 from '../../../assets/customer/customer3.jpg';
import Review from './Review';

const CoustomerTestimonial = () => {
    const customerReviews = [
        {
            _id: 1,
            review: "Took the stress out of buying a car. Dillon was very kind and professional and walked us through the complex paper work. Found us great tires and warranty that worked with our lifestyle. them and my parents have purchased a ford escape from them as well. I would highly recommend them to anyone looking for a newer used vehicle.",
            img: customer1,
            name: 'Chris Jordan',
            address: 'California'
        },
        {
            _id: 2,
            review: "This is the 3rd vehicle I have bought from Quality Cars. They have been excellent to deal with and I have been very happy with all my vehicles purchased. My sister bought a mazda 3 from them and my parents have purchased a ford escape from them as well. I would highly recommend them to anyone looking for a newer used vehicle.",
            img: customer2,
            name: 'Ardo Benedict',
            address: 'California'
        },
        {
            _id: 3,
            review: "We purchased a vehicle and had a great experience! The staff is very friendly and answered all our questions. Hassle-free test drive and all information clearly presented. We will definitely recommend Quality Car Sales to anyone looking for a car!  would highly recommend them to anyone looking for a newer used vehicle",
            img: customer3,
            name: 'Johann Canola',
            address: 'California'
        },
    ]
    return (
        <section className='my-10 mx-2'>
            <div className='mb-4'>
                <h1 className="text-4xl navbar-title text-center text-blue-500">Customer Testimonial</h1>
                <p className='text-center font-semibold my-2'>Good experience as a first time buyer. Friendly and great sales service. Will recommend to friends and family.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    customerReviews.map(reviews => <Review key={reviews._id} reviews={reviews}></Review>)
                }
            </div>
        </section>
    );
};

export default CoustomerTestimonial;