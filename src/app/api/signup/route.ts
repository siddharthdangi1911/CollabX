import { NextResponse } from "next/server";
import { adminAuth} from "@/lib/firebase/FirebaseAdmin";
import { connectDB } from "@/lib/mongo/mongoDb";
import User from "@/lib/mongo/model/User";
import "server-only";

export async function POST(req: Request) {
  try {
const { email, password, name } = await req.json();
const user = await adminAuth.createUser({ email: email, password: password, displayName: name});
await connectDB();
await User.create({ uid: user.uid, name:name, email:email });

return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SIGNUP ERROR:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
    );
  }
}
