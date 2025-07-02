const express = require("express");
const path = require("path");
const multer = require("multer");



const app = express();
const PORT = 8000;
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./upload")
    },
    filename: function(req, file,cb){
        return cb(null, `${Date.now()} -${file.originalname}`)
    }
})

const upload = multer({storage: storage});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// middleware 

app.use(express.urlencoded({extended: false}))
// get modules 

app.get("/", (req, res) => {
    return res.render("index")
})

app.post("/upload", upload.single("profileImage", (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.send("File uploading successfully");
}))


// listen
app.listen(PORT, ()=> console.log(`server is runing on Port`, {PORT}));