import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://raazsingh:31082002@cluster0.ekyb2oi.mongodb.net/Food_Delivery');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
