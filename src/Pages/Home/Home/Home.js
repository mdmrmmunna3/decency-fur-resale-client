import React from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';
import CoustomerTestimonial from '../CoustomerTestimonial/CoustomerTestimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <CoustomerTestimonial></CoustomerTestimonial>
        </div>
    );
};

export default Home;