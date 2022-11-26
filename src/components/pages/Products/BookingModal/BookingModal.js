import React, { useContext } from "react";
import { authContext } from "../../../../AuthProvider/AuthProvider";
//import { format } from 'date-fns';

//import toast from 'react-hot-toast';

const BookingModal = () => {
    const {user} = useContext(authContext);
    return (
        <div>
            <input type="checkbox" id="popupDetails" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label htmlFor="popupDetails" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Name</h3>
          <form>
          <div className="py-4 flex flex-col gap-y-2">
            <input type="text" name="date" value="" className="input input-bordered w-full" disabled/>
            <input type="text" defaultValue={user?.displayName} name="fullName" placeholder="Full Name" className="input input-bordered w-full" disabled/>

            <input type="email" defaultValue={user?.email} name="email" className="input input-bordered w-full" disabled/>

            <input type="text" defaultValue={user?.email} name="price" className="input input-bordered w-full" disabled/>

            <input type="tel" name="phone" placeholder="Phone" className="input input-bordered w-full" />

            <input type="text" name="location" placeholder="Meeting Location" className="input input-bordered w-full" />
          </div>
          <button className="btn btn-block">Confirm Booking</button>
          </form>
            </div>
            </div> 
        </div>
    );
};

export default BookingModal;