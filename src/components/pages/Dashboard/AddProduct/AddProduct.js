import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { authContext } from '../../../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {user} = useContext(authContext);
    const date = format(new Date(), 'PP');
    const { register,formState:{errors}, handleSubmit } = useForm();
    const navigate = useNavigate();


    const handleProductAdd = (data )=> {

        const submitPhone = {
            productName: data.productName,
            category: data.category,
            condition: data.condition,
            email: user?.email,
            name: data.name,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            yearOfUse: data.yearOfUse,
            productImage: data.productImage,
            details: data.details,
            location: data.location,
            postedOn: date,
            isProductAvailable: true
        }
        console.log(submitPhone);
        fetch('http://localhost:5000/add',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitPhone)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Product Added Successfully');
                navigate('/dashboard/my-products')
            }
            else {
                toast.error(data.message)
            }
        })

        
    }
    return (
        <section className="p-6 md:w-6/12 mx-auto">
            <h2 className='text-center text-3xl'>Add New Item</h2>
            <form onSubmit={handleSubmit(handleProductAdd)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid shadow-md p-4 rounded-lg">
                <fieldset className="grid grid-cols-1 gap-6 rounded-md shadow-sm dark:bg-gray-900">
                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="col-span-full">
                            <label htmlFor="title" className="text-sm">Phone Name & Model</label>
                            <input id="title" name="title" type="text" {...register("productName",{required: "Product name is required"})} placeholder="Service Title" className="input input-bordered w-full" required/>
                            {errors.productName && <p className='text-red-600' role="alert">{errors.productName?.message}</p>}
                        </div>

                        <div className="col-span-full flex gap-3">
                            <div className='w-1/2'>
                                <label htmlFor="brand" className="text-sm">Brand</label>
                                <select name="slot" className="select select-bordered w-full" {...register("category",{required: true})}>
                                    <option value="OPPO">OPPO</option>
                                    <option value="Nokia">Nokia</option>
                                    <option value="Xiaomi">Xiaomi</option>
                                    <option value="Iphone">Iphone</option>
                                    <option value="RealMe">RealMe</option>
                                    <option value="Vivo">Vivo</option>
                                    <option value="Infinix">Infinix</option>
                                </select>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="condition" className="text-sm">Product Condition</label>
                                <select name="slot" className="select select-bordered w-full" {...register("condition",{required: true})}>
                                    <option value="Excellet">Excellet</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" name="email" type="text" value={user?.email} className="input input-bordered w-full" disabled/>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="seller" className="text-sm">Seller Name</label>
                            <input id="seller" name="sellerName" type="text" {...register("name",{required: "Seller name is required"})} value={user?.displayName} className="input input-bordered w-full" required/>
                            {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="originalprice" className="text-sm">Original Price</label>
                            <input type="number" {...register("originalPrice",{required: "Original price is required"})}   id="originalPrice" name="originalPrice" className="input input-bordered w-full" required/>
                            {errors.originalPrice && <p className='text-red-600' role="alert">{errors.originalPrice?.message}</p>}
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="resalePrice" className="text-sm">Resale Price</label>
                            <input type="number" {...register("resalePrice",{required: "Original price is required"})}   id="resalePrice" name="resalePrice" className="input input-bordered w-full" required/>
                            {errors.resalePrice && <p className='text-red-600' role="alert">{errors.resalePrice?.message}</p>}
                        </div>
                        
                        <div className="col-span-full">
                            <label htmlFor="yearOfUse" className="text-sm">Year of use</label>
                            <input id="yearOfUse" type="number" {...register("yearOfUse",{required: "Year of use is required"})} placeholder="Year of use" className="input input-bordered w-full" required/>
                            {errors.yearOfUse && <p className='text-red-600' role="alert">{errors.yearOfUse?.message}</p>}
                        </div>
                        
                        <div className="col-span-full">
                            <label htmlFor="location" className="text-sm">Location</label>
                            <input id="location" type="text" {...register("location",{required: "Location is required"})} placeholder="Location" className="input input-bordered w-full" required/>
                            {errors.location && <p className='text-red-600' role="alert">{errors.location?.message}</p>}
                        </div>
                        
                        <div className="col-span-full">
                            <label htmlFor="simage" className="text-sm">Phone Image</label>
                            <input id="simage" type="url" placeholder="Upload thumbnail" {...register("productImage",{required: "Image is required"})} className="input input-bordered w-full" required/>
                            {errors.productImage && <p className='text-red-600' role="alert">{errors.productImage?.message}</p>}
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="details" className="text-sm">Specification & details</label>
                            <textarea id="details" type="textarea" {...register("details",{required: "Please write details about this product"})}  placeholder="Product details" className="input input-bordered w-full" required/>
                            {errors.details && <p className='text-red-600' role="alert">{errors.details?.message}</p>}

                            <button type="submit" className="btn btn-block my-2">Submit</button>
                        </div>
                        
                    </div>
                </fieldset>
                
            </form>
        </section>
    );
};

export default AddProduct;