import joi from "joi"


const registerSchema=joi.object({
    name:joi.string().required(),
    username:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
})



const registerSchemaValidation=(req,res,next)=>{
    const {error}=registerSchema.validate(req.body,{abortEarly:false})
    if(error) return res.status(400).json({success:false,message:error.details.map(err=>err.message)})
        next()
}

export { registerSchemaValidation }



// loginSchema validation




const loginSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})



const loginSchemaValidation=(req,res,next)=>{
    const  {error}=loginSchema.validate(req.body,{abortEarly:false})
    if(error) return res.status(400).json({success:false,message:"Both Fields are required"})
        next()
}

export { loginSchemaValidation }





const loginTokenCheckSchema=joi.object({
    token:joi.string().required()
})




// const loginTokenVerify=(req,res,next)=>{
//     console.log(req.headers.authorization)
//     const {error}=loginTokenCheckSchema.validate(req.headers.authorization)
//     console.log(error)
//     if(error) return res.status(400).json({success:false,message:"Login Expired ! Please Login again"})
//     next()
// }

// export { loginTokenVerify }