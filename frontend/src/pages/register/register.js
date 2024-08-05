import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/registerFrom';
import { register } from '../../services/serviceProducts';
import { useNavigate } from 'react-router-dom';

const Myregister = () => {
    const navigate = useNavigate();
    const handleRegister = async (user) => {
        if (user.email && user.password && user.hoten && user.sdt) {
            try {
                const res = await register(user); 
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('Please provide both email and password');
        }
        
    };
    return (
        <main className='text-white mainlogin'>
            <div className="login_title">
                <b>Đăng ký tài khoản FishTanks</b>
            </div>
           <RegisterForm onregister={handleRegister}></RegisterForm>
            <div className="or bg">
                    <div style={{ backgroundColor: '#2C3333' }} >
                        <b className='bg'>Hoặc</b>
                    </div>
                    <hr />
                </div>
            <div className="login_with">
                <img
                    src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                    alt="Google"
                />
                <p>Đăng nhập bằng Google</p>
            </div>
            <div className="login_with">
                <img
                    src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                    alt="Zalo"
                />
                <p>Đăng nhập bằng Zalo</p>
            </div>
            <div className="signup">
                <p>
                    Đăng nhập tại đây <Link className='text-btnYellow' to="/login">Đăng nhập ngay</Link>
                </p>
            </div>
        </main>
    );
};

export default Myregister;
