import React from "react";
import { getProductsDetail } from "../services/serviceProducts";
import { useDispatch } from 'react-redux';
import { setQuantity } from '../actions/actions';


const Button = ({ idproduct }) => {
    const cart = [];
    const dispatch = useDispatch();
    const buttonAdd = async () => {
        let quantity = 0;
        try {
            const product = await getProductsDetail(idproduct);
            // lấy cart nếu không sản phẩm trong cả thì gáng bằng mảng rỗng
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            // có hay không thì vẫn đẩy sản phẩm vào cart
            if (cart.length > 0) {
                const check = cart.some(i => i.id == idproduct);
                if (check) {
                    const productInCart = cart.find(item => item.id === idproduct);
                    if (productInCart) {
                        productInCart.soluong = (productInCart.soluong || 1) + 1;
                    } else {
                        product.soluong = 1;
                        cart.push(product);
                    }
                }
                else {
                    product.soluong = 1;
                    cart.push(product);
                }
            } else {
                product.soluong = 1;
                cart.push(product);
            }
            sessionStorage.setItem('cart', JSON.stringify(cart));
            quantity = cart.length;
            dispatch(setQuantity(quantity));
        } catch (error) {
            console.error("Error fetching product details:", error);
        }

    };

    return (
        <button
            className="btn bg-btnYellow text-white flex justify-center items-center m-auto"
            onClick={buttonAdd}
        >
            <p className="mr-1 font-bold">Thêm vào giỏ hàng</p>
            <div className="border rounded-full p-1 h-6 w-6 flex justify-center items-center">
                <i className="fa-solid fa-plus" />
            </div>
        </button>
    );
};

export default Button;
