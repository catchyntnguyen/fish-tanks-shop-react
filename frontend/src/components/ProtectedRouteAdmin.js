import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({ user, children }) => {
    if (!user || user.role !== 1) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRouteAdmin;
