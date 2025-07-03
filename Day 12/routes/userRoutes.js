const express = require("express");
const user_route = express();
const multer =  require("multer");
const path = require("path")


const bodyParser = require("body-parser");

user_route.use(bodyParser.json());

user_route.use(bodyParser.urlencoded({extended: true}));

user_route.use(express.static("public"))

 const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(
            null, 
            path.join(__dirname, "../public/userImages"),
            function(err, success) {
                if(err){
                    throw err;
                }
                else{
                    console.log("success");
                }
            }
        )
    },
    filename: function(req, file, cb){
        const name =  Date.now() + "_"+file.originalname;
        cb(null, name, function(err, suc) {
            if(err) throw err;
            else console.log("Succ");
        })
    }
})

const upload =  multer({storage: storage})

// container



