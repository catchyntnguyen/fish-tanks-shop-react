import React, { useEffect, useState } from "react";
import { getProducts, getBrands, getCategories } from "../../services/serviceProducts";
import { Link } from "react-router-dom";

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
                const brands = await getBrands();
                setBrands(brands);
                const categories = await getCategories();
                setCategories(categories);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
    const NameBrand = (id) => {
        const [namecate] = brands.filter(i => i.id == id);
        return namecate?.name || 'Không có'; 
      };
    const NameCate = (id) => {
        const [namecate] = categories.filter(i => i.id == id);
        return namecate?.name || 'Không có'; 
      };
      
    return (
        <>
            <h2>TRANG SẢN PHẨM</h2>
            <Link className="filter" to='/admin/product/add'>
                <div className="filter-item">Thêm sản phẩm</div>
                <div className="filter-item" id="drop">
                    Lọc <i className="fa-solid fa-caret-down" />
                </div>
            </Link>
            <div className="popup_list slide-left" id="drop_list">
                <ul>
                    <li>
                        <a href="">Mới Nhất</a>
                    </li>
                    <li>
                        <a href="">Cũ Nhất</a>
                    </li>
                    <li>
                        <a href="">DM nhiều SP</a>
                    </li>
                    <li>
                        <a href="">DM ít SP</a>
                    </li>
                </ul>
            </div>
            <table className="table-category">
                <thead>
                    <tr>
                        <th>ID Danh Mục</th>
                        <th>Hình</th>
                        <th className="w-[200px]">Tên Sản Phẩm</th>
                        <th>Danh Mục</th>
                        <th>Nhãn hàng</th>
                        <th>Số Lượng SP</th>
                        <th>Sản Phẩm Nổi bật</th>
                        <th>Khác</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td className="img-td">
                                    <img
                                        src={`/img/products/${product.img}`}
                                        alt={product.name}
                                    />
                                </td>
                                <td>{product.name}</td>
                                <td >
                                    {NameCate(product.brandId)}
                                </td>
                                <td >
                                    {NameBrand(product.brandId)}
                                </td>
                                <td>{product.quantity}</td>
                                <td>{product.producthot == 1 ? 'Yes' : 'No' }</td>
                                <td>
                                    <Link to={`/admin/product/${product.id}`}>Chi Tiết</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Không có sản phẩm</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default AdminProducts;
