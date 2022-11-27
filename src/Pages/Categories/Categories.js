import React from 'react';
import { useQuery, } from '@tanstack/react-query'
import CategoriesOption from './CategoriesOption';
import Loading from '../Shared/Loading/Loading';

const Categories = () => {

    const { data: categories = [], isLoading} = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data;
        }
    });

    if(isLoading) {
        <Loading></Loading>
    }

    return (
        <section>
            <h1 className='text-2xl lg:text-4xl navbar-title text-center my-4'>Brand Car Resale Categories Here!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    categories.map(categoriesOption => <CategoriesOption key={categoriesOption._id} categoriesOption={categoriesOption}></CategoriesOption>)
                }
            </div>
        </section>
    );
};

export default Categories;