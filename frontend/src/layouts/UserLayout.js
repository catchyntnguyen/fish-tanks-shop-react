import React from 'react';
import Myheader from '../components/header/header';
import Myfooter from '../components/footer/footer';
import '../assets/css/userMain.css';
import { Link } from 'react-router-dom';
// import '../assets/css/userOrderDetail.css'
const UserLayout = ({ children }) => {
    return (
        <>
            <section className="remember_content">
                <nav className="remember_col--left">
                    <ul>
                        <li id="smb_home">
                            <Link to="/user">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-house" />
                                </div>
                                <div className="rmb_text">Trang chủ</div>
                            </Link>
                        </li>
                        <li id="smb_order">
                            <Link to="/user/order">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-list" />
                                </div>
                                <div className="rmb_text">Lịch sử mua hàng</div>
                            </Link>
                        </li>
                        <li id="smb_warranty">
                            <Link to="/smember/warranty">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-shield" />
                                </div>
                                <div className="rmb_text">Tra cứu bảo hành</div>
                            </Link>
                        </li>
                        <li id="smb_gif">
                            <Link to="/smember/gif">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-gift" />
                                </div>
                                <div className="rmb_text">Ưu đãi của bạn</div>
                            </Link>
                        </li>
                        <li id="smb_user">
                            <Link to="/smember/user">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-user" />
                                </div>
                                <div className="rmb_text">Tài khoản của bạn</div>
                            </Link>
                        </li>
                        <li id="smb_feedback">
                            <Link to="/smember/feedback">
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-heart" />
                                </div>
                                <div className="rmb_text">Góp ý - phản hồi</div>
                            </Link>
                        </li>
                        <li id="smb_logout">
                            <a>
                                <div className="rmb_icon">
                                    <i className="fa-solid fa-right-from-bracket" />
                                </div>
                                <div className="rmb_text">Thoát tài khoảng</div>
                            </a>
                        </li>
                    </ul>
                </nav>
                {children}
            </section>
        </>
    );
};

export default UserLayout;
