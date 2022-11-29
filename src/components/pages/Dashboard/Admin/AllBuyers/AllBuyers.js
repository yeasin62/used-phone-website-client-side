import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {
    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const closeModal = ()=> {
        setDeletingBuyer(null);
    }
    const {data : sellers = [], refetch}= useQuery({
        queryKey: ['sellers'],
        queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/allbuyers`);
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Admin made successfully');
                refetch();
            }
        })
    }

    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/buyer/${buyer._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success("Buyer Deleted successfully")
                refetch();
            };
            
        })
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold py-2'>All Buyers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        sellers.map((seller,i) => <tr key={seller._id}>
            <th>{i+1}</th>
            <td>{seller.userName}</td>
            <td>{seller.userEmail}</td>
            <td>
                {
                    seller?.role !== 'admin' ? <button onClick={()=> handleMakeAdmin(seller._id)} className='btn btn-primary btn-sm'>Make Admin</button> : <button className='btn btn-info' disabled> Admin</button>
                }
            </td>
            <td>

            <label onClick={()=>setDeletingBuyer(seller)} htmlFor="confirmation-modal" className="btn btn-error text-white btn-sm">Delete</label>
                {
                   deletingBuyer && <ConfirmationModal deletingSeller={deletingBuyer} title={"Are you sure you want to delete?"} message={"If you delete it can't be undone"} closeModal={closeModal} modalData={deletingBuyer} successButtonName="Delete" successAction = {handleDeleteBuyer}></ConfirmationModal> 
                }
            </td>
          </tr>)
      }
      
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;