const mongoose=require('mongoose');

const connectDb=async(url)=>{
   const res= await mongoose.connect(`${url}`)
   res?console.log("db connected"):console.log("not connected")
}


module.exports=connectDb;