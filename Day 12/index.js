// register page 
// login 
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/JWT_Auth").then(()=> {
    console.log("Mongo connected");
}).catch((err)=> {
    console.log("error", err);
})


// listen 

app.listen(PORT, ()=>  {
    console.log("server startes successfully")
})