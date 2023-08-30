import mongoose from "mongoose";
const { Schema } = mongoose;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);
const Posts = mongoose.models.posts || mongoose.model("posts", postSchema);
export default Posts;
