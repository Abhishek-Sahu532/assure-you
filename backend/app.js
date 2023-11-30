const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/eroor');
app.use(express.json());
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload());



//Routes
const userRoutes = require('./routes/userRoutes');
const product = require('./routes/productRoute');
const order = require('./routes/orderRoute')


app.use('/api/v1' , product)
app.use('/api/v1' , userRoutes);
app.use('/api/v1' , order);

//middleware for error

app.use(errorMiddleware)

module.exports = app