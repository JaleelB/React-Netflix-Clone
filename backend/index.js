const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect( process.env.MONGO_DATABASE_URL )
    .then( ()=> console.log("Successful connection to database") )
    .catch( (err)=> console.error(err) );

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Hello Netflix Peeps!")
});