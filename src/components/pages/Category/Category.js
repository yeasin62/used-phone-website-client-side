import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Products/ProductCard/ProductCard';

const Category = () => {
    const singleCategoryProducts = useLoaderData();
    const {category} =singleCategoryProducts;
    console.log(category);
    
    console.log(singleCategoryProducts);
    return (
        <div className='my-32 md:w-4/5 mx-auto'>
            <h2 className='text-center text-2xl font-bold mb-4'>All {category} Products</h2>
            <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
            <div className='grid grid-cols-3 gap-5'>
                {
                    singleCategoryProducts.map(phone => <ProductCard key={phone._id} phone={phone}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Category;