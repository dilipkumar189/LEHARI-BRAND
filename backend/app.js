const express = require("express");

const app = express()


app.listen(3000,(res,req)=>{
    console.log("Server running on port : "+3000)
})