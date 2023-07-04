import mongoose from "mongoose";

function DBconnect(){
    mongoose.connect("mongodb+srv://kaushik:kaush148@cluster0.habyrhy.mongodb.net/employee-Manage")
    .then(()=> {
        console.log("connected to Mongo DATABASE")
    }).catch((err)=> {
        console.log(err)
    })

    
}
export default DBconnect;