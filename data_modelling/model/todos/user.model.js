import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
  /* method1 
  username: String,
  email: String,
  isActive: Boolean
   */
  username : {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: ture
  },
  password: {
    type: String,
    required:true
  }
},
{timestamps:true}
)

export const User = mongoose.model("User", userSchema)
