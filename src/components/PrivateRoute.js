import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({isLogedIn,children}) => {
 if(isLogedIn){
    return children;
 }
 else{
    return <Navigate  to='/login'></Navigate>
 }
}

export default PrivateRoute