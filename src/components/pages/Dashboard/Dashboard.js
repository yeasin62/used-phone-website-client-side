import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const Dashboard = () => {
    const {user} = useContext(authContext);
    const [isAdmin] = useAdmin(user?.email);
    
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile mt-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-4 py-2">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-sky-100">

                    
                    {
                        isAdmin && <>
                            <li><Link to={'/dashboard/sellers'}>All Sellers</Link></li>
                            <li><Link to={'/dashboard/buyers'}>All Buyers</Link></li>
                        </>
                    }
                    
                    <li><Link to={'/dashboard/add'}>Add New Product</Link></li>
                    <li><Link to={'/dashboard/my-products'}>My Products</Link></li>
                    <li><Link to={'/dashboard/advertise'}>Advertise</Link></li>
                    </ul>
                
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;