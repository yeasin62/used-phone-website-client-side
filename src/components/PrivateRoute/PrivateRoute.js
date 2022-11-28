import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>;
    }
    if(user && user.uid){
        return children;
    }
   
    return (
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;