import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://raazsingh:Raaz%40123@fooddelivery.h8acs.mongodb.net/food_delivery',
            {
                
            }
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};
