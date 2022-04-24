const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authenticateRoute = require("./routes/userAuthentication");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
    .connect( process.env.MONGO_DATABASE_URL )
    .then( ()=> console.log("Successful connection to database") )
    .catch( (err)=> console.error(err) );

//allows express app to accept jsonn file genmreated from post request when new user is made
app.use(express.json());

app.use("/backend/userAuthentication", authenticateRoute);
app.use("/backend/users", userRoute);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Hello Netflix Peeps!")
});

// app.listen(3000, ()=>{
//     console.log("Hello Netflix Peeps!")
// });