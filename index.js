const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//Connect to mongodb
mongoose.connect("mongodb+srv://vision:12345@cluster0.bjch1.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);

        app.listen(process.env.PORT || 3000,()=>{
            console.log("<--------Server Started-- ----->");
        });
    }
);