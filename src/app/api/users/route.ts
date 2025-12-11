import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo/mongoDb";
import User from "@/lib/mongo/model/User";

export async function GET(req: Request) {
  try {

    await connectDB();

    const users = await User.find({}).lean();

    return NextResponse.json(
      { success: true, data: users },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
