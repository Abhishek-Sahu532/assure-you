const app = require('./app');
const dotenv = require('dotenv')
const connectDatabase = require('./config/db')

//HANDLING UNCAUGHT EXCEPTION
process.on('uncaughtException',(err)=>{
    console.log(`error:${err.message}`);
    process.exit(1)
})
//config
dotenv.config({path: 'backend/config/.env'})


// DATABASE CONNECTION
connectDatabase()

const server = app.listen(process.env.PORT, ()=>{
    console.log('Server is connected on port ', process.env.PORT )
})


//Unhandled promise rejection
process.on('unhandledRejection', (err)=>{
    console.log(`Error :  ${err.message}`);
    server.close(()=>{
        process.exit(1);
    })
})