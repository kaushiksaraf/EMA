import mongoose from "mongoose";

const reqString={
    type:String,
    required:true,
}

const adminSchema=mongoose.Schema({
  
adminId:reqString,
password:reqString,
    
})

const Admin=mongoose.model("Admin",adminSchema)

export default Admin;