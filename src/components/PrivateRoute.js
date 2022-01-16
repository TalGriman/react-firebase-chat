import React, { useContext } from "react";
import { AuthContext } from '../context/auth';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ children, path }) => {
    const { user } = useContext(AuthContext);

    return (
        user ? children : <Navigate to={path} replace />
    );
};

export default PrivateRoute;