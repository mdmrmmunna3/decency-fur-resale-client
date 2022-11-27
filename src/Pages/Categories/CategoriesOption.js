import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const CategoriesOption = ({ categoriesOption }) => {
    
    const {img, category_name} = categoriesOption ;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full p-3 rounded-lg' src={img} alt="car categories" /></figure>
                <div className="card-body">
                    <h2 className="card-title navbar-title text-xl text-blue-400">Brand : {category_name}</h2>
                    <div className="w-full">
                        <PrimaryButton><Link to={`/category-product/${category_name}`}>Show Products</Link> </PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesOption;