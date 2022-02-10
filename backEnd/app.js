const express=require('express');
const app=express();


app.use(express.json());

// Route Imports

const images=require("./routes/imgRoute");

app.use("",images);


module.exports=app