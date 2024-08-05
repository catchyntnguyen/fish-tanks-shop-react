import React, { useEffect, useState } from 'react';
import { getBrands, getProductsByQuery, getProducts } from '../../services/serviceProducts';
import { useSearchParams, Link } from 'react-router-dom';
import ProductDetailItem from '../../components/ProductDetailItem';

const Mysearch = () => {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchBrands = await getBrands();
                const fetchgetProducts = await getProducts();
                setBrands(fetchBrands);
                if (keyword) {
                    const fetchProducts = await getProductsByQuery(keyword);
                    setProducts(fetchProducts);
                } else {
                    setProducts(fetchgetProducts);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [keyword]);
    // console.log(products);

    return (
        <section className="content grid grid-cols-4 gap-2">
            <nav className="col-span-1 min-h-96 text-white leading-9">
                <div className="mb-5">
                    <hr />
                    <ul className="my-5 mx-5">
                        <h1 className='text-2xl text-btnYellow'>Bể cá - Thương hiệu</h1>
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
                        <h1 className='text-2xl text-btnYellow'>Danh mục khác</h1>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Aquarium</Link>
                        </li>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Thiết bị bể cá</Link>
                        </li>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Trang trí bể cá</Link>
                        </li>
                        <li className="text-xl pl-3 hover:bg-fishtank flex item">
                            <Link to="">Thiết bị bể cá</Link>
                        </li>
                    </ul>
                    <hr />
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
                <div className="mb-5">
                    <ProductDetailItem
                        title="Hình dạng bể"
                        content={
                            <>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hình chữ nhật</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hình chữ vuông</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hình chữ trụ</Link>
                                </li>
                                <li className="text-xl pl-3 hover:bg-fishtank flex item">
                                    <Link to="">Hình chữ lục giác</Link>
                                </li>
                            </>
                        }
                    />
                </div>
                <div className="mb-5">
                    <ProductDetailItem
                        title="Custom theo yêu cầu "
                        content={
                          <>
                            <p> liên hệ : 0348378112</p>
                            <p> Địa chỉ : Ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc - BT</p>
                          </>
                        }
                    />
                </div>
            </nav>
            <div className="col-span-3 min-h-96">
                <section className="mt-5">
                    <div className=" flex flex-wrap">
                        {products.length > 0 ? products.map((product, index) => (
                            <div className="product text-center inline-block text-white m-1 mt-4">
                                <div className="imageProducts w-72 bg-blackO h177">
                                    <Link to={'/detail/' + product.id}>
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
                        )) : <p className='text-3xl m-auto text-white'>Không tìm thấy sản phẩm '{keyword}'.</p>}
                    </div>
                </section>
                {/* <section className="dots-container mt-10">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </section> */}
            </div>
        </section>

    );
}

export default Mysearch;
