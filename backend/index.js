const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authenticateRoute = require("./routes/userAuthentication");
const userRoute = require("./routes/users");
const cookieParser = require("cookie-parser");
const cors = require('cors');

dotenv.config();

mongoose
    .connect( process.env.MONGO_DATABASE_URL )
    .then( ()=> console.log("Successful connection to database") )
    .catch( (err)=> console.error(err) );

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/backend/userAuthentication", authenticateRoute);
app.use("/backend/users", userRoute);

app.use((error, request, response, next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong on the server";
    
    return response.status(errorStatus).json({
        
        success: false,
        status: errorStatus,
        message: errorMessage,
        // stack: error.stack
    })
})


app.get("/", (req, res)=>{
    res.send("server start")
});


app.listen(process.env.PORT || 3500, ()=>{
    console.log("Hello Netflix Peeps!")
});
