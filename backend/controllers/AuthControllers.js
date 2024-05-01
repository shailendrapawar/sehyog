const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt');
const userModel = require('../model/UserModel');

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

    static register=async(req,res)=>{

        const {name,email,password,uName}=req.body;

        const isEmail=await userModel.findOne({
            email:email
        })
        const isUname=await userModel.findOne({
            uName:uName
        })

        if(isEmail||isUname){
            res.json({
                msg:"User already exists",
                status:false
            })
        }else{

            try{
                const newuser= new userModel({
                    name:name,
                    email:email,
                    uName:uName,
                    password:password,
                })
    
                const resp=await newuser.save();
                if(resp){
                    res.json({
                        msg:"User Created Successfully",
                        status:true
                    })
                }else{
                    res.json({
                        msg:"User not created ",
                        status:false
                    })
                }
    
            }catch(err){
                res.json({
                    msg:err
                })
            }
            

        }


    }

}