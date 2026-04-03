import mongoose from "mongoose";

export interface IUser{
    name:string;
    email:string;
    role:string;
}

const userSchema=new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email: { 
        type: String, 
        required: true, unique: true },
  role: 
  { type: String, default: "user" },
});
export default mongoose.model<IUser>("User",userSchema);