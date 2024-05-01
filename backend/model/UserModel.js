const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    
    name:{
        type:String,
    },
    uName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    totalCredits:{
        type:Number,
        default:0
    },
    donations:{
        type:Number,
        default:0,
    },
    adoption:{
        type:Number,
        default:0
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post',
            default:[]
        }
    ]
})

const userModel=mongoose.model('User',UserSchema);

module.exports=userModel;