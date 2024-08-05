const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  getProducts, getImages, getProductsDetail, getConfig, getCategories, 
  getOptionDetail, getCateTanks, getBrands, getProductsByKeyword, login,
  user, authenticate, registerHandler, checkOut, getOrder, getOrderDetail, 
  getOrderId, productAdd, productUpdate, deleteImage, deleteProduct,
  categoryAdd, getCategoryId, categoryUpdate, deleteCate
} = require('../controller/homeController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../frontend/public/img/products'));
  },
  filename: (req, file, cb) => {
    const fileName = `${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Define the routes
router.get('/products', getProducts);
router.get('/optionDetail/:id', getOptionDetail);
router.get('/products/tanks/:id', getCateTanks);
router.get('/categories', getCategories);
router.get('/products/:id', getProductsDetail);
router.get('/category/:id', getCategoryId);
router.get('/images/:id', getImages);
router.get('/config/:id', getConfig);
router.get('/brands', getBrands);
router.get('/product-search/:keyword', getProductsByKeyword);
router.get('/orders/:id', getOrder);
router.get('/orderdetail/:id', getOrderDetail);
router.get('/getorderid/:id', getOrderId);
router.get('/user', authenticate, user);

// Define the post routes
router.post('/productadd', upload.fields([{ name: 'img', maxCount: 1 }, { name: 'images', maxCount: 10 }]), productAdd);
router.post('/productupdate', upload.fields([{ name: 'img', maxCount: 1 }, { name: 'images', maxCount: 10 }]), productUpdate);
router.post('/login', login);
router.post('/checkout', checkOut);
router.post('/register', registerHandler);
router.post('/categoryadd', upload.fields([{ name: 'img', maxCount: 1 }]), categoryAdd);
router.post('/categoryupdate', upload.fields([{ name: 'img', maxCount: 1 }]), categoryUpdate);
router.delete('/deleteproduct/:id', deleteProduct);
router.delete('/deletecate/:id', deleteCate);
router.delete('/delete-image/:id', deleteImage);

module.exports = router;
