import React, { useState, useEffect } from "react";
import '../../assets/js/main';
import { getCategories } from "../../services/serviceProducts";
import { useDispatch } from 'react-redux';
import { setQuantity, setTotalCart } from '../../actions/actions';

const ListProduct = () => {
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchCate = await getCategories();
                setCategory(fetchCate);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const getCate = (idcate) => {
        const nameCate = category.find((c) => c.id === idcate);
        return nameCate ? nameCate.name : 'Shop';
    };

    const deleteItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        const quantity = JSON.parse(sessionStorage.getItem('cart')).length;
        dispatch(setQuantity(quantity));
    };

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        updatedCart[index].soluong = quantity;
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        totalCart();
    };
    
    const totalCart = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.priceOld * item.soluong;
        });
        dispatch(setTotalCart(total));
    }

    totalCart();

    const incrementQuantity = (index) => {
        const newQuantity = cart[index].soluong + 1;
        updateQuantity(index, newQuantity);
    };

    const decrementQuantity = (index) => {
        const newQuantity = cart[index].soluong - 1;
        if (newQuantity > 0) {
            updateQuantity(index, newQuantity);
        }
    };


    return (
        <>
            {cart.map((item, index) => (
                <div key={index} className="text-white border-b pb-2 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="bg-blackO w-32 h-36 mr-3">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`/img/products/${item.img}`}
                                    alt={item.name}
                                />
                            </div>
                            <div>
                                <h3 className="uppercase">{item.name}</h3>
                                <p>
                                    Danh mục: <span>{getCate(item.categories)}</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>
                                Giá: <span>{Number((item.priceOld) * item.soluong).toLocaleString()} VND</span>
                            </p>
                        </div>
                        <div className="flex w-60 justify-between">
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <form className="max-w-xs mx-auto">
                                            <div className="relative flex items-center">
                                                <button
                                                    type="button"
                                                    onClick={() => decrementQuantity(index)}
                                                    className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                                                    className="bg-main flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-xl font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                                                    value={item.soluong || 1}
                                                    readOnly
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => incrementQuantity(index)}
                                                    className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
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
                            </div>
                            <div className="cursor-pointer" onClick={() => deleteItem(index)}>
                                <i className="fa-solid fa-xmark" />
                            </div>
                        </div>
                    </div>
                    <div className="detailproductcart">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium ut mollitia id ipsam dignissimos omnis eius, nulla quasi necessitatibus optio modi suscipit atque eum magni explicabo. Odio, illum sapiente?
                    </div>
                    <div className="flex justify-center btnDetailproductcart">
                        <div>
                            <i className="fa-solid fa-chevron-down cursor-pointer relative hover:top-1" />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ListProduct;
