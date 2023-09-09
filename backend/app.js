const express = require('express');
const app = express()
const errorMiddleware = require('./middlewares/eroor')
app.use(express.json())
//Routes


const product = require('./routes/productRoute');
app.use('/api/v1' , product)

//middleware for error
app.use(errorMiddleware)

module.exports = app