import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { getProductsDetail, getImage, getConfig, getCategories, getOptionDetail, getProductsCate } from '../../services/serviceProducts';
import ProductDetailItem from '../../components/ProductDetailItem';
import { Outlet, Link } from "react-router-dom";

const Mydetail = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [products, setProducts] = useState([]);
    const [optionDetail, setOptionDetail] = useState(null);
    const [productsCate, setProductsCate] = useState(null);
    const [images, setImages] = useState(null);
    const [config, setConfig] = useState(null);
    const [categories, setCategories] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchProducts = await getProductsDetail(id);
                const fetchImages = await getImage(id);
                const fetchConfig = await getConfig(id);
                const fetchCategories = await getCategories();
                const fetchOptionDetail = await getOptionDetail(id);
                const fetchProductsCate = await getProductsCate(1);

                setProducts(fetchProducts);
                setImages(fetchImages);
                setConfig(fetchConfig);
                setCategories(fetchCategories);
                setOptionDetail(fetchOptionDetail);
                setProductsCate(fetchProductsCate);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [id]);
    if (!products || !images || !config) {
        return <section className="dots-container mt-10">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </section>;
    }
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

    let category = categories.find((category) => category.id === products.categories);
    const slideImage = images;
    const { color, spill, aquafilter, tanklid, base } = optionDetail;
    let shape = ''
    if (products.categories === 1) {
        shape = config[0].shape === '1' ? 'chữ nhật' : config[0].shape === '2' ? 'Vuông' : config[0].shape === '3' ? 'Hình trụ' : 'khác';
    }
    return (
        <>
            <div className="text-white py-1 border-b mb-3 text-xl">
                <h1 className="NameProduct">{products.name}</h1>
            </div>
            <section className="content grid grid-cols-12 gap-6">
                <div className="col-span-6 min-h-96 ">
                    {/* <div className="bg-blackO min-h-96 flex justify-center items-center text-white"> */}
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        {slideImage.map((image) => (
                            <div key={image.id} className="">
                                <img
                                    className="w-96 m-auto"
                                    src={`/img/products/${image.img_url}`}
                                    alt=""
                                />
                            </div>
                        ))}
                    </Slider>

                    {/* </div> */}

                    <div className="mt-5 bg-blackO p-2">
                        <Slider
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                        >
                            {slideImage.map((image) => (
                                <div key={image.id} className="">
                                    <img
                                        className="m-auto w-28"
                                        src={`/img/products/${image.img_url}`}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <ProductDetailItem
                        title="THÔNG TIN CHI TIẾT SẢN PHẨM"
                        content={products.description}
                    />
                    <ProductDetailItem
                        title="ĐẢM BÁO VẬN CHUYỂN AN TOÀN"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia ipsum culpa labore, laborum iusto veniam dolorum vero nemo ipsa. Explicabo fugiat sint in tempore rerum error modi eaque. Tempora."
                    />
                    <ProductDetailItem
                        title="BẢO HÀNH CHO BẠN"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia ipsum culpa labore, laborum iusto veniam dolorum vero nemo ipsa. Explicabo fugiat sint in tempore rerum error modi eaque. Tempora."
                    />
                </div>
                <div className="col-span-6 min-h-9 text-white leading-10">
                    <div>
                        <h1>Product Details</h1>
                        <div className="mb-10">
                            <p className="text-3xl">{products.name}</p>
                        </div>
                        {products.categories === 1 && (
                            <div>

                                <p>Thể tích: {config[0]?.gallons} lít</p>
                                <p>Kích thước: {config[0]?.length} cm x {config[0]?.width} cm x {config[0]?.height} cm</p>
                                <p>Kiểu dáng: {category?.name}</p>
                                <p>Hình dạng: {shape}</p>
                                <p>Chất liệu bể: {config[0]?.material}</p>
                                <p>Mã sản phẩm: {products.id}</p>
                            </div>
                        )}
                        {/* Render các thành phần khác */}
                    </div>
                    <div>
                        <div id="opColor" className={color !== 1 ? 'hidden' : ''}>
                            <div className="flex items-center" >
                                <p className="uppercase mr-5 w-36">Màu sắc</p>
                                <div className=" p-2" >
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-main border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Clear</option>
                                            <option>Black (+$385.00)</option>
                                            <option>Blue (+$385.00)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                            <i className="fa-solid fa-chevron-down " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div id="opSpill" className={spill !== 1 ? 'hidden' : ''}>
                            <div className="flex items-center" >
                                <p className="uppercase mr-5 w-36">Tùy chọn tràn</p>
                                <div className=" p-2" >
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-main border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Clear</option>
                                            <option>Black (+$385.00)</option>
                                            <option>Blue (+$385.00)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                            <i className="fa-solid fa-chevron-down " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div id="opaquafilter" className={aquafilter !== 1 ? 'hidden' : ''}>
                            <div className="flex items-center" >
                                <p className="uppercase mr-5 w-36">Hệ thông lọc</p>
                                <div className=" p-2" >
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-main border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Clear</option>
                                            <option>Black (+$385.00)</option>
                                            <option>Blue (+$385.00)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                            <i className="fa-solid fa-chevron-down " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div id="optanklid" className={tanklid !== 1 ? 'hidden' : ''}>
                            <div className="flex items-center" >
                                <p className="uppercase mr-5 w-36">Nắp bể</p>
                                <div className=" p-2" >
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-main border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Clear</option>
                                            <option>Black (+$385.00)</option>
                                            <option>Blue (+$385.00)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                            <i className="fa-solid fa-chevron-down " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div id="opbase" className={base !== 1 ? 'hidden' : ''}>
                            <div className="flex items-center" >
                                <p className="uppercase mr-5 w-36">Chân đế hồ</p>
                                <div className=" p-2" >
                                    <div className="inline-block relative w-64">
                                        <select className="block appearance-none w-full bg-main border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option>Clear</option>
                                            <option>Black (+$385.00)</option>
                                            <option>Blue (+$385.00)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                            <i className="fa-solid fa-chevron-down " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div>
                            <hr style={{ borderStyle: "dashed" }} />
                            <div className="flex items-center">
                                <p className="uppercase mr-5 w-36">Số lượng</p>
                                <div className=" p-2">
                                    <form className="max-w-xs mx-auto">
                                        <div className="relative flex items-center">
                                            <button
                                                type="button"
                                                id="decrement-button"
                                                data-input-counter-decrement="counter-input"
                                                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300  h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 18 2"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M1 1h16"
                                                    />
                                                </svg>
                                            </button>
                                            <input
                                                type="text"
                                                id="counter-input"
                                                data-input-counter=""
                                                className="bg-main flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-xl font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                                placeholder=""
                                                defaultValue={1}
                                                required=""
                                            />
                                            <button
                                                type="button"
                                                id="increment-button"
                                                data-input-counter-increment="counter-input"
                                                className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300  h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 18 18"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 1v16M1 9h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr style={{ borderStyle: "dashed" }} />
                        </div>
                        <div className="total text-center flex text-3xl my-2 text-btnYellow mt-5">
                            <h1 className="mr-5 ">Tổng giá trị sản phẩm:</h1>
                            <p>{(products.priceOld).toLocaleString()} VND</p>
                        </div>
                        <hr style={{ borderStyle: "dashed" }} />
                        <div className="h-32 w-full my-2">
                            <div className="flex h-1/2 gap-2">
                                <div className="bg-fishtank w-8/12 flex justify-center items-center text-2xl cursor-pointer">
                                    <p className="mr-2">Thêm vào giỏ hàng </p>
                                    <i className="fa-solid fa-cart-plus" />
                                </div>
                                <div className="bg-fishtank w-4/12 flex justify-center items-center text-2xl cursor-pointer">
                                    <p className="mr-2">Yêu thích</p>{" "}
                                    <i className="fa-regular fa-heart" />
                                </div>
                            </div>
                            <div className="bg-fishtank h-1/2 w-full mt-2 flex justify-center items-center text-2xl cursor-pointer hover:text-color7">
                                <p className="uppercase">Thanh toán ngay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Slider {...settings}>
                {productsCate.map((product) => (
                    <div key={product.id} className="product text-center inline-block text-white m-2">
                        <div className="imageProducts w-72 bg-blackO">
                            <Link to={'detail/' + product.id}>
                                <img
                                    className="m-auto"
                                    src={`/img/products/${product.img}`}
                                    alt={product.name}
                                />
                            </Link>
                        </div>
                        <hr />
                        <p className="text-wrap h-16">{product.name}</p>
                        <p>{(Number(product.priceOld)).toLocaleString()} VND</p>
                        <button className="btn bg-btnYellow text-white flex justify-center items-center m-auto  ">
                            <p className="mr-1 font-bold"> Thêm vào giỏ hàng </p>
                            <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                                <i className="fa-solid fa-plus" />
                            </div>
                        </button>
                    </div>
                ))}
            </Slider> */}
        </>
    );
}

export default Mydetail;
