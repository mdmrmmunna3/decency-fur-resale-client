import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesOption = ({ categoriesOption }) => {

    const { img, category_name } = categoriesOption;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full p-3 rounded-lg' src={img} alt="car categories" /></figure>
                <div className="card-body">
                    <h2 className="card-title navbar-title text-xl text-blue-400">Brand : {category_name}</h2>
                    <div className="w-full">
                        <button className='btn bg-[#020d23] text-white'>
                            <Link to={`/category-product/${category_name}`} >Show Products</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesOption;