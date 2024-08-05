const connectDB = require('../config/connectDB');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Mã khóa bí mật để ký token JWT
const secretKey = 'your-super-secret-key';

const getProducts = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const [products] = await connection.execute('SELECT * FROM products order by id desc ');
    connection.release();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).send(error.message);
  }
};
const getBrands = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const [products] = await connection.execute('SELECT * FROM categories_brand');
    connection.release();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).send(error.message);
  }
};

const getConfig = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [products] = await connection.execute('SELECT * FROM config_fishtanks WHERE productId = ?', [id]);
    connection.release();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch config:', error);
    res.status(500).send(error.message);
  }
};

const getProductsDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
    connection.release();
    if (product.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product[0]);
  } catch (error) {
    console.error('Failed to fetch product detail:', error);
    res.status(500).send(error.message);
  }
};
const getCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [category] = await connection.execute('SELECT * FROM categories WHERE id = ?', [id]);
    connection.release();
    if (category.length === 0) {
      return res.status(404).json({ message: 'category not found' });
    }
    res.json(category[0]);
  } catch (error) {
    console.error('Failed to fetch category detail:', error);
    res.status(500).send(error.message);
  }
};

const getOptionDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [product] = await connection.execute('SELECT * FROM product_options WHERE product_id = ?', [id]);
    connection.release();
    if (product.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product[0]);
  } catch (error) {
    console.error('Failed to fetch option detail:', error);
    res.status(500).send(error.message);
  }
};

const getCateTanks = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [product] = await connection.execute('SELECT * FROM products WHERE categories = ?', [id]);
    connection.release();
    if (product.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Failed to fetch category tanks:', error);
    res.status(500).send(error.message);
  }
};
const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [order] = await connection.execute('SELECT * FROM orders WHERE idUserBuy = ? order by id desc ', [id]);
    connection.release();
    if (order.length === 0) {
      return res.status(404).json({ message: 'order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Failed to fetch category tanks:', error);
    res.status(500).send(error.message);
  }
};
const getOrderId = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [order] = await connection.execute('SELECT * FROM orders WHERE id = ?', [id]);
    connection.release();
    if (order.length === 0) {
      return res.status(404).json({ message: 'order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Failed to fetch category tanks:', error);
    res.status(500).send(error.message);
  }
};

const getOrderDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [order] = await connection.execute('SELECT * FROM orderdetail WHERE idOrder = ?', [id]);
    connection.release();
    if (order.length === 0) {
      return res.status(404).json({ message: 'order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Failed to fetch category tanks:', error);
    res.status(500).send(error.message);
  }
};

const getImages = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [products] = await connection.execute('SELECT * FROM imgproducts WHERE productId = ?', [id]);
    connection.release();
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch images:', error);
    res.status(500).send(error.message);
  }
};

const getCategories = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const [categories] = await connection.execute('SELECT * FROM categories order by id desc');
    connection.release();
    res.json(categories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    res.status(500).send(error.message);
  }
};
const getProductsByKeyword = async (req, res) => {
  const { keyword } = req.params;

  // console.log('Keyword:', keyword); 
  try {
    const connection = await connectDB.getConnection();
    const [products] = await connection.execute('SELECT * FROM products WHERE name LIKE ?', [`%${keyword}%`]);
    connection.release();
    // console.log(products);
    res.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    res.status(500).send(error.message);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const connection = await connectDB.getConnection();
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [`${email}`]);

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Email không tồn tại' });
    }

    const user = rows[0];
    const passwordMatch = password === user.password;
    // console.log(passwordMatch);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Sai mật khẩu rồi' });
    }

    // Tạo token JWT
    const token = jwt.sign({ userId: user.id, userName: user.name, userEmail: user.email, userPhone: user.phone, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const user = async (req, res) => {
  res.json(req.user);
};


function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    res.status(401).json({ error: 'Invalid token' });
  }
}

