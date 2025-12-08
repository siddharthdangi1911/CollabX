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
    console.log({
  project: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  keyStart: process.env.FIREBASE_PRIVATE_KEY?.slice(0, 20)
});

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error}, { status: 400 });
  }
}
