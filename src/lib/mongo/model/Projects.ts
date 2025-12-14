import { mapValue } from "framer-motion";
import mongoose, { mongo } from "mongoose";

const ProjectsSchema = new mongoose.Schema(
    {
        uid: {type:String, required:true},
        name: {type: String, required:true},
        about: {type:String},
        isfees:{type:Boolean, required: true},
        fees:{type:Number},
        postedBy:{type:String, required:true},
        totalprizepool:{type:Number, required:true},
        prizesystem:{type:Map, of:mongoose.Schema.Types.Mixed}
    },
    {
        collection:"projects"
    }
);

export default mongoose.models.ProjectsSchema || mongoose.model("Projects", ProjectsSchema);