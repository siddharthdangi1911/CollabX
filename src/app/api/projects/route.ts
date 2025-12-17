import Projects from "@/lib/mongo/model/Projects";
import { connectDB } from "@/lib/mongo/mongoDb";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try{
        await connectDB();
        const projects = await Projects.find({status:"open"});

        if (!projects){
            return NextResponse.json({success:false, error:"projects not found"}, {status:404})
        }
        return NextResponse.json({success:true, projects:projects}, {status:200});
    }
    catch(e:any){
        return NextResponse.json({success:false, error:e.message}, {status:400});
    }
}