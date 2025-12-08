import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo/mongoDb";
import User from "@/lib/mongo/model/User";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await connectDB();
    const user = await User.create({ email });

    return NextResponse.json({ success: true, data: user }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
