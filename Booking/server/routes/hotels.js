import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//Create
router.post("/", async (req,res,next)=>{
    try{
        const newHotel = new Hotel(req.body);
        try{
            const savedPost = await newHotel.save();
            res.status(200).json(savedPost);
        } catch(err){
            next(createError(500, "Internal Server Error!"));
            // res.status(500).json(err);
        }
    }catch(err){
        next(createError(500, "Internal Server Error!"));
        // res.status(500).json("Internal Server Error");
    }
})
// Update
router.put("/:id", async (req,res,next)=> {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            { new : true}
        );
        res.status(200).json({"updated Hotel":updatedHotel})

    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// DELETE
router.delete("/:id", async (req,res,next)=> {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been Deleted")

    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// GET 
router.get("/:id", async (req,res,next)=> {
    try{
        const hotel= await Hotel.findById(req.params.id);
        res.status(200).json({"Hotel Details": hotel})
    }catch(err){
        // next(err)
        res.status(500).json("Internal Server Error");
    }
})
// GET ALL 
router.get("/", async (req,res,next)=> {
    try{
        const hotel= await Hotel.find();
        res.status(200).json({"Hotel Details": hotel})
    }catch(err){
        next(createError(401, "Internal server error!"))
    }
})

export default router;