const app = require('./app');
const dotenv = require('dotenv')
const connectDatabase = require('./config/db')


//config
dotenv.config({path: 'backend/config/config.env'})



connectDatabase()
app.listen(process.env.PORT, ()=>{
    console.log('Server is connected on port ', process.env.PORT )
})