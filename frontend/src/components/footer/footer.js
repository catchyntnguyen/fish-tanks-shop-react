import React from 'react';
class Myfooter extends React.Component {
    render() {
        return (
            <>
                <footer className=" w-full h-96 mt-5">
                    <div className="my-0 mx-36 ">
                        <div className="footerHaven inline-block mt-5">
                            <div className="logoFishTanks flex text-white p-1 items-end">
                                <img
                                    className="mr-5"
                                    src="../src/public/assets/img/logoAquarium.png"
                                    alt=""
                                />
                                <p className="text-2xl">Fish Tanks</p>
                            </div>
                        </div>
                        <div className="footerUnder flex mt-5">
                            <div className="text-white flex">
                                <ul className="leading-9 mr-28">
                                    <h1 className="uppercase">fish Tanks</h1>
                                    <li>
                                        <a href="">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="">Cửa hàng</a>
                                    </li>
                                    <li>
                                        <a href="">Liên hệ</a>
                                    </li>
                                    <li>
                                        <a href="">Về chúng tôi</a>
                                    </li>
                                </ul>
                                <ul className="leading-9 mr-28">
                                    <h1 className="uppercase">Hỗ trợ từ chúng tôi</h1>
                                    <li>
                                        <a href="">Hướng dẫn xây dựng</a>
                                    </li>
                                    <li>
                                        <a href="">Đăng ký thành viên</a>
                                    </li>
                                    <li>
                                        <a href="">Thanh toán và giao hàng</a>
                                    </li>
                                </ul>
                                <ul className="leading-9 mr-28">
                                    <h1 className="uppercase">Xã hội</h1>
                                    <li>
                                        <a href="">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="">Zalo</a>
                                    </li>
                                    <li>
                                        <a href="section1">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-white w-96">
                                <h1 className="uppercase">Liên hệ ngay</h1>
                                <ul className="leading-9 ">
                                    <li>
                                        <i className="fa-solid fa-phone mr-2" />
                                        +84 348378112
                                    </li>
                                    <hr />
                                    <li>
                                        <i className="fa-solid fa-map mr-2" />
                                        Ấp Chợ Xếp xã Tân Thành Bình Mỏ Cày Bắc tỉnh Bến Tre
                                    </li>
                                </ul>
                                <h1 className="text-2xl float-end">Catchy | CEO FISH TANK</h1>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
export default Myfooter;