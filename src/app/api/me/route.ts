import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase/FirebaseAdmin";
import { connectDB } from "@/lib/mongo/mongoDb";
import User from "@/lib/mongo/model/User";

export async function GET(request: Request) {
  try {
    const cookieStore = cookies();
    const idToken = (await cookieStore).get("auth_token")?.value

    if (!idToken) {
      return NextResponse.json(
        { error: "No ID token found in cookies" },
        { status: 401 }
      );
    }

    const decoded = await adminAuth.verifyIdToken(idToken);
    const uid = decoded.uid;
    
    await connectDB();
    const data = await User.findById(uid).lean();

    if (!data) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Invalid or expired token", details: err.message },
      { status: 401 }
    );
  }
}
