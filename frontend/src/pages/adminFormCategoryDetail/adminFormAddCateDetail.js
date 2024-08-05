import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import Inputform from "../../components/inputForm";
import Textareaform from "../../components/textareaForm";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { categoryAdd, getCategoryId, categoryUpdate, deleteCate } from "../../services/serviceProducts";
import { useNavigate, useParams } from "react-router-dom";
import { setNotification } from "../../actions/actions";
import { useDispatch } from "react-redux";


// Define schema outside of the component
const schemaValidation = yup.object({
    namecategory: yup.string().required("Tên danh mục là bắt buộc"),
    description: yup.string(),
}).required();

const AdminFormCateId = () => {
    const [file, setFile] = useState(null);
    const [cateId, setCateId] = useState(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { id } = useParams();

    const {
        handleSubmit,
        formState: { errors },
        control,
        register,
        setValue
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategoryId(id);
                setCateId(data);

                // Cập nhật giá trị cho các trường nhập liệu
                setValue('namecategory', data.name);
                setValue('description', data.description);

                // Nếu cần xử lý ảnh, bạn có thể thực hiện ở đây
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id, setValue]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        
    };

    const onSubmitHandle = async (data) => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('namecategory', data.namecategory);
        formData.append('description', data.description);
        formData.append('img', file ? file : cateId.img);
            
        try {
            await categoryUpdate(formData); 
            dispatch(setNotification('Cập nhật thành công'));
            navigate('/admin/categories');
            
            console.log('Category updated successfully');
        } catch (error) {
            console.error('Failed to update category:', error);
        }
    };

    const deletecate= async (cateId) => {
        await deleteCate(cateId);
        navigate('/admin/categories');
    }

    return (
        <form className="product-form" onSubmit={handleSubmit(onSubmitHandle)}>
            <div className="form-group flex justify-around">
                <div className="w-1/2 mr-10">
                    <div>
                        <label htmlFor="namecategory">Tên Danh Mục:</label>
                        {errors.namecategory && <p className="text-red">{errors.namecategory.message}</p>}
                        <Inputform
                            name="namecategory"
                            placeholder="Nhập tên danh mục"
                            id="namecategory"
                            control={control}
                            type='text'
                            register={register}
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Hình Ảnh:</label>
                        <input
                            type="file"
                            id="img"
                            name="img"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div>
                        <label htmlFor="description">Mô Tả:</label>
                        <Textareaform
                            id="description"
                            name="description"
                            rows="4"
                            control={control}
                            placeholder='Nhập mô tả danh mục'
                            register={register}
                        />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <button className="btn-form" type="submit">Thêm Danh Mục</button>
                <button className="btn-form-delete float-right mr-5" type="button" onClick={() => deletecate(id)}>Xóa danh mục</button>
            </div>
        </form>
    );
};

export default AdminFormCateId;
