import express from "express"
import DBconnect from "./DBconfig/DBconnect.js";
import cors from "cors"
import router from "../server/routes/routes.js"
const app=express();

const port= 12345;
DBconnect();

app.use(express.json())
app.use(express.urlencoded({extented:true}));
app.use(cors())
app.use("/",router)




app.get("/",(req,res)=> {
    res.send(`<h1  style="color:#000">Welcome to the Employee-Management-App</h1>`)
})


app.listen(port,()=> {
    console.log("server is running...")
})