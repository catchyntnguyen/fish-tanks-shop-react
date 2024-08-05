import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/serviceProducts";
import { Link } from "react-router-dom";
import Notification from "../../components/pouperror";
import { useDispatch, useSelector } from 'react-redux';
import {setNotification } from '../../actions/actions';

const AdminCategories = () => {
    const [notificationNew, setNotificationNew] = useState();
    const [categories, setCategories] = useState([]);
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await getCategories();
                setCategories(categories);
                if(notification){
                    setNotificationNew(notification);
                    setTimeout(() => {
                        dispatch(setNotification(null));
                    },6000);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);

    

    return (
        <>
       {notification ? <Notification message={notificationNew} care={2}></Notification>: null}
            <h2>TRANG DANH MỤC</h2>
            <Link className="filter" to='/admin/category/add'>
                <div className="filter-item">Thêm danh mục</div>
                <div className="filter-item" id="drop">
                    Lọc <i className="fa-solid fa-caret-down" />
                </div>
            </Link>
            <div className="popup_list slide-left" id="drop_list">
                <ul>
                    <li>
                        <a href="">Mới Nhất</a>
                    </li>
                    <li>
                        <a href="">Cũ Nhất</a>
                    </li>
                </ul>
            </div>
            <table className="table-category">
                <thead>
                    <tr>
                        <th>ID Danh Mục</th>
                        <th>Hình</th>
                        <th className="w-[200px]">Tên Danh Mục</th>
                        <th>Mô Tả</th>
                        <th>Khác</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td className="img-td">
                                    <img
                                        src={`/img/products/${category.img}`}
                                        alt={category.name}
                                    />
                                </td>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>
                                    <Link to={`/admin/category/${category.id}`}>Chi Tiết</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Không có danh mục</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default AdminCategories;
