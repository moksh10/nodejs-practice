const express = require("express");
const app = express();
const path = require('path')
require('dotenv').config({path:path.join(__dirname+"/.env")})

app.use("/", (req, res) => {
    res.send("Hey there!"); 


});
app.use("*", (req, res) => {
    res.send("Not Found");
})
app.listen(process.env.PORT,()=>{
    console.log("Server started")
})