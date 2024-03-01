const express = require("express");
const mongoose= require("mongoose");
const homerouter=require("./routes/home")
const signuprouter=require("./routes/signup")
const path=require('path')
const port=3000;
const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');



app.use('/',homerouter)

app.use('/signup',signuprouter)



app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})