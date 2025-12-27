import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo/mongoDb";
import Projects from "@/lib/mongo/model/Projects";

type Props = {
    params: Promise<{ projectid: string }>;
};

export async function GET(req:Request, {params}: Props) {
    try{
        await connectDB();
        const projectid = await params;
        const project = Projects.findById(projectid)
        if (!project){
            return NextResponse.json({success:false, error:"project Not Found"}, {status:404});
        }
        return NextResponse.json({success:true, project:project}, {status:200});
    }
    catch (e:any){
        return NextResponse.json({success:false, error:e.message}, {status:400})
    }
}