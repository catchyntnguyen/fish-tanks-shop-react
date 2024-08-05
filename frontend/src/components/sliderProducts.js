import React from 'react';
import Slider from 'react-slick';
import { Outlet, Link } from "react-router-dom";
import Buttom from './buttomAdd';

const Sliderproducts = ({ object = [] }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    if (object.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Slider {...settings}>
            {object.map((product) => (
                <div key={product.id} className="product text-center inline-block text-white m-2">
                    <div className="imageProducts w-72 bg-blackO">
                        <Link to={'detail/' + product.id}>
                            <img
                                className="m-auto h-48"
                                src={`/img/products/${product.img}`}
                                alt={product.name}
                            />
                        </Link>
                    </div>
                    <hr />
                    <p className="text-wrap h-16">{product.name}</p>
                    <p>{(Number(product.priceOld)).toLocaleString()} VND</p>
                        <Buttom idproduct={product.id}>
                        </Buttom>
                </div>
            ))}
        </Slider>
    );
}

export default Sliderproducts;
