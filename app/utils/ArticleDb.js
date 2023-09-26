import mongoose from "mongoose";
const connectArticles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_BLOG);
  } catch (err) {
    throw new Error("connection failed !");
  }
};
export default connectArticles;
