// src/layouts/MainLayout.js
import React from 'react';
import Myheader from '../components/header/header';
import Myfooter from '../components/footer/footer';
const MainLayout = ({ children }) => {
    return (
        <>
            <div className="cl-bg--main my-0 mx-36">
                <Myheader />
                { children }
            </div>
            <Myfooter />
        </>
    );
};

export default MainLayout;
