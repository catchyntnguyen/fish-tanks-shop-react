import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUserReducer, setQuantity } from '../../actions/actions';
import { useJwt } from "react-jwt";

const Myheader = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const [keywords, setKeywords] = useState(''); 
    const [isActive, setIsActive] = useState(false);
    const token = localStorage.getItem('token'); 
    const user = useSelector(state => state.user);
    const quantity = useSelector(state => state.quantity);
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const { decodedToken, isExpired } = useJwt(token);

    const showUserHeader = user || decodedToken;

    useEffect(() => {
        if (decodedToken && !isExpired) {
            dispatch(setUserReducer(decodedToken));
        }
    }, [decodedToken, isExpired, dispatch]);

    useEffect(() => {
        if (cart) {
            dispatch(setQuantity(cart.length));
        }
    }, [cart, dispatch]);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    const onSearch = () => {
        if (keywords.trim()) {
            navigate(`/search/?keyword=${keywords.trim()}`);
        }
    };


    return (
        <>
            <header className="flex justify-between text-white py-5">
                <div className="header-left flex">
                    <div className="h_left--logo">
                        <div className="logoFishTanks flex border p-1 border-white items-end">
                            <img src="/img/logoAquarium.png" alt="" />
                            <p className="text-2xl">Fish Tanks</p>
                        </div>
                    </div>
                    <div className="h_left--ulli flex items-end">
                        <ul className="flex text-xl ml-5">
                            <li className="mr-3">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className="mr-3">
                                <Link to="/detail">Chi tiết</Link>
                            </li>
                            <li className="mr-3">
                                <a href="">Về chúng tôi</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header-right text-white flex items-center">
                    <div className=' border p-3 rounded cursor-pointer mx-2'>
                        <input className='bg-main text-white focus:outline-none focus:ring-0 focus:shadow-none' type="text" placeholder='Tìm kiếm'
                            name='keywords'
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                        />
                        <i className="fa-solid fa-magnifying-glass"
                            onClick={onSearch}
                        ></i>
                    </div>
                    <div className="cart flex justify-center border p-3 rounded cursor-pointer mx-2">
                        <Link to='/cart'>
                            <span>{quantity}</span> <i className="fa-solid fa-cart-shopping" />
                        </Link>
                    </div>
                    {
                        !showUserHeader ? (
                            <div className="loginWaiting flex justify-center items-center border p-3 rounded cursor-pointer mx-2">
                                <Link to='/login'>Đăng nhập</Link>
                            </div>
                        ) : (
                            <div className='w-56 h-12 border p-3 rounded cursor-pointer mx-2'>
                                <div className="absolute">
                                    <div className={`showUl flex justify-between w-52 relative  items-center cursor-pointer ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
                                        <div className="">
                                            {showUserHeader.userName}
                                        </div>
                                        <i className={`fa-solid fa-chevron-${isActive ? 'up' : 'down'}`} />
                                    </div>
                                    <ul className={`Ul mx-5 mb-5 bg-white text-main px-2 relative top-3 right-4 rounded w-52 leading-9 h-20 z-10 Ulan ${isActive ? 'active' : ''}`}>
                                        <li className='hover:border-b'><Link to='/user'>Thông tin của bạn</Link></li>
                                        {decodedToken && decodedToken.role === 1 && (
                                            <li className='hover:border-b'><Link to='/admin'>Admin</Link></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </header>
        </>
    );
}

export default Myheader;
