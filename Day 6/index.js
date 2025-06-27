const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;
app.use(express.urlencoded({extended: false}))

app.get("/api/users", (req,res) => {
    return res.json(users);
})
app.listen(PORT, () => console.log("Server is started at 8000"));