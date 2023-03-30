import "dotenv/config";
import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default conn;
