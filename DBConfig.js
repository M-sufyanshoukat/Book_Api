import mongoose from "mongoose";

const DB_Config = async () => {
  try {
    await mongoose.connect(process.env.CLOUD_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Connection Failed", error);
  }
};

export default DB_Config;
