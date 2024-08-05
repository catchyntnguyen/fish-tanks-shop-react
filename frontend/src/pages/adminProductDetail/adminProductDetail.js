import React, { useState, useEffect } from "react";
import { getBrands, getCategories, getProductsDetail, getImage, productUpdate, deleteProduct } from "../../services/serviceProducts";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminProductDetail = () => {
    const navigate = useNavigate();
    const [cate, setCate] = useState([]);
    const [product, setProduct] = useState({});
    const [brands, setBrands] = useState([]);
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
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
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchcate = await getCategories();
                setCate(fetchcate);
                const fetchBrands = await getBrands();
                setBrands(fetchBrands);
                const fetchProduct = await getProductsDetail(id);
                setProduct(fetchProduct);
                const fetchImages = await getImage(id);
                setImages(fetchImages);

                setFormData({
                    id: id,
                    name: fetchProduct.name,
                    img: '',
                    categories: fetchProduct.categories,
                    brandId: fetchProduct.brandId,
                    quantity: fetchProduct.quantity,
                    priceNew: fetchProduct.priceNew,
                    priceOld: fetchProduct.priceOld,
                    description: fetchProduct.description,
                    producthot: fetchProduct.producthot === 1,
                    buidtime: fetchProduct.buidtime,
                    images: []
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;

        if (type === 'file' && name === 'images') {
            const selectedFiles = Array.from(files);
            setFormData(prevState => ({
                ...prevState,
                images: [...prevState.images, ...selectedFiles],
            }));
        } else if (type === 'file') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0],
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            if (key === 'images') {
                formData.images.forEach(image => data.append('images', image));
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            await productUpdate(data);
            console.log('Product updated successfully');
            navigate('/admin/products');
        } catch (error) {
            console.error('There was an error updating the product:', error);
        }
    };

    const deleteImage = async (imageId) => {
        try {
            // await deleteImage(imageId);
            setImages(prevImages => prevImages.filter(image => image.id !== imageId));
        } catch (error) {
            console.error('Failed to delete image:', error);
        }
    };

    const deleteproduct = async (productId) => {
        await deleteProduct(productId);
        navigate('/admin/products');
    }

    return (
        <>
            <h2>Cập Nhật Sản Phẩm</h2>
            <div className="ml-3">
                <h3>Hình đại diện sản phẩm</h3>
                <div className="flex gap-2 ml-3">
                    <div className="w-24 h-24 bg-blackO p-1">
                        <img className="w-full h-full" src={`/img/products/${product.img}`} alt="" />
                    </div>
                </div>
            </div>
            <div className="ml-3">
                <h3>Hình chi tiết sản phẩm</h3>
                <div className="flex gap-2 ml-3">
                    {images.map((i) => (
                        <div className="w-24 h-24 bg-blackO p-1" key={i.id}>
                            <div className="absolute cursor-pointer" onClick={() => deleteImage(i.id)}> <i className="fa-solid fa-trash relative left-[70px] text-red"></i></div>
                            <img className="w-full h-full" src={`/img/products/${i.img_url}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
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
                        />

                        <label htmlFor="img">Hình Sản Phẩm:</label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            onChange={handleChange}
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
                        >
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
                        >
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
                        />

                        <label htmlFor="priceOld">Giá Cũ:</label>
                        <input
                            type="number"
                            id="priceOld"
                            name="priceOld"
                            value={formData.priceOld}
                            onChange={handleChange}
                        />

                        <label htmlFor="description">Mô Tả:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>

                        <label htmlFor="buidtime">Ngày Sản Xuất:</label>
                        <select
                            id="buidtime"
                            name="buidtime"
                            value={formData.buidtime}
                            onChange={handleChange}
                        >
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
                    <button className="btn-form" type="submit">Cập Nhật Sản Phẩm</button>
                    <button className="btn-form-delete float-right mr-5" type="button" onClick={() => deleteproduct(id)}>Xóa sản phẩm</button>
                </div>
            </form>
        </>
    );
};

export default AdminProductDetail;
