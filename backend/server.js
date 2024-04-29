const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config({
    path:".env"
});
const connectDB=require("./config/connectDB")
connectDB(process.env.Db_URL);

app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(process.env.PORT,()=>{
    console.log(`server active at ${process.env.PORT}`)
})