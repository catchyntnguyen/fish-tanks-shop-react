import React, { useState, useEffect } from "react";
import { productAdd, getBrands, getCategories, deleteImage } from "../../services/serviceProducts";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
    const navigate = useNavigate();
    const [cate, setCate] = useState([]);
    const [brands, setBrands] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        img: '',
        categories: '',
        brandId: '',
        quantity: '',
        priceNew: '',
        priceOld: '',
        description: '',
        producthot: false,
        buidtime: '',
        images: []
    });
    const [errors, setErrors] = useState({
        name: false,
        img: false,
        categories: false,
        brandId: false,
        quantity: false,
        priceNew: false,
        priceOld: false,
        description: false,
        buidtime: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchcate = await getCategories();
                setCate(fetchcate);
                const fetchBrands = await getBrands();
                setBrands(fetchBrands);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;

        if (type === 'file' && name === 'images') {
            const selectedFiles = Array.from(files);
            setFormData(prevState => ({
                ...prevState,
                images: [...prevState.images, ...selectedFiles],
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach(key => {
            if (key !== 'images') {
                newErrors[key] = formData[key] === '';
            }
        });

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error);

        if (!hasErrors) {
            const data = new FormData();
            for (const key in formData) {
                if (key === 'images') {
                    formData.images.forEach(image => data.append('images', image));
                } else {
                    data.append(key, formData[key]);
                }
            }

            try {
                const response = await productAdd(data);
                console.log('Product added successfully:', response);
                navigate('/admin/products');
                // Handle the response as needed
            } catch (error) {
                console.error('There was an error uploading the product:', error);
            }
        }
    };

    return (
        <>
            <h2>Thêm sản phẩm</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-group flex justify-around">
                    <div className="w-1/2 mr-10">
                        <label htmlFor="name">Tên Sản Phẩm:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'border-red' : ''}
                        />

                        <label htmlFor="img">Hình Sản Phẩm:</label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            onChange={handleChange}
                            className={errors.img ? 'border-red' : ''}
                            accept="image/*"
                        />

                        <label htmlFor="images">Thêm nhiều ảnh</label>
                        <input
                            type="file"
                            name="images"
                            id="images"
                            multiple
                            onChange={handleChange}
                            accept="image/*"
                        />

                        <label htmlFor="categories">Danh Mục Sản Phẩm:</label>
                        <select
                            id="categories"
                            name="categories"
                            value={formData.categories}
                            onChange={handleChange}
                            className={errors.categories ? 'border-red' : ''}
                        >
                            <option value="">Chọn danh mục</option>
                            {cate.map((i) => (
                                <option key={i.id} value={i.id}>
                                    {i.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="brandId">Thương Hiệu:</label>
                        <select
                            id="brandId"
                            name="brandId"
                            value={formData.brandId}
                            onChange={handleChange}
                            className={errors.brandId ? 'border-red' : ''}
                        >
                            <option value="">Chọn thương hiệu</option>
                            {brands.map((i) => (
                                <option key={i.id} value={i.id}>
                                    {i.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="quantity">Số Lượng Sản Phẩm:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className={errors.quantity ? 'border-red' : ''}
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="priceNew">Giá Mới:</label>
                        <input
                            type="number"
                            id="priceNew"
                            name="priceNew"
                            value={formData.priceNew}
                            onChange={handleChange}
                            className={errors.priceNew ? 'border-red' : ''}
                        />

                        <label htmlFor="priceOld">Giá Cũ:</label>
                        <input
                            type="number"
                            id="priceOld"
                            name="priceOld"
                            value={formData.priceOld}
                            onChange={handleChange}
                            className={errors.priceOld ? 'border-red' : ''}
                        />

                        <label htmlFor="description">Mô Tả:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={errors.description ? 'border-red' : ''}
                            rows="4"
                        ></textarea>

                        <label htmlFor="buidtime">Ngày Sản Xuất:</label>
                        <select
                            id="buidtime"
                            name="buidtime"
                            value={formData.buidtime}
                            onChange={handleChange}
                            className={errors.buidtime ? 'border-red' : ''}
                        >
                            <option value="">Chọn thời gian</option>
                            <option value="0">Đã có sản phẩm</option>
                            <option value="1">1 - 2 Tuần</option>
                            <option value="2">3 - 4 Tuần</option>
                            <option value="3">Hơn 4 Tuần</option>
                        </select>

                        <div className="flex">
                            <label htmlFor="producthot">Sản Phẩm Nổi Bật:</label>
                            <input
                                className="checkbox2"
                                type="checkbox"
                                id="producthot"
                                name="producthot"
                                checked={formData.producthot}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn-form" type="submit">Thêm Sản Phẩm</button>
                </div>
            </form>
        </>
    );
};

export default AdminAddProduct;
