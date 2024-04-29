const mongoose =require('mongoose')

const PostSchema= new mongoose.Schema({
    imageUrl:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    category:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    applied:[
        {
            type:mongoose.Schema.Types.ObjectId
        }
    ]
})

const postModel=mongoose.model('Posts',PostSchema);

module.exports=postModel