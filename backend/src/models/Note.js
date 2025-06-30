import mongoose from "mongoose";

// 1. create a schema
// 2. create a model based on the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Doing", "Todo", "Done", "Draft"],
      default: "Todo",
    },
    category
  },
  {
    timestamps: true, //createdAt, updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
