const app=require('./app');
const connectDatabase=require('./config/database');
const port=4000;

// connect db
connectDatabase();

app.listen(port,()=>{
    console.log("server is working fine on"+port);
})

