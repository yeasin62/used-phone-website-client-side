import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data);
        })
    },[])
    console.log(categories);
    return (
        <div className='md:w-4/5 mx-auto my-20'>
            <h2 className='text-2xl font-bold text-center mb-4'>All Categories</h2>
            <div className='grid grid-cols-3 md:grid-cols-7 gap-3'>
            {
                categories.map(displayCat => <CategoryCard key={displayCat} displayCat={displayCat}></CategoryCard>)
            }
            </div>
        </div>
    );
};

export default Categories;