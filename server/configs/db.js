import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URL}/car-rental`)
    } catch (error) {
        console.log(error.message);
    }
    }
    
export default connectDB;




/*


const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/car-rental`);
    console.log("Database Connected");
  } catch (error) {
  
  Why process.exit(1)?

If DB fails:

Backend should stop immediately

Not run in broken state
    console.error("Database connection failed:", error.message);
    process.exit(1); // Stop the app
  }
}; */