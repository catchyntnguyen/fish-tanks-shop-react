import React from "react";
import { setUserReducer } from "../../actions/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        dispatch(setUserReducer(null));
        navigate('/')
    };
    return (

        <>
            <aside className="main-sidebar">
                {/* brand logo */}
                <div className="brand-logo--main">
                    <div className="brand-logo" />
                    <div className="brand-name">
                        <h3>Name Brand</h3>
                    </div>
                </div>
                <div className="sidebar-content">
                    {/* admin user */}
                    <div className="admin-logo--main">
                        <div className="admin-logo">
                            <img
                                src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/376263580_122101838552034514_832502286484657760_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yKT6vSAmIG4AX82jFGF&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfDwikaIBHU6U4IorjLZomUyIBmKqD509SzCxJiw0b8o-Q&oe=65BE7700"
                                alt=""
                            />
                        </div>
                        <div className="admin-name">
                            <h4>Nguyễn Trần Khắc Duy</h4>
                        </div>
                    </div>
                    <div className="">
                        <Link className="nav-item--single " to='/admin'>
                            <div className="item-icon">
                                <i className="fa-solid fa-house" />
                            </div>
                            <div className="item-name--single">Trang chủ</div>
                            <div className="item-arow--single">
                                <i className="fas fa-chevron-left" />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link className="nav-item--single " to='/admin/categories'>
                            <div className="item-icon">
                                <i className="fas fa-clipboard-list" />
                            </div>
                            <div className="item-name--single">Danh mục</div>
                            <div className="item-arow--single">
                                <i className="fas fa-chevron-left" />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link className="nav-item nav-item--animation" to='/admin/products'>
                            <div className="item-icon">
                                <i className="fab fa-product-hunt" />
                            </div>
                            <div className="item-name">Sản phẩm</div>
                            <div className="item-arow">
                                <i className="fas fa-chevron-left" />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <div className="nav-item--single ">
                            <div className="item-icon">
                                <i className="fas fa-shopping-cart" />
                            </div>
                            <div className="item-name--single">Đơn hàng</div>
                            <div className="item-arow--single">
                                <i className="fas fa-chevron-left" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="nav-item--single ">
                            <div className="item-icon">
                                <i className="fa-solid fa-comment" />
                            </div>
                            <div className="item-name--single">Bình Luận</div>
                            <div className="item-arow--single">
                                <i className="fas fa-chevron-left" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-item--bottom" onClick={logout}>
                    <div className="item-name">Đăng xuất</div>
                    <div className="item-out">
                        <i className="fa-solid fa-arrow-right-from-bracket" />
                    </div>
                </div>
            </aside>
            <nav className="main-header">
                <ul className="nav-left">
                    <li>
                        <i className="fas fa-bars" />
                    </li>
                    <li>
                        <a href="">Trang chủ</a>
                    </li>
                    <li>
                        <a href="">Liên hệ</a>
                    </li>
                </ul>
                <ul className="nav-right">
                    <li>
                        <i className="fas fa-search" />
                    </li>
                    <li>
                        <i className="fas fa-comments" />
                    </li>
                    <li>
                        <i className="fas fa-bell" />
                    </li>
                    <li>
                        <i className="fas fa-border-all" />
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default AdminHeader;