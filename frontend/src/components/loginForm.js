import React, { useState } from "react";
import { useSelector } from 'react-redux';


const LoginForm = ({ onlogin }) => {
    const error = useSelector(state => state.error);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onlogin(formData);
    };
    
    if (error != null && error != undefined) {
        if (error === 'Email không tồn tại') {
            const errorEmailElement = document.querySelector('#errorEmail');
            if (errorEmailElement) {
                errorEmailElement.textContent = error;
            }
        } else if (error === 'Sai mật khẩu rồi') {
            const errorPassElement = document.querySelector('#errorPass');
            if (errorPassElement) {
                errorPassElement.textContent = error;
            }
        } else if (error === null || error === undefined) {
            const errorEmailElement = document.querySelector('#errorEmail');
            const errorPassElement = document.querySelector('#errorPass');
            if (errorEmailElement) {
                errorEmailElement.textContent = '';
            }
            if (errorPassElement) {
                errorPassElement.textContent = '';
            }
        }
    }

    return (
        <form id="frm" name="frm" onSubmit={handleSubmit}>
            <div className="absolute"><p className="relative bottom-4 left-2 text-red" id="errorEmail"></p></div>
            <div className="login_input">
                <input
                    className="bg-main"
                    type="text"
                    name="email"
                    id="sodienthoai"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <label
                    style={{ backgroundColor: "#2C3333" }}
                    htmlFor="sodienthoai"
                >
                    Vui lòng nhập số điện thoại/Email
                </label>
            </div>
            <div className="absolute"><p className="relative bottom-9 left-2 text-red" id="errorPass"></p></div>
            <div className="login_input">
                <input
                    className="bg-main"
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
                <label
                    style={{ backgroundColor: "#2C3333" }}
                    htmlFor="password"
                >
                    Vui lòng nhập mật khẩu
                </label>
            </div>
            <div className="pwrw">
                <a href="">Quên mật khẩu ?</a>
            </div>
            <button type="submit" className="btn_login bg-btnYellow">
                Đăng nhập
            </button>
        </form>
    );
};

export default LoginForm;
