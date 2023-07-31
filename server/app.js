const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});

app.get('/',(req,res) =>{
    res.send(`Hello world from server`);
})


app.listen(3000,() => {
    console.log(`server is running on poet 3000`);
})
// console.log("Hello");