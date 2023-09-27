import mongoose from "mongoose";
const { Schema } = mongoose;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      require: true,
    },
    contentOne: {
      type: String,
      require: true,
    },
    contentTwo: {
      type: String,
      require: false,
    },
    code: {
      type: String,
      require: false,
    },
    contentThree: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Article =
  mongoose.models.articles || mongoose.model("articles", articleSchema);
export default Article;
