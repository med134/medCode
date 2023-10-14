import mongoose from "mongoose";
const { Schema } = mongoose;
const categorySchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Category =
  mongoose.models.category || mongoose.model("category", categorySchema);
export default Category;
