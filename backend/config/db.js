import mongoose from "mongoose";
const DB_NAME = 'cybermind-project'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
