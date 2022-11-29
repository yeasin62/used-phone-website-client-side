import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { authContext } from "../../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


//import toast from 'react-hot-toast';

const BookingModal = ({phone}) => {
    //const {} = phone;
    console.log(phone);
    const {user} = useContext(authContext);
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit,refetch } = useForm();
    

    const submitModalForm = data => {
        //console.log(data);
        
        const handleBooking = {
            productImage: phone.productImage,
            buyerNmae: phone.productName,
            price: phone.resalePrice,
            buyerEmail: user?.email,
            buyerPhone: data.phone,
            itemName: phone.productName,
            location: data.location,
            isBooked: true
        }
        console.log(handleBooking);
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(handleBooking)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Booking Successful');
                navigate('/dashboard/my-orders')
                refetch();
            }
            else {
                toast.error(data.message)
            }
        })
    }
    console.log(phone);
    return (
        <div>
            <input type="checkbox" id="popupDetails" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label htmlFor="popupDetails" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Book This Phone</h3>
          <form onSubmit={handleSubmit(submitModalForm)}>
          <div className="py-4 flex flex-col gap-y-2">
            <input type="hidden" value={phone.productImage} />
            <input type="text" name="productName" value={phone.productName} className="input input-bordered w-full" disabled/>
            <input type="text" {...register("fullName", { required: "Name is required" })} defaultValue={user?.displayName} name="fullName" placeholder="Full Name" className="input input-bordered w-full" />
            {errors.fullName?.type === 'required' && <p role="alert" className="text-red-600">Name is required</p>}

            <input type="email" value={user?.email} name="email" className="input input-bordered w-full" disabled/>

            <input type="text" value={phone.resalePrice} name="price" className="input input-bordered w-full" disabled/>

            <input type="tel" name="phone" {...register("phone", { required: "Phone is required" })} placeholder="Phone" className="input input-bordered w-full" />
            {errors.phone && <p role="alert" className="text-red-600">Phone is required</p>}

            <input type="text" {...register("location", { required: "Location is required" })} name="location" placeholder="Meeting Location" className="input input-bordered w-full" />
            {errors.location && <p role="alert" className="text-red-600">Meeting location is required</p>}
          </div>
          <button className="btn btn-block">Confirm Booking</button>
          </form>
            </div>
            </div> 
        </div>
    );
};

export default BookingModal;