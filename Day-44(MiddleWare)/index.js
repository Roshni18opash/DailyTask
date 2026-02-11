const express=require('express');
const logger=require('./middlewares/logger');
const userRoutes=require('./routes/userRoutes');
const { log } = require('node:console');
const Port=5000;
const app=express();
require('dotenv').config();

//global middleware
app.use(logger);

app.use('/users',userRoutes);

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
    
})