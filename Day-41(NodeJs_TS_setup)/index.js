const express= require ('express');
const app=express();
const port=8000;

app.use(express.json());

const userRoutes=require('./routes/userRoutes');
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("<h1>Welcome To Node JS server</h1>")
})

app.listen(port,()=>{
    console.log("http://localhost:"+port);
    
})