const registerHandler = async (req, res) => {
  let { hoten, sdt, email, password } = req.body;
  try {
    const connection = await connectDB.getConnection();
    await connection.query(`INSERT INTO users (email,name,phone,address,password,role) VALUES (?,?,?,?,?,?)`, [email, hoten, sdt, "", password, 0]);
    connection.release();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const checkOut = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();

    let { idUserBuy, name, locationDetail, email, phoneNumber, shippingMethod, paymentMethod, totalCart, cart } = req.body;

    // Insert into orders table
    await connection.query(`
      INSERT INTO orders (idUserBuy, receiverName, receiverPhone, receiverAddress, status, createdAt, total, receiverEmail, payment, methodpay) 
      VALUES (?, ?, ?, ?, 0, CURRENT_TIMESTAMP, ?, ?, ?, ?)
    `, [idUserBuy, name, phoneNumber, locationDetail, totalCart, email, paymentMethod, shippingMethod]);

    // Fetch the last inserted order ID
    const [orderResult] = await connection.query('SELECT LAST_INSERT_ID() as orderId');
    const orderId = orderResult[0].orderId;

    // Insert into orderdetail table
    const insertDetailsPromises = cart.map(item => {
      let total = item.priceNew * item.soluong;
      return connection.query(
        `INSERT INTO orderdetail (idOrder, product_id, quantity, price, total) VALUES (?, ?, ?, ?, ?)`,
        [orderId, item.id, item.soluong, item.priceNew, total]
      );
    });

    await Promise.all(insertDetailsPromises);

    connection.release();
    res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const productAdd = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const { name, categories, brandId, quantity, priceNew, priceOld, description, producthot, buidtime } = req.body;

    // Handle images
    const img = req.files.img ? req.files.img[0].filename : null;
    const images = req.files.images ? req.files.images.map(file => file.filename) : [];

    // Convert producthot boolean to 1 or 0
    const isProductHot = producthot === 'true' ? 1 : 0;

    // Insert product into the database
    await connection.query(`
      INSERT INTO products (name, img, categories, brandId, quantity, priceNew, priceOld, description, producthot, buidtime) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [name, img, categories, brandId, quantity, priceNew, priceOld, description, isProductHot, buidtime]);

    // Fetch the last inserted product ID
    const [result] = await connection.query('SELECT LAST_INSERT_ID() as productId');
    const productId = result[0].productId;

    // Insert image URLs into imgproducts table
    const insertDetailsPromises = images.map(image => {
      return connection.query(
        `INSERT INTO imgproducts (productId, img_url) VALUES (?, ?)`,
        [productId, image]
      );
    });

    await Promise.all(insertDetailsPromises);

    // Send success response
    res.status(200).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product', error: error.message });
  }
};
const categoryAdd = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();

    const { namecategory, description } = req.body;

    const img = req.files.img ? req.files.img[0].filename : null;

    console.log(img);
    
    // // Insert into the database
    await connection.query(`
      INSERT INTO categories (name, img, description) 
      VALUES (?, ?, ?)
    `, [namecategory, img, description]);

    res.status(200).json({ message: 'Category added successfully' });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Failed to add category', error: error.message });
  }
};
const categoryUpdate = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const { id, namecategory, description, img } = req.body;

    // Kiểm tra xem có ảnh mới không
    const getImg = img ? img : req.files.img[0].filename
    // const imgs = req.files.img ? req.files.img[0].filename : img;


    // Cập nhật vào cơ sở dữ liệu
    await connection.query(`
      UPDATE categories SET name = ?, img = ?, description = ? WHERE id = ?
    `, [namecategory, getImg, description, id]);

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ message: 'Failed to update category', error: error.message });
  }
};




const productUpdate = async (req, res) => {
  try {
    const connection = await connectDB.getConnection();
    const { id, name, categories, brandId, quantity, priceNew, priceOld, description, producthot, buidtime } = req.body;

    // Handle images
    const img = req.files.img ? req.files.img[0].filename : null;
    const images = req.files.images ? req.files.images.map(file => file.filename) : [];

    // Convert producthot boolean to 1 or 0
    const isProductHot = producthot === 'true' ? 1 : 0;

    // Update product in the database
    const updateFields = [
      'name = ?',
      'categories = ?',
      'brandId = ?',
      'quantity = ?',
      'priceNew = ?',
      'priceOld = ?',
      'description = ?',
      'producthot = ?',
      'buidtime = ?'
    ];
    const updateValues = [
      name,
      categories,
      brandId,
      quantity,
      priceNew,
      priceOld,
      description,
      isProductHot,
      buidtime
    ];

    // Conditionally update img field if img is not null
    if (img) {
      updateFields.push('img = ?');
      updateValues.push(img);
    }

    updateValues.push(id);

    await connection.query(`
      UPDATE products SET ${updateFields.join(', ')}
      WHERE id = ?
    `, updateValues);

    // Conditionally update images if images array is not empty
    if (images.length > 0) {
      // Remove old images associated with the product
      await connection.query('DELETE FROM imgproducts WHERE productId = ?', [id]);

      // Insert new image URLs into imgproducts table
      const insertDetailsPromises = images.map(image => {
        return connection.query(
          `INSERT INTO imgproducts (productId, img_url) VALUES (?, ?)`,
          [id, image]
        );
      });

      await Promise.all(insertDetailsPromises);
    }

    // Send success response
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Failed to update product', error: error.message });
  }
};

const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await connectDB.getConnection();
    const [rows] = await connection.execute('SELECT img_url FROM imgproducts WHERE id = ?', [id]);
    if (rows.length === 0) {
      connection.release();
      return res.status(404).json({ error: 'Image not found' });
    }

    const imgPath = path.join(__dirname, '../../frontend/public/img/products', rows[0].img_url);

    fs.unlink(imgPath, async (err) => {
      if (err) {
        connection.release();
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete image file' });
      }

      await connection.execute('DELETE FROM imgproducts WHERE id = ?', [id]);
      connection.release();
      res.status(200).json({ message: 'Image deleted successfully' });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connectDB.getConnection();
    await connection.execute('DELETE FROM imgproducts WHERE productId = ?', [id]);
    await connection.execute('DELETE FROM products WHERE id = ?', [id]);
    connection.release();
    res.status(200).json({ message: ' successfully' });
  } catch (error) {
    console.error(error);
  }
};
const deleteCate = async (req, res) => {
  const { id } = req.params;

  let connection;
  try {
    connection = await connectDB.getConnection();
    await connection.beginTransaction();

    // Get product IDs for the given category
    const [productRows] = await connection.execute('SELECT id FROM products WHERE categories = ?', [id]);
    const productIds = productRows.map(row => row.id);

    // Delete images associated with these product IDs
    if (productIds.length > 0) {
      await Promise.all(productIds.map(e => 
        connection.execute('DELETE FROM imgproducts WHERE productId = ?', [e])
      ));
    }

    // Delete products for the given category
    await connection.execute('DELETE FROM products WHERE categories = ?', [id]);

    // Delete the category itself
    await connection.execute('DELETE FROM categories WHERE id = ?', [id]);

    // Commit the transaction
    await connection.commit();

    res.status(200).json({ message: 'Successfully deleted category and associated products/images' });
  } catch (error) {
    // Rollback the transaction in case of error
    if (connection) await connection.rollback();
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'An error occurred while deleting the category' });
  } finally {
    if (connection) connection.release();
  }
};


module.exports = {
  getProducts,
  getImages,
  getProductsDetail,
  getConfig,
  getCategories,
  getOptionDetail,
  getCateTanks,
  getBrands,
  getProductsByKeyword,
  login,
  user,
  authenticate,
  registerHandler,
  checkOut,
  getOrder,
  getOrderDetail,
  getOrderId,
  productAdd,
  productUpdate,
  deleteImage,
  deleteProduct,
  categoryAdd,
  getCategoryId,
  categoryUpdate,
  deleteCate
};
