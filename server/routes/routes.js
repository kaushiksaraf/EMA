
import express from "express"
import {employeeLogin,adminLogin} from "../controllers/user.js"

const router=express.Router();



router.post("/login",employeeLogin)
router.post("/adminlogin",adminLogin)

export default router;