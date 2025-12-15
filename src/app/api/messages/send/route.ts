import { NextResponse } from "next/server";
import "server-only";

export async function POST(req:Request){
    try{
        const {chatid, uid} = await req.json();
        return NextResponse.json({sucess:true, message:"coming soon"}, {status:200})
    }
    catch (e: any){
        return NextResponse.json({success:false, error: e.message}, {status:404})
    }
};