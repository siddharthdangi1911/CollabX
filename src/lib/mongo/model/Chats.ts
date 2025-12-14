import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    participants: {
      type: [String],
      required: true,
      index: true
    },

    isGroup: {
      type: Boolean,
      default: false
    },

    groupName: {
      type: String,
      default: null
    },

    lastMessage: {
      type: String,
      default: ""
    },

    lastMessageAt: {
      type: Date,
      default: Date.now
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "chats",
    versionKey: false
  }
);

export default mongoose.models.Chat ||
  mongoose.model("Chat", ChatSchema);
