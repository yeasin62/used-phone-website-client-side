import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../../../AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(authContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`;

    const {data : orders = [], refetch} = useQuery({
      queryKey: ['orders', user?.email],
      queryFn: async ()=> {
        const res = await fetch(url,{
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        });
        const data = await res.json();
        return data;
      }  
    })
    
    console.log(orders)

    
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-2'>My Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th></th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    { orders &&
                        orders?.map((order,i) => <tr key={order._id}>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                                <img src={order.productImage} alt="" className='w-10 h-10 object-cover'/>
                            </td>
                            <td>
                                {order.itemName}
                            </td>
                            <td>{order.price}</td>
                            <th>
                            <button className="btn btn-success text-white btn-xs">PAY NOW</button>
                            </th>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyOrders;