import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Inputform from "../../components/inputForm";
import Textareaform from "../../components/textareaForm";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { categoryAdd } from "../../services/serviceProducts";
import { useNavigate } from "react-router-dom";
import { setNotification } from "../../actions/actions";
import { useDispatch } from "react-redux";

// Define schema outside of the component
const schemaValidation = yup.object({
    namecategory: yup.string().required("Tên danh mục là bắt buộc"),
    description: yup.string(),
}).required();

const AdminFormAddCate = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const navigate = useNavigate()
    const {
        handleSubmit,
        formState: { errors },
        control,
        register,
        setValue
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmitHandle = async (data) => {
        const formData = new FormData();
        formData.append('namecategory', data.namecategory);
        formData.append('description', data.description);
        if (file) {
            formData.append('img', file); 
        }

        try {
            await categoryAdd(formData); 
            dispatch(setNotification('Thêm thành công'));
            navigate('/admin/categories')
            
            console.log('Category added successfully');
        } catch (error) {
            console.error('Failed to add category:', error);
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit(onSubmitHandle)}>
            <div className="form-group flex justify-around">
                <div className="w-1/2 mr-10">
                    <div>
                        <label htmlFor="namecategory">Tên Sản Phẩm:</label>
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
                        <label htmlFor="img">Hình Sản Phẩm:</label>
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
                <button className="btn-form" type="submit">Thêm Sản Phẩm</button>
            </div>
        </form>
    );
};

export default AdminFormAddCate;
