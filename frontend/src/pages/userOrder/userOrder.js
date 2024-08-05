import React, { useEffect, useState } from 'react';
import { getOrders } from "../../services/serviceProducts";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserOrder = () => {
    const getUser = useSelector(state => state.user);
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [ordersStatus, setOrdersStatus] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (getUser) {
                setUser(getUser);
                const fetchOrders = await getOrders(getUser.userId) ;
                setOrders(fetchOrders);
                setOrdersStatus(fetchOrders);
            }
        };

        fetchData();
    }, [getUser]);

    const filterOrder = (status) => {
       if(status == 'all'){
        setOrdersStatus(orders);
       }else{
        const filteredOrders = orders.filter((i) => i.status === status);
        setOrdersStatus(filteredOrders);
       }
    };

    return (
        <main className="remember_col--right text-white">
            <div className="remember_information">
                <div className="img_remember">
                    <img
                        src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/wysiwyg/Shipper_CPS3_1.png"
                        alt=""
                    />
                </div>
                <div className="remember_if--content">
                    <h3 className="if--name">{getUser?.userName}</h3>
                    <h4 className="if--phone">{getUser?.userPhone}</h4>
                    <div className="if--last">SNULL</div>
                </div>
            </div>
            <div className="remember_NumberOrder">
                <div className="NumberOrder--content">
                    <h1>{orders.length}</h1>
                    <p>đơn hàng</p>
                </div>
                <hr />
                <div className="NumberOrder--content">
                    <h1>0đ</h1>
                    <p>Tổng tiền tích lũy</p>
                </div>
            </div>
            <div className="remember_filter">
                <div className="form-control--data " data-v-1ebd09d2="">
                    <i
                        className="glyphicon glyphicon-calendar fa fa-calendar"
                        data-v-1ebd09d2=""
                    />
                    <span data-v-1ebd09d2="">01/12/2020 - 02/06/2024</span>
                    <b className="caret" data-v-1ebd09d2="" />
                </div>
                <div className="list_filter" id="list_filter">
                    <div className="filteChild active_filter" onClick={() => filterOrder('all')}>
                        Tất cả
                    </div>
                    <div className="filteChild" onClick={() => filterOrder(0)}>
                        Chờ xác nhận
                    </div>
                    <div className="filteChild" onClick={() => filterOrder(1)}>
                        Đã xác nhận
                    </div>
                    <div className="filteChild" onClick={() => filterOrder(2)}>
                        Đang vận chuyển
                    </div>
                    <div className="filteChild" onClick={() => filterOrder(3)}> 
                        Đã giao hàng
                    </div>
                    <div className="filteChild" onClick={() => filterOrder(4)}>
                        Đã hủy
                    </div>
                </div>
            </div>
            <div className="remember_order--table">
                <table className="styled-table">
                    <thead>
                        <tr >
                            <th className='text-center'>Mã đơn hàng</th>
                            <th className='text-center'>Ngày mua</th>
                            <th className='text-center'>Trạng thái</th>
                            <th className='text-center'>Giá trị đơn</th>
                            <th className='text-center'>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersStatus.length > 0 ? (
                            ordersStatus.map((order, index) => (
                                <tr key={order.id}>
                                <td className='text-center'>#{order.id}</td>
                                <td className='text-center'>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className='text-center'>{order.status == 0 ?'Đang chờ': order.status == 1 ?'Đã xác nhận': order.status == 2 ?'Đang giao': order.status == 3 ?'Đang giao': order.status == 4 ?'Đã giao': "Hủy" }</td>
                                <td className='float-end'>{order.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                <td className='text-center' style={{ cursor: "pointer" }}>
                                    <Link to={`/user/order/${order.id}`}>Xem</Link> 
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                                <td className='text-center' colSpan="5">Không tìm thấy</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default UserOrder;
