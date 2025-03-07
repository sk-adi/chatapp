import mongoose from "mongoose";

const typingSchema = new mongoose.Schema({
  typer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  isTyping: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

const Typing = mongoose.model("Typing", typingSchema);

export default Typing;
