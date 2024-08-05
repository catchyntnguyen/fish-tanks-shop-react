import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { checkout } from "../../services/serviceProducts";
import { setNotification, setQuantity } from '../../actions/actions';


const Mycheckout = () => {
    const totalCart = useSelector(state => state.total);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
    
    useEffect(() => {
        if (!user) {
            dispatch(setNotification('Bạn chưa đăng nhập !!'));
            navigate('/login');
        }
    }, [user, navigate]);
    
    
    const [formData, setFormData] = useState({
        idUserBuy: user?.userId || '',
        name: "",
        locationDetail: "",
        email: "",
        phoneNumber: "",
        shippingMethod: "",
        paymentMethod: "",
        totalCart: totalCart
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let check = true;

        if (!formData.name || !formData.locationDetail || !formData.email || !formData.phoneNumber) {
            document.querySelector('.recivererror').classList.add('shadow-red');
            document.querySelector('.recivererror').classList.remove('shadow-white');
            check = false;
        } else {
            document.querySelector('.recivererror').classList.remove('shadow-red');
            document.querySelector('.recivererror').classList.add('shadow-white');
        }

        if (!formData.shippingMethod) {
            document.querySelector('.methodpayerror').classList.add('shadow-red');
            document.querySelector('.methodpayerror').classList.remove('shadow-white');
            check = false;
        } else {
            document.querySelector('.methodpayerror').classList.remove('shadow-red');
            document.querySelector('.methodpayerror').classList.add('shadow-white');
        }

        if (!formData.paymentMethod) {
            document.querySelector('.paymenterror').classList.add('shadow-red');
            document.querySelector('.paymenterror').classList.remove('shadow-white');
            check = false;
        } else {
            document.querySelector('.paymenterror').classList.remove('shadow-red');
            document.querySelector('.paymenterror').classList.add('shadow-white');
        }

        if (check && cart.length) {
            const data = {
                cart,
                ...formData
            };
            try {
                await checkout(data);
                sessionStorage.removeItem('cart');
                dispatch(setQuantity(0));
                dispatch(setNotification('Đặt hàng thành công <3'));
                navigate('/');
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch any necessary data here
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* start phần ckeck out */}
                <section className="grid grid-cols-2 min-h-96 gap-2 mt-5">
                    <div className="col-span-1">
                        <div className="text-white shadow p-5 shadow-white rounded recivererror">
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Họ và tên người nhận{" "}
                                    <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ex: Nguyễn Văn A"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-2 rounded bg-main border focus:outline-none w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="locationDetail"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Địa chỉ cụ thể <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="locationDetail"
                                    name="locationDetail"
                                    placeholder="Ex: 212B, Barker street, London"
                                    value={formData.locationDetail}
                                    onChange={handleChange}
                                    className="p-2 rounded bg-main border focus:outline-none w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                    <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Ex: abc@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-2 rounded bg-main border focus:outline-none w-full"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="phoneNumber"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Số điện thoại <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Số điện thoại của bạn"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="p-2 rounded bg-main border focus:outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white p-5 shadow shadow-white rounded methodpayerror">
                            <div className="mb-5 flex justify-between items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="shipping-free"
                                    name="shippingMethod"
                                    type="radio"
                                    value="free"
                                    checked={formData.shippingMethod === "free"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="w-8/12">
                                    <div>Miễn phí</div>
                                    <div>(Dành cho đơn hàng có giá trị &gt; 2.100.000 VNĐ)</div>
                                </div>
                                <div>0 VND</div>
                            </div>
                            <div className="mb-5 flex justify-between items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="shipping-normal"
                                    name="shippingMethod"
                                    type="radio"
                                    value="normal"
                                    checked={formData.shippingMethod === "normal"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="w-8/12">
                                    <div>Thông thường</div>
                                    <div>(3 - 7 ngày (tùy đơn hàng))</div>
                                </div>
                                <div>0 VND</div>
                            </div>
                            <div className="mb-5 flex justify-between items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="shipping-express"
                                    name="shippingMethod"
                                    type="radio"
                                    value="express"
                                    checked={formData.shippingMethod === "express"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="w-8/12">
                                    <div>Hỏa tốc</div>
                                    <div>(1 - 3 ngày (tùy đơn hàng))</div>
                                </div>
                                <div>0 VND</div>
                            </div>
                        </div>
                        <div className="text-white p-5 shadow shadow-white rounded mt-5 paymenterror">
                            <div className="mb-5 flex justify-start items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="payment-cash"
                                    name="paymentMethod"
                                    type="radio"
                                    value="cash"
                                    checked={formData.paymentMethod === "cash"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="mr-16">
                                    <div>Tiền mặt</div>
                                    <div>(Thanh toán khi giao hàng)</div>
                                </div>
                            </div>
                            <div className="mb-5 flex justify-start items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="payment-credit"
                                    name="paymentMethod"
                                    type="radio"
                                    value="credit"
                                    checked={formData.paymentMethod === "credit"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="mr-16">
                                    <div>Thẻ tín dụng</div>
                                    <div>(Nếu đơn hạng &gt; 2.000.000 VND trả trước 30% giá trị đơn hàng)</div>
                                </div>
                            </div>
                            <div className="mb-5 flex justify-start items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="payment-paypal"
                                    name="paymentMethod"
                                    type="radio"
                                    value="paypal"
                                    checked={formData.paymentMethod === "paypal"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="mr-16">
                                    <div>Paypal</div>
                                    <div>(Nếu đơn hạng &gt; 2.000.000 VND trả trước 30% giá trị đơn hàng)</div>
                                </div>
                            </div>
                            <div className="mb-5 flex justify-start items-center px-5 py-1 shadow shadow-white rounded">
                                <input
                                    id="payment-momo"
                                    name="paymentMethod"
                                    type="radio"
                                    value="momo"
                                    checked={formData.paymentMethod === "momo"}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                />
                                <div className="mr-16">
                                    <div>Momo</div>
                                    <div>(Nếu đơn hạng &gt; 2.000.000 VND trả trước 30% giá trị đơn hàng)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end phần ckeck out */}
                {/* start tổng giá trị sản phẩm  */}
                <section className="mt-5 text-white">
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
                                <div className=" w-full text-center">
                                    <hr />
                                </div>
                                <div className="w-80 text-2xl text-center"> {(Number(totalCart)).toLocaleString()} VND</div>
                            </div>
                            <button type="submit" className="uppercase w-full rounded p-1 bg-fishtank mt-8">
                                <i className="fa-solid fa-arrow-right mr-2" />
                                ĐẶT HÀNG NGAY
                            </button>
                        </div>
                    </div>
                </section>
                {/* end tổng giá trị sản phẩm */}
            </form>
        </>
    );
}

export default Mycheckout;
