import mongoose from "mongoose";

const reqString={
    type:String,
    required:true
}

const employeeSchema=mongoose.Schema({
  
employeeId:reqString,
password:reqString,
    
})

const Employee=mongoose.model("Employee",employeeSchema)

export default Employee;