import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Advertise = () => {
    const {data : phones = [], refetch}= useQuery({
        queryKey: ['phones'],
        queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/phones`);
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/phones/advertise/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Advertise Published successfully');
                refetch();
            }
        })
    }

    const handleAdvertiseRemove = id => {
        fetch(`http://localhost:5000/phones/advertised/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Advertise Removed successfully');
                refetch();
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold py-2'>All Products</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Product Name</th>
        <th>Brand</th>
        <th>Resale Price</th>
        <th>Advertise</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        phones.map((phone,i) => <tr key={phone._id}>
            <th>{i+1}</th>
            <th><img src={phone.productImage} alt="" className='w-8 h-8 object-cover'/></th>
            <td>{phone.productName}</td>
            <td>{phone.category}</td>
            <td>{phone.resalePrice}</td>
            <td>
                {
                    phone?.isAdvertised !== true ? <button onClick={()=> handleAdvertise(phone._id)} className='btn btn-primary btn-sm'>Advertise Now</button>  : <button onClick={()=> handleAdvertiseRemove(phone._id)} className='btn btn-info btn-sm' > Remove Advertise</button>
                }
                
            </td>
            <td><button className='btn btn-error text-white btn-sm'>Delete</button></td>
          </tr>)
      }
      
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Advertise;