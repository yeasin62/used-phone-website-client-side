import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../../../AuthProvider/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(authContext);
    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const {data : orders = []} = useQuery({
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
    console.log(orders);
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-2'>My Products</h2>

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
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        orders.map((order,i) => <tr key={i}>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <td>
                                <img src={order.productImage} alt="" className='w-10 h-10 object-cover'/>
                            </td>
                            <td>
                                {order.productName}
                            </td>
                            <td>{order.category}</td>
                            <td>{order.resalePrice}</td>
                            <th>
                            <button className="btn btn-ghost btn-xs">Advertise</button>
                            </th>
                            <th>
                            <button className="btn btn-ghost btn-xs">Available / Sold</button>
                            </th>
                        </tr>)
                    }
                    </tbody>

                    
                </table>
                </div>
        </div>
    );
};

export default MyProducts;