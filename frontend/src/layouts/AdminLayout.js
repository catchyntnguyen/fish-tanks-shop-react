// src/layouts/Adminlayout.js
import React from 'react';
import AdminFooter from '../components/adminFooter/adminFooter';
import AdminHeader from '../components/adminHeader/adminHeader';



import '../assets/css/admin.css';
const Adminlayout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <AdminHeader />
                <div className="content-wrapper">
                    {children}
                    <AdminFooter />
                </div>
            </div>
        </>
    );
};

export default Adminlayout;
