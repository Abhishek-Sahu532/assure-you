const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/eroor');
app.use(express.json());
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const multer = require('multer');


//config
dotenv.config({path: 'backend/config/.env'})


app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(multer({ dest: 'backend/uploads/', limits: { fileSize: 10 * 1024 * 1024 } }).single('image'));


// app.use(fileUpload({
//     limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit for uploaded files
//   }));



//Routes
const userRoutes = require('./routes/userRoutes');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');


app.use('/api/v1' , product);
app.use('/api/v1' , userRoutes);
app.use('/api/v1' , order);
app.use('/api/v1' , payment);



//middleware for error

app.use(errorMiddleware)

module.exports = app