import React, { useEffect, useState } from 'react';
import { getBrands } from '../../services/serviceProducts';
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";
import ProductDetailItem from '../../components/ProductDetailItem';

const Mycategory = () => {
    const [brands, setBrands] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchBrands = await getBrands();
                setBrands(fetchBrands);
                // console.log(fetchBrands);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(brands);
    return (
        <section className="content grid grid-cols-4 gap-2">
            <nav className="col-span-1 min-h-96 text-white leading-9">
                <div className="mb-5">
                    <hr />
                    <ul className="my-5 mx-5">
                        <h1 className='text-2xl text-btnYellow'>Nhãn hàng </h1>
                        {brands.map((br) => (
                            <li key={br.id} className="text-xl pl-3 hover:bg-fishtank flex item">
                                <Link to="">{br.name}</Link>
                            </li>
                        ))}

                    </ul>
                    <hr />
                </div>
                <div className="mb-5">
                    {/* <hr /> */}
                    <ul className="my-5 mx-5">
                        <h1 className='text-2xl text-btnYellow'>Hình dạng hồ </h1>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Hình chữ nhật</Link>
                        </li>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Hình chữ vuông</Link>
                        </li>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Hình chữ lục giác</Link>
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="mb-5">
                    <ProductDetailItem
                        title="Theo kích thước hồ"
                        content={
                            <>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size lớn (---)</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size trung(50x30x30cm)</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size mini (40x25x25cm)</Link>
                                </li>
                            </>
                        }
                    />
                </div>
                <div className="mb-5">
                    <ProductDetailItem
                        title="Theo dung tích hồ"
                        content={
                            <>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size lớn ( lớn hơn 80 lít)</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size trung(40-60 lít)</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hồ size mini (20-30 lít)</Link>
                                </li>
                            </>
                        }
                    />
                </div>
                <div className="mb-5">
                    <ProductDetailItem
                        title="Theo giá thành"
                        content={
                            <>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">800,000 - 1,200,000 VNĐ</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">1,200,000 - 2,000,000 VNĐ</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to=""> {'>'} 2,000,000 VNĐ</Link>
                                </li>
                            </>
                        }
                    />
                </div>
            </nav>
            <div className="col-span-3 min-h-96">
                {/* start sản phẩm nổi bật */}
                <section className="mt-5">
                    <div className=" flex flex-wrap">
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProducts2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProduct1.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProducts2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProduct1.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProducts2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProduct1.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProducts2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                        <div className="product text-center inline-block text-white m-1">
                            <div className="imageProducts w-72 bg-blackO h177">
                                <a href="">
                                    <img
                                        className="m-auto"
                                        src="../src/public/assets/img/imageProduct1.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <hr />
                            <p>Tsunami 800-Gallon</p>
                            <p>120"Lx48"Wx36"H</p>
                            <p>Rectangular Acrylic Aquarium Setup</p>
                            <p>4.000.000</p>
                            <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                                <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                    <i className="fa-solid fa-plus" />
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                {/* end sản phẩm nổi bật */}
                <section className="dots-container mt-10">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </section>
            </div>
        </section>

    );
}

export default Mycategory;
