import React, { useEffect, useState } from 'react';
import { getOrderDetail, getProducts, getOrderId } from "../../services/serviceProducts";
import { useParams } from 'react-router-dom';

const UserDetailOrder = () => {
    const [detailOrder, setDetailOrder] = useState([]);
    const [orderId, setOrderId] = useState([]);
    const [productsDetail, setProductsDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchDetailOrder = await getOrderDetail(id);
                setDetailOrder(fetchDetailOrder);
                const fetchOrderId = await getOrderId(id);
                setOrderId(fetchOrderId);

                const fetchProductsDetail = await getProducts();
                setProductsDetail(fetchProductsDetail);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, [id]);
    const stransmit = (idproducts) => {
        if (!productsDetail) return null;
        return productsDetail.find((i) => i.id === idproducts);
    };

    const orderDetails = detailOrder[0] || {};
    const order = orderId[0] || {};
    return (
        <main className="remember_col--right bg-white">
            <h1>CHI TIẾT ĐƠN HÀNG</h1>
            <p>
                Ngày <span>{new Date(order.createdAt).getDate()}</span> tháng <span>{new Date(order.createdAt).getMonth() + 1}</span> năm <span>{new Date(order.createdAt).getFullYear()}</span>
            </p>
            <div className="content_order">
                <div className="infoOrder">
                    <p>
                        Công ty: <span>Công ty 1 thần viên Fish Tanks</span>
                    </p>
                    <p>
                        Địa chỉ:
                        <span>Ấp chợ xếp xã tân thành bình huyện Mỏ Cày Bắc tỉnh Bến Tre</span>
                    </p>
                    <p>
                        Số điện thoại: <span>0348378112</span>
                    </p>
                </div>
                <div className="infoReciver">
                    <p>
                        Họ tên người nhận hàng: <span>{order.receiverName}</span>
                    </p>
                    <p>
                        Địa chỉ:
                        <span>{order.receiverAddress}</span>
                    </p>
                    <p>
                        Số điện thoại: <span>{order.receiverPhone}</span>
                    </p>
                    <p>
                        Email: <span>{order.receiverEmail}</span>
                    </p>
                </div>
                <div className="remember_order--table">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên hàng hóa, dịch vụ</th>
                                <th>Đơn vị tính</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>    
                        <tbody>
                            {detailOrder.map((item, index) => {
                                const product = stransmit(item.product_id);
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{product ? product.name : 'Unknown Product'}</td>
                                        <td>Cái</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{item.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={4}>TỔNG THÀNH TIỀN</td>
                                <td colSpan={2}>{detailOrder.reduce((acc, item) => acc + item.total, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="orderDescription">
                    Fish Tanks Galore là công ty chuyên thiết kế và bán các loại hồ cá đa dạng. Chúng tôi cam kết mang đến cho khách hàng những sản phẩm hồ cá độc đáo và chất lượng.
                </div>
            </div>
        </main>
    );
};

export default UserDetailOrder;
