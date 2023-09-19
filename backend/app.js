const express = require('express');
const app = express()
const errorMiddleware = require('./middlewares/eroor')
app.use(express.json())
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(cookieParser())


//Routes
const userRoutes = require('./routes/userRoutes');
const product = require('./routes/productRoute');
app.use('/api/v1' , product)

app.use('/api/v1' , userRoutes);

//middleware for error
// app.use(errorMiddleware)

module.exports = app