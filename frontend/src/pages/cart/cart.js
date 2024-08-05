import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ListProduct from "./listproducts";
import { useDispatch, useSelector } from 'react-redux';
import { setQuantity } from '../../actions/actions';

const Mycart = () => {
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
    const totalCart = useSelector(state => state.total);
    const quantity = useSelector(state => state.quantity);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Your fetch logic here
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const isCartEmpty = cart.length === 0 || quantity <= 0;

    const checkOut = () => {
        navigate('/checkOut')
    }

    return (
        <>
            <section className="mt-5 text-white">
                <div className="flex justify-center">
                    <div className="border-b inline-block m-auto">
                        <h1 className="uppercase text-4xl">Giỏ hàng</h1>
                    </div>
                </div>
            </section>

            {/* Conditionally render cart section or empty cart message */}
            {!isCartEmpty ? (
                <>
                    <section className="cart cartShow">
                        <ListProduct />
                    </section>
                    <section className="mt-5 text-white cartShow">
                        <div className="flex gap-2 h-96">
                            <div className="h-full w-1/2">
                                <div className="border-b inline-block pb-3">
                                    <h1 className="text-7xl">Tổng Đơn</h1>
                                </div>
                            </div>
                            <div className="h-full w-1/2 leading-10">
                                <div>
                                    <hr />
                                    <p>Phương thức vận chuyển</p>
                                    <p>
                                        Dựa trên phương thức vận chuyển mà bạn lựa chọn ở bước tiếp theo,
                                        chúng tôi sẽ tính thêm khoản phí tương ứng vào đơn hàng của bạn.
                                    </p>
                                </div>
                                <div>
                                    <hr />
                                    <p>Phương thức thanh toán</p>
                                    <p>
                                        Dựa trên phương thức thanh toán mà bạn lựa chọn ở bước tiếp theo,
                                        đơn hàng sẽ được thanh toán nhanh nhất có thể dựa trên lựa chọn của
                                        bạn.
                                    </p>
                                </div>
                                <div className="w-full flex justify-between items-center">
                                    <div className="w-48 text-2xl">Tổng tiền</div>
                                    <div className="w-8/12 text-center">
                                        <hr />
                                    </div>
                                    <div className="w-80 text-2xl text-center">
                                        {(Number(totalCart)).toLocaleString()} VND
                                    </div>
                                </div>
                                <button className="uppercase w-full rounded p-1 bg-fishtank mt-8" onClick={checkOut}>
                                    <i className="fa-solid fa-arrow-right mr-2" />
                                    Thanh toán ngay
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <section className="cartHidden">
                    <p className="text-center text-white text-4xl my-20">Chưa có sản phẩm trong giỏ hàng</p>
                    <Link to='/' className="flex justify-center text-white text-2xl my-20 underline">
                        Trở về trang chủ {'>>'}
                    </Link>
                </section>
            )}
        </>
    );
}

export default Mycart;
