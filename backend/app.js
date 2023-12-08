const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/eroor');
app.use(express.json());
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')

//config
dotenv.config({path: 'backend/config/.env'})


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());



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