import express from "express";
const router = express.Router();
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyToken,verifyUser } from "../utils/verifyToken.js";

router.get("/checkauthentication",verifyToken, (req,res, next)=>{
    res.send("hello user you are authenticated")
})

router.get("/checkuser/:id",verifyUser, (req,res, next)=>{
    res.send("hello user you are logged in you can delete your account");
})
// Update user
router.put("/:id", async (req,res,next)=> {
    try{
        console.log(req.body);
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            { new : true}
        );
        res.status(200).json({"updated User":updatedUser})

    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// DELETE user
router.delete("/:id", async (req,res,next)=> {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted")

    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// GET user
router.get("/:id", async (req,res,next)=> {
    try{
        const User= await User.findById(req.params.id);
        res.status(200).json({"User Details": User})
    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// GET ALL user
router.get("/", async (req,res,next)=> {
    try{
        const User= await User.find();
        res.status(200).json({"User Details": User})
    }catch(err){
        res.status(500).json("Internal Server Error");
        // next(createError(401, "Internal server error!"))
    }
})

export default router;