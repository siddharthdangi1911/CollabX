import { NextResponse } from "next/server";
import { adminAuth} from "@/lib/firebase/FirebaseAdmin";
import { connectDB } from "@/lib/mongo/mongoDb";
import User from "@/lib/model/User";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await adminAuth.createUser({ email, password });
    const uid = user.uid;

    await connectDB();
    await User.create({ uid, email });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
