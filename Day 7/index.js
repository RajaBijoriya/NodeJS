const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log("Hello from middleware");
    next();
})


app.use((req, res, next) => {
    fs.appendFile("./log.txt", `\n ${Date.now()} : ${req.method}: ${req.path} \n`,
    (err, data) => {
        next();
    })
})


app.post("/api/users",(req, res) => {
    const body = res.body;
    if( !body ||
     !body.first_name ||
     !body.last_name || 
     !body.email ||
     !body.gender || 
     !body.job_title) {
        return res.statusCode(400).json({msg : "all fiels are req.."})
     }
    users.push({...body, id: users.length+1})
    fs.writeFile(
        `${__dirname}/MOCK_DATA.json`,
        JSON.stringify(users),
        (err, data) => {
            return res.json({status:"success", id: users.length})
        }
    )
})

// routes
app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.listen(PORT, ()=> console.log(`server startes on https://local:7000`));