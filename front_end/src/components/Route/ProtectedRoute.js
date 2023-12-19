import React from "react";

import {Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, isAuthenticated}) => {

if(isAuthenticated && isAdmin){
  return < Outlet />
}

if(!isAuthenticated){
  return <Navigate to={'/login'}/>
}


}


export default ProtectedRoute;