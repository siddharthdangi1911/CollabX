import Projects from "@/lib/mongo/model/Projects";
import { connectDB } from "@/lib/mongo/mongoDb";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try{
        await connectDB();
        const {searchParams} = new URL(req.url);

        const page = Number(searchParams.get("page") || 1);
        const limit = 20;

        const skip = (page - 1) * limit;

        const projects = await Projects.find({status:"open"}, {_id:1})
                            .sort({createdAt:-1})
                            .skip(skip)
                            .limit(limit);
        const ids = projects.map(p => p._id.toString());

        if (!ids){
            return NextResponse.json({success:false, error:"ids not found"}, {status:404})
        }
        return NextResponse.json({success:true, ids:ids}, {status:200});
    }
    catch(e:any){
        return NextResponse.json({success:false, error:e.message}, {status:400});
    }
}