import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({phone}) => {
    const {productImage,productName,location, _id,resalePrice,postedOn, isVerifiedSeller} = phone;
    return (
        
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='text-center'>
        <img className="rounded-t-lg md:h-80 w-full object-cover" src={productImage} alt="" />
    </div>
    <div className="p-5">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
    <p><small>Published on: {postedOn}</small></p>
    <p className='flex flex-row justify-between mb-4'>
        <span>Price: {resalePrice} Tk</span>
        <span>Location: {location}</span>
    </p>
        <div className='flex justify-between items-center'>
        <Link to={`/phone/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:focus:ring-blue-800">View Details</Link>
        {
                isVerifiedSeller === true ? <span><FaCheckCircle className='text-xl text-teal-600' title='Seller Verified'></FaCheckCircle></span> : <span><FaCheckCircle className='text-xl text-neutral-500' title='Seller Unverified'></FaCheckCircle></span>
            }
        </div>
    </div>
</div>

    );
};

export default ProductCard;