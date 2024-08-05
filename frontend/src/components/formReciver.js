import React, { useState, useEffect } from "react";

const Formcheckout = () => {
    const [formData, setFormData] = useState({
        location: "",
        locationDetail: "",
        email: "",
        phoneNumber: "",
        shippingMethod: "",
        paymentMethod: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
            <div className="col-span-1">
                <div className="text-white shadow p-5 shadow-white rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="location"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Tỉnh/Thành phố, Quận/Huyện, Phường/Xã{" "}
                                <span className="text-red">*</span>
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Ex: 212B, Barker street, London"
                                value={formData.location}
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
                        <div className="text-white p-5 shadow shadow-white rounded mt-5">
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
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Formcheckout;
