import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
    const phones = useLoaderData();
    
    return (
        <div className='my-32 md:w-4/5 mx-auto'>
            <h2 className='text-center text-2xl font-bold mb-4'>All Products</h2>
            <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
            <div className='grid grid-cols-3 gap-5'>
                {
                    phones.map(phone => <ProductCard key={phone._id} phone={phone}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;