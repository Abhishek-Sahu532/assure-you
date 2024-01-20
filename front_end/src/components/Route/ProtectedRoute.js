import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, isAuthenticated}) => {
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to={"/login"}  state={{from : location}} replace/>;
  }

  if (!isAuthenticated && !isAdmin) {
    return <Navigate to={"/"} state={{from : location}} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
