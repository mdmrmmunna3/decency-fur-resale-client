import React from 'react';
import { useQuery, } from '@tanstack/react-query'
import CategoriesOption from './CategoriesOption';
import Loading from '../Shared/Loading/Loading';

const Categories = () => {

    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch('https://decency-fur-resale-server.vercel.app/categories')
            const data = await res.json()
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(categories)

    return (
        <section className='pb-5'>
            <h1 className='text-2xl lg:text-4xl navbar-title text-center pt-6 pb-8 text-blue-600'>Brand Car Resale Categories Here!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    categories.map(categoriesOption => <CategoriesOption key={categoriesOption._id} categoriesOption={categoriesOption} refetch={refetch} ></CategoriesOption>)
                }
            </div>
        </section>
    );
};

export default Categories;