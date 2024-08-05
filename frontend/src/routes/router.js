import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useJwt } from 'react-jwt';

import Myhome from "../pages/home/home";
import Mydetail from "../pages/detail/detail";
import Mysearch from "../pages/search/search";
import Mycategory from "../pages/category/category";
import Mylogin from "../pages/login/login";
import Myregister from "../pages/register/register";
import Mycart from "../pages/cart/cart";
import Mycheckout from "../pages/checkOut/checkOut";
import MainLayout from "../layouts/MainLayout";

import UserLayout from "../layouts/UserLayout";
import UserHome from "../pages/userHome/userHome";
import UserOrder from "../pages/userOrder/userOrder";
import UserDetailOrder from "../pages/userDetailOrder/userDetailOrder";
import ProtectedRouteUser from "../components/ProtectedRouteUser";

import Adminlayout from '../layouts/AdminLayout';
import AdminHome from '../pages/adminHome/adminHome';
import ProtectedRouteAdmin from '../components/ProtectedRouteAdmin';
import AdminProducts from '../pages/adminProducts/adminProducts';
import AdminProductDetail from '../pages/adminProductDetail/adminProductDetail';
import AdminAddProduct from '../pages/adminFormProduct/adminAddProduct';
import AdminCategories from '../pages/adminCategories/adminCategories';
import AdminAddCategory from '../pages/adminFormCategory/adminAddCategory';
import AdminCategoryDetail from '../pages/adminFormCategoryDetail/adminAddCategoryDetail';


const AppRoutes = () => {
    const user = useSelector(state => state.user);
    const token = localStorage.getItem('token'); 
    const { decodedToken, isExpired } = useJwt(token);

    const isAuthenticated = !!user && !isExpired;

    return (
        <Routes>
            <Route path="/" element={<MainLayout><Myhome /></MainLayout>} />
            <Route path="/login" element={<MainLayout><Mylogin /></MainLayout>} />
            <Route path="/register" element={<MainLayout><Myregister /></MainLayout>} />
            <Route path="/detail/:id" element={<MainLayout><Mydetail /></MainLayout>} />
            <Route path="/search" element={<MainLayout><Mysearch /></MainLayout>} />
            <Route path="/category/:product/:filter" element={<MainLayout><Mycategory /></MainLayout>} />
            <Route path="/cart" element={<MainLayout><Mycart /></MainLayout>} />
            <Route path="/checkout" element={<MainLayout><Mycheckout /></MainLayout>} />

            {/* User routes */}
            <Route path="/user" element={
                <ProtectedRouteUser isAuthenticated={isAuthenticated}>
                    <MainLayout><UserLayout><UserHome /></UserLayout></MainLayout>
                </ProtectedRouteUser>
            } />
            <Route path="/user/order" element={
                <ProtectedRouteUser isAuthenticated={isAuthenticated}>
                    <MainLayout><UserLayout><UserOrder /></UserLayout></MainLayout>
                </ProtectedRouteUser>
            } />
            
            <Route path="/user/order/:id" element={
                <ProtectedRouteUser isAuthenticated={isAuthenticated}>
                    <MainLayout><UserLayout><UserDetailOrder /></UserLayout></MainLayout>
                </ProtectedRouteUser>
            } />

            {/* Admin routes */}
            <Route path="/admin" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminHome /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/products" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminProducts /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/product/:id" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminProductDetail /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/product/add" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminAddProduct /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/categories" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminCategories /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/category/add" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminAddCategory /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
            <Route path="/admin/category/:id" element={
                <ProtectedRouteAdmin user={decodedToken}>
                    <Adminlayout><AdminCategoryDetail /></Adminlayout>
                </ProtectedRouteAdmin>
            } />
        </Routes>
    );
}

export default AppRoutes;

