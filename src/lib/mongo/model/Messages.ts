import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
      index: true
    },

    senderId: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["sent", "delivered", "read"],
      default: "sent"
    },

    deliveredAt: Date,
    readAt: Date,

    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "messages",
    versionKey: false
  }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
