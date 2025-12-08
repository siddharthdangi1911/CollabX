import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        uid: {type:String, required: true},
        email: {type: String, required: true},
        createdAt : {type: Date, default: Date.now}
    },
    {collection: "users"}
);

export default mongoose.models.User || mongoose.model("User", UserSchema);