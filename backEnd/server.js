const app=require('./app');
const connectDatabase=require('./config/database');
const path=require("path");
const express = require('express');
const port=4000;
const NODE_ENV="production";
// connect db
connectDatabase();


// deployement
__dirname=path.resolve();
if(NODE_ENV==+"production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"fronten","build","index.html"))
    })
}


app.listen(port,()=>{
    console.log("server is working fine on"+port);
})

