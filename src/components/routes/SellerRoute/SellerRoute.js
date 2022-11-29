import React, { useState } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import Spinner from '../../Spinner/Spinner';


const SellerRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const [isSeller,isSellerLoading] = useState(user?.email);
    const location = useLocation();

    if(loading || isSellerLoading){
        return <Spinner></Spinner>;
    }
    if(user && isSeller){
        return children;
    }
   
    return (
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default SellerRoute;