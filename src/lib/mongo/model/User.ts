import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {type:String, required: true},
        name:{type:String, required: true},
        email: {type: String, required: true, unique:true},
        host:{type: Boolean, default: false},
        createdAt : {type: Date, default: Date.now}
    },
    {collection: "users", _id: false, versionKey: false}
);

export default mongoose.models.User || mongoose.model("User", UserSchema);