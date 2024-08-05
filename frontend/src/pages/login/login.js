import { useJwt } from "react-jwt";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login, getUser } from '../../services/serviceProducts';
import LoginForm from '../../components/loginForm';
import { setUserReducer, setErrorMessage, setNotification } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Notification from "../../components/pouperror";

const Mylogin = () => {
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const notification = useSelector(state => state.notification);
    const { decodedToken, isExpired } = useJwt(token);

    const handleLogin = async (user) => {
        if (user.email && user.password) {
            try {
                const res = await login(user);
                const newToken = res.token;
                localStorage.setItem('token', newToken);
                setToken(newToken);
                dispatch(setErrorMessage(null));
                dispatch(setNotification(null));
                window.location.href = '/';
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : 'Something went wrong. Please try again.';
                setError(errorMessage);
                dispatch(setErrorMessage(errorMessage));
            }
        } else {
            console.log('Please provide both email and password');
        }
    };

    return (
        <>
        {notification ? <Notification message={notification}></Notification>: null}
            <main className='text-white mainlogin'> 
                <div className="login_img">
                    <img
                        src=""
                        alt=""
                    />
                </div>
                <div className="login_title text-3xl mb-10">
                    <b>Đăng nhập tài khoản Fish Tanks</b>
                </div>
                <LoginForm onlogin={handleLogin}></LoginForm>
                <div className="or bg">
                    <div></div>
                    <div style={{ backgroundColor: '#2C3333' }} >
                        <b className='bg'>Hoặc</b>
                    </div>
                    <hr />
                </div>
                <div className="login_with">
                    <img
                        src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                        alt=""
                    />
                    <p>Đăng nhập bằng Google</p>
                </div>
                <div className="login_with">
                    <img
                        src="	https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                        alt=""
                    />
                    <p>Đăng nhập bằng Zalo</p>
                </div>
                <div className="signup">
                    <p>
                        Bạn chưa có tài khoản ? <Link className=' text-btnYellow' to="/register">Đăng ký ngay</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default Mylogin;
