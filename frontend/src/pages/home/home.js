import React, { useEffect, useState } from 'react';
import { getProducts, getImage, getProductsCate } from '../../services/serviceProducts';
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";
import Sliderproducts from '../../components/sliderProducts';
import Notification from "../../components/pouperror";
import { useSelector } from 'react-redux';

const Myhome = () => {
    const [products, setProducts] = useState([]);
    const [productsCate1, setProductsCate1] = useState([]);
    const [productsCate2, setProductsCate2] = useState([]);
    const [productsCate3, setProductsCate3] = useState([]);
    const [images, setImages] = useState([]);
    const [limitProductAqua, setLimitProductAqua] = useState([]);
    const notification = useSelector(state => state.notification);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchProducts = await getProducts();
                const fetchImages = await getImage();
                const fetchProductsCate1 = await getProductsCate(1);
                const fetchProductsCate2 = await getProductsCate(2);
                const fetchProductsCate3 = await getProductsCate(3);
                setProducts(fetchProducts);
                setImages(fetchImages);
                setProductsCate1(fetchProductsCate1);
                setProductsCate2(fetchProductsCate2);
                setProductsCate3(fetchProductsCate3);


                const limitedProducts = fetchProductsCate3.slice(0, 6);
                setLimitProductAqua(limitedProducts);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchData();
    }, []);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let productsHot = products.filter((p) => p.producthot === 1);


    return (
        <>
         {notification ? <Notification message={notification}></Notification>: null}
            {/* <div>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div> */}
            <section className="grid grid-cols-5 gap-2 ">
                <nav className="">
                    <ul className="bg-white h-full p-4 leading-9 ">
                        <li
                            style={{ display: "flex" }}
                            className="nav w-full mb-2 justify-between items-center"
                        >
                            <div>
                                <Link to="category/fishtank/all" className="flex items-center">
                                    <div className="nav_icon w-10 border-t border-l border-r mr-4">
                                        <img src="/img/image_6.png" alt="" />
                                    </div>
                                    <div className="nav_text text-lg font-bold">Hồ cá</div>
                                </Link>
                            </div>
                            <div>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            <div className="divHover absolute hidden">
                                <div className="absolute left-52  z-10 w-60 min-h-24 bg-fishtank p-3 shadow-xl text-white">
                                    <ul className="space-y-3">
                                        <li className=" hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Hồ cá theo hãng</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Aquarium</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Hồ cá theo thể tích</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Hồ cá theo hình dạng</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            style={{ display: "flex" }}
                            className="nav w-full mb-2 justify-between items-center"
                        >
                            <div>
                                <a href="" className="flex items-center">
                                    <div className="nav_icon w-10 border-t border-l border-r mr-4">
                                        <img src="/img/image18.png" alt="" />
                                    </div>
                                    <div className="nav_text text-lg font-bold">Thiết bị bể cá</div>
                                </a>
                            </div>
                            <div>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            <div className="divHover absolute hidden">
                                <div className="absolute left-52  z-10 w-60 min-h-24 bg-fishtank p-3 shadow-xl text-white">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Lọc bể cá</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Máy bớm bể cá</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full'>
                                                <div>Chiếu sáng bể cá</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div></a>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <a href="" className='flex justify-between w-full '>
                                                <div>Máy tiệt trùng tia cực tím</div>
                                                <div>
                                                    <i className="fa-solid fa-chevron-down" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            style={{ display: "flex" }}
                            className="nav w-full mb-2 justify-between items-center"
                        >
                            <div>
                                <a href="" className="flex items-center">
                                    <div className="nav_icon w-10 border-t border-l border-r mr-4">
                                        <img src="/img/image17.png" alt="" />
                                    </div>
                                    <div className="nav_text text-lg font-bold">Phụ kiên bể cá</div>
                                </a>
                            </div>
                            <div>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            <div className="divHover absolute hidden">
                                <div className="absolute left-52  z-10 w-60 min-h-24 bg-fishtank p-3 shadow-xl text-white">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li
                            style={{ display: "flex" }}
                            className="nav w-full mb-2 justify-between items-center"
                        >
                            <div>
                                <a href="" className="flex items-center">
                                    <div className="nav_icon w-10 border-t border-l border-r mr-4">
                                        <img src="/img/image15.png" alt="" />
                                    </div>
                                    <div className="nav_text text-lg font-bold">Vật dụng bể cá</div>
                                </a>
                            </div>
                            <div>
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            <div className="divHover absolute hidden">
                                <div className="absolute left-52  z-10 w-60 min-h-24 bg-fishtank p-3 shadow-xl text-white">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                        <li className="flex justify-between hover:underline cursor-pointer">
                                            <div>Hồ cá set up cho nhà</div>
                                            <div>
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="col-start-2 col-end-6 box-border grid grid-cols-2 grid-rows-5 gap-2">
                    <div className=" p-2 rounded row-start-1 row-end-4 col-span-full">
                        {/* <div className="image-silder flex justify-center"> */}
                        <Slider arrows={false} >
                            <div className="image-item w-img ">
                                <img
                                    className=" w-full h-full object-cover w-img m-auto"
                                    src="https://i.pinimg.com/564x/6c/d9/4b/6cd94bee1de9657bc44439d247658d68.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="image-item w-img">
                                <img
                                    className=" w-full h-full object-cover w-img m-auto"
                                    src="https://i.pinimg.com/564x/ce/4c/bb/ce4cbb9ce371a351d4dc13182f932589.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="image-item w-img">
                                <img
                                    className=" w-full h-full object-cover w-img m-auto"
                                    src="https://i.pinimg.com/564x/2b/47/76/2b477684472a1fe761166b82b524e65e.jpg"
                                    alt=""
                                />
                            </div>
                        </Slider>
                        {/* </div> */}
                    </div>
                    <div className="row-start-4 row-end-6 rounded relative  ">
                        <img className="img-smail h-full w-full object-cover m-auto rounded" src="https://i.pinimg.com/736x/17/e3/1e/17e31e094670c834a7b31c09170608be.jpg" alt="" />
                    </div>
                    <div className="row-start-4 row-end-6 rounded relative  ">
                        <img className="img-smail h-full w-full object-cover m-auto rounded" src="https://i.pinimg.com/564x/2d/ac/7b/2dac7b4ff4672fbfd3f6d76039434731.jpg" alt="" />
                    </div>
                </div>
            </section>
            {/* start sản phẩm nổi bật */}
            <section className="mt-5">
                <div className="bg-fishtank p-1 mb-1">
                    <div className="text-3xl text-white border-b inline-block font-bold">
                        Sản phẩm nổi bật
                    </div>
                </div>
                <Sliderproducts
                    object={productsHot}
                ></Sliderproducts>
            </section>
            {/* end sản phẩm nổi bật */}
            {/* start hồ cá */}
            <section className="mt-5">
                <div className="bg-fishtank p-1 mb-1">
                    <div className="text-3xl text-white border-b inline-block font-bold">
                        Hồ Cá
                    </div>
                </div>
                <Sliderproducts
                    object={productsCate1}
                ></Sliderproducts>
            </section>
            {/* end hồ cá */}
            {/* start Hồ tôm kiểng*/}
            <section className="mt-5">
                <div className="bg-fishtank p-1 mb-1">
                    <div className="text-3xl text-white border-b inline-block font-bold">
                        Hồ Tôm Kiểng
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-1 min-h-96">
                    <div className="leftImage col-span-1 bg-white">
                        <img
                            className="h-full"
                            src="/img/image3.png"
                            alt=""
                        />
                    </div>
                    <div className="rightProducts col-span-3 ">
                        {limitProductAqua.map((product) => (
                            <div className="product text-center inline-block text-white my-3 mr-3">
                                <div className="imageProducts w-72 bg-blackO h177">
                                    <Link to={'detail/' + product.id}>
                                        <img
                                            className="m-auto h-44"
                                            src={`/img/products/${product.img}`}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <hr />
                                <p className="text-wrap h-16 w-72">{product.name}</p>
                                <p>{(Number(product.priceOld)).toLocaleString()} VND</p>
                                <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto">
                                    <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                                    <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                        <i className="fa-solid fa-plus" />
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* end Hồ tôm kiểng*/}
            {/* start Phụ kiện hồ cá */}
            <section className="mt-5">
                <div className="bg-fishtank p-1 mb-1">
                    <div className="text-3xl text-white border-b inline-block font-bold">
                        {" "}
                        Phụ kiện hồ cá
                    </div>
                </div>
                <Sliderproducts
                    object={productsCate2}
                ></Sliderproducts>
            </section>
            {/* end sản phẩm nổi bật */}
            {/* start dịch vụ chúng tôi */}
            <section className="mt-5">
                <div className="flex justify-center">
                    <div className="service-header border-b text-3xl font-bold text-white pb-1">
                        Dịch vụ chúng tôi
                    </div>
                </div>
                <div className="service-body grid grid-cols-4 grid-rows-2 gap-2 mt-5">
                    <div className="col-span-2 row-span-1 bg-fishtank rounded p-4 flex justify-around items-center">
                        <div className="h-24 w-24 rounded-full bg-white">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="/img/image3.png"
                                alt=""
                            />
                        </div>
                        <div className="w-96">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                iusto natus suscipit a, ipsum repellendus magni ipsa molestias
                                blanditiis facere. Quae provident labore rerum doloremque non enim?
                                Nihil, omnis dicta!
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 bg-color6 rounded p-4 flex justify-around items-center">
                        <div className="h-24 w-24 rounded-full bg-white">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="/img/image3.png"
                                alt=""
                            />
                        </div>
                        <div className="w-96">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                iusto natus suscipit a, ipsum repellendus magni ipsa molestias
                                blanditiis facere. Quae provident labore rerum doloremque non enim?
                                Nihil, omnis dicta!
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 bg-color6 rounded p-4 flex justify-around items-center">
                        <div className="h-24 w-24 rounded-full bg-white">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="/img/image3.png"
                                alt=""
                            />
                        </div>
                        <div className="w-96">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                iusto natus suscipit a, ipsum repellendus magni ipsa molestias
                                blanditiis facere. Quae provident labore rerum doloremque non enim?
                                Nihil, omnis dicta!
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 bg-fishtank rounded p-4 flex justify-around items-center">
                        <div className="h-24 w-24 rounded-full bg-white">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="/img/image3.png"
                                alt=""
                            />
                        </div>
                        <div className="w-96">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                iusto natus suscipit a, ipsum repellendus magni ipsa molestias
                                blanditiis facere. Quae provident labore rerum doloremque non enim?
                                Nihil, omnis dicta!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end dịch vụ chúng tôi */}

        </>
    );

}

export default Myhome;
