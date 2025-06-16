import foodModel from "../models/foodModel.js";
import fs from "fs";
import foodRouter from "../routers/foodRoute.js";

const addFood = async (req, res) => {



    try {
        // Uncomment below to make image mandatory after testing
        /*
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }
        */

        const image_filename = req.file ? req.file.filename : "default.jpg";
        // Uncomment the below code for image check
        // const image_filename = req.file.filename;

        // Create new food document
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Save to database
        await food.save();
        res.json({success:true,message:"Food Added"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
};

//all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async(req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        // Uncomment this for image check 
        // fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export { addFood,listFood,removeFood };


// The image check is not working in Stripe because it require payment for image check