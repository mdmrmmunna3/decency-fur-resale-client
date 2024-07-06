import React from 'react';
import car1 from '../../../assets/banner/car1.png';
import car2 from '../../../assets/banner/car2.jpg';
import car3 from '../../../assets/banner/car3.jpg';
import car4 from '../../../assets/banner/car4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full mb-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} className="w-full imges" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle arrow_btn">❮</a>
                        <a href="#slide2" className="btn btn-circle arrow_btn">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car2} className="w-full imges" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle arrow_btn">❮</a>
                        <a href="#slide3" className="btn btn-circle arrow_btn">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car3} className="w-full imges" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle arrow_btn">❮</a>
                        <a href="#slide4" className="btn btn-circle arrow_btn">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={car4} className="w-full imges" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle arrow_btn">❮</a>
                        <a href="#slide1" className="btn btn-circle arrow_btn">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;