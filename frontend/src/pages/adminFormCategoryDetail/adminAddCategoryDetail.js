import React, { useState, useEffect } from "react";
import AdminFormCateId from "./adminFormAddCateDetail";
import { useNavigate, useParams } from "react-router-dom";



const AdminCategoryDetail = () => {
    const { id } = useParams();
    return (
        <>
            <h2>CHI TIẾT DANH MỤC</h2>
            <AdminFormCateId id={id} ></AdminFormCateId>
        </>
    );
};

export default AdminCategoryDetail;