const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const webRouter = require('./routes/web');
const cors = require('cors');
const app = express();
const port = 4000;

// Sử dụng express.json() cho JSON data
app.use(express.json());

// Cấu hình CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Sử dụng route từ webRouter
app.use('/', webRouter);

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
