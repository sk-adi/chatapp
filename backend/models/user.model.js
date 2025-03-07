import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    onlineStatus:{
        type:Boolean,
        default:false
    },
    profilePic:{
        type:String,
        default:false
    }
})


const User=mongoose.model("User",userSchema)


export default User