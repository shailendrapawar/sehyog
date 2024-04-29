const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt')

class AuthControllers{
    static authLogin=async (req,res)=>{
        const{userName,email,password}=req.body;

        const isUser=await userModel.findOne({
            email:email
        })
        if(!isUser){
            res.json({
                msg:"User dosen't exist",
                status:false
            })
        }else{
            const validUser= await bcrypt.compare(password,isUser._id);
            if(validUser){
                res.json({
                    msg:" Authentic User",
                    status:true
                })
            }else{
                res.json({
                    msg:" Wrong Credential",
                    status:true
                })
            }

        }
    }
}