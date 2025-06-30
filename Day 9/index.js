const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

// connect to mongodb

mongoose.connect("mongodb://127.0.0.1:27017/MVCArchitecture", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(()=> console.log("MongoDb connected...."))
.catch((err)=> console.log("Error connecting with Mongodb", err));

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT,()=> {
    console.log("Your PORT is live on", PORT)
});