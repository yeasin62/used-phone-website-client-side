import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({phone}) => {
    const {productImage,productName,location, _id,resalePrice,postedOn} = phone;
    return (
        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='text-center'>
        <img class="rounded-t-lg md:h-80 w-full object-cover" src={productImage} alt="" />
    </div>
    <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
    <p><small>Published on: {postedOn}</small></p>
    <p className='flex flex-row justify-between mb-4'>
        <span>Price: {resalePrice} Tk</span>
        <span>Location: {location}</span>
    </p>
        <Link to={`/phone/${_id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:focus:ring-blue-800">View Details</Link>
    </div>
</div>

    );
};

export default ProductCard;