import Employee from "../models/employee.js";
import Admin from "../models/admin.js";
const employeeLogin=async (req,res)=> {

    try {
        const {employeeId,password}=req.body;  
const data=await Employee.create({
    employeeId,
    password,
})
        res.json(data)
    } catch (error) {
        console.log(error);
        console.log("error in employee login controller")
    }
    

}



const adminLogin=async(req,res)=> {
    try {
        const {adminId,password}=req.body;  
        const data=await Admin.create({
            adminId,
            password,
        })
                res.json(data)
    } catch (error) {
        console.log(error);
        console.log("error in admin login controller")
    }
}
export {employeeLogin,adminLogin};