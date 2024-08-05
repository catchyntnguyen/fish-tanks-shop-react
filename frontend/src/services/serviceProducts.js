import axios from 'axios';

const API_URL = 'http://localhost:4000/';

const fetchData = async (url, options = {}) => {
  try {
    const response = await axios.get(url, {
      headers: options.headers,
      signal: options.signal,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    } else {
      throw error;
    }
  }
};

const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getProducts = (options) => fetchData(API_URL + 'products', options);
export const getProductsCate = (id, options) => fetchData(API_URL + 'products/tanks/' + `${id}`, options);
export const getProductsDetail = (id, options) => fetchData(`${API_URL}products/${id}`, options);
export const getOptionDetail = (id, options) => fetchData(`${API_URL}optionDetail/${id}`, options);
export const getImage = (id, options) => fetchData(`${API_URL}images/${id}`, options);
export const getCategories = (options) => fetchData(`${API_URL}categories`, options);
export const getCategoryId = (id,options) => fetchData(`${API_URL}category/${id}`, options);
export const getConfig = (id, options) => fetchData(`${API_URL}config/${id}`, options);
export const getOrders = (id, options) => fetchData(`${API_URL}orders/${id}`, options);
export const getOrderDetail = (id, options) => fetchData(`${API_URL}orderdetail/${id}`, options);
export const getOrderId = (id, options) => fetchData(`${API_URL}getorderid/${id}`, options);
export const getBrands = () => fetchData(`${API_URL}brands`);
export const getProductsByQuery = (keyword) => fetchData(`${API_URL}product-search/${keyword}`);
export const login = (data) => postData(`${API_URL}login`, data);
export const checkout = (data) => postData(`${API_URL}checkout`, data);
export const register = (data) => postData(`${API_URL}register`, data);
export const productAdd = (data) => postData(`${API_URL}productadd`, data);
export const categoryAdd = (data) => postData(`${API_URL}categoryadd`, data);
export const productUpdate = (data) => postData(`${API_URL}productupdate`, data);
export const categoryUpdate = (data) => postData(`${API_URL}categoryupdate`, data);

export const deleteImage = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}delete-image/${id}`);
      return response.data;
  } catch (error) {
      throw error;
  }
};
export const deleteProduct = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}deleteproduct/${id}`);
      return response.data;
  } catch (error) {
      throw error;
  }
};
export const deleteCate = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}deletecate/${id}`);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const getUser = async (options = {}) => {
  try {
    const response = await fetchData(`${API_URL}user`, options);
    return response;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};
