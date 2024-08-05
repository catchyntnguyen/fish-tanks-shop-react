import React, { useState } from "react";

const RegisterForm = ({ onregister, existingUsers }) => {
    const [formData, setFormData] = useState({
        hoten: '',
        sdt: '',
        email: '',
        password: '',
        passwordagain: '',
    });

    const [errors, setErrors] = useState({
        errorPhone: '',
        errorUser: '',
        errorEmail: '',
        errorPass: '',
        errorPassA: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let check = true;
        const newErrors = {
            errorPhone: '',
            errorUser: '',
            errorEmail: '',
            errorPass: '',
            errorPassA: '',
        };

        if (!formData.sdt) {
            newErrors.errorPhone = "Không để trống số điện thoại";
            check = false;
        } else if (formData.sdt.length !== 10) {
            newErrors.errorPhone = "Số điện thoại chưa đúng";
            check = false;
        }

        if (!formData.hoten) {
            newErrors.errorUser = "Không để trống tên của bạn";
            check = false;
        }

        if (!formData.email) {
            newErrors.errorEmail = "Không để trống Email của bạn";
            check = false;
        } 

        if (!formData.password) {
            newErrors.errorPass = "Không để trống mật khẩu của bạn";
            check = false;
        }

        if (!formData.passwordagain) {
            newErrors.errorPassA = "Nhập lại mật khẩu của bạn";
            check = false;
        } else if (formData.password !== formData.passwordagain) {
            newErrors.errorPassA = "Mật khẩu nhập lại chưa đúng";
            check = false;
        }

        setErrors(newErrors);
        if (check) {
            onregister(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="absolute"><p className="relative bottom-4 left-2 text-red">{errors.errorUser}</p></div>
            <div className="login_input">
                <input
                    className='bg-main'
                    type="text"
                    name="hoten"
                    value={formData.hoten}
                    onChange={handleChange}
                    required
                />
                <label style={{ backgroundColor: "#2C3333" }} htmlFor="hoten">Vui lòng nhập họ tên</label>
            </div>
            <div className="absolute"><p className="relative bottom-10 left-2 text-red">{errors.errorPhone}</p></div>
            <div className="login_input">
                <input
                    className='bg-main'
                    type="text"
                    name="sdt"
                    value={formData.sdt}
                    onChange={handleChange}
                    required
                />
                <label style={{ backgroundColor: "#2C3333" }} htmlFor="sdt">Vui lòng nhập số điện thoại (Bắt buộc)</label>
            </div>
            <div className="absolute"><p className="relative bottom-10 left-2 text-red">{errors.errorEmail}</p></div>
            <div className="login_input">
                <input
                    className='bg-main'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label style={{ backgroundColor: "#2C3333" }} htmlFor="email">Vui lòng nhập Email (bắt buộc)</label>
            </div>
            <div className="login_input">
                <input
                    className='bg-main'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label style={{ backgroundColor: "#2C3333" }} htmlFor="password">Vui lòng nhập mật khẩu</label>
                <p style={{ fontSize: "0.8em" }}>
                    Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in hoa, 1 chữ số, 1 ký tự đặc biệt
                </p>
            </div>
            <div className="login_input">
                <input
                    className='bg-main'
                    type="password"
                    name="passwordagain"
                    value={formData.passwordagain}
                    onChange={handleChange}
                    required
                />
                <label style={{ backgroundColor: "#2C3333" }} htmlFor="passwordagain">Vui lòng nhập lại mật khẩu</label>
            </div>
            <div className="absolute"><p className="relative bottom-10 left-2 text-red">{errors.errorPassA}</p></div>
            <div className="pwrw text-white">
                <p className='float-right cursor-pointer'>Quên mật khẩu ?</p>
            </div>
            <div className="btn_login bg-btnYellow">
                <button type="submit">
                    <b>Đăng ký</b>
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
