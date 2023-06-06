import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel";

//Create
router.post("/", async (req,res,next)=>{
    try{
        const newHotel = new Hotel(req.body);
        try{
            const savedPost = await newHotel.save();
            res.status(200).json(savedPost);
        } catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err)
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
        next(err)
    }
})
// DELETE
router.delete("/:id", async (req,res,next)=> {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been Deleted")

    }catch(err){
        next(err)
    }
})
// GET 
router.get("/:id", async (req,res,next)=> {
    try{
        const hotel= await Hotel.findById(req.params.id);
        res.status(200).json({"Hotel Details": hotel})

    }catch(err){
        next(err)
    }
})
// GET ALL 
router.get("/", async (req,res,next)=> {
    try{
        const hotel= await Hotel.find();
        res.status(200).json({"Hotel Details": hotel})

    }catch(err){
        nexe