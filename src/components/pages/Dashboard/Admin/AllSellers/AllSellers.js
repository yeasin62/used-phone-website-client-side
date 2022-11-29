import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = ()=> {
        setDeletingSeller(null);
    }
    const {data : sellers = [], refetch}= useQuery({
        queryKey: ['sellers'],
        queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/sellers`);
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

    const handleVerify = id => {
        fetch(`http://localhost:5000/seller/verified/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Seller Verified successfully');
                refetch();
            }
        })
    }

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/seller/${seller._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success("Seller Deleted successfully")
                refetch();
            };
            
        })
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold py-2'>All Sellers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
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
            <td>{seller?.isVerifiedSeller !== true ? <button onClick={()=> handleVerify(seller._id)} className='btn btn-primary btn-sm'>Verify Seller</button> : <button className='btn btn-info btn-sm' disabled> Seller Verified</button>}</td>
            <td>
                {
                    seller?.role !== 'admin' ? <button onClick={()=> handleMakeAdmin(seller._id)} className='btn btn-primary btn-sm'>Make Admin</button> : <button className='btn btn-info btn-sm' disabled> Admin</button>
                }
            </td>
            <td>
                <label onClick={()=>setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-error text-white btn-sm">Delete</label>
                {
                   deletingSeller && <ConfirmationModal deletingSeller={deletingSeller} title={"Are you sure you want to delete?"} message={"If you delete it can't be undone"} closeModal={closeModal} modalData={deletingSeller} successButtonName="Delete" successAction = {handleDeleteSeller}></ConfirmationModal> 
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

export default AllSellers;