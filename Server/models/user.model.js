import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage:{
        type:String,
        required:true
    },
    bio:{
        type:String, 
        required:true
    },
    skillsOffered : [{
        type:String
    }],
    skillsWanted:[
        {
            type:String
        }
    ],
    karmaPoints:{
        type:Number,
        default:0
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


userSchema.pre('save' , async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10)
})


userSchema.methods.isPasswordCorrect = async function (password){
        return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = async function (){
    return jwt.sign(
       { _id : this._id,
        fullName: this.fullName,
        email: this.email,  
       } ,
       process.env.ACCESS_TOKEN_SECRET,
       {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE
       }
    )
}

userSchema.methods.generateRefreshToken = async function (){
    return jwt.sign(
       { _id : this._id,
       
       } ,
       process.env.REFRESH_TOKEN_SECRET,
       {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE
       }
    )
}


export const User = mongoose.model("User" , userSchema)